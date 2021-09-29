import React, { useEffect, useState } from "react";
import { PageHeader, Descriptions } from "antd";
import moment from "moment";
import axios from "axios";
export default function NewsPreview(props) {
  const [newsInfo, setnewsInfo] = useState(null);
  useEffect(() => {
    // console.log(props.match.params.id);
    axios
      .get(`/news/${props.match.params.id}?_expand=category&_expand=role`)
      .then((res) => {
        // console.log(res.data);
        setnewsInfo(res.data);
      });
  }, [props.match.params.id]);
  const auditList = ["未审核", "审核中", "已通过", "未通过"];
  const publishList = ["未发布", "待发布", "已上线", "已下线"];
  const colorList = ["black", "orange", "green", "red"];
  return (
    <div>
      {newsInfo && (
        <div>
          <PageHeader
            ghost={false}
            title={newsInfo.title}
            // title={newsInfo?.title}//另一种解决方法 Cannot read property 'title' of null 因为axios请求的数据还没回来，我们刚开始设置的为null
            onBack={() => window.history.back()}
            subTitle={newsInfo.category.title}
          >
            <Descriptions size="small" column={3}>
              <Descriptions.Item label="创建者">
                {newsInfo.author}
              </Descriptions.Item>
              <Descriptions.Item label="创建时间">
                {moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss")}
              </Descriptions.Item>
              <Descriptions.Item label="发布时间">
                {newsInfo.publishTime
                  ? moment(newsInfo.createTime).format("YYYY/MM/DD HH:mm:ss")
                  : "-"}
              </Descriptions.Item>
              <Descriptions.Item label="区域">
                {newsInfo.region}
              </Descriptions.Item>
              <Descriptions.Item label="审核状态">
                <span style={{ color: colorList[newsInfo.auditState] }}>
                  {auditList[newsInfo.auditState]}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="发布状态">
                <span style={{ color: colorList[newsInfo.publishState] }}>
                  {publishList[newsInfo.publishState]}
                </span>
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
            dangerouslySetInnerHTML={{
              __html: newsInfo.content,
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
