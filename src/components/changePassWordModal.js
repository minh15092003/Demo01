import React, { useState } from 'react'
import axios from 'axios';
const ChangePassword = () => {
    const [password, setPassword] = useState("");
    const [newpassword, setnewpassword] = useState("");
    const [enterpassword, setenterpassword] = useState("");

    function HandleChangePassword() {

        let user = JSON.parse(window.localStorage.getItem("user"));
        let userid = user.userid
        axios.put('http://localhost:3000/Password', {
            userid: userid,
            password: password,
            newpassword: newpassword,
            enterpassword: enterpassword
        })
            .then(res => {
                alert(res.data.message)
                console.log(res);
                window.location.href = "/login";
            })
            .catch(error => {
                alert(error.response.data.message)
                console.log(error);
            }
            )
    };
    function next() {
        window.location = "http://localhost:3001/home"
    }
    return (

        <div id="modal-password" class="modal">
            <div class="container main">
                <div class="row-pw ">
                    <div class="input-pw">
                        <span class="closePassword" onClick={next}>&times;</span>
                        <h1 class="lable-center">Đổi mật khẩu</h1>
                        <div class="input-field">
                            <input value={password} onChange={(a) => { setPassword(a.target.value) }} type="" class="input" id="password" required />
                            <label for="password">Nhập lại mật khẩu cũ</label>
                        </div>
                        <div class="input-field">
                            <input value={newpassword} onChange={(a) => { setnewpassword(a.target.value) }} type="" class="input" id="newpassword" required />
                            <label for="password">Nhập mật khẩu mới </label>
                        </div>
                        <div class="input-field">
                            <input value={enterpassword} onChange={(a) => { setenterpassword(a.target.value) }} type="" class="input" id="newpassword" required />
                            <label for="password">Nhập lại mật khẩu mới</label>
                        </div>
                        <div class="input-field">
                            <button onClick={HandleChangePassword} type="submit" class="submit">Xác Nhận</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default ChangePassword