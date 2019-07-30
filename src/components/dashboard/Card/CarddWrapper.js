import React, { Component } from 'react';
import Cardd from './Cardd';
import Chart from '../Chart/Chart';

export default class CarddWrapper extends Component {
  render() {
    return (
      <div>
        <div style={{display:'flex',flexWrap:'wrap'}}> 
          <Cardd title='Tài xế mới' image='https://icon-library.net/images/users-icon-png/users-icon-png-3.jpg' count='125'/>
          <Cardd title='Tổng cuốc hoàn thành' image='https://cdn.pixabay.com/photo/2017/03/28/01/46/check-mark-2180770_960_720.png' count='125'/>
          <Cardd title='Tỉ lệ tăng giảm' image='https://img.lovepik.com/element/40069/9714.png_860.png' count='125'/>
          <Cardd title='Hủy chuyến' image='https://images.onlinelabels.com/images/clip-art/TzeenieWheenie/TzeenieWheenie_red_green_OK_not_OK_Icons_1.png' count='125'/>
      </div>
        <br></br>
        <Chart/>
      </div>
    );
  }
}
