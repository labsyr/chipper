Crafty.init(960, 600, document.getElementById('game'));

Crafty.defineScene('mainScene', function() {
  Crafty.pixelart(true);
  Crafty.e('2D, Canvas, Image')
    .image('images/background.png');
  Crafty.viewport.scale(3);

  Crafty.e('2D, Canvas, Table')
    .attr({x: 82, y: 55, size: 3});
  Crafty.e('2D, Canvas, Table')
    .attr({x: 54, y: 93, size: 4});
  Crafty.e('2D, Canvas, Table')
    .attr({x: 30, y: 131, size: 5}); 
  Crafty.e('2D, Canvas, Table')
    .attr({x: 5, y: 169, size: 6});

  for (var i = 0; i < 10; i++) {
    Crafty.e('2D, Canvas, Hitbox')
      .attr({x: 70 + i * 18, y: 182, number: i});
  }
});

Crafty.enterScene('mainScene');
