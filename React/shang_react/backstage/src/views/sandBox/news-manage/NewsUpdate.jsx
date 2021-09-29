import React, { useState, useEffect, useRef } from "react";
import {
  PageHeader,
  Steps,
  Button,
  Form,
  Input,
  Select,
  message,
  notification,
} from "antd";
import style from "./News.module.css";
import axios from "axios";
import NewsEditor from "../../../components/news-manage/NewsEditor";
const { Step } = Steps;
const { Option } = Select;
export default function NewsUpdate(props) {
  const NewsForm = useRef(null);
  const [current, setcurrent] = useState(0);
  const [categoryList, setcategoryList] = useState([]);
  const [formInfo, setformInfo] = useState({});
  const [content, setcontent] = useState("");

//   const User = JSON.parse(localStorage.getItem("token"));

  const handleNext = () => {
    if (current === 0) {
      NewsForm.current
        .validateFields()
        .then((res) => {
        //   console.log(res);
          setformInfo(res);
          setcurrent(current + 1);
        })
        .catch((error) => {
          // console.log(error);
        });
    } else {
      if (content === "" || content.trim() === "<p></p>") {
        message.error("输入不能为空");
      } else {
        setcurrent(current + 1);
      }
      // console.log(formInfo, content);
    }
  };
  const handlePrevious = () => {
    setcurrent(current - 1);
  };
  const onFinish = (values) => {
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    // console.log("Failed:", errorInfo);
  };
  useEffect(() => {
    axios.get("/categories").then((res) => {
      // console.log(res.data);
      setcategoryList(res.data);
    });
  }, []);
  useEffect(() => {
    // console.log(props.match.params.id);
    axios
      .get(`/news/${props.match.params.id}?_expand=category&_expand=role`)
      .then((res) => {
        console.log(res.data);
        // setnewsInfo(res.data);
        //content
        //formInfo
        const { title, categoryId, content } = res.data;
        NewsForm.current.setFieldsValue({ title, categoryId });
        setcontent(content);
      });
  }, [props.match.params.id]);
  const handleSave = (auditState) => {
    axios
      .patch(`/news/${props.match.params.id}`, {
        ...formInfo,
        content: content,
        auditState: auditState,
      })
      .then((res) => {
        console.log(res, "OK");
        props.history.push(
          auditState === 0 ? "/news-manage/draft" : "/audit-manage/list"
        );
        notification.info({
          message: "通知",
          description: `新闻以提交,您可以在${
            auditState === 0 ? "草稿箱" : "审核列表"
          }中查看`,
          placement: "bottomRight",
        });
      });
  };
  return (
    <div>
      <PageHeader
        className="site-page-header"
        title="更新新闻"
        onBack={() => {
          props.history.goBack();
        }}
        subTitle="在这里更新你的新闻"
      />
      <Steps current={current}>
        <Step title="基本信息" description="新闻标题，新闻分类" />
        <Step title="新闻内容" description="新闻主体内容" />
        <Step title="新闻提交" description="保存草稿或者提交审核" />
      </Steps>
      <div style={{ marginTop: "50px" }}>
        <div className={current === 0 ? "" : style.active}>
          <Form
            name="basic"
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 20 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            ref={NewsForm}
          >
            <Form.Item
              label="新闻标题"
              name="title"
              rules={[{ required: true, message: "请输入新闻标题!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="新闻分类"
              name="categoryId"
              rules={[{ required: true, message: "请确定新闻分类!" }]}
            >
              <Select>
                {categoryList.map((item) => (
                  <Option value={item.id} key={item.id}>
                    {item.title}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className={current === 1 ? "" : style.active}>
        <NewsEditor
          getContent={(value) => {
            // console.log(value);
            setcontent(value);
          }}
          content={content}
        ></NewsEditor>
      </div>
      <div className={current === 2 ? "" : style.active}></div>

      <div style={{ marginTop: "50px" }}>
        {current === 2 && (
          <span>
            <Button type="primary" onClick={() => handleSave(0)}>
              保存到草稿箱
            </Button>
            <Button danger onClick={() => handleSave(1)}>
              提交审核
            </Button>
          </span>
        )}
        {current < 2 && (
          <Button type="primary" onClick={handleNext}>
            下一步
          </Button>
        )}
        {current > 0 && <Button onClick={handlePrevious}>上一步</Button>}
      </div>
    </div>
  );
}
