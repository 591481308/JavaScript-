(function () {
    var that;
   function Game(map) {
       this.food = new Food();
       this.snake = new Snake();
       this.map = map;
       that = this;
   }

   Game.prototype.start = function () {
       //1.把游戏对象渲染到游戏地图上
       this.food.render(this.map);
       this.snake.render(this.map);



       //2.开始游戏逻辑
       //2.1让蛇移动起来
       //2.2蛇遇到边界游戏结束
       runSnake();
       //2.3通过键盘控制蛇移动的方向
       bindKey();
       //2.4当蛇遇到食物




   };

   function bindKey () {
       document.addEventListener('keydown',function(e){
           switch(e.keyCode){
               case 37:
                   that.snake.direction = 'left';
                   break;
               case 38:
                   that.snake.direction = 'top';
                   break;
               case 39:
                   that.snake.direction = 'right';
                   break;
               case 40:
                   that.snake.direction = 'bottom';
                   break;
           }
       })
   }

   function runSnake(){
       var timerId = setInterval(function () {
           this.snake.move(this.food,this.map);
           this.snake.render(this.map);

           //2.2当蛇头遇到边界时游戏结束
           //获取蛇头的坐标
           var headX = this.snake.body[0].x;
           var headY = this.snake.body[0].y;

           //得到地图最大的边界
           var maxX = this.map.offsetWidth / this.snake.width;
           var maxY = this.map.offsetHeight / this.snake.width;


           if(headX < 0 || headX >= maxX){

               clearInterval(timerId);
               alert('Game Over');
           }

           if(headY < 0 || headY >= maxY){

               clearInterval(timerId);
               alert('Game Over');
           }


       }.bind(that),150);
   }
   //让外部能访问到Game方法
    window.Game = Game;
})();



