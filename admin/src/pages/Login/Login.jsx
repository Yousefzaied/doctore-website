// pages/Login.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {

  const[formData, setFormData] = useState({
      email:"",
      password:"",
    });

    const navigate = useNavigate()
  
    // handleOnChange
    const handleOnCahnge = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
    };
    console.log("data form =>", formData)
  
    // handleOnSubmit
    const handleOnSubmit = async(e) => {
      e.preventDefault();
      const res = await fetch('https://api-doctore.vercel.app/api/auth/login', {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(formData),
      });
  
      const data = await res.json();
      if(res.ok) {
          localStorage.setItem("token", data.token);
          toast.success("تم التسجيل بنجاح")
          navigate("/")
      } else {
        toast.error("فشل تسجيل الدخول يرجي المحاوله لاحقا")
      }
    }

  return (
    <div className="container mt-5" dir="rtl">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4 className="text-center mb-4">تسجيل الدخول</h4>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-3">
              <label className="form-label">البريد الإلكتروني</label>
              <input type="email" className="form-control" name='email' placeholder="ادخل بريدك الإلكتروني" required onChange={handleOnCahnge} />
            </div>
            <div className="mb-3">
              <label className="form-label">كلمة المرور</label>
              <input type="password" className="form-control" name='password' placeholder="ادخل كلمة المرور" required onChange={handleOnCahnge} />
            </div>
            <button type="submit" className="btn btn-success w-100">تسجيل الدخول</button>
          </form>
          <p className="text-center mt-3">
            ماعندكش حساب؟ <Link to="/">أنشئ حساب</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
