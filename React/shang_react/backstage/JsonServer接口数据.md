## JsonServer接口数据

官网地址

[官网地址]: https://www.npmjs.com/package/json-server

### 使用教程

全局安装

```
npm install -g json-server
```

然后创建一个db.json，并放置一些数据

```
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

进入当前文件的cmd窗口。

```
json-server --watch db.json --port 8000
```

port表示端口开8000，也可以不写，默认3000端口

### 基本功能

可以使用sql的大部分基本操作，例如

```
	//获取数据 get
     axios.get('http://localhost:8000/posts?author=xiaobai').then(
      res=>{
        console.log(res.data);
      }
    )

    //增加数据 post
     axios.post('http://localhost:8000/posts',{
      title:'3333',
      author:'xiaochen',
    }).then(
      res=>{
        console.log('数据插入成功',res.data);
      },
      err=>{
        console.log('数据插入失败',err.message);
      }
    )

    // 更新数据 put 这种方式会导致没有修改的字段直接被替换掉
    axios.put('http://localhost:8000/posts/1',{
      title:'111-修改',
    }).then(
      res=>{
        console.log('修改成功',res.data);
      }
    )

    //局部更新 patch
    axios
      .patch("http://localhost:8000/posts/1", {
        title: "111-xiugai-111",
      })
      .then((res) => {
        console.log("数据插入成功", res.data);
      });

  //删除数据 delete
    axios.delete("http://localhost:8000/posts/5").then((res) => {
      console.log("删除成功", res.data);
    });
```

### 高级功能

```
//高级操作 向下关联 联表查询 _embed 这种情况常见于找到某篇文章，以及对应的评论等
    axios.get("http://localhost:8000/posts?_embed=comments").then((res) => {
      console.log(res.data);
    });

 //向上关联 _expand 这种情况常见于购物车只保存了商品id，不知道商品信息，这样就可以找到商品的信息了
 axios.get("http://localhost:8000/comments?_expand=post").then((res) => {
      console.log(res.data);
    });
```

