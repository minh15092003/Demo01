import imgg from '../pages/Img/z4280456184289_e2c428ac84b5575cfaf1e0972c8a6011.png'
function Next() {

    window.location = "http://localhost:3001/home"

}
const userprofile = () => {
    return (
        <div>
            <div class="contanier">
                <div class="hero">
                    <nav>
                        <a href="#" class="logo" id="nghedo" >Tài khoản</a>
                    </nav>
                    <span class="closePassword" onClick={Next}>&times;</span>
                    <div class="content">
                        <div class="div-text">
                            <h1>Tạ Văn Minh</h1>
                            <h4>Số điện thoại : 0392458258</h4>
                            <h4>Email : minhtv123@gmail.com</h4>
                            <h4>Chức vụ : Quản lý</h4>
                        </div>
                        <div class="div-img">
                            <img src={imgg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default userprofile