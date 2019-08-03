import { Table } from 'react-bootstrap'
import React, { Component } from 'react';
import HeaderTableTrip from './HeaderTableTrip';
import BodyTableTrip from'./BodyTableTrip';
class ListTrip extends Component {
    render() {
        return (
           
            <div style={{ width: '80%', display: 'flex',flexFlow:'column', justifyContent: 'center', alignItems: 'center', border: '1px soid',marginTop:'10%' }}>
                <h4>Danh sách chuyến đi</h4>
                <div style={{ width: '90%' }}>
                    <Table striped bordered hover>
                        <thead>
                            <HeaderTableTrip elm0="STT" elm1="Mã chuyến đi" elm2="Điểm đi" elm3="Điểm đến" elm4="Quãng đường" 
                                                elm4="Tài xế" elm5="Khách hàng" elm6="Tình trạng" elm7="Đánh giá" />
                        </thead>
                        <tbody>
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                            <BodyTableTrip val0="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' val5="++++" val6="++++" val7="+++"  />
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export default ListTrip;