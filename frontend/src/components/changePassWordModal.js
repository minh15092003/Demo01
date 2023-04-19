const ChangePassWordModal = () => {
    return (
        <div id="modal-password" class="modal">
            <div class="container main">
                <div class="row-pw ">
                    <div class="input-pw">
                        <span class="closePassword">&times;</span>
                        <h1 class="lable-center">Đổi mật khẩu</h1>
                        <div class="input-field">
                            <input type="" class="input" id="password" required />
                            <label for="password">Nhập lại mật khẩu cũ</label>
                        </div>
                        <div class="input-field">
                            <input type="" class="input" id="newpassword" required />
                            <label for="password">Nhập mật khẩu mới </label>
                        </div>
                        <div class="input-field">
                            <input type="" class="input" id="newpassword" required />
                            <label for="password">Nhập lại mật khẩu mới</label>
                        </div>
                        <div class="input-field">
                            <button type="submit" class="submit"> Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ChangePassWordModal;
