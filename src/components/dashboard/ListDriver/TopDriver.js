import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import HeaderTable from './HeaderTable';
import BodyTable from './BodyTable';

export default class ListDriver extends Component {
    render() {
        return (

            <div style={{ width: '80%', display: 'flex',flexFlow:'column', justifyContent: 'center', alignItems: 'center', border: '1px soid',marginTop:'10%' }}>
                <h4>Top các tài xế có doanh thu cao nhất</h4>
                <div style={{ width: '90%' }}>
                    <Table striped bordered hover>
                        <thead>
                            <HeaderTable elm1="STT" elm2="Tên tài xế" elm3="SDT" elm4="Thời gian" />
                        </thead>
                        <tbody>
                            <BodyTable val1="1" val2="Jack" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' />
                            <BodyTable val1="2" val2="Adrian" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' />
                            <BodyTable val1="3" val2="Kent" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' />
                            <BodyTable val1="4" val2="Penals" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' />
                            <BodyTable val1="5" val2="Mick" val3="032594491" val4='Thứ Bảy, 27 tháng 7, 2019 (GMT+7)' />
                        </tbody>
                    </Table>
                </div>

            </div>
        );
    }
}
