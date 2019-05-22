import React, { PureComponent } from 'react';
import {Table, Pagination, Input, Row, Button, Modal, Form} from 'antd';

import './index.css';
class Test extends PureComponent {
	constructor(props){
		super(props);
		this.state={
			dataSource: [{ username: "slf", age: "18", address: "杭州", id: 1 }],
			current: 1,
			size: 10,
			total: 1,
			visible: false,
			modalType: "add"
		}
		this.columns = [{
			dataIndex: "username", title: "用户",
		  }, {
			dataIndex: "age", title: "年龄",
		  }, {
			dataIndex: "address", title: "地址"
		  }, {
			dataIndex: "action", title: "操作", width: 200, render: (text, row) => {
			  return <div>
				<Button onClick={() => this.modal('edit', row)} >编辑</Button>
				<Button style={{ marginLeft: 10 }} type="danger" onClick={() => this.remove(row)} >删除</Button>
			  </div>
			}
		  }];
	}
	handleOk =  e => {
		this.setState({
			visible: false,
		});
	}
	handleCancel = e => {
		this.setState({
		  visible: false,
		});
	};
	addUser(){
		this.setState({
			visible:true
		})
	}
	render(){
		const {visible} = this.state;
		return (<React.Fragment>
					<div className="table_wraper">
						<Modal
							title="Basic Modal"
							visible={visible}
							onOk={this.handleOk}
							onCancel={this.handleCancel}
						>
							<div className="modal_wraper">
								<div>用户：<Input placeholder="用户名"/></div>
								<div>年龄：<Input placeholder="年龄"/></div>
								<div>地址：<Input placeholder="地址"/></div>
							</div>
						</Modal>
						<div className="table_add_user"  onClick={this.addUser.bind(this)}><Button type="primary">添加用户</Button></div>
						<div className="table_content">
							{/* <Table

							>

							</Table> */}
						</div>
					</div>
				</React.Fragment>
			)
		
	}
};
export default Test;