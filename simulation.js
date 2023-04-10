class Simulation {
  constructor(_root, _stage){
    this.root = _root;
    this.stage = _stage;
    this.container = this.root.container;
    this.header = this.root.header;
    this.pz_logo = this.root.pz_logo;
    this.playstop = this.root.playstop;
    this.playBtn = this.playstop.playBtn;
    this.stopBtn = this.playstop.stopBtn;
    this.init();
  }

  init(){
    var stage = this.stage;
    var waveSpace = this.container;
    var playstop = this.playstop;
    var playBtn = this.playBtn;
    var stopBtn = this.stopBtn;
    var waveSpace = this.container;
    
    const centerX = waveSpace.nominalBounds.width / 2 - waveSpace.nominalBounds.width / 2;
    const centerY = waveSpace.nominalBounds.height / 2;
    const wavelength = 80;
    const distance = 300;
    const frequency = 2;
    const amplitude = 30;
    const speed = 0.1;
    var res = 10;
    var playFlag = false;
    
    function draw() {
      if (playFlag){
        waveSpace.removeAllChildren();
        const g = new createjs.Graphics();
        
        g.beginFill('green').drawCircle(centerX + 10, centerY - distance / 2, 5);
        g.beginFill('green').drawCircle(centerX + 10, centerY + distance / 2, 5);
      
        for (let x = 0; x < waveSpace.nominalBounds.width; x += res) {
          for (let y = 0; y < waveSpace.nominalBounds.height; y += res) {
            var t = createjs.Ticker.getTime() / 1000;
            const distance1 = Math.sqrt(Math.pow(y - (centerY - distance / 2), 2) + Math.pow(x - centerX, 2));
            const distance2 = Math.sqrt(Math.pow(y - (centerY + distance / 2), 2) + Math.pow(x - centerX, 2));
            const phase1 = 2 * Math.PI * (distance1 / wavelength) - 2 * Math.PI * frequency * t * speed;
            const phase2 = 2 * Math.PI * (distance2 / wavelength) - 2 * Math.PI * frequency * t * speed;
            const intensity1 = amplitude * Math.cos(phase1);
            const intensity2 = amplitude * Math.cos(phase2);
            const interference = - 200 + intensity1 + intensity2;
            const color = interference > 0 ? `rgb(${interference},0,0)` : `rgb(0,0,${-interference})`;
            g.beginFill(color).drawRect( x, y, res, res);
            
          }
        }
        const bg = new createjs.Shape(g);
        const blurFilter = new createjs.BlurFilter(12, 12, 1);
        bg.filters = [blurFilter];
        bg.cache(0, 0, waveSpace.nominalBounds.width, waveSpace.nominalBounds.height);
        waveSpace.addChild(bg);
        requestAnimationFrame(draw);
        //stage.update();
      }
    }
    requestAnimationFrame(draw);
    
    //createjs.Ticker.addEventListener('tick', draw);

    playBtn.visible = true;
    stopBtn.visible = false;

    playstop.addEventListener("click", function(){
      playFlag = !playFlag;
      draw();
      playBtn.visible = !playBtn.visible;
      stopBtn.visible = !stopBtn.visible;
    });
  }
}