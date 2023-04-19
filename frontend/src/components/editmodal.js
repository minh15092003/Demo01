import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

const ChangePassWordModal = () => {
    var [fullname, setfullName] = useState("");
    var [phone, setphone] = useState("");
    var [email, setemail] = useState("");
    var [accessGroup, setaccessGroup] = useState("");
    var [region, setgion] = useState("");
    var [branch, setbranch] = useState("");
    var [department, setdepartmant] = useState("");
    var [title, settitle] = useState("");
    var [codeEmploye, setcode] = useState("");

    
    let location = useLocation();
    function loaddata() {

        const queryParams = new URLSearchParams(location.search);
        const user_id = queryParams.get('user_id');
        axios.get('http://localhost:3000/Personnel', {

        })
            .then(response => {
                     const users = response.data.data
                     const user_find = users.find(function (user){
                        return Number(user.user_id) === Number(user_id)
                })
              
                if (user_find) {
                    setfullName(user_find.fullname)
                    setphone(user_find.phone)
                    setemail(user_find.email)
                    setaccessGroup(user_find.access_group)
                    setgion(user_find.region)
                    setbranch(user_find.branch)
                    setdepartmant(user_find.department)
                    settitle(user_find.title)
                    setcode(user_find.codeEmploye)
                }
              
            })
            .catch(error => {
                console.log(error);
            })
    }
    useEffect(() => { loaddata(); }, [])
    function fixpage() {
        const queryParams = new URLSearchParams(location.search);
        const user_id = queryParams.get('user_id');
        axios.put('http://localhost:3000/fix', {
            user_id: user_id,
            fullname: fullname,
            phone: phone,
            email: email,
            accessGroup: accessGroup,
            region: region,
            branch: branch,
            department: department,
            title: title,
            codeEmploye: codeEmploye
        })
            .then(res => {
               
                console.log(res)
                window.location.href = "/personnel";
            })
            .catch(error => {
                
                console.log(error)
            })
    }
    
    return (
        <div class="wrapper ">
        <div >
            <div class="container main">
                <div class="row-edit ">
                    <div class="input-box">

                        <h1 class="lable-center">Sửa thông tin nhân viên</h1>

                        <div class="input-field">

                            <input value={fullname} name="fullname" onChange={e => setfullName(e.target.value)} type="text" class="input" id="fullname" required />
                            <label for="fullname">Họ và tên</label>
                        </div>

                        <div class="input-field">

                            <input value={phone} onChange={(e) => { setphone(e.target.value) }} placeholder="Số điện thoại" type="tel" class="input" id="tel" required />
                            <label for="tel">Số điện thoại</label>
                        </div>

                        <div class="input-field">

                            <input value={email} onChange={(e) => { setemail(e.target.value) }} type="email" class="input" id="email" required />
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <input value={accessGroup} onChange={(e) => { setaccessGroup(e.target.value) }} type="text" class="input" required />
                            <label>Nhóm truy cập</label>

                        </div>

                        <div class="input-field">
                            <input value={region} onChange={(e) => { setgion(e.target.value) }} type="text" class="input" required />
                            <label>Vùng</label>
                        </div>
                        <div class="input-field">

                            <input value={branch} onChange={e => setbranch(e.target.value)} type="text" class="input" id="" required />
                            <label for="">Chi nhánh</label>
                        </div>
                        <div class="input-field">

                            <input value={department} onChange={(e) => { setdepartmant(e.target.value) }} type="text" class="input" id="" required />
                            <label for="">Phòng ban</label>
                        </div>
                        <div class="input-field">

                            <input value={title} onChange={(e) => { settitle(e.target.value) }} type="text" class="input" id="" required />
                            <label for="">Chức danh</label>
                        </div>
                        <div class="input-field">

                            <input value={codeEmploye} onChange={(e) => { setcode(e.target.value) }} type="text" class="input" id="" required />
                            <label for="">Mã nhân viên</label>
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
};

export default ChangePassWordModal;





