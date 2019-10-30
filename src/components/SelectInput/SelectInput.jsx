import React, { PureComponent } from 'react';
import {Input,Icon} from 'antd';

import './SelectInput.css';
class SelectInput extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render(){
		const {selectedItem,isActive,onClickHeader,placeholder} = this.props;
		const {text} = selectedItem;
		return(<div>
			<div onClick = {onClickHeader}>
				<Input 
					type = 'text'
					value = {text}
					placeholder = {placeholder}
				/>
				<Icon className = {isActive} name='angle-down'/>
			</div>
		</div>)
	}
}

export default SelectInput;