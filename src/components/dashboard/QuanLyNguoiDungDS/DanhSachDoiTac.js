import React, { Component } from 'react';
import { Table, ButtonToolbar } from 'react-bootstrap';
import { Button} from 'react-bootstrap';
class DanhSachDoiTac extends Component {
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
                <h3>Danh sách đối tác</h3>
                <Table style={styleThamSoHeThong}>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên đối tác</th>
                            <th>Hạng</th>
                            <th>Ngày tham gia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td colSpan="2"></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                <ButtonToolbar style={styleButton}>
                    <Button style={{height:'40px',width:'100px', margin: '0 10px'}} variant="outline-success">Thêm</Button>
                    <Button style={{height:'40px',width:'100px', margin: '0 10px'}} variant="outline-danger">Xóa</Button>
                    <Button style={{height:'40px',width:'100px', margin: '0 10px'}} variant="outline-primary">Sửa</Button>
                </ButtonToolbar>
            </div>
        );
    }
}

export default DanhSachDoiTac;