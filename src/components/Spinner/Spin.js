import "antd/dist/antd.css";
import { Spin } from "antd";
import "./Spin.css";

import React from "react";

function SpinComponent() {
  return (
    <div className="spinner">
      <Spin size="large"></Spin>
    </div>
  );
}
export default SpinComponent;
