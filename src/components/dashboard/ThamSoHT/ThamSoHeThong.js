import React, { Component } from 'react';
import { Table ,ButtonToolbar} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
class ThamSoHeThong extends Component {
    render() {
        const styleThamSoHeThong =
        {
            height: '200px',
            width: '800px',
            border: '2px solid #000'
        }
        const styleButton =
        {
            padding:'0px 200px'
        }
        return (
            <div>
                <h3>Thiết lập tham số hệ thống</h3>
                <Table style={styleThamSoHeThong}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên tham số</th>
                            <th>Tên biến tham số</th>
                            <th>Ý nghĩa</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>2</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                        <tr>
                            <th>3</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </tbody>
                </Table>
                <ButtonToolbar style={styleButton}>
                    <Button style={{height:'40px',width:'100px', margin: '0 10px'}} variant="outline-success">Thêm</Button>
                    <Button style={{height:'40px',width:'100px', margin: '0 10px'}} variant="outline-primary">Sửa</Button>
                    <Button style={{height:'40px',width:'100px', margin: '0 10px'}} variant="outline-danger">Xóa</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default ThamSoHeThong;