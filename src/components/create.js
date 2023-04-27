import React, { useState } from 'react'
import axios from 'axios';

const Create = () => {
    const [fullname, setFullname] = useState("");
    const [numberphone, setNumberphone] = useState("");
    const [accessgroup, setAccessgroup] = useState("");
    const [workingroom, setWorkingroom] = useState("");
    const [position, setPosition] = useState("");
    const [employeecode, setEmployeecode] = useState("");
    const [address, setAddress] = useState("");
    const [facebook, setFacebook] = useState("");
    const [numbercccd, setNumbercccd] = useState("");
    const [email, setEmail] = useState("");


    function handetaomoi() {
       
        axios.post('http://localhost:3000/Add', {
            fullname: fullname,
            accessgroup: accessgroup,
            workingroom: workingroom,
            position: position,
            employeecode: employeecode,
            address: address,
            facebook: facebook,
            numbercccd: numbercccd,
            numberphone: numberphone,
            email: email,
        })
            .then(res => {
                console.log(res.data.data)
                alert(res.data.message)
                window.location.href = "/personnel";

            })
            .catch(error => {
                alert(error.response.data.message)
                console.log(error);
            }
            )
    };

    function backlai(){
        window.location = "http://localhost:3001/personnel"
    }
   
    return (
        <div id="modal-password" class="modal">
            <div class="container main">
                <div class="row-edit ">
                <span class="close" onClick={backlai} >&times;</span>
                    <div class="input-box">
                        <h1 class="lable-center">Create</h1>
                        <div class="input-field">
                            <input value={fullname} onChange={(a) => { setFullname(a.target.value) }} type="text" class="input" id="fullname" required />
                            <label for="fullname">Họ và tên</label>
                        </div>
                        <div class="input-field">
                            <input value={numberphone} onChange={(a) => { setNumberphone(a.target.value) }} type="tel" class="input" id="tel" required />
                            <label for="tel">Số điện thoại</label>
                        </div>
                        <div class="input-field">
                            <input value={accessgroup} onChange={(a) => { setAccessgroup(a.target.value) }} type="text" class="input" required />
                            <label>Nhóm truy cập</label>
                        </div>
                        <div class="input-field">

                            <input value={email} onChange={(a) => { setEmail(a.target.value) }} type="email" class="input" id="email" required />
                            <label for="email">Email</label>
                        </div>
                      
                            <div class="input-field">
                                <input value={workingroom} onChange={(a) => { setWorkingroom(a.target.value) }} type="text" class="input" required />

                                <label>Phòng làm việc</label>
                            </div>
                            <div class="input-field">
                                <input value={position} onChange={(a) => { setPosition(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">Chức vụ</label>
                            </div>
                            <div class="input-field">
                                <input value={employeecode} onChange={(a) => { setEmployeecode(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">Mã nhân viên</label>
                            </div>
                            <div class="input-field">
                                <input value={address} onChange={(a) => { setAddress(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">Địa chỉ</label>
                            </div>
                            <div class="input-field">
                                <input value={facebook} onChange={(a) => { setFacebook(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">link facebook</label>
                            </div>
                            <div class="input-field">
                                <input value={numbercccd} onChange={(a) => { setNumbercccd(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">Số CCCD</label>
                            </div>
                        
                        <div class="input-field">
                            <button type="submit" class="submit" onClick={handetaomoi} > Tạo Mới</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Create;
