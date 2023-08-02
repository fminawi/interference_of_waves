class Wavefront{
  constructor(_root, _stage, _cx, _cy, _t0){
      this.stage = _stage;
      this.root = _root;
      this.cx = _cx;
      this.cy = _cy;
      this.t0 = _t0;
      this.init();
  }

  init(){
      var stage = this.stage,
        root = this.root,
        containerDiagonal = Math.sqrt(Math.pow(this.root.nominalBounds.width, 2) + Math.pow(this.root.nominalBounds.height, 2)),
        cx = this.cx,
        cy = this.cy,
        t0 = this.t0,
        radius = 0,
        t = 0,
        propagation = 0,
        wavelength = 0,
        speed = 440,
        frequency = 8,
        amplitude = 30,
        animationSpeed = 0.15;

      var frontDiff = new createjs.Shape();
      frontDiff.cx = cx;
      frontDiff.cy = cy;

      stage.addEventListener("tick", enlarge);
      function enlarge(){
        t = createjs.Ticker.getTime() / 1000 - t0;
        //console.log(t);
        propagation = speed * t * animationSpeed;
        wavelength = speed / frequency;
        var innerFront = propagation - wavelength /2,
            outerFront = propagation + wavelength /2;
        frontDiff.graphics.clear();
        for (let radius = innerFront; radius <= outerFront; radius += 2){
          const phase1 = 2 * Math.PI * (radius * frequency / speed) - 2 * Math.PI * frequency * t * animationSpeed;
          const phase2 = 2 * Math.PI * (radius * frequency / speed) - 2 * Math.PI * frequency * t * animationSpeed;
          const intensity1 = - 200 + amplitude * Math.cos(phase1);
          const intensity2 = - 200 + amplitude * Math.cos(phase2);
          const color = intensity > 0 ? `rgb(${intensity},0,0)` : `rgb(0,0,${-intensity})`;
          frontDiff.graphics.setStrokeStyle(2).beginStroke(color);
          if (radius >= 0){
            frontDiff.graphics.drawCircle(cx, cy, radius);
          }
          root.addChild(frontDiff);
        }
        
        
        
        //root.cache(0, 0, root.nominalBounds.width, root.nominalBounds.height);
        if (propagation > containerDiagonal){
          root.removeChild(frontDiff);
          stage.removeEventListener("tick", enlarge);
        }
        //console.log("distance:   " + distance);
        //console.log("wavelength: " + wavelength);
        //console.log("frequency:  " + frequency);
        //console.log("speed:      " + speed);
        //console.log("amplitude:  " + amplitude);
        //console.log("anim speed: " + animationSpeed);
        console.log("propagation:       " + propagation);
        //console.log("radius:            " + radius);
        console.log("containerDiagonal: " + containerDiagonal)
        //console.log("  ");
      }
  }
}

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
    var playstop = this.playstop;
    var playBtn = this.playBtn;
    var stopBtn = this.stopBtn;
    var playFlag = false;
    var x1 = 0;
    var y1 = 100;
    var t0 = 0;
    var x2 = 0;
    var y2 = 500;
    var radius1 = 1;
    var radius2 = 1;
    var color1 = "rgba(0, 0, 255, 0.2)";
    var color2 = "rgba(0, 0, 255, 0.2)";
    var shadow1 = "rgba(0, 0, 255, 1)";
    var shadow2 = "rgba(0, 0, 255, 1)";
    var stroke1 = 40;
    var stroke2 = 40;
    var i = 0;

    playBtn.visible = true;
    stopBtn.visible = false;

    playstop.addEventListener("click", function(){
      t0 = createjs.Ticker.getTime() / 1000;
      playFlag = !playFlag;
      if (playFlag){
        var wave = new Wavefront(waveSpace, stage, x1, y1, t0);
        var wave = new Wavefront(waveSpace, stage, x2, y2, t0);
      }
      
      playBtn.visible = !playBtn.visible;
      stopBtn.visible = !stopBtn.visible;
    });
/*
    stage.addEventListener("tick", function(){
      i++;
      if (playFlag){
        var wave = new Wavefront(waveSpace, stage, x1, y1, t0);
        
        //var wave = new Wavefront(waveSpace, stage, x2, y2);
        i = 0;
      }
    });
*/
  }
}