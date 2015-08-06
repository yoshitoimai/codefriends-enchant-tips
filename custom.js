preroadImage = function(core) {

	core.preload('sample.png');

};

gameStart = function(core) {

	var sprite = new ActionSprite('sample.png', 32, 32);

	core.rootScene.addChild(sprite);

};
