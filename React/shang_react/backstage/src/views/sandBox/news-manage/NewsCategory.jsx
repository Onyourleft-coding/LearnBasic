import React, { useState, useEffect, useRef, useContext } from "react";
import { Table, Button, Modal, Form, Input } from "antd";
import { DeleteOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
import axios from "axios";

const { confirm } = Modal;

export default function NewsCategory() {
  const [dataSource, setdataSource] = useState([]);
  useEffect(() => {
    axios.get("/categories").then(
      (res) => {
        // console.log(res.data);
        setdataSource(res.data);
      },
      (err) => {
        // console.log(err.message);
      }
    );
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (id) => {
        return <b>{id}</b>;
      },
    },
    {
      title: "栏目名称",
      dataIndex: "title",
      key: "title",
      onCell: (record) => ({
        record,
        editable: true,
        dataIndex: "title",
        title: "栏目名称",
        handleSave: handleSave,
      }),
    },
    {
      title: "操作",
      render: (item) => {
        // console.log(item);
        return (
          <div>
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => confirmMethod(item)}
              style={{ marginRight: "15px" }}
            ></Button>
          </div>
        );
      },
    },
  ];
  const handleSave = (record) => {
    // console.log(record);
    setdataSource(
      // 失去焦点时重新map一下
      dataSource.map((item) => {
        if (item.id === record.id) {
          return {
            id: item.id,
            title: record.title,
            value: record.title,
          };
        }
        return item;
      })
    );
    axios.patch(`/categories/${record.id}`, {
      title: record.title,
      value: record.title,
    });
  };
  const confirmMethod = (item) => {
    confirm({
      title: "你确认删除吗?",
      icon: <ExclamationCircleOutlined />,
      // content: "Some descriptions",
      okText: "我确定好了",
      okType: "danger",
      cancelText: "让我想想",
      onOk() {
        console.log("OK");
        // 调用方法
        deleteMethod(item);
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  //删除操作
  const deleteMethod = (item) => {
    console.log(item);
    setdataSource(dataSource.filter((data) => data.id !== item.id));
    axios.delete(`/rights/${item.id}`);
  };
  const EditableContext = React.createContext(null);
  const EditableRow = ({ index, ...props }) => {
    const [form] = Form.useForm();
    return (
      <Form form={form} component={false}>
        <EditableContext.Provider value={form}>
          <tr {...props} />
        </EditableContext.Provider>
      </Form>
    );
  };

  const EditableCell = ({
    title,
    editable,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) => {
    const [editing, setEditing] = useState(false);
    const inputRef = useRef(null);
    const form = useContext(EditableContext);
    useEffect(() => {
      if (editing) {
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };

    const save = async () => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });
      } catch (errInfo) {
        console.log("Save failed:", errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      childNode = editing ? (
        <Form.Item
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          <Input ref={inputRef} onPressEnter={save} onBlur={save} />
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };
  // pageSize表示分页条数
  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      pagination={{ pageSize: 5 }}
      rowKey={(item) => item.id}
      components={{
        body: {
          row: EditableRow,
          cell: EditableCell,
        },
      }}
    />
  );
}
