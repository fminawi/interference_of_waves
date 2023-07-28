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
    this.sliderAnimSpeed = this.root.sliderAnimSpeed;
    this.sliderDistance = this.root.sliderDistance;
    this.sliderFreq = this.root.sliderFreq;
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
        sliderAnimSpeed = this.sliderAnimSpeed,
        sliderDistance = this.sliderDistance,
        sliderFreq = this.sliderFreq,
        sliderAmp = this.sliderAmp;
    
    const centerX = waveSpace.nominalBounds.width / 2 - waveSpace.nominalBounds.width / 2;
    const centerY = waveSpace.nominalBounds.height / 2;
    
    var distance = 225,
        speed = 440,
        frequency = 8,
        amplitude = 30,
        wavelength = 4.4,
        animationSpeed = 0.15,
        res = 10,
        playFlag = false,
        twoSourcesFlag = true,
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
    if (twoSourcesFlag){
      container.addChild(s1, s2);
    } else {
      container.addChild(s1);
    }

    function draw() {
      if (playFlag){
        waveSpace.removeAllChildren();
        const g = new createjs.Graphics();  
        for (let x = centerX; x < width; x += res) {
          for (let y = 0; y < height; y += res) {
            t = createjs.Ticker.getTime() / 1000 - dt;
            const distance1 = Math.sqrt(Math.pow(y - (centerY - distance / 2), 2) + Math.pow(x - centerX, 2));
            const distance2 = Math.sqrt(Math.pow(y - (centerY + distance / 2), 2) + Math.pow(x - centerX, 2));
            const phase1 = 2 * Math.PI * (distance1 * frequency / speed) - 2 * Math.PI * frequency * t * animationSpeed;
            const phase2 = 2 * Math.PI * (distance2 * frequency / speed) - 2 * Math.PI * frequency * t * animationSpeed;
            const intensity1 = amplitude * Math.cos(phase1);
            const intensity2 = amplitude * Math.cos(phase2);
            const interference = - 200 + intensity1 + intensity2 * twoSourcesFlag;
            const color = interference > 0 ? `rgb(${interference},0,0)` : `rgb(0,0,${-interference})`;
            g.beginFill(color).drawRect(x, y, res, res);
          }
        }
        const bg = new createjs.Shape(g);
        const blurFilter = new createjs.BlurFilter(11, 11);
        bg.filters = [blurFilter];
        bg.cache(0, 0, waveSpace.nominalBounds.width, waveSpace.nominalBounds.height);
        waveSpace.addChild(bg);
        if (twoSourcesFlag){
          container.addChild(s1, s2);
        } else {
          container.addChild(s1);
        }
        
        requestAnimationFrame(draw);
      }
      console.log("distance:   " + distance);
      console.log("wavelength: " + wavelength);
      console.log("frequency:  " + frequency);
      console.log("speed:      " + speed);
      console.log("amplitude:  " + amplitude);
      console.log("anim speed: " + animationSpeed);
      console.log(" ");

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

    radBtn1s.dot.visible = false;
    radBtn2s.dot.visible = true;

    radBtn1s.on("click", function(){
      this.dot.visible = true;
      radBtn2s.dot.visible = !this.dot.visible;
      twoSourcesFlag = false;
      container.removeChild(s2);
    });

    radBtn2s.on("click", function(){
      this.dot.visible = true;
      radBtn1s.dot.visible = !this.dot.visible;
      twoSourcesFlag = true;
      container.addChild(s1, s2);
    });

    sliderAnimSpeed.on("pressmove", function(){
      var pt = this.globalToLocal(stage.mouseX, stage.mouseY);
      var slidingBound = (this.path.nominalBounds.width - this.handle.nominalBounds.width) / 2;
      if (pt.x > - slidingBound && pt.x < slidingBound){
        this.handle.x = pt.x;
        animationSpeed = (pt.x + 75) / 160 * 0.3 + 0.02;
      }
    });

    sliderDistance.on("pressmove", function(){
      var pt = this.globalToLocal(stage.mouseX, stage.mouseY);
      var slidingBound = (this.path.nominalBounds.width - this.handle.nominalBounds.width) / 2;
      if (pt.x > - slidingBound && pt.x < slidingBound){
        if(!playFlag){
          waveSpace.removeAllChildren();
        }
        this.handle.x = pt.x;
        distance = (pt.x + 75) / 160 * 450;
        s1.y = centerY - distance / 2;
        s2.y = centerY + distance / 2;
        if (twoSourcesFlag){
          container.addChild(s1, s2);
        } else {
          container.addChild(s1);
        }
      }
    });

    sliderFreq.on("pressmove", function(){
      var pt = this.globalToLocal(stage.mouseX, stage.mouseY);
      var slidingBound = (this.path.nominalBounds.width - this.handle.nominalBounds.width) / 2;
      if (pt.x > - slidingBound && pt.x < slidingBound){
        this.handle.x = pt.x;
        frequency = (pt.x + 75) / 160 * 16 + 2;
      }
    });

    sliderAmp.on("pressmove", function(){
      var pt = this.globalToLocal(stage.mouseX, stage.mouseY);
      var slidingBound = (this.path.nominalBounds.width - this.handle.nominalBounds.width) / 2;
      if (pt.x > - slidingBound && pt.x < slidingBound){
        this.handle.x = pt.x;
        amplitude = (pt.x + 75) / 160 * 60 + 5;
      }
    });

  }
}