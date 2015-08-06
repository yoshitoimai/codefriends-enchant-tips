preroadImage = function(core) {

	core.preload('asteroid_1.png');

};

gameStart = function(core) {

	var sprite = new ActionSprite('asteroid_1.png', 32, 32);

	sprite.x = 144;
	sprite.y = 0;

	sprite.tl.moveBy(0, 224, 50).then(function() {

	});

	core.rootScene.addChild(sprite);

};
