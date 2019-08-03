import React, { Component } from 'react';
import Card from './CardThongKe';
import ChartThongKe from './ChartThongKe';
import DatepickerThongke from './DatepickerThongke';


class ThongKeCarddWrapper extends Component {
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <Card title='Tổng thu' image='https://image.flaticon.com/icons/svg/817/817729.svg' count='125'>
                        <Card.Img variant="top" image='https://png.pngtree.com/element_our/sm/20180515/sm_5afb016ca8151.jpg' count='125' />
                    </Card>
                    <Card title='Tổng chi' image='https://image.flaticon.com/icons/svg/1420/1420327.svg' count='125' />
                    <Card title='Tổng chi chiếc khấu' image='https://image.flaticon.com/icons/svg/147/147293.svg' count='125' />
                </div>

                
                <DatepickerThongke />
                <ChartThongKe />
                <p style={{ width: '80%', fontSize: '23px', fontWeight: 'bold', display: 'flex', flexFlow: 'column', justifyContent: 'center', alignItems: 'center', border: '1px soid', marginTop: '3%' }}> Biểu đồ tổng thu, tổng chi, chiếc khấu</p>
            </div>
        );
    }
}

export default ThongKeCarddWrapper;