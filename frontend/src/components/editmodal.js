import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ChangePassWordModal = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [workingroom, setWorkingroom] = useState("");
    const [position, setPosition] = useState("");
    const [employeecode, setEmployeecode] = useState("");
    const [address, setAddress] = useState("");
    const [facebook, setFacebook] = useState("");
    const [numbercccd, setNumbercccd] = useState("");
    const [numberphone, setNumberphone] = useState("");
    const [accessgroup, setAccessgroup] = useState("");


    let location = useLocation();
    function loaddata(userId) {
        axios.get('http://localhost:3000/personnel')
            .then(response => {
                const users = response.data.data
                const user_find = users.find(function (user) {
                    return Number(user.userid) === Number(userId)
                })
                console.log(user_find);
                if (user_find) {
                    setFullname(user_find.fullname)
                    setEmail(user_find.email)
                    setWorkingroom(user_find.workingroom)
                    setPosition(user_find.position)
                    setEmployeecode(user_find.employeecode)
                    setAddress(user_find.address)
                    setFacebook(user_find.facebook)
                    setNumbercccd(user_find.numbercccd)
                    setNumberphone(user_find.numberphone)
                    setAccessgroup(user_find.accessgroup)
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    function fixpage() {
        const queryParams = new URLSearchParams(location.search);
        const userid = queryParams.get('userid');
        console.log(userid)
        axios.put('http://localhost:3000/Edit', {
            fullname: fullname,
            email: email,
            workingroom: workingroom,
            position: position,
            employeecode: employeecode,
            address: address,
            facebook: facebook,
            numbercccd: numbercccd,
            numberphone: numberphone,
            accessgroup: accessgroup,
            userid: userid,
        })
            .then(res => {

                console.log(res)
                window.location.href = "/personnel";
            })
            .catch(error => {

                console.log(error)
            })
    }
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const userid = queryParams.get('userid');

        if (userid) {
            loaddata(userid);
        }

    }, [])


    
    function backlai() {
        window.location = "http://localhost:3001/personnel"
    }
    return (
        <div class="wrapper ">
            <div >
                <div class="container main">
                    <div class="row-edit ">
                        <span class="close" onClick={backlai} >&times;</span>
                        <div class="input-box">

                            <h1 class="lable-center">Sửa thông tin nhân viên</h1>
                            <div class="input-field">
                                <input value={fullname} onChange={(a) => { setFullname(a.target.value) }} type="text" class="input" id="fullname" required />
                                <label for="fullname">Họ và tên</label>
                            </div>
                            <div class="input-field">
                                <input value={email} onChange={(a) => { setEmail(a.target.value) }} type="email" class="input" id="email" required />
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <input value={workingroom} onChange={(a) => { setWorkingroom(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">Phòng làm việc</label>
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
                                <input value={address} onChange={(a) => { setAddress(a.target.value) }} type="tel" class="input" id="tel" required />
                                <label for="tel">Địa Chỉ</label>
                            </div>
                            <div class="input-field">
                                <input value={facebook} onChange={(a) => { setFacebook(a.target.value) }} type="tel" class="input" id="tel" required />
                                <label for="tel">link facebook</label>
                            </div>
                            <div class="input-field">
                                <input value={numbercccd} onChange={(a) => { setNumbercccd(a.target.value) }} type="text" class="input" required />
                                <label>Số CCCD</label>
                            </div>
                            <div class="input-field">
                                <input value={numberphone} onChange={(a) => { setNumberphone(a.target.value) }} type="text" class="input" required />
                                <label>Số điện thoại</label>
                            </div>
                            <div class="input-field">
                                <input value={accessgroup} onChange={(a) => { setAccessgroup(a.target.value) }} type="text" class="input" id="" required />
                                <label for="">Nhóm truy cập</label>
                            </div>
                            <div class="input-field">
                                <button type="submit" onClick={fixpage} class="submit"> Xác Nhận </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default ChangePassWordModal;
