preroadImage = function(core) {

	core.preload('asteroid_1.png');

};

gameStart = function(core) {

	var sprite = new ActionSprite('asteroid_1.png', 32, 32);

	sprite.x = 0;
	sprite.y = 0;

	core.rootScene.addChild(sprite);

};
