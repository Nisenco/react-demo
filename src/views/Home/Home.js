import React, { PureComponent } from 'react';
// import CusQuill from '../../containers/Quill';
import CusWysiwyg from '../../containers/Wysiwyg';
class Home extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
      {/* <CusQuill /> */}
      <CusWysiwyg />
    </div>)
  }
}
export default Home;
