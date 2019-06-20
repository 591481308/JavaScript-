(function () {
   function Game(map) {
       this.food = new Food();
       this.snake = new Snake();
       this.map = map;
   }

   Game.prototype.start = function () {
       //1.把游戏对象渲染到游戏地图上
       this.food.render(this.map);
       this.snake.render(this.map);

       this.snake.move();
       this.snake.render(this.map);

       this.snake.move();
       this.snake.render(this.map);

       //2.开始游戏逻辑
   };
   //让外部能访问到Game方法
    window.Game = Game;
})();


//测试代码
var map = document.getElementById("map");
var game = new Game(map);
game.start();
