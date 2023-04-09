class Simulation {
  constructor(_root, _stage){
    this.root = _root;
    this.stage = _stage;
    this.container = this.root.container;
    this.waveSpace = this.container.waveSpace;
    this.header = this.root.header;
    this.pz_logo = this.root.pz_logo;
    this.playstop = this.root.playstop;
    this.playBtn = this.playstop.playBtn;
    this.stopBtn = this.playstop.stopBtn;
    this.init();
  }

  init(){
    var stage = this.stage;
    var waveSpace = this.waveSpace;
    var i = 0;
    
    const centerX = waveSpace.nominalBounds.width / 2 - waveSpace.nominalBounds.width / 2;
    const centerY = waveSpace.nominalBounds.height / 2;
    const wavelength = 75; // wavelength of the wave
    const distance = 300; // distance between the two point sources
    const frequency = 5; // frequency of the wave
    const amplitude = 30; // amplitude of the wave
    const speed = 0.15; // speed of the wave
    
    function draw() {
      
      //i++;
      //if (i % 40 === 0){
        stage.removeAllChildren();
        const g = new createjs.Graphics();
      
        // draw the two point sources
        //g.beginFill('white').drawCircle(centerX, centerY - distance / 2, 5);
        //g.beginFill('black').drawCircle(centerX, centerY + distance / 2, 5);
      
        // loop through each pixel and calculate the intensity of the wave
        for (let x = 0; x < waveSpace.nominalBounds.width; x+=10) {
          for (let y = 0; y < waveSpace.nominalBounds.height; y+=10) {
            var t = createjs.Ticker.getTime() / 1000;
            const distance1 = Math.sqrt(Math.pow(y - (centerY - distance / 2), 2) + Math.pow(x - centerX, 2));
            const distance2 = Math.sqrt(Math.pow(y - (centerY + distance / 2), 2) + Math.pow(x - centerX, 2));
            const phase1 = 2 * Math.PI * (distance1 / wavelength) - 2 * Math.PI * frequency * t * speed;
            const phase2 = 2 * Math.PI * (distance2 / wavelength) - 2 * Math.PI * frequency * t * speed;
            const intensity1 = amplitude * Math.cos(phase1);
            const intensity2 = amplitude * Math.cos(phase2);
            const interference = intensity1 + intensity2 - 200;
            const color = interference > 0 ? `rgb(${interference},0,0)` : `rgb(0,0,${-interference})`;
            g.beginFill(color).drawRect(x-10, y-10, 20, 20);
            //console.log(t);
          }
        }
      
        const bg = new createjs.Shape(g);
        bg.cache(0, 0, waveSpace.nominalBounds.width, waveSpace.nominalBounds.height);
        stage.addChild(bg);
        stage.update();

        //i = 0;
      //}
        
    }
    //createjs.Ticker.framerate = 60;
    createjs.Ticker.addEventListener('tick', draw);
  }
}