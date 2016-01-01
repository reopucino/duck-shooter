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
		/*
		//this.add.sprite(0,0,'background');
		this.bg = game.add.tileSprite(0,0, 800, 600, 'background');
		
		this.group = game.add.group();
		
		this.tree1 = game.add.image(120,320, 'tree1');
		this.tree1.anchor.x = .5;
		this.tree1.anchor.y = .9;
		this.tree1.rotation = -.2;
		this.group.add(this.tree1);
		
		var grass = game.add.tileSprite(0, 300, 800, 220, 'grass');
		
		this.group.add(grass);
		
		this.tree2 = game.add.image(700, 430, 'tree2');
		this.tree2.anchor.x = .5;
		this.tree2.anchor.y = .9;
		this.tree2.rotation = .2;
		
		this.group.add(this.tree2);
		
		this.water1 = game.add.tileSprite(0, 400, 1000,  224, 'water2');
		this.water2 = game.add.tileSprite(-100, 480, 1000,  224, 'water1');
		this.add.tween(this.water1).to({x:-100}, 1000, "Linear", true, 0, -1, true);
		this.add.tween(this.water2).to({x:0}, 1000, "Linear", true, 0, -1, true);
		
		this.group.add(this.water1);
		this.group.add(this.water2);
		
		//this.add.tween(this.tree2).to({rotation:-.2}, 500, "Linear", true, 0, -1, true);
		//this.text.text ="aaa";
		//this.add.tween(this.bg).to({x:-100}, 1000, "Linear", true, 0, -1, true);
		
		//game.add.tileSprite(0,0, 800, 63, 'curtain-top');
		//this.add.image(0,100, 'curtain');
		//this.flipcurtain = this.add.image(800,100, 'curtain');
		//this.flipcurtain.scale.x = -1;
		
		//duck creator
		//this.ducks = this.add.group();
		
		var oneDuck = game.add.image(250,300, 'stick-wood');//this.ducks.create(10,10, 'duck-yellow');
		oneDuck.anchor.x = .5;
		oneDuck.anchor.y = -.8;
		oneDuck.addChild(game.make.image(-55,0, 'duck-yellow'));
		console.log(this.water1.z+" water");
		console.log(this.tree1.z);
		console.log(oneDuck.z +" duck");
		
		this.group.add(oneDuck);
		oneDuck.z = 4;
		
		this.duckCreator(0);
		this.arrayDuck.push(oneDuck);
		
		this.duckduck.push(new TheDuck(game));
		//this.group.sort('z', Phaser.Group.SORT_ASCENDING);
		*/

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
		this.duckCreator();

		//adding water foreGround
		var water1 = game.add.tileSprite(0, 400, 1000,  224, 'water2');
		this.add.tween(water1).to({x:-100}, 1000, "Linear", true, 0, -1, true);
	},
	
	duckCreator:function(){
		/*
		var oneDuck = this.add.image(0,0, 'stick-wood');
		oneDuck.anchor.x = .5;
		oneDuck.anchor.y = -.8;
		oneDuck.addChild(game.make.image(-55,0, 'duck-yellow'));
		this.group.add(oneDuck);
		if(layerPos<1){
			oneDuck.z = 5;
			oneDuck.x = 200;
			oneDuck.y = 400;
		}
		else
		{
			oneDuck.z = 4;
			oneDuck.x = 200;
			oneDuck.y = 300;
		}
		this.arrayDuck.push(oneDuck);
		//this.group.sort('z', Phaser.Group.SORT_ASCENDING);
		//console.log(this.group);
		*/
		var stik = this.add.image(100,200, 'stick-wood');
		stik.anchor.x = .5;
		stik.anchor.y =-.8;
		stik.addChild(game.add.image(-55, 0, 'duck-yellow'));
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
	}
};


/*
TheDuck = function(game){
	var oneDuck = game.add.image(50,50, 'stick-wood');
	//this.x = 10;
	//var y = 10;
	//console.log("call z");
	//oneDuck = game.group.add();
	//game.group.add(oneDuck);
	//this.group.add(oneDuck);
	//console.log(game.group)

};

TheDuck.prototype.update = function(){
	//this.x +=1;
	//this.oneDuck.x+=1;
	//console.log("a");
}

TheDuck.prototype.damage = function(){
	
};*/