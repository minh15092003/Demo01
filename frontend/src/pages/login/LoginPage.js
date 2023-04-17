const Login = () => {
    return  (
      <div>
        <div class="wrapper">
        <div class="container main">
            <div class="row">
                <div class="col-md-6 side-image">
                    <div class="text">
                        <p>Join the community of developers </p>
                    </div>
                </div>
                <div class="col-md-6 right">
                    <div class="input-box">
                        <header>
                            <h1>Login</h1>
                        </header>
                        <div class="input-field">
                            <input type="text" class="input" id="email" required autocomplete="off"/>
                            <label for="email">Email</label>
                        </div>
                        <div class="input-field">
                            <input type="password" class="input" id="password" required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="input-field">
                            <button type="submit" class="submit">Đăng nhập</button>
                        </div>
                        
                        <div class="signin">
                            <span>Already have an account? <a href="#">Log in here</a></span>
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
  