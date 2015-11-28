var DuckShot={};

DuckShot.Game = function(game){
	//this.text = null;
};

DuckShot.Game.prototype = {
	init:function(){
		this.text = this.add.text(100,100, "Phaser is work", {font:"32px Arial", fill:"#FFFFFF", align:"center"});
		this.text.anchor.x = .5;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
	},
	
	preload:function(){
		this.load.image('background', './assets/bg_green.png');
	},
	
	create:function(){
		//this.add.sprite(0,0,'background');
		game.add.tileSprite(0,0, 800, 600, 'background');
		this.text.text ="aaa";
	}
};