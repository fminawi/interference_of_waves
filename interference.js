(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"interference_atlas_1", frames: [[0,460,400,400],[360,0,400,400],[909,460,113,389],[402,402,405,195],[809,0,164,458],[0,0,358,458],[443,915,489,4],[402,599,505,141],[402,742,400,62],[0,921,217,57],[0,862,230,57],[655,851,243,62],[402,806,251,62],[232,870,209,62]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_15 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(img.CachedBmp_9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3439,924);


(lib.CachedBmp_8 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["interference_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.WaveSpace = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(7,1,1).p("EgdrgjJMA7XAAAMAAABGTMg7XAAAg");
	this.shape.setTransform(190,224.9725,1,0.9999);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFDFD").s().p("EgdrAjKMAAAhGTMA7XAAAMAAABGTg");
	this.shape_1.setTransform(190,224.9725,1,0.9999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.WaveSpace, new cjs.Rectangle(-3.5,-3.5,387,457), null);


(lib.StopBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvnPoIAA/PIfPAAIAAfPg");
	mask.setTransform(100,100);

	// Layer_3
	this.instance = new lib.CachedBmp_15();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.StopBtn, new cjs.Rectangle(0,0,200,200), null);


(lib.Source = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("ABoAAQAAArgeAfQgfAegrAAQgqAAgfgeQgegfAAgrQAAgqAegfQAfgeAqAAQArAAAfAeQAeAfAAAqg");
	this.shape.setTransform(-10.0098,3.9948,0.9615,0.9615);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#999999","#CCCCCC","#F8F8F8"],[0,0.471,1],0,0,0,0,0,10.5).s().p("AhJBJQgegeAAgrQAAgqAegeQAfgfAqAAQArAAAeAfQAfAeAAAqQAAArgfAeQgeAfgrAAQgqAAgfgfg");
	this.shape_1.setTransform(-10.0098,3.9948,0.9615,0.9615);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AkXhZIH9AAQAJAAAIACQAJgCAKAAQAlAAAaAaQAaAbAAAkQAAAlgaAaQgaAaglAAQgJAAgIgBQgJACgKAAIn9AAQgfAAgWgWQgWgWAAgfIAAgdQAAgfAWgWQAWgWAfAAg");
	this.shape_2.setTransform(-27.999,3.9755,0.788,0.8333);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#999999","#FFFFFF"],[0,0.502,1],0,-10.9,0,11).s().p("AkXBaQgfAAgWgWQgWgWAAgfIAAgdQAAgfAWgWQAWgWAfAAIH9AAQAJAAAIACQAJgCAKAAQAlAAAaAaQAaAbAAAkQAAAlgaAZQgaAbglAAIgRgBQgJACgKAAg");
	this.shape_3.setTransform(-27.999,3.9755,0.788,0.8333);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Source, new cjs.Rectangle(-57,-7,58,22), null);


(lib.sliderDot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2.4,1,1).p("AAZAAQAAAKgHAIQgIAHgKAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAKg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgRASQgHgIAAgKQAAgKAHgHQAHgHAKAAQALAAAGAHQAIAHAAAKQAAAKgIAIQgGAHgLAAQgKAAgHgHg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3,1,1).p("ADIAAQAABTg7A6Qg6A7hTAAQhSAAg6g7Qg7g6AAhTQAAhSA7g7QA6g6BSAAQBTAAA6A6QA7A7AABSg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#004CE3").s().p("AiMCNQg7g6AAhTQAAhSA7g7QA7g6BRAAQBTAAA6A6QA7A7AABSQAABTg7A6Qg6A7hTAAQhRAAg7g7g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.5,-21.5,43,43);


(lib.PlayBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AvnPoIAA/PIfPAAIAAfPg");
	mask.setTransform(100,100);

	// Layer_3
	this.instance = new lib.CachedBmp_14();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PlayBtn, new cjs.Rectangle(0,0,200,200), null);


(lib.physicszonecom = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(363.2,-17.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_12();
	this.instance_1.setTransform(416.45,42.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_11();
	this.instance_2.setTransform(-163.1,-50,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(622.95,-50,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_9();
	this.instance_4.setTransform(-859.8,-230.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-859.8,-230.9,1719.5,462);


(lib.path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6393E8").ss(13,1,1).p("At2AAIbtAA");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.path, new cjs.Rectangle(-95.1,-6.5,190.3,13), null);


(lib.Dot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhbBdQgmgnAAg2QAAg1AmgmQAmgmA1AAQA2AAAmAmQAmAmAAA1QAAA2gmAnQgmAlg2AAQg1AAgmglg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Dot, new cjs.Rectangle(-13,-13,26,26), null);


(lib.Slider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.handle = new lib.sliderDot();
	this.handle.name = "handle";
	new cjs.ButtonHelper(this.handle, 0, 1, 1);

	this.path = new lib.path();
	this.path.name = "path";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.path},{t:this.handle}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Slider, new cjs.Rectangle(-95.1,-21.5,190.3,43), null);


(lib.radioBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.dot = new lib.Dot();
	this.dot.name = "dot";

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(4,1,1).p("AC+AAQAABPg4A4Qg3A3hPAAQhOAAg4g3Qg3g4AAhPQAAhOA3g3QA4g4BOAAQBPAAA3A4QA4A3AABOg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F8EB").s().p("AiFCGQg4g3AAhPQAAhOA4g3QA3g4BOAAQBPAAA3A4QA4A3AABOQAABPg4A3Qg3A4hPAAQhOAAg3g4g");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.dot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21,-21,42,42);


(lib.pz_logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Physics_Zone_com.svg
	this.instance = new lib.physicszonecom("synched",0);
	this.instance.setTransform(0,0.35,0.1464,0.1463,0,0,0,0,2.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Az6FtIAArZMAn1AAAIAALZg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.shape},{t:this.instance}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.5,-36.5,255,73);


(lib.PlayStop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.playBtn = new lib.PlayBtn();
	this.playBtn.name = "playBtn";
	this.playBtn.setTransform(0,0.05,0.5,0.5,0,0,0,100,100.1);

	this.stopBtn = new lib.StopBtn();
	this.stopBtn.name = "stopBtn";
	this.stopBtn.setTransform(0,0.05,0.5,0.5,0,0,0,100,100.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FF33").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.stopBtn,p:{x:0,y:0.05,alpha:1}},{t:this.playBtn,p:{x:0,y:0.05,alpha:1}}]}).to({state:[{t:this.stopBtn,p:{x:1,y:1.05,alpha:0.8008}},{t:this.playBtn,p:{x:1,y:1.05,alpha:0.8008}}]},2).to({state:[{t:this.shape},{t:this.stopBtn,p:{x:0,y:0.05,alpha:1}},{t:this.playBtn,p:{x:0,y:0.05,alpha:1}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-50,101,101);


(lib.Header = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(2.6,69.6,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_7();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.pz_logo = new lib.pz_logo();
	this.pz_logo.name = "pz_logo";
	this.pz_logo.setTransform(871.25,37.55);
	new cjs.ButtonHelper(this.pz_logo, 0, 1, 2, false, new lib.pz_logo(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.pz_logo},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Header, new cjs.Rectangle(0,0,997.1,71.6), null);


(lib.Container = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.waveSpace = new lib.WaveSpace();
	this.waveSpace.name = "waveSpace";
	this.waveSpace.setTransform(190,225,1,1,0,0,0,190,225);

	this.timeline.addTween(cjs.Tween.get(this.waveSpace).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Container, new cjs.Rectangle(-3.5,-3.5,387,457), null);


// stage content:
(lib.interference = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// root
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(496.85,223.85,0.5,0.5);

	this.sliderAnimSpeed = new lib.Slider();
	this.sliderAnimSpeed.name = "sliderAnimSpeed";
	this.sliderAnimSpeed.setTransform(596.9,201.35);

	this.instance_1 = new lib.CachedBmp_5();
	this.instance_1.setTransform(478.85,131.5,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_4();
	this.instance_2.setTransform(603.1,131.5,0.5,0.5);

	this.radBtn2s = new lib.radioBtn();
	this.radBtn2s.name = "radBtn2s";
	this.radBtn2s.setTransform(660.65,105.05);
	new cjs.ButtonHelper(this.radBtn2s, 0, 1, 1);

	this.radBtn1s = new lib.radioBtn();
	this.radBtn1s.name = "radBtn1s";
	this.radBtn1s.setTransform(533.2,105.05);
	new cjs.ButtonHelper(this.radBtn1s, 0, 1, 1);

	this.instance_3 = new lib.CachedBmp_3();
	this.instance_3.setTransform(536.15,546.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_2();
	this.instance_4.setTransform(534.15,439.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1();
	this.instance_5.setTransform(544.8,331.55,0.5,0.5);

	this.sliderAmp = new lib.Slider();
	this.sliderAmp.name = "sliderAmp";
	this.sliderAmp.setTransform(596.9,524.85);

	this.sliderDistance = new lib.Slider();
	this.sliderDistance.name = "sliderDistance";
	this.sliderDistance.setTransform(596.9,309.15);

	this.sliderFreq = new lib.Slider();
	this.sliderFreq.name = "sliderFreq";
	this.sliderFreq.setTransform(596.9,416.95);

	this.container = new lib.Container();
	this.container.name = "container";
	this.container.setTransform(83.9,104.55);

	this.instance_6 = new lib.Header();
	this.instance_6.setTransform(448.6,35.8,1,1,0,0,0,448.6,35.8);

	this.playstop = new lib.PlayStop();
	this.playstop.name = "playstop";
	this.playstop.setTransform(810.5,154.55);
	new cjs.ButtonHelper(this.playstop, 0, 1, 2, false, new lib.PlayStop(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playstop},{t:this.instance_6},{t:this.container},{t:this.sliderFreq},{t:this.sliderDistance},{t:this.sliderAmp},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.radBtn1s},{t:this.radBtn2s},{t:this.instance_2},{t:this.instance_1},{t:this.sliderAnimSpeed},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(500,300,497.1,277.9);
// library properties:
lib.properties = {
	id: 'DEF5A0A10E5D014494482595F5BD06E1',
	width: 1000,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_9.png", id:"CachedBmp_9"},
		{src:"images/interference_atlas_1.png", id:"interference_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['DEF5A0A10E5D014494482595F5BD06E1'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;