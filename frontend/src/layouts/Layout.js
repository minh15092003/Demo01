import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <div class="cd-container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyJ7pf6ZHaN6XpyNvezWsoDNzOgQreSXtxWfgDf_V11yeDqdJth5NPTlsfk7K0ErCyeN0&usqp=CAU"
              alt="" width="100px" height="" />
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item">
                <Link class="nav-link active" to="">Home</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Lịch</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Tuyển Dụng</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/personnel">Nhân Sự</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Chấm Công</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Tiền Lương</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Nhiệm Vụ</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">KPI</Link>
                </li>
                <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">Giao việc</Link>
                </li>
              </ul>
            </div>
            <div>
              <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown" aria-expanded="false"
                id="cutsten">
                <div class="metseg-hetage">
                  <svg xmlns="http://www.w3.org/2000/svg" class="juste" viewBox="0 0 24 24" width="24"
                    id="cutsten" height="24">
                    <path
                      d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"
                      class="">
                    </path>
                  </svg>
                </div>
              </lable>
              <ul class="dropdown-menu" id="name">
                <div class="name">
                  <div class="dsadasd">
                    <li><a class="dropdown-item" href="#">Tài Khoản</a></li>
                    <button id="changePassword" class="dropdown-item">Đổi mật khẩu</button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
    
    
      </div>
      <Outlet />
      <footer id="footer">
        <h1 class="text-center">ARODA</h1>
        <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab?</p>
        <div class="icons text-center">
            <i class="bx bxl-twitter"></i>
            <i class="bx bxl-facebook"></i>
            <i class="bx bxl-google"></i>
            <i class="bx bxl-skype"></i>
            <i class="bx bxl-instagram"></i>
        </div>
        <div class="copyright text-center">
            &copy; Copyright <strong><span>ARODA</span></strong>. All Rights Reserved
        </div>
        <div class="credite text-center">
            Designed By <a href="#">SA Coding</a>
        </div>
    </footer>
    </>
  )
};
export default Layout;