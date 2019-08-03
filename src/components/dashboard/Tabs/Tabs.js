import React, { Component } from 'react';
import { Tab, Row, Nav, Col } from 'react-bootstrap';
import TabContent from './TabContent';
import CarddWrapper from '../Card/CarddWrapper';
import TopDriver from '../ListDriver/TopDriver'
import DanhSachDoiTac from '../QuanLyNguoiDungDS/DanhSachDoiTac';
import ThongTinDoiTac from '../QuanLyNguoiDungAdd/ThongTinDoiTac';
import ThamSoHeThong from '../ThamSoHT/ThamSoHeThong';

import ThongKeCarddWrapper from '../Thongke/ThongKeCarddWrapper';
import ListTrip from '../TableListTrip/ListTrip'
// import Sonnet from 'react-bootstrap';

export default class Tabs extends Component {
    render() {
        // const tabx = () => {
        //     const contentTab = [];
        //     var card = new Cardd({
        //         image: '', title: 'Jack', count: '125'
        //     })
        //     contentTab.push(card);
        //     return contentTab;
        // }
        return (
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link style={{ textAlign: 'center', color: '#fff' }} className="bg-dark" eventKey="first">Trang chủ</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ textAlign: 'center', color: '#fff' }} className="bg-danger" eventKey="second">Thông tin đối tác</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ textAlign: 'center', color: '#fff' }} className="bg-primary" eventKey="third">Danh sách đối tác</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ textAlign: 'center', color: '#fff' }} className="bg-info" eventKey="third1">Danh sách chuyến đi</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={{ textAlign: 'center', color: '#fff' }} className="bg-success" eventKey="fourth">Thống kê </Nav.Link>
                            </Nav.Item>
                            
                            <Nav.Item>
                                <Nav.Link style={{ textAlign: 'center', color: '#fff' }} className="bg-warning" eventKey="fifth2">Tham số hệ thống</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                {/* <Sonnet /> */}
                                <TabContent content={<CarddWrapper />} />
                                <TabContent content={<TopDriver />} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {/* <Sonnet /> */}
                                <TabContent content={<ThongTinDoiTac />} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                {/* Danh Sách Dối tác - Tiên */}
                                <TabContent content={<DanhSachDoiTac />} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third1">
                                {/* Bảng danh sách đối tác - TRÂM */}
                                <TabContent content={<ListTrip />} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                {/* phần của Trâm nè - THỐNG KÊ-biểu dồ thu chi */}
                                <TabContent content={<ThongKeCarddWrapper />} />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth2">
                                {/* Của Tiên nè - THAM SỐ HỆ THỐNG */}
                                <TabContent content={<ThamSoHeThong />} />
                            </Tab.Pane>                            
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}
