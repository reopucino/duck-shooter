var DuckShot={};

DuckShot.Game = function(game){
	//this.text = null;
	this.arrayDuck = [];
	this.duckduck = [];
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
		this.load.image('duck-yellow-taget', './assets/duck-yellow-target.png');
		this.load.image('duck-yellow', './assets/duck-yellow.png');
		this.load.image('duck-white-taget', './assets/duck-white-target.png');
		this.load.image('duck-white', './assets/duck-white.png');
		this.load.image('duck-brown', './assets/duck-brown.png');
		this.load.image('duck-brown-target', './assets/duck-brown-target.png');
		this.load.image('duck-back', './assets/duck-back.png');
		this.load.image('target', './assets/target.png');
		this.load.image('target', './assets/target-back.png');
		this.load.image('stick-wood', './assets/stick_wood_outline.png');
	},
	
	create:function(){
		//adding BG
		game.add.tileSprite(0,0,800,600, 'background');

		//adding tree
		var tree = game.add.image(120, 320, 'tree1');
		tree.anchor.x = .5;
		tree.anchor.y = .9;
		tree.rotation = -.2;

		//adding grass
		game.add.tileSprite(0, 300, 800, 220, 'grass');

		//adding duck first
		var startX = 120;
		for(var x= 0; x<8;x++){
			this.duckduck.push(new TheDuck(game, x*startX, 310, false));
		}
		//this.duckduck.push(new TheDuck(game, startX, 310, false)); testing one duck
		
		//adding water foreGround
		var water1 = game.add.tileSprite(0, 400, 1000,  224, 'water2');
		//this.add.tween(water1).to({x:-100}, 1000, "Linear", true, 0, -1, true);
		
		//add duck two
		for(var x= 0; x<8;x++){
			//this.duckCreator(x*startX, 400, true);
			//this.
			//this.duckduck.push(new TheDuck(game, x*startX, 400, true));
		}
		this.duckduck.push(new TheDuck(game, 600, 400, true));
		var water2 = game.add.tileSprite(-100, 480, 1000,  224, 'water1');
		//this.add.tween(water2).to({x:0}, 1000, "Linear", true, 0, -1, true);
		
	},
	
	duckCreator:function(x, y, itsFlip){
		var stik = this.add.image(x,y, 'stick-wood');
		stik.anchor.x = .5;
		stik.anchor.y =-.8;
		var child = stik.addChild(game.add.image(-55, 0, 'duck-yellow'));
		console.log(itsFlip);
		if(itsFlip){
			child.scale.x = -1;
			child.x -=10;
		}
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
		for(var i=0; i<this.duckduck.length; i++){
			this.duckduck[i].update();
		}
	},
	
	render:function(){
		//var d = this.duckduck[0];
		//d.renderInfo(10);
	}
};



TheDuck = function(game, x, y, itsFlip){
	this.stik = game.add.image(x,y, 'stick-wood');
	this.stik.anchor.x = .5;
	this.stik.anchor.y =-.8;
	this.flip = false;
	this.child = this.stik.addChild(game.add.image(0, 0, 'duck-yellow'));
	this.child.anchor.x = .5;
	if(itsFlip){
		this.flip = itsFlip;
		this.child.scale.x = -1;
		this.child.x -=0;
	}
};

TheDuck.prototype.update = function(){
	//this.x +=1;
	//this.oneDuck.x+=1;
	//console.log("a");
	if(this.flip)
	{
		if(this.stik.x>-55)this.stik.x -=1;
	}
	else{
		if(this.stik.x<860)this.stik.x +=1;
	}
	
	/*
	if(this.stik.x <=0){
		this.stik.x = 820;
		
	}
	else if(this.stik.x > 820){
		this.stik.x = 0;
		//this.child.frameName('duck-brown-target');
	}*/
	this.damage();
	
}

TheDuck.prototype.renderInfo = function(posX){
	game.debug.spriteInfo(this.stik, posX, 32);
	game.debug.inputInfo(240, 100);
}

TheDuck.prototype.damage = function(){
	console.log("aa");
};