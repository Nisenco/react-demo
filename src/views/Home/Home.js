import React, { PureComponent } from 'react';
import * as XLSX from 'xlsx';

// excel 转化为 json 数据
class Home extends PureComponent {
  constructor(props) {
    super(props);
  }
  onImportExcel = file =>{
    const { files } = file.target;
    console.log(files,'file--');
    const fileReader = new FileReader();
    console.log(fileReader,'reader');
    fileReader.onload = event=>{
      try {
        const { result } = event.target;
        // 以二进制流方式读取得到整份excel表格对象
        const workbook = XLSX.read(result, { type: 'binary' });
        let data = []; // 存储获取到的数据
        // 遍历每张工作表进行读取（这里默认只读取第一张表）
        for (const sheet in workbook.Sheets) {
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            data = data.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
            // break; // 如果只取第一张表，就取消注释这行
          }
        }
        console.log(data);
      } catch (e) {
        // 这里可以抛出文件类型错误不正确的相关提示
        console.log('文件类型不正确');
        return;
      }
    }
    // readAsBinaryString() readAsArrayBuffer
    fileReader.readAsBinaryString(files[0]);
  }

  render() {
    return (<div>
      <input type='file' accept='.xlsx, .xls' onChange={this.onImportExcel} />
    </div>)
  }
}
export default Home;
