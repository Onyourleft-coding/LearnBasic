<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>title</title>
    <!-- 引入Vue -->
    <script src="../js/vue.js"></script>
</head>
<body>
    <!-- 准备好一个容器 -->
    <div id="root">
        
    </div>
    <script type="text/javascript">
    Vue.config.productionTip = false  //阻止Vue在启动时生成生产提示
        new Vue({
            el:'#root',
            data:{
                
            }
        })
    </script>
</body>
</html>