import axios from "axios";
import { useEffect, useState } from "react";
import { notification } from "antd";
function usePublish(type) {
  // 自定义hooks，发布里的请求代码都高度类似，只是type值不同，故把它们抽离出来
  const { username } = JSON.parse(localStorage.getItem("token"));
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    axios
      .get(`/news?author=${username}&publishState=${type}&_expand=category`)
      .then((res) => {
        // console.log(res.data);
        setdataSource(res.data);
      });
  }, [username, type]);
  const handlePublish = (id) => {
    // console.log(id);
    setdataSource(dataSource.filter((item) => item.id !== id));
    axios
      .patch(`/news/${id}`, {
        publishState: 2,
        publishTime: Date.now(),
      })
      .then((res) => {
        // console.log(res.data);
        notification.info({
          message: "通知",
          description: `新闻以提交,您可以在[发布管理/已发布]查看`,
          placement: "bottomRight",
        });
      });
  };
  const handleSunset = (id) => {
    // console.log(id);
    setdataSource(dataSource.filter((item) => item.id !== id));
    axios
      .patch(`/news/${id}`, {
        publishState: 3,
      })
      .then((res) => {
        // console.log(res.data);
        notification.info({
          message: "通知",
          description: `新闻以提交,您可以在[发布管理/已下线]查看`,
          placement: "bottomRight",
        });
      });
  };
  const handleDelete = (id) => {
    // console.log(id);
    setdataSource(dataSource.filter((item) => item.id !== id));
    axios.delete(`/news/${id}`).then((res) => {
    //   console.log(res.data);
      notification.info({
        message: "通知",
        description: `您已经删除了该新闻`,
        placement: "bottomRight",
      });
    });
  };
  return {
    dataSource,
    handleDelete,
    handlePublish,
    handleSunset,
  };
}
export default usePublish;
