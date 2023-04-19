const ChangePassWordModal = () => {
    return (
        <div id="modal-password" class="modal">
            <div class="container main">
            <div class="row ">
                <div class="input-box">

                    <h1 class="lable-center">Create</h1>

                    <div class="input-field">

                        <input type="text" class="input" id="fullname" required/>
                        <label for="fullname">Họ và tên</label>
                    </div>

                    <div class="input-field">

                        <input type="tel" class="input" id="tel" required/>
                        <label for="tel">Số điện thoại</label>
                    </div>

                    <div class="input-field">

                        <input type="email" class="input" id="email" required/>
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field">
                        <input type="text" class="input" required/>
                        <label>Nhóm truy cập</label>

                    </div>
                    <details>
                        <summary>mở rộng</summary>
                        <div class="input-field">
                            <input type="text" class="input" required/>

                            <label>Vùng</label>


                        </div>
                        <div class="input-field">

                            <input type="text" class="input" id="" required/>
                            <label for="">Chi nhánh</label>
                        </div>
                        <div class="input-field">

                            <input type="text" class="input" id="" required/>
                            <label for="">Phòng ban</label>
                        </div>
                        <div class="input-field">

                            <input type="text" class="input" id="" required/>
                            <label for="">Chức danh</label>
                        </div>
                        <div class="input-field">

                            <input type="text" class="input" id="" required/>
                            <label for="">Mã nhân viên</label>
                        </div>


                    </details>
                    <div class="input-field">
                        <button type="submit" class="submit"> Xác Nhận</button>
                    </div>
                </div>

            </div>
            </div>
        </div>
    )
};

export default ChangePassWordModal;
