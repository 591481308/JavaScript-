//生成十个方块，随机生成颜色

// 获取容器
var container = document.getElementById("container");

//生成十个不同颜色的rgb数值，并用数组保存起来
var array = [];
for (let i = 0; i < 10; i++) {
  var r = Tools.getRandom(0, 255);
  var g = Tools.getRandom(0, 255);
  var b = Tools.getRandom(0, 255);

  var box = new Box(container,{
    backgroundColor: 'rgb('+ r +','+ g +','+ b +')'
  });

  array.push(box);

}

//设置随机位置,开启定时器
setInterval(randomBox, 500);

//也moan加载完成，先设置随机位子
randomBox();

function randomBox() {
  // 随机生成方块的坐标
  for (var i = 0; i < array.length; i++) {
    var box = array[i];
    box.random();
  }
}