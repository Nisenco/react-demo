import React, { PureComponent } from 'react';
import ReactQuill ,{Quill}from 'react-quill';
import {sourceEditor} from './config'
import 'react-quill/dist/quill.snow.css';
import './Quill.css';
Quill.register('formats/sourceEditor', sourceEditor.bind(this)());
class CusQuill extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this);
    this.modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image','text'],
        ['clean'],
        ['sourceEditor']
      ],
    };
    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image','sourceEditor'
    ];
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <div>
        <ReactQuill
          theme="snow"
          value={this.state.text}
          modules={this.modules}
          formats={this.formats}
          onChange={this.handleChange} />
      </div>

    )
  }
}
export default CusQuill;