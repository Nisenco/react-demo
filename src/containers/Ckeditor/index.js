import React, { PureComponent } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Ckeditor.css';
class Ckeditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      sourceData :null
    }
  }
  getData =  (data) => {
    console.log(data,'))))))');
    this.setState({
      sourceData:`<div dangerouslySetInnerHTML = ${ {__html : data}}></div>`
    })
  }
  render() {
    const {sourceData} = this.state;
    console.log(sourceData,'sou++');
    return (
      <div className="ckeditort">
        <div className="test"></div>
        <CKEditor
          editor={ClassicEditor}
          data={sourceData}
          onInit={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data },'change');
            this.getData(data);
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor,'blur',event);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor,'focus',event);
          }}
        >
          <div>
          <p>nihao</p>
          </div>
        </CKEditor>
      </div>
    )
  }
}
export default Ckeditor;