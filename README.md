# research

- [AMD - discuss how anonymous
definition get it's id](https://groups.google.com/forum/#!topic/commonjs/WjNY7ONeaI4)
  - 新增script标签，引入js，通过`onload`事件的`readyState`状态，判断执行中js，以识别此时执行`define`方法的宿主js，从而获取匿名模块id
