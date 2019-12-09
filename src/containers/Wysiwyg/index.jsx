import React, { PureComponent } from 'react';
// import FroalaEditor from 'react-froala-wysiwyg';
// import Froalaeditor from 'froala-editor';
// import FroalaEditorImg from 'react-froala-wysiwyg/FroalaEditorImg';

// import 'froala-editor/css/froala_style.min.css';
// import 'froala-editor/css/froala_editor.pkgd.min.css';

// import { getID } from '../../assets/utills/help';
import './Wysiwyg.css';
class CusWysiwyg extends PureComponent {
  constructor(props) {
    super(props);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.state = {
      // id : getID(),
      model: 'Example text'
    };
    this.tags = [];
    this.config = {
      toolbarButtons:['fullscreen', 'bold', 'italic', 'subscript'],
      toolbarInline:true // 重点
    }
  }
  handleModelChange = (model) =>{
    this.setState({
      model: model
    });
  }
  componentDidMount(){
    // Froalaeditor.DefineIcon('insert', {NAME: 'plus', SVG_KEY: 'add'});
    // Froalaeditor.RegisterCommand('insert', {
    //   title: 'Insert HTML',
    //   focus: true,
    //   undo: true,
    //   refreshAfterCallback: true,
    //   callback: function () {
    //     this.html.insert('My New HTML');
    //   }
    // });
  }
  render() {
    const {id} = this.state;
    return (<div id = {id}>
      {/* <FroalaEditor 
        tag='textarea'
        config={this.config}
        model={this.state.model}
        onModelChange={this.handleModelChange}
      /> */}
    </div>)
  }
}
export default CusWysiwyg;