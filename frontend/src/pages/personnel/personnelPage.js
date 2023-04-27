import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { read, utils, writeFile } from 'xlsx';
import { useLocation } from 'react-router-dom';

const deleteOneUser = async (userid) => {
    return axios.delete(`http://localhost:3000/deleteuser?userid=${userid}`)
}
const Personnel = () => {
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


    const [users, setUsers] = useState([]);
    const removeUserFromList = (id) => {
        let userIdx = users.findIndex((user) => user.userid === id);
        if (userIdx !== -1) {
            users.splice(userIdx, 1);
            setUsers([...users])
        }
    }
    useEffect(() => {
        axios.get('http://localhost:3000/Personnel')
            .then(res => {

                setUsers(res.data.data)
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    //export
    function handelExport() {
        var lstUser = [];
        for (let index = 0; index < users.length; index++) {
            const element = users[index];
            var host = {
                userid: element.userid,
                fullname: element.fullname,
                accessgroup: element.accessgroup,
                workingroom: element.workingroom,
                position: element.position,
                employeecode: element.employeecode,
                address: element.address,
                facebook: element.facebook,
                numbercccd: element.numbercccd,
                numberphone: element.numberphone,
                email: element.email
            }
            lstUser.push(host)
        }
        console.log(lstUser);
        const heading = [
            "STT", "fullname", "accessgroup", "workingroom", "position", "employeecode", "address", "facebook", "numbercccd", "numberphone", "email"
        ]
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, [heading]);
        utils.sheet_add_json(ws, lstUser, { origin: 'A3', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        writeFile(wb, 'listemploye.xlsx');
    }

    //import
    function handleImport($event) {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;
                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setUsers(rows)
                    for (let index = 0; index < rows.length; index++) {
                        var row = rows[index];
                        console.log(rows)
                        axios.post('http://localhost:3000/Import', {
                            fullname: row.fullname,
                            accessgroup: row.accessgroup,
                            workingroom: row.workingroom,
                            position: row.position,
                            employeecode: row.employeecode,
                            address: row.address,
                            facebook: row.facebook,
                            numbercccd: row.numbercccd,
                            numberphone: row.numberphone,
                            email: row.email
                        })
                            .then(response => {
                                window.location.reload()
                                console.log(response);
                            })
                    }
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }
 
    // Tạo mới}
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
    function detailEmployee(userid) {
        window.location = `http://localhost:3001/details?userid=${userid}`;
    }
    function backlai() {
        window.location = "http://localhost:3001/personnel"
    }
    return (
        // hiển thị persion
        <div>
            <div class="">
                <div class="utils__content">
                    <div class="lable">
                        <h2>Nhân viên</h2>
                        <h>Đang hiển thị ../..</h>
                    </div>
                    <div class="btn-group">
                        <button type="button" class="btn-export btn-danger toggle" >
                            Import
                        </button>
                        <button type="button" class="btn-export btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Xuất file
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" onClick={handelExport}>Thông tin cơ bản</a></li>
                            <li><a class="dropdown-item" href="/#">Tiền lương/Trợ cấp</a></li>

                        </ul>
                        <button type="button" class="btn-import btn-danger" data-bs-toggle="modal" href="#exampleModalTogge">
                            Tạo mới
                        </button>
                    </div>
                    <div>
                        <nav class="navbar navbar-light ">
                            <div class="container-fluid">
                                <form class="d-flex">
                                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button class="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>

                        <div className='rps'>
                            <table class="table"  >

                                <tr className="hrytrt-tro">
                                    <th scope="col">STT</th>
                                    <th scope="col">Họ và tên</th>
                                    <th scope="col">Nhóm truy cập</th>
                                    <th scope="col">Phòng làm việc</th>
                                    <th scope="col">Chức vụ</th>
                                    <th scope="col">Mã nhân viên</th>
                                    <th scope="col">Địa Chỉ</th>
                                    <th scope="col">Số CCCD</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">link facebook</th>
                                    <th scope="col">Email</th>

                                    <th></th>
                                </tr>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td> {index + 1}</td>
                                            <td onClick={() => { detailEmployee(user.userid) }}> {user['fullname']} </td>
                                            <td >{user['accessgroup']}</td>
                                            <td >{user['workingroom']}</td>
                                            <td >{user['position']}</td>
                                            <td >{user['employeecode']}</td>
                                            <td >{user['address']}</td>
                                            <td >{user['numbercccd']}</td>
                                            <td >{user['numberphone']}</td>
                                            <td >{user['facebook']}</td>
                                            <td >{user['email']}</td>
                                            <td>
                                                <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown"
                                                    aria-expanded="false">
                                                    ...
                                                </lable>
                                                <ul class="dropdown-menu">
                                                    <li><button id="myBtn" class="dropdown-item" data-bs-toggle="modal" href="#exampleModa">Sửa</button></li>
                                                    <li><button class="dropdown-item" onClick={async () => {
                                                        try {
                                                            await deleteOneUser(user.userid);
                                                            removeUserFromList(user.userid);
                                                        } catch (error) {
                                                            alert(error)
                                                        }
                                                    }}>Xoá</button></li>
                                                </ul>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tạo mới */}
            <div>
                <div class="modal fade" id="exampleModalTogge" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                    tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="input-box">
                                    <h1 class="lable-center">Thêm nhân viên</h1>
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
                </div>
            </div>

            {/* Sửa nhân viên */}
            <div>
                <div class="modal fade" id="exampleModa" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                    tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-header">
                                
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="  ">
                            
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
                </div>
            </div>





        </div>
    )

};
export default Personnel;