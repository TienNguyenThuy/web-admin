import React, { Component } from 'react';

class ThongTinDoiTac extends Component {
    render() {
        return (
            <div>
                <form>
                    <fieldset style={{ border: '1px solid black', width: '800px', height: '300px' }}    >
                        <legend style={{ width: 'auto', fontSize: '20px', margin: '20px' }}>Thông tin đối tác:</legend>
                        <div style={{ float: "right", paddingRight: '30px' }} >
                            <form >
                                Số bằng lái:<input style={{ margin: '0 40px 15px', width: '200px' }} type="text"></input><br />
                                Hạng bằng lái:
                        <select style={{ margin: '0 20px 15px', width: '200px' }} name="HangBangLai">
                                    <option value="A1">A1</option>
                                    <option value="B1">B1</option>
                                </select><br />
                                Ngày cấp:<input style={{ margin: '0 50px 15px', width: '200px' }} type="datetime-local"></input>
                            </form>
                        </div>
                        <div style={{paddingLeft:'10px'}}>
                        Họ tên: <input style={{ margin: '0 40px 15px', width: '200px' }} type="text" /><br />
                        Ngày sinh: <input style={{ margin: '0 17px 15px', width: '200px' }} type="datetime-local" name="bdaytime" /><br />
                        Loại giấy tờ:
                         <select style={{ margin: '0 10px 15px' }} name="LoaiGiayTo">
                            <option value="HoChieu">Hộ chiếu</option>
                            <option value="CMNND">Giấy CMND</option>
                        </select><br />
                        Địa chỉ thường trú:<input style={{ margin: '0 10px 15px', width: '450px' }} type="text"></input><br />
                        Địa chỉ bán trú:<input style={{ margin: '0 35px 15px', width: '450px' }} type="text"></input>
                        </div>
                        
                    </fieldset>
                </form>
                <form style={{ paddingTop: '20px' }}>
                    <fieldset style={{ border: '1px solid black', width: '800px', height: '200px' }}>
                        <legend style={{ width: 'auto', fontSize: '20px', margin: '20px' }}>Thông tin xe đối tác</legend>
                        <div style={{float:'right',paddingRight:'50px'}}>
                            <form>
                                Số khung:<input style={{ margin: '0 20px 15px', width: '200px' }} type="text"></input><br />
                                Số máy:<input style={{ margin: '0 35px 15px', width: '200px' }} type="text"></input><br />
                                Nhãn hiệu:<input style={{ margin: '0 15px 15px', width: '200px' }} type="text"></input>
                            </form>
                        </div>
                        <div style={{paddingLeft:'10px'}}>
                        Họ tên chủ xe: <input style={{ margin: '0 20px 15px', width: '200px' }} type="text"></input><br />
                        Ngày cấp:<input style={{ margin: '0 55px 15px', width: '200px' }} type="datetime-local"></input><br />
                        Nơi cấp:<input style={{ margin: '0 65px 15px', width: '200px' }} type="text"></input>
                        </div>
                        
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default ThongTinDoiTac;