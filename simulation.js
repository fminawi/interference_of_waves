class Simulation {
  constructor(_root, _stage, _lib){
    this.root = _root;
    this.stage = _stage;
    this.lib = _lib;
    this.container = this.root.container;
    this.waveSpace = this.container.waveSpace;
    this.header = this.root.header;
    this.pz_logo = this.root.pz_logo;
    this.playstop = this.root.playstop;
    this.playBtn = this.playstop.playBtn;
    this.stopBtn = this.playstop.stopBtn;
    this.radBtn1s = this.root.radBtn1s;
    this.radBtn2s = this.root.radBtn2s;
    this.radBtnHighQ = this.root.radBtnHighQ;
    this.radBtnLowQ = this.root.radBtnLowQ;
    this.sliderDistance = this.root.sliderDistance;
    this.sliderLambda = this.root.sliderLambda;
    this.sliderFreq = this.root.sliderFreq;
    this.sliderSpeed = this.root.sliderSpeed;
    this.sliderAmp = this.root.sliderAmp;
    this.init();
  }

  init(){
    var stage = this.stage,
        lib = this.lib,
        container = this.container,
        waveSpace = this.waveSpace,
        playstop = this.playstop,
        playBtn = this.playBtn,
        stopBtn = this.stopBtn,
        waveSpace = this.container,
        radBtn1s = this.radBtn1s,
        radBtn2s = this.radBtn2s,
        radBtnHighQ = this.radBtnHighQ,
        radBtnLowQ = this.radBtnLowQ,
        sliderDistance = this.sliderDistance,
        sliderLambda = this.sliderLambda,
        sliderFreq = this.sliderFreq,
        sliderSpeed = this.sliderSpeed,
        sliderAmp = this.sliderAmp;
    
    const centerX = waveSpace.nominalBounds.width / 2 - waveSpace.nominalBounds.width / 2;
    const centerY = waveSpace.nominalBounds.height / 2;
    
    var wavelength = 80,
        distance = 300,
        frequency = 2,
        amplitude = 50,
        speed = 0.1,
        res = 10,
        playFlag = false,
        t = 0,
        t0 = 0,
        dt = 0,
        width = waveSpace.nominalBounds.width - 10,
        height = waveSpace.nominalBounds.height - 10;

    var s1 = new lib.Source();
    var s2 = new lib.Source();
    s1.x = s2.x = centerX + 15;
    s1.y = centerY - distance / 2;
    s2.y = centerY + distance / 2;
    container.addChild(s1,s2);
    
    function draw() {
      if (playFlag){
        waveSpace.removeAllChildren();
        const g = new createjs.Graphics();      
        for (let x = centerX; x < width; x += res) {
          for (let y = 0; y < height; y += res) {
            t = createjs.Ticker.getTime() / 1000 - dt;
            const distance1 = Math.sqrt(Math.pow(y - (centerY - distance / 2), 2) + Math.pow(x - centerX, 2));
            const distance2 = Math.sqrt(Math.pow(y - (centerY + distance / 2), 2) + Math.pow(x - centerX, 2));
            const phase1 = 2 * Math.PI * (distance1 / wavelength) - 2 * Math.PI * frequency * t * speed;
            const phase2 = 2 * Math.PI * (distance2 / wavelength) - 2 * Math.PI * frequency * t * speed;
            const intensity1 = amplitude * Math.cos(phase1);
            const intensity2 = amplitude * Math.cos(phase2);
            const interference = - 200 + intensity1 + intensity2;
            const color = interference > 0 ? `rgb(${interference},0,0)` : `rgb(0,0,${-interference})`;
            g.beginFill(color).drawRect(x, y, res, res);
          }
        }
        const bg = new createjs.Shape(g);
        const blurFilter = new createjs.BlurFilter(11, 11);
        bg.filters = [blurFilter];
        bg.cache(0, 0, waveSpace.nominalBounds.width, waveSpace.nominalBounds.height);
        waveSpace.addChild(bg);
        var s1 = new lib.Source();
        var s2 = new lib.Source();
        s1.x = s2.x = centerX + 15;
        s1.y = centerY - distance / 2;
        s2.y = centerY + distance / 2;
        container.addChild(s1,s2);
        requestAnimationFrame(draw);
      }
    }

    playBtn.visible = true;
    stopBtn.visible = false;

    playstop.addEventListener("click", function(){
      playFlag = !playFlag;
      if (!playFlag){
        t0 = t;
      } else if (playFlag){
        dt = createjs.Ticker.getTime() / 1000 - t0;
      }
      draw();
      playBtn.visible = !playBtn.visible;
      stopBtn.visible = !stopBtn.visible;
    });
  }
}