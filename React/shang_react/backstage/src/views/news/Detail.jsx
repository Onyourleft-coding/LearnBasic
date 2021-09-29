import React, { useEffect, useState } from "react";
import { PageHeader, Descriptions } from "antd";
import moment from "moment";
import axios from "axios";
import { HeartTwoTone } from "@ant-design/icons";
export default function Detail(props) {
  const [newsInfo, setnewsInfo] = useState(null);
  useEffect(() => {
    // console.log(props.match.params.id);
    axios
      .get(`/news/${props.match.params.id}?_expand=category&_expand=role`)
      .then((res) => {
        // console.log(res.data);
        setnewsInfo({ ...res.data, view: res.data.view + 1 });
        //   同步后端
        return res.data;
        //由于上面返回了res，所以下面的res已经的最新的新闻对象了
      })
      .then((res) => {
        axios.patch(
          `/news/${props.match.params.id}?_expand=category&_expand=role`,
          {
            view: res.view + 1,
          }
        );
      });
  }, [props.match.params.id]);
  const handleStar = () => {
    setnewsInfo({
      ...newsInfo,
      star: newsInfo.star + 1,
    });
    axios.patch(
      `/news/${props.match.params.id}?_expand=category&_expand=role`,
      {
        star: newsInfo.star + 1,
      }
    );
  };
  return (
    <div>
      {newsInfo && (
        <div>
          <PageHeader
            ghost={false}
            title={newsInfo.title}
            // title={newsInfo?.title}//另一种解决方法 Cannot read property 'title' of null 因为axios请求的数据还没回来，我们刚开始设置的为null
            onBack={() => window.history.back()}
            subTitle={
              <div>
                {newsInfo.category.title}
                <HeartTwoTone
                  twoToneColor="#eb2f96"
                  onClick={() => handleStar()}
                />
              </div>
            }
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="创建者">
                {newsInfo.author}
              </Descriptions.Item>

              <Descriptions.Item label="发布时间">
                {newsInfo.publishTime
                  ? moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss")
                  : "-"}
              </Descriptions.Item>
              <Descriptions.Item label="区域">
                {newsInfo.region}
              </Descriptions.Item>
              <Descriptions.Item label="访问数量">
                {newsInfo.view}
              </Descriptions.Item>
              <Descriptions.Item label="点赞数量">
                {newsInfo.star}
              </Descriptions.Item>
              <Descriptions.Item label="评论数量"></Descriptions.Item>
            </Descriptions>
          </PageHeader>

          {/* 防止xss攻击 */}
          <div
            style={{ border: "1px solid gray", margin: "0 24px" }}
            a={{
              __html: newsInfo.content,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
