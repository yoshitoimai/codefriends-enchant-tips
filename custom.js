preroadImage = function(core) {

	core.preload('asteroid_1.png', 'player.png');

};

gameStart = function(core) {

	var asteroid = new ActionSprite('asteroid_1.png', 32, 32);

	asteroid.x = 144;
	asteroid.y = 0;

	asteroid.tl.moveBy(0, 300, 50);

	core.rootScene.addChild(asteroid);

	var player = new ActionSprite('player.png', 32, 32);

	player.x = 144;
	player.y = 300;

	core.rootScene.addChild(player);

};
