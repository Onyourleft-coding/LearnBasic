## NProgress进度条效果
安装
```npm install --save nprogress

使用
```
import "./NewSandBox.css";
import "nprogress/nprogress.css";

使用
NProgress.start();
  useEffect(() => {
    NProgress.done();
  });
当路由发生改变时，结束动画


