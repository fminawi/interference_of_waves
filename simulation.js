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
      circle.shadow = new createjs.Shadow(shadow, 0, 0, 10);
      root.addChild(circle);
      stage.addEventListener("tick", enlarge);
      function enlarge(){
        radius++;
        circle.graphics.clear();
        circle.graphics.setStrokeStyle(stroke).beginStroke(coloring).drawCircle(0,0, radius);
        if (radius > containerDiagonal){
          circle.graphics.clear();
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
    this.header = this.root.header;
    this.pz_logo = this.root.pz_logo;
    this.playstop = this.root.playstop;
    this.playBtn = this.playstop.playBtn;
    this.stopBtn = this.playstop.stopBtn;
    this.init();
  }

  init(){
    var stage = this.stage;
    var root = this.root;
    var container = this.container;
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
    var color1 = "rgba(0, 0, 255, 0.1)";
    var color2 = "rgba(0, 0, 255, 0.1)";
    var shadow1 = "rgba(0, 0, 255, 1)";
    var shadow2 = "rgba(0, 0, 255, 1)";
    var stroke1 = 15;
    var stroke2 = 15;
    var i = 0;
    var circle = [];

    playBtn.visible = true;
    stopBtn.visible = false;

    stage.addEventListener("tick", function(){
      i++;
      if (i % 40 === 0 && playFlag){
        var circle = new Wavefront(container, stage, x1, y1, radius1, color1, shadow1, stroke1);
        var circle = new Wavefront(container, stage, x2, y2, radius2, color2, shadow2, stroke2);
        console.log(circle);
        i = 0;
      }
    });
    playstop.addEventListener("click", function(){
      playFlag = !playFlag;
      playBtn.visible = !playBtn.visible;
      stopBtn.visible = !stopBtn.visible;
    });
  }
}