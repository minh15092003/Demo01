import React,{useState} from 'react'
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    function handlelogin() {
        console.log('userName', username, 'password', password)
        // alert(`username: ${userName} Password : ${password}`);
        axios.post('http://localhost:3000/login', {
            username: username,
            password: password
        })
            .then(res => {
                console.log(res.data.data)
                let user = res.data.data;
                localStorage.setItem("user", JSON.stringify(user));
                alert(res.data.message)
                window.location.href = "/home";
                var user1 = localStorage.getItem("user");
                let user2 = JSON.parse(user1);
            })
            .catch(error => {
                alert(error.response.data.message)
                console.log(error);
            }
            )
    };
    return  (
      <div>
        <div class="wrapper">
        <div class="container main">
            <div class="row">
                <div class="col-md-6 side-image">
                    <div class="text">
                    </div>
                </div>
                <div class="col-md-6 right">
                    <div class="input-box">
                        <header>
                            <h1>Login</h1>
                        </header>
                        <div class="input-field">
                            <input value={username} onChange={(a) => { setUsername(a.target.value) }} type="text" class="input" id="email" required autocomplete="off"/>
                            <label for="email ">Tên đăng nhập</label>
                        </div>
                        <div class="input-field">
                            <input value={password} onChange={(a) => { setPassword(a.target.value) }} type="password" class="input" id="password" required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field">
                            <button onClick={handlelogin} type="submit" class="submit" >Đăng Nhập</button>
                        </div>
                        <div class="signin">
                            <span>Bạn có muốn tạo tài khoản mới? <a href="#">Quên mật khẩu </a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
      
   
  };
  
  export default Login;
  