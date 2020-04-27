# research

- [AMD - discuss how anonymous
definition get it's id](https://groups.google.com/forum/#!topic/commonjs/WjNY7ONeaI4)
  - 判断执行中js，以识别此时执行`define`方法的宿主js，从而获取匿名模块id
    - 通过 `document.currentScript` 取得当前执行 script 标签，[api兼容性](https://caniuse.com/#search=currentScript)
    - 新增script标签，引入js，通过`onload`事件的`readyState`状态，
