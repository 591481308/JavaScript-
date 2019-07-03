(function () {
  var position = "absolute";
  var elements = [];
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
    del();
    for (let i = 0, len = this.body.length; i < len; i++) {

      var obj = this.body[i];

      var div = document.createElement("div");

      //在map下面创建div
      map.appendChild(div);

      //记录该div
      elements.push(div);

      div.style.width = this.width + "px";
      div.style.height = this.height + "px";

      div.style.position = position;
      div.style.left = this.width * obj.x + "px";
      div.style.top = this.width * obj.y + "px";
      div.style.backgroundColor = obj.color;

    }
  };


  //创建蛇的移动功能
  Snake.prototype.move = function (){
    //蛇身体的移动
    for(var i = this.body.length-1; i>0; i--){
      this.body[i].x = this.body[i-1].x;
      this.body[i].y = this.body[i-1].y;
    }

    //蛇头部的移动
    switch(this.direction){
      case "top":
        this.body[0].y -= 1;
        break;
      case "down":
        this.body[0].y += 1;
        break;
      case "left":
        this.body[0].x -= 1;
        break;
      case "right":
        this.body[0].x += 1;
        break;
    }
  };

  function del (){
    for(var i = elements.length-1; i>= 0; i--){
      //删除div
      elements[i].parentNode.removeChild(elements[i]);
      //删除数组中的元素
      elements.splice(i,1);

    }
  }
  console.log(elements);
  window.Snake = Snake;
})();
