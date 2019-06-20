(function () {
  var position = "absolute";
  //蛇的基本属性；
  function Snake(options) {
    options = options || {};
    this.width = options.width || 20;
    this.height = options.height || 20;
    this.direction = options.direction || "right";

    this.body = [
      {x : 3, y : 2, color: "red"},
      {x : 2, y : 2, color: "blue"},
      {x : 1, y : 2, color: "blue"}
    ]

  }

  //将蛇渲染到map上；
  Snake.prototype.render = function (map) {

    for (let i = 0, len = this.body.length; i < len; i++) {

      var obj = this.body[i];

      var div = document.createElement("div");

      //在map下面创建div
      // map.appenChild(div);
      map.appendChild(div);

      div.style.width = this.width + "px";
      div.style.height = this.height + "px";

      div.style.positin = position;
      div.style.left = this.width * obj.x + "px";
      div.style.top = this.width * obj.y + "px";
      div.style.backgroundColor = obj.color;

    }
  };
  window.Snake = Snake;
})();

//测试代码
var map = document.getElementById("map");
var snake = new Snake();
snake.render(map);
