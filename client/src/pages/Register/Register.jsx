// pages/Register.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {

  const[formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  });
  const navigate = useNavigate();

  // handleOnChange
  const handleOnCahnge = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  // handleOnSubmit
  const handleOnSubmit = async(e) => {
    e.preventDefault();
    const res = await fetch('https://api-doctore.vercel.app/api/auth/register', {
      method:"POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(formData),
      credentials: "include",
    });

    const data = await res.json();
    if(res.ok) {
      localStorage.setItem("token", data.token);
        toast.success("تم التسجيل بنجاح");
        setTimeout(() => navigate("/my-reservations"), 2000);
            } else {
              toast.error("فشل تسجيل الدخول يرجي المحاوله لاحقا")
    }
  }

  return (
    <div className="container mt-5" dir="rtl">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4 className="text-center mb-4">إنشاء حساب جديد</h4>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label className="form-label">الاسم</label>
              <input type="text" className="form-control" name='name' placeholder="ادخل اسمك" required onChange={handleOnCahnge} />
            </div>
            <div className="mb-3">
              <label className="form-label">البريد الإلكتروني</label>
              <input type="email" className="form-control" name='email' placeholder="ادخل بريدك الإلكتروني" required onChange={handleOnCahnge} />
            </div>
            <div className="mb-3">
              <label className="form-label">كلمة المرور</label>
              <input type="password" className="form-control" name='password' placeholder="ادخل كلمة المرور" required onChange={handleOnCahnge} />
            </div>
            <button type="submit" className="btn btn-primary w-100">إنشاء حساب</button>
          </form>
          <p className="text-center mt-3">
            عندك حساب؟ <Link to="/login">سجل الدخول</Link>
          </p>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Register;
