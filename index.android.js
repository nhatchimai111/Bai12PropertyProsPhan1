// B1: import những thư viện cần thiết
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


// B2: Viết code cho các class (hay còn gọi là component)
// render: là yêu cầu nó phát sinh (vẽ) ra những gì người ta nhìn thấy
class Bai12PropertyProsPhan1 extends Component {
  render() {
    return (
      <View>

      <KhachHang hoten="Phạm Trường Đăng Khoa" />
      <KhachHang hoten="Tạ Hữu Thọ" />
        
      </View>
    );
  }
}

// Khai báo component
// Truyền tham số vào component
export default class KhachHang extends Component{

  render(){
    return(

      <View style={{backgroundColor:"green", padding:10}}>

        <Text>{this.props.hoten}</Text>
      </View>
    );
  }
}


// Khai báo CSS
var styles = StyleSheet.create({
  

});


// B3: Đăng ký register Component Chính
AppRegistry.registerComponent('Bai12PropertyProsPhan1', () => Bai12PropertyProsPhan1);
