preroadImage = function(core) {

	core.preload('asteroid_1.png');

};

gameStart = function(core) {

	setInterval(function() {

		var sprite = new ActionSprite('asteroid_1.png', 32, 32);

		sprite.x = 144;
		sprite.y = 0;

		sprite.tl.moveBy(0, 224, 50).then(function() {

			sprite.remove();

		});

		core.rootScene.addChild(sprite);

	}, 2000);

};

getRandom = function(startNum, endNum) {
	return startNum + Math.floor( Math.random() * (endNum - startNum + 1));
};
