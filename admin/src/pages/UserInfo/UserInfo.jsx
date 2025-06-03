import React, { useEffect, useState } from 'react';
import Register from '../Rgister/Register';

const UserInfo = () => {

  const [user, setUser] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
      getUser();
  },[]);

  // getUser
  const getUser = async() => {
    try {
      const res = await fetch('https://api-doctore.vercel.app/api/auth/me', {
        method:"GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
      });

      const data = await res.json();
      if (data.status === "success") {
          setUser(data.user);
        } else {
          console.error("Failed to fetch:", data.message);
        }

    } catch(error) {
      console.log("error =>", error)
    }
  };

  console.log("user =>", user.name)

  return (
    <>
    {
      token? <div className="container mt-4" dir="rtl">
      <h4 className="text-center mt-3 mb-3 pt-3 pb-3">معلومات المستخدم</h4>
      <div className="row d-flex justify-content-center">
        <div className="col-md-8">
          <table className="table table-bordered text-end">
            <tbody>
              <tr>
                <th className="w-25">الاسم:</th>
                <td>{user.name || "Zaied"}</td>
              </tr>
              <tr>
                <th>البريد الإلكتروني:</th>
                <td>{user.email || "youssef@gmail.com"}</td>
              </tr>
              <tr>
                <th>رقم الهاتف:</th>
                <td>01012345678</td>
              </tr>
              <tr>
                <th>الجنس:</th>
                <td>ذكر</td>
              </tr>
              <tr>
                <th>العمر:</th>
                <td>30 سنة</td>
              </tr>
              <tr>
                <th>الدور:</th>
                <td>{user.role || "Admin"}</td>
              </tr>
              <tr>
                <th>الحالة:</th>
                <td><span className="badge bg-success">نشط</span></td>
              </tr>
              <tr>
                <th>آخر تسجيل دخول:</th>
                <td>25 مايو 2025 - 10:45 صباحًا</td>
              </tr>
            </tbody>
          </table>

          <div className="d-flex gap-2 justify-content-end">
            <button className="btn btn-primary">تعديل</button>
            <button className="btn btn-warning">تغيير الحالة</button>
            <button className="btn btn-danger">حذف</button>
          </div>
        </div>
      </div>
    </div>
      :
      <Register/>
    }
    </>
  );
};

export default UserInfo;
