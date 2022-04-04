import "antd/dist/antd.css"
import {Spin} from "antd"
import "./Spin.css"

import React from 'react'

function SpinComponent (){
    return (
    <div className="spinner">
        <Spin size="large"></Spin>
    </div>
    );
}
// ReactDOM.render(
//   <Space size="middle">
//     <Spin size="small" />
//     <Spin />
//     <Spin size="large" />
//   </Space>,
//   mountNode,
// );
export default SpinComponent;
