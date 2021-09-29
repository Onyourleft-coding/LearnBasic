import React, { Component } from "react";
import { Button, Space, DatePicker } from "antd";
import { UsbOutlined, UnlockTwoTone, SearchOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
export default class App extends Component {
  render() {
    return (
      <div>
        app...
        <Space>
          <button>点我</button>
          <Button type="primary">Button1</Button>
          <Button type="link">Button2</Button>
          <UsbOutlined />
          <UnlockTwoTone />
          <Button type="primary" shape="circle" icon={<SearchOutlined />} />
          <DatePicker />
          <RangePicker />
        </Space>
      </div>
    );
  }
}
