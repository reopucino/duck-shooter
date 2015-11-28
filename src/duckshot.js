var DuckShot={};

DuckShot.Game = function(game){
	//this.text = null;
};

DuckShot.Game.prototype = {
	init:function(){
		this.text = this.add.text(100,100, "Phaser is work", {font:"32px Arial", fill:"#FFFFFF", align:"center"});
		//this.text.anchor.x = .5;
		//this.scale.pageAlignHorizontally = true;
		//this.scale.pageAlignVertically = true;
	},
	
	preload:function(){
		this.load.image('background', './assets/bg_green.png');
		this.load.image('water1', './assets/water1.png');
		this.load.image('water2', './assets/water2.png');
		this.load.image('grass', './assets/grass.png');
		this.load.image('tree1', './assets/tree1.png');
		this.load.image('tree2', './assets/tree2.png');
	},
	
	create:function(){
		//this.add.sprite(0,0,'background');
		this.bg = game.add.tileSprite(0,0, 800, 600, 'background');
		this.tree1 = game.add.image(300,300, 'tree1');
		this.tree1.anchor.x = .5;
		this.tree1.anchor.y = .9;
		console.log(this.tree1.offsetX);
		this.tree1.rotation = 20;
		game.add.tileSprite(0, 280, 800, 220, 'grass');
		this.water1 = game.add.tileSprite(0, 400, 1000,  224, 'water2');
		this.water2 = game.add.tileSprite(-100, 480, 1000,  224, 'water1');
		this.add.tween(this.water1).to({x:-100}, 1000, "Linear", true, 0, -1, true);
		this.add.tween(this.water2).to({x:0}, 1000, "Linear", true, 0, -1, true);
		//this.text.text ="aaa";
		//this.add.tween(this.bg).to({x:-100}, 1000, "Linear", true, 0, -1, true);
	},
	
	update:function(){
		this.tree1.rotation +=0.1;
	}
};