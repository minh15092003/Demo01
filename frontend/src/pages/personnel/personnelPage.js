import axios from 'axios';
import React, { useEffect, useState } from 'react'
 

const PersonnelPage = () => {
    
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
                        <li><a class="dropdown-item" href="/#">Thông tin cơ bản</a></li>
                        <li><a class="dropdown-item" href="/#">Tiền lương/Trợ cấp</a></li>
                        <li><a class="dropdown-item" href="/#">Lịch sử thăng tiến</a></li>
                    </ul>
                    <button type="button" class="btn-import btn-danger dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Tạo mới
                    </button>
                    <ul class="dropdown-menu">
                        <li class="dropdown-item"><a href='/create'>Thêm nhân viên</a></li>
                        <li class="dropdown-item">Thêm file excel</li>
                    </ul>
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
                    <div >
                        <table class="table"  >
                            <thead>
                                <tr className="hrytrt-tro">
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
                                {users.map((user, index) => (
                                    <tr>
                                        <th >{index + 1}</th>
                                        <td onClick={() => { detailEmployee(user.user_id) }}>{user.fullname}</td>
                                        <td >{user.phone} </td>
                                        <td >{user.email}</td>
                                        <td >{user.access_group}</td>
                                        <td >{user.region}</td>
                                        <td >{user.branch}</td>
                                        <td >{user.department}</td>
                                        <td >{user.title}</td>
                                        <td >{user.codeEmploye}</td>
                                        <td>
                                            <lable type="button" class="btn-td btn-danger " data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                ...
                                            </lable>
                                            <ul class="dropdown-menu">

                                                <li><button id="myBtn" class="dropdown-item" onClick={() => { handel(user.user_id) }}>Sửa</button></li>
                                                <li><button class="dropdown-item" onClick={() => { deletepage(user.user_id) }}>Xoá</button></li>

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
    </div>
};
export default PersonnelPage;
