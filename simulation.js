class Wavefront{
  constructor(_root, _stage, _lib, _cx1, _cy1, _cx2, _cy2, _t0){
      this.stage = _stage;
      this.root = _root;
      this.lib = _lib;
      this.cx1 = _cx1;
      this.cy1 = _cy1;
      this.cx2 = _cx2;
      this.cy2 = _cy2;
      this.t0 = _t0;
      this.init();
  }

  init(){
      var stage = this.stage,
        root = this.root,
        lib = this.lib,
        containerDiagonal = Math.sqrt(Math.pow(this.root.nominalBounds.width, 2) + Math.pow(this.root.nominalBounds.height, 2)),
        cx1 = this.cx1,
        cy1 = this.cy1,
        cx2 = this.cx2,
        cy2 = this.cy2,
        t0 = this.t0,
        radius = 0,
        t = 0,
        distance = 225,
        propagation = 0,
        wavelength = 0,
        speed = 440,
        frequency = 8,
        amplitude = 30,
        animationSpeed = 0.15,
        twoSourcesFlag = true;

        const centerX = 0;
        const centerY = root.nominalBounds.height / 2;
/*
        var s1 = new lib.Source();
        var s2 = new lib.Source();
        s1.x = s2.x = centerX + 15;
        s1.y = centerY - distance / 2;
        s2.y = centerY + distance / 2;
        if (twoSourcesFlag){
          root.addChild(s1, s2);
        } else {
          root.addChild(s1);
        }
*/
      var frontDiff1 = new createjs.Shape();
      var frontDiff2 = new createjs.Shape();
      //frontDiff.cx = cx;
      //frontDiff.cy = cy;

      stage.addEventListener("tick", enlarge);
      function enlarge(){
        t = createjs.Ticker.getTime() / 1000 - t0;
        //console.log(t);
        propagation = speed * t * animationSpeed;
        wavelength = speed / frequency;
        var innerFront = propagation - wavelength /2,
            outerFront = propagation + wavelength /2;
        frontDiff1.graphics.clear();
        frontDiff2.graphics.clear();
        for (let radius = innerFront; radius <= outerFront; radius += 2){
          for (let angle = -180; angle <= 180; angle++){
            const angle_rad1 = angle / 180 * Math.PI;
            const angle_rad2 = (angle + 1) / 180 * Math.PI;
            const distance1 = Math.sqrt(Math.pow(radius, 2) + Math.pow(radius, 2));
            const distance2 = Math.sqrt(Math.pow(radius, 2) + Math.pow(radius, 2));
            const phase1 = 2 * Math.PI * (radius * frequency / speed) - 2 * Math.PI * frequency * t * animationSpeed;
            const phase2 = 2 * Math.PI * (radius * frequency / speed) - 2 * Math.PI * frequency * t * animationSpeed;
            const intensity1 = amplitude * Math.cos(phase1);
            const intensity2 = amplitude * Math.cos(phase2);
            const interference = - 200 + intensity1 + intensity2 * twoSourcesFlag;
            const color = interference > 0 ? `rgb(${interference},0,0)` : `rgb(0,0,${-interference})`;
            const color1 = intensity1 > 0 ? `rgb(${intensity1},0,0)` : `rgb(0,0,${-intensity1})`;
            const color2 = intensity2 > 0 ? `rgb(${intensity2},0,0)` : `rgb(0,0,${-intensity2})`;
            frontDiff1.graphics.setStrokeStyle(2).beginStroke(color);
            frontDiff2.graphics.setStrokeStyle(2).beginStroke(color);
            if (radius >= 0){
              frontDiff1.graphics.arc(cx1, cy1, radius, angle_rad1, angle_rad2 , false);
              frontDiff2.graphics.arc(cx2, cy2, radius, angle_rad1, angle_rad2 , false);
              //stage.addChild(Arc[i]);
              //frontDiff.graphics.drawCircle(cx1, cy1, radius);
              //frontDiff.graphics.drawCircle(cx2, cy2, radius);
            }
            root.addChild(frontDiff1);
            root.addChild(frontDiff2);
          }
          
        }
        
        
        
        //root.cache(0, 0, root.nominalBounds.width, root.nominalBounds.height);
        if (propagation > containerDiagonal){
          root.removeChild(frontDiff1);
          root.removeChild(frontDiff2);
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
    this.init();
  }

  init(){
    var stage = this.stage;
    var waveSpace = this.waveSpace;
    var lib = this.lib;
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
        var wave = new Wavefront(waveSpace, stage, lib, x1, y1, x2, y2, t0);
        //var wave = new Wavefront(waveSpace, stage, x2, y2, t0);
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