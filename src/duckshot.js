var DuckShot={
	score : 0,
	IMGscoring : [],
	IMGIndex:['text_0_small.png', 'text_1_small.png', 'text_2_small.png', 'text_3_small.png',
			  'text_4_small.png', 'text_5_small.png', 'text_6_small.png', 'text_7_small.png',
			  'text_8_small.png', 'text_9_small.png'],
	polimer:null,
	bulletslot : [],
	reload:[],
	bullets:5,
	lastShot:false,
	speedMovement:3,
};

DuckShot.Game = function(){
	//this.text = null;
	this.arrayDuck = [];
	this.duckduck = [];
	this.bitScore = [];
	//just update for testing push with ssh key
};

DuckShot.Game.prototype = {
	init:function(){
		//this.text = this.add.text(100,100, "Phaser is work", {font:"32px Arial", fill:"#FFFFFF", align:"center"});
		//this.text.anchor.x = .5;
		this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
	},
	
	preload:function(){
		this.load.image('background', './assets/bg_wood.png');
		this.load.image('water1', './assets/water1.png');
		this.load.image('water2', './assets/water2.png');
		this.load.image('grass', './assets/grass.png');
		this.load.image('tree1', './assets/tree1.png');
		this.load.image('tree2', './assets/tree2.png');
		this.load.image('curtain-top', './assets/curtain_top.png');
		this.load.image('curtain', './assets/curtain.png');
		this.load.image('pause', './assets/pause-stroke.png');
		/*
		this.load.image('duck-yellow-taget', './assets/duck-yellow-target.png');
		this.load.image('duck-yellow', './assets/duck-yellow.png');
		this.load.image('duck-white-taget', './assets/duck-white-target.png');
		this.load.image('duck-white', './assets/duck-white.png');
		this.load.image('duck-brown', './assets/duck-brown.png');
		this.load.image('duck-brown-target', './assets/duck-brown-target.png');
		this.load.image('duck-back', './assets/duck-back.png');
		*/
		this.load.image('target', './assets/target.png');
		this.load.image('target-back', './assets/target-back.png');
		this.load.image('stick-wood', './assets/stick_wood_outline.png');
		this.load.image('croshair', './assets/crosshair.png');
		this.load.spritesheet('ss-duck', './assets/ss_duck.png', 114,110, 9);
		
		this.load.atlasXML('sprites', './assets/spritesheet_hud.png', './assets/spritesheet_hud.xml');
		this.load.atlasXML('reload', './assets/reload.png', './assets/reload.xml');
		game.time.advancedTiming=true;
	},
	
	adding : function(num){
		DuckShot.IMGscoring.push(game.add.image(60+num*30,20, 'sprites', 'text_0_small.png'));
	},
	create:function(){
		//adding BG
		game.add.tileSprite(0,0,800,600, 'background');
		
		game.add.image(20,20, 'sprites', 'icon_duck.png');
		
		//this.bitScore.push(game.add.image(60,20, 'sprites', 'text_0_small.png'));
		//DuckShot.polimer = game.add.image(60,20, 'sprites', 'text_0_small.png');
		DuckShot.IMGscoring.push(game.add.image(60,20, 'sprites', 'text_0_small.png'));
		
		//adding tree
		var tree = game.add.image(120, 320, 'tree1');
		tree.anchor.x = .5;
		tree.anchor.y = .9;
		tree.rotation = -.2;

		//adding grass
		game.add.tileSprite(0, 300, 800, 220, 'grass');

		//adding duck first
		var startX = 240;
		
		for(var x= 0; x<4;x++){
			this.duckduck.push(new TheDuck(game, x*startX, 310, false));
		}
		//this.duckduck.push(new TheDuck(game, startX, 310, false)); testing one duck
		
		//adding water foreGround
		var water1 = game.add.tileSprite(0, 400, 1000,  224, 'water2');
		//this.add.tween(water1).to({x:-100}, 1000, "Linear", true, 0, -1, true);
		
		//add duck two
		for(var x= 0; x<4;x++){
			//this.duckCreator(x*startX, 400, true);
			//this.
			this.duckduck.push(new TheDuck(game, x*startX, 400, true));
		}
		//this.duckduck.push(new TheDuck(game, 600, 400, true));
		var water2 = game.add.tileSprite(-100, 480, 1000,  224, 'water1');
		//this.add.tween(water2).to({x:0}, 1000, "Linear", true, 0, -1, true);
		
		//this.xhair = new Croshair(game,0,0);
		
		for(var i = 0; i<5; i++){
			DuckShot.reload.push(game.add.image(630+i*30, 550, 'sprites', 'icon_bullet_gold_short.png'));
		}
		
		var button = game.add.image(30, 540,'reload', 'upper.png');
		button.inputEnabled = true;
		button.input.priorityID = 1;
		button.events.onInputDown.add(this.actionOnClick, this);
		//adding pause game
		game.add.image(730, 15, 'pause');
		//game.input.enabled = true;
		game.input.onDown.add(this.shooting, true);
	},
	
	actionOnClick:function(){
		DuckShot.bullets = 5;
		for(var i = 0; i<5; i++){
			DuckShot.reload[i].loadTexture('sprites', "icon_bullet_gold_short.png");
		}
		
	},
	
	shooting:function(){ 
		//if(DuckShot.bullets == 0)return;
		//DuckShot.bullets -= 1;
		if(DuckShot.bullets > 0){
			DuckShot.reload[DuckShot.bullets-1].loadTexture('sprites', "icon_bullet_empty_short.png");
		}
		DuckShot.bullets -=1;
		if(DuckShot.bullets <= -1)return;
	},
	
	update:function(){
		//this.tree2.rotation +=0.1;
		/*
		for(var i =0; i<this.arrayDuck.length; i++){
			var duck = this.arrayDuck[i];
			duck.x += 1;
		}
		this.duckduck[0].update();
		*/
		//console.log(this.duckduck[0].flip);
		for(var i=0; i<this.duckduck.length; i++){
			this.duckduck[i].update();
			
			if(this.duckduck[i].stop){
				//var x = i-1;
				//if(x < 0){ x = this.duckduck.length-1;}
				//this.duckduck[i].sendBackward(x*120, this.duckduck[i].stik.y);
				var rand = Math.floor(Math.random()*7);
				
				if(rand == 1)
				{
					//this.duckduck[i].child.animations.play('back');
					this.duckduck[i].child.animations.play('yellow-t');
				}
				else if(rand == 2)
				{
					this.duckduck[i].child.animations.play('brown');
				}
				else if(rand == 3)
				{
					this.duckduck[i].child.animations.play('yellow');
				}
				else if(rand == 4)
				{
					this.duckduck[i].child.animations.play('brown-t');
				}
				else if(rand == 5)
				{
					this.duckduck[i].child.animations.play('white-t');
				}
				else //if(rand == 6)
				{
					this.duckduck[i].child.animations.play('white');
				}
				//else{this.duckduck[i].child.animations.play('back');}
				
				if(this.duckduck[i].killDuck){
					//this.duckduck[i].child.scale.x *=-1;
					this.duckduck[i].killDuck = false;
				}
				//flip or not
				if(this.duckduck[i].flip){
					this.duckduck[i].stik.x = 880;
					this.duckduck[i].stop = false;
					this.duckduck[i].child.scale.x = -1;
					
				}
				else{
					this.duckduck[i].stik.x = -100;
					this.duckduck[i].stop=false;
					this.duckduck[i].child.scale.x = 1;
				}
				
			}
		}
	},
	
	render:function(){
		//var d = this.duckduck[0];
		//d.renderInfo(10);
		game.debug.text(game.time.fps|| '--', 2, 14, "#00ff00");   
		//game.debug.body(this.duckduck[0].child);
		//console.log(this.duckduck[0].);
	}
};

Croshair = function(game, x, y){
	this.crossHair = game.add.image(x,y, 'croshair');
	this.crossHair.anchor.x = .5;
	this.crossHair.anchor.y = .5;
	
};

Croshair.prototype.update = function(){
	this.crossHair.x = game.input.mousePointer.x;
	this.crossHair.y = game.input.mousePointer.y;
	
	//this.crossHair.x = game.input.pointer1.x;
	//this.crossHair.y = game.input.pointer1.y;
	//this.crossHair = game.input.mousePointer;
	//console.log(game.input.mousePointer.x);
};

TheDuck = function(game, x, y, itsFlip){
	this.game = game;
	this.killDuck = false;
	this.stik = game.add.sprite(x,y, 'stick-wood');
	this.stik.anchor.x = .5;
	this.stik.anchor.y =-.8;
	this.flip = false;
	this.child = this.stik.addChild(game.add.sprite(0,0, 'ss-duck'));//(game.add.image(0, 0, 'duck-yellow'));
	this.child.anchor.x = .5;
	this.child.animations.add('back', [0], 1, true);
	this.child.animations.add('brown', [1], 1, true);
	this.child.animations.add('yellow', [2], 1, true);
	this.child.animations.add('brown-t', [3], 1, true);
	this.child.animations.add('white-t', [4], 1, true);
	this.child.animations.add('white', [6], 1, true);
	this.child.animations.add('yellow-t', [7], 1, true);
	this.SPEEDMOVEMENT = 3;
	var rand = Math.floor(Math.random()*7);
	if(rand == 1)
	{
		//this.child.animations.play('back');
		this.child.animations.play('yellow-t');
	}
	else if(rand == 2)
	{
		this.child.animations.play('brown');
	}
	else if(rand == 3)
	{
		this.child.animations.play('yellow');
	}
	else if(rand == 4)
	{
		this.child.animations.play('brown-t');
	}
	else if(rand == 5)
	{
		this.child.animations.play('white-t');
	}
	else //if(rand == 6)
	{
		this.child.animations.play('white');
	}
	//else{//this.child.animations.play('yellow-t');	this.child.animations.play('back');}
	this.stop = false;
	if(itsFlip){
		this.flip = itsFlip;
		this.child.scale.x = -1;
		this.child.x -=0;
	}
	//physics.p2.enable(
	// game.physics.p2.enable([ contra, bunny, block, wizball ], true);
	//game.physics.p2.enable([this.stik], true);
	//console.log(game.physics.p2);
	//game.physics.p2.enable([this.duckduck[0]]);
	//adding duck clik
	//this.child.
	
	this.tween = game.add.tween(this.child.scale).to({x:0}, 100, Phaser.Easing.Linear.None);
	this.tween.onComplete.add(this.changeBla, this);
	this.otherTween = game.add.tween(this.child.scale);
	
	this.child.inputEnabled = true;
	//this.child.input.useHandCursor = true;
	this.child.events.onInputDown.add(this.damage, this);
};

TheDuck.prototype.update = function(){
	//this.x +=1;
	//this.oneDuck.x+=1;
	//console.log("a");
	if(this.flip)
	{
		if(this.stik.x>-55){this.stik.x -=DuckShot.speedMovement;}
		else if (!this.stop){this.stop = true;}
	}
	else{
		if(this.stik.x<860){this.stik.x +=DuckShot.speedMovement;}
		else if (!this.stop){this.stop = true;}
	}
	
	/*
	if(this.stik.x <=0){
		this.stik.x = 820;
		
	}
	else if(this.stik.x > 820){
		this.stik.x = 0;
		//this.child.frameName('duck-brown-target');
	}*/
	
	
};

TheDuck.prototype.changeBla = function(){
	this.child.animations.play('back');
	var scaleSize  = (this.flip)?1:-1;
	this.otherTween.to({x:scaleSize}, 100, Phaser.Easing.Linear.None);
	this.otherTween.start();
};

TheDuck.prototype.renderInfo = function(posX){
	game.debug.spriteInfo(this.stik, posX, 32);
	game.debug.inputInfo(240, 100);
};

TheDuck.prototype.checkLast = function(){
	return (DuckShot.bullets == 0);
}

TheDuck.prototype.damage = function(){
	//this.stik.removeChild(this.child);
	if(this.killDuck || DuckShot.bullets <=-1)return;
	this.tween.start();
	this.killDuck = true;
	//DuckShot.Game.score += 1;
	//console.log(DuckShot.Game.score);
	if(this.child.animations.frame == 3 || this.child.animations.frame == 4 || this.child.animations.frame == 7){
		DuckShot.score+=5;
	}
	else {
		DuckShot.score+=1;
	}
	//DuckShot.polimer.loadTexture('sprites', DuckShot.IMGIndex[DuckShot.score]);
	//check length
	var stringScore = ''+DuckShot.score;
	
	if(stringScore.length>DuckShot.IMGscoring.length){
		//game.add.image(60,20, 'sprites', 'text_0_small.png'));
		DuckShot.Game.prototype.adding(stringScore.length-1);
		//DuckShot.speedMovement += 1;
	}
	
	for(var i = 0; i<stringScore.length;i++){
		DuckShot.IMGscoring[i].loadTexture('sprites', DuckShot.IMGIndex[stringScore[i]]);
		
	}
	//this.child.y = (-game.world._height) -100;
	//console.log(this.child.animations.name);
	//console.log(DuckShot.score);
};

TheDuck.prototype.sendBackward = function(posX, posY){
	if(this.stik.y == posY){
		if(this.flip){
			this.stik.x = posX+120;
		}
		else{
			this.stik.x = posX-120;
		}
		this.stop=false;
	}
	console.log("aas");
	
	
};