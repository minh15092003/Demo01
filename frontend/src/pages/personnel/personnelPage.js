import React from 'react';



// var modal = document.getElementById("myModal");
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// // edit
// var modalEdit = document.getElementById("modal-edit");
// var btnEdit = document.getElementById("edit");
// var spanEdit = document.getElementsByClassName("closeEdit")[0];
// btnEdit.onclick = function() {
//     modalEdit.style.display = "block";
//   }
//   spanEdit.onclick = function() {
//     modalEdit.style.display = "none";
//   }
//   window.onclick = function(event) {
//     if (event.target == modalEdit) {
//       modalEdit.style.display = "none";
//     }
//   }
  
const Contact = () => {
    return <div>

        <div class="">
            <div class="utils__content">
                <div class="lable">
                    <h2>Nhân viên</h2>
                    <h>Đang hiển thị ../..</h>
                </div>
                <div class="btn-group">
                    <button type="button" class="btn-export btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Xuất file
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Thông tin cơ bản</a></li>
                        <li><a class="dropdown-item" href="#">Tiền lương/Trợ cấp</a></li>
                        <li><a class="dropdown-item" href="#">Lịch sử thăng tiến</a></li>
                    </ul>
                    <button type="button" class="btn-import btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Tạo mới
                    </button>
                    <ul class="dropdown-menu">
                        <li><a id="myBtn" class="dropdown-item" >Thêm nhân viên</a></li>
                        <li><a class="dropdown-item" type="file">Thêm file excel</a></li>
                    </ul>
                </div>
                <div id="myModal" class="modal">

                    <div class="container main">
                        <div class="row ">
                            <div class="input-box">

                                <span class="close">&times;</span>
                                <h1 class="lable-center">Create</h1>

                                <div class="input-field">

                                    <input type="text" class="input" id="fullname" required />
                                    <label for="fullname">Họ và tên</label>
                                </div>

                                <div class="input-field">

                                    <input type="tel" class="input" id="tel" required />
                                    <label for="tel">Số điện thoại</label>
                                </div>

                                <div class="input-field">

                                    <input type="email" class="input" id="email" required />
                                    <label for="email">Email</label>
                                </div>
                                <div class="input-field">
                                    <input type="text" class="input" required />
                                    <label>Nhóm truy cập</label>

                                </div>
                                <details>
                                    <summary>mở rộng</summary>
                                    <div class="input-field">
                                        <input type="text" class="input" required />

                                        <label>Vùng</label>


                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Chi nhánh</label>
                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Phòng ban</label>
                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Chức danh</label>
                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Mã nhân viên</label>
                                    </div>


                                </details>
                                <div class="input-field">
                                    <button type="submit" class="submit" /> Thêm
                                </div>
                            </div>

                        </div>
                    </div>



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
                    {/* style="overflow-x:auto;" */}
                    <div>
                        <table class="table" >
                            <thead>
                                <tr className="djhfhjds">
                                    <th scope="col">stt</th>
                                    <th scope="col">Tên nhân viên</th>
                                    <th scope="col">Số điện thoại</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Nhóm truy cập</th>
                                    <th scope="col">Vùng</th>
                                    <th scope="col">Chi nhánh</th>
                                    <th scope="col">Phòng ban</th>
                                    <th scope="col">Chức danh</th>
                                    <th scope="col">Mã nhân viên</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>
                                        <a class="bisteb" href="/details"> demo</a>
                                    </td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>
                                        <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            ...
                                        </lable>
                                        <ul class="dropdown-menu">

                                            <li><button id="myBtn" class="dropdown-item">Sửa</button></li>
                                            <li><button class="dropdown-item">Xoá</button></li>

                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>demo</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>null</td>
                                    <td>
                                        <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            ...
                                        </lable>
                                        <ul class="dropdown-menu">
                                            <li><button id="edit" class="dropdown-item">Sửa</button></li>
                                            <li><button id="myBtn" class="dropdown-item">Xoá</button></li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>



                    <div id="modal-edit" class="modal">
                        <div class="container main">
                            <div class="row ">
                                <div class="input-box">
                                    <span class="closeEdit">&times;</span>
                                    <h1 class="lable-center">Sửa thông tin nhân viên</h1>

                                    <div class="input-field">

                                        <input type="text" class="input" id="fullname" required />
                                        <label for="fullname">Họ và tên</label>
                                    </div>

                                    <div class="input-field">

                                        <input type="tel" class="input" id="tel" required />
                                        <label for="tel">Số điện thoại</label>
                                    </div>

                                    <div class="input-field">

                                        <input type="email" class="input" id="email" required />
                                        <label for="email">Email</label>
                                    </div>
                                    <div class="input-field">
                                        <input type="text" class="input" required />
                                        <label>Nhóm truy cập</label>

                                    </div>

                                    <div class="input-field">
                                        <input type="text" class="input" required />

                                        <label>Vùng</label>


                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Chi nhánh</label>
                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Phòng ban</label>
                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Chức danh</label>
                                    </div>
                                    <div class="input-field">

                                        <input type="text" class="input" id="" required />
                                        <label for="">Mã nhân viên</label>
                                    </div>

                                    <div class="input-field">
                                        <button type="submit" class="submit" /> Xác Nhận
                                    </div>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    </div>
};
export default Contact;
