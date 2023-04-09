class Wavefront{
  constructor(_root, _stage, cx, cy, radius, coloring, shadow, stroke){
      this.stage = _stage;
      this.root = _root;
      this.x = cx;
      this.y = cy;
      this.radius = radius;
      this.coloring = coloring;
      this.shadow = shadow;
      this.stroke = stroke;
      this.init();
  }

  init(){
      var stage = this.stage;
      var root = this.root;
      var containerDiagonal = Math.sqrt(Math.pow(this.root.nominalBounds.width, 2) + Math.pow(this.root.nominalBounds.height, 2));
      var x = this.x;
      var y = this.y;
      var radius = this.radius;
      var coloring = this.coloring;
      var stroke = this.stroke;
      var stroke = this.stroke;
      var shadow = this.shadow;
      var circle = new createjs.Shape();
      circle.graphics.setStrokeStyle(stroke).beginStroke(coloring).drawCircle(0,0, radius);
      circle.x = x;
      circle.y = y;
      circle.shadow = new createjs.Shadow(shadow, 0, 0, 5);
      root.addChild(circle);

      stage.addEventListener("tick", enlarge);
      function enlarge(){
        radius += 2;
        circle.graphics.clear();
        circle.graphics.setStrokeStyle(stroke).beginStroke(coloring).drawCircle(0,0, radius);
        //root.cache(0, 0, root.nominalBounds.WIDTH, root.nominalBounds.height);
        if (radius > containerDiagonal){
          root.removeChild(circle);
          stage.removeEventListener("tick", enlarge);
        }
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
    
    const centerX = waveSpace.nominalBounds.width / 2;
    const centerY = waveSpace.nominalBounds.height / 2;
    const wavelength = 100; // wavelength of the wave
    const distance = 500; // distance between the two point sources
    const frequency = 10; // frequency of the wave
    const amplitude = 30; // amplitude of the wave
    const speed = 10; // speed of the wave
    
    function draw() {
      stage.removeAllChildren();
      const g = new createjs.Graphics();
    
      // draw the two point sources
      g.beginFill('red').drawCircle(centerX - distance / 2, centerY, 5);
      g.beginFill('blue').drawCircle(centerX + distance / 2, centerY, 5);
    
      // loop through each pixel and calculate the intensity of the wave
      for (let x = 0; x < waveSpace.nominalBounds.width; x+=20) {
        for (let y = 0; y < waveSpace.nominalBounds.height; y+=20) {
          const distance1 = Math.sqrt(Math.pow(x - (centerX - distance / 2), 2) + Math.pow(y - centerY, 2));
          const distance2 = Math.sqrt(Math.pow(x - (centerX + distance / 2), 2) + Math.pow(y - centerY, 2));
          const phase1 = 2 * Math.PI * (distance1 / wavelength) - 2 * Math.PI * frequency * createjs.Ticker.getTime() * speed;
          const phase2 = 2 * Math.PI * (distance2 / wavelength) - 2 * Math.PI * frequency * createjs.Ticker.getTime() * speed;
          const intensity1 = amplitude * Math.cos(phase1);
          const intensity2 = amplitude * Math.cos(phase2);
          const interference = intensity1 + intensity2;
          const color = interference > 0 ? `rgb(${interference},0,0)` : `rgb(0,0,${-interference})`;
          g.beginFill(color).drawRect(x, y, 20, 20);
        }
      }
    
      const bg = new createjs.Shape(g);
      bg.cache(0, 0, waveSpace.nominalBounds.width, waveSpace.nominalBounds.height);
      stage.addChild(bg);
      stage.update();
    }
    
    stage.addEventListener("tick", draw);
  
    
    
    playBtn.visible = true;
    stopBtn.visible = false;

    playstop.addEventListener("click", function(){
      playFlag = !playFlag;
      playBtn.visible = !playBtn.visible;
      stopBtn.visible = !stopBtn.visible;
    });

  }
}