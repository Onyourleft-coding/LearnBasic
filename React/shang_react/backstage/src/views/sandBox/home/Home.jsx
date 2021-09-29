import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Row, List, Avatar, Drawer } from "antd";
import * as Echarts from "echarts";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import axios from "axios";
import _ from "lodash"; //高效处理数据的js库
const { Meta } = Card;
export default function Home() {
  //#region
  /* const ajax = () => {
    //取数据 get
    axios.get('/posts?author=xiaobai').then(
      res=>{
        console.log(res.data);
      }
    )
    //增加 post
    axios.post('/posts',{
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
    // 更新修改 put 这种方式会导致没有修改的字段直接被替换掉
    axios.put('/posts/1',{
      title:'111-修改',
    }).then(
      res=>{
        console.log('修改成功',res.data);
      }
    )
    //局部更新 patch
    axios
      .patch("/posts/1", {
        title: "111-xiugai-111",
      })
      .then((res) => {
        console.log("数据插入成功", res.data);
      });
    //删除 delete
    axios.delete("/posts/5").then((res) => {
      console.log("删除成功", res.data);
    });
    //高级操作 向下关联 联表查询 _embed
    axios.get("/posts?_embed=comments").then((res) => {
      console.log(res.data);
    });
    //向上关联 _expand
    axios.get("/comments?_expand=post").then((res) => {
      console.log(res.data);
    });
  }; */
  //#endregion
  const barRef = useRef();
  const pieRef = useRef();
  const [star, setstar] = useState([]);
  const [allList, setallList] = useState([]);
  const [viewList, setviewList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [pieChart, setpieChart] = useState(null);

  useEffect(() => {
    axios.get(`/news?publishState=2&_expand=category`).then((res) => {
      // console.log(res.data);
      // console.log(_.groupBy(res.data, (item) => item.category.title));
      // 数据初始化后再调用绘制图标函数
      renderBarView(_.groupBy(res.data, (item) => item.category.title));

      setallList(res.data);
    });
    // 组件销毁时把onresize取消掉，不影响其他页面
    return () => {
      window.onresize = null;
    };
  }, []);
  const renderBarView = (obj) => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = Echarts.init(barRef.current);

    // 指定图表的配置项和数据
    var option = {
      title: {
        text: "新闻分类图示",
      },
      tooltip: {},
      legend: {
        data: ["数量"],
      },
      xAxis: {
        data: Object.keys(obj),
        // 优化显示 x轴距离太小显示不全
        axisLabel: {
          rotate: "45",
          interval: 0, //永远显示
        },
      },
      yAxis: {
        // 最小间隔 1
        minInterval: 1,
      },
      series: [
        {
          name: "数量",
          type: "bar",
          data: Object.values(obj).map((item) => item.length),
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    //图表大小跟随显示大小
    window.onresize = () => {
      // console.log('resize');
      myChart.resize();
    };
  };

  const renderPieView = (obj) => {
    // 数据处理工作
    var currentList = allList.filter((item) => item.author === username);
    // 数据转换
    var groupObj = _.groupBy(currentList, (item) => item.category.title);
    // console.log(groupObj);
    // console.log(currentList);

    // 转成所需要的数据格式
    var list = [];
    for (var i in groupObj) {
      list.push({ name: i, value: groupObj[i].length });
    }
    // console.log(list);
    var myChart;
    // 解决渲染多次问题  判断pieChart是否为假
    if (!pieChart) {
      myChart = Echarts.init(pieRef.current);
      setpieChart(myChart);
    } else {
      myChart = pieChart;
    }
    var option;

    option = {
      title: {
        text: "当前用户新闻分类图示",
        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "发布数量",
          type: "pie",
          radius: "50%",
          data: list,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };
    option && myChart.setOption(option);
  };

  useEffect(() => {
    axios
      .get(
        `news?publishState=2&_expand=category&_sort=view&_order=desc&_limit=6`
      )
      .then((res) => {
        // console.log(res.data);
        setviewList(res.data);
        // 第二个参数写成一个函数，表示我们要分类的字段名
      });
  }, []);
  useEffect(() => {
    axios
      .get(
        `news?publishState=2&_expand=category&_sort=star&_order=desc&_limit=6`
      )
      .then((res) => {
        // console.log(res.data);
        setstar(res.data);
      });
  }, []);
  const {
    username,
    region,
    role: { roleName },
  } = JSON.parse(localStorage.getItem("token"));
  return (
    <div>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
            <Card title="用户最长浏览" bordered={true}>
              <List
                size="small"
                // bordered
                dataSource={viewList}
                renderItem={(item) => (
                  <List.Item>
                    <a href={`#/news-manage/preview/${item.id}`}>
                      {item.title}
                    </a>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="用户点赞最多" bordered={true}>
              <List
                size="small"
                // bordered
                dataSource={star}
                renderItem={(item) => (
                  <List.Item>
                    <a href={`#/news-manage/preview/${item.id}`}>
                      {item.title}
                    </a>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Card title" bordered={true}>
              <Card
                style={{ width: 300 }}
                cover={
                  <img
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                  />
                }
                actions={[
                  <SettingOutlined
                    key="setting"
                    onClick={() => {
                      //放在定时器里，不然的话dom还没创建出来，直接render就会报错 Initialize failed: invalid dom.
                      setTimeout(() => {
                        setVisible(true);
                        //初始化
                        renderPieView();
                      }, 0);
                    }}
                  />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={username}
                  description={
                    <div>
                      <b>
                        {region ? region : "全球"}
                        <span style={{ marginLeft: "20px" }}>{roleName}</span>
                      </b>
                    </div>
                  }
                />
              </Card>
            </Card>
          </Col>
        </Row>

        {/* 抽屉组件 */}
        <Drawer
          title="个人新闻分类"
          placement="right"
          closable={true}
          onClose={() => {
            setVisible(false);
          }}
          visible={visible}
          width="500px"
        >
          <div
            ref={pieRef}
            style={{ height: "400px", marginTop: "30px", width: "100%" }}
          ></div>
        </Drawer>

        {/*  为 ECharts 准备一个具备大小（宽高）的 DOM  */}
        <div
          ref={barRef}
          style={{ height: "400px", marginTop: "30px", width: "100%" }}
        ></div>
      </div>
      ,
    </div>
  );
}
