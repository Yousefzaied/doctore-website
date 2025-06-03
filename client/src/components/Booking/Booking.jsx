
import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import FormSelect from '../FormSelect/FormSelect';
import InfoData from '../InfoData/InfoData';
import "react-toastify/dist/ReactToastify.css";
import "./Booking.css";

const Booking = () => {
  const [booking, setBooking] = useState({
    name: "", email: "", phone: "", age: "",
    description: "", gender: "", consultationType: "",
  });

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const genderOptions = [{ gender: "male" }, { gender: "female" }];

  const consultationTypes = [
    { type: 'New Consultation' },
    { type: 'Follow-up' },
    { type: 'Emergency' },
  ];

  const consultationTypeTranslations = {
    "New Consultation": "كشف جديد",
    "Follow-up": "متابعة كشف",
    "Emergency": "طوارئ",
  };

  const handleOnChange = (e) =>
    setBooking({ ...booking, [e.target.name]: e.target.value });

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!token) {
      toast.error("يرجي تسجيل الدخول اولا");
      return setTimeout(() => navigate("/register"), 2000);
    }

    try {
      const res = await fetch(' https://api-doctore.vercel.app/api/book/add', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(booking),
      });

      const data = await res.json();
      if (data.status === "success") {
        toast.success("تم الحجز بنجاح");
        setTimeout(() => navigate("/my-reservations"), 2000);
        setBooking({
          name: "", email: "", phone: "", age: "",
          description: "", gender: "", consultationType: "",
        });
      }
    } catch (error) {
      toast.error("فشل الحجز يرجي مراجعة البيانات",error);
    }
  };

  return (
    <div className='booking-section mt-5 mb-5 pt-5 pb-5' id='appointment'>
      <div className="title text-center">
        <h2 className="text-primary">حجز موعد</h2>
        <div className="mx-auto" style={{
          width: '80px', height: '4px', backgroundColor: '#34a853', borderRadius: '2px'
        }}></div>
        <p className="text-black-50 fw-bold mt-3">جدولة استشارة مع الدكتورة جونسون</p>
      </div>

      <div className="container pt-4">
        <div className="col-lg-4 mb-4 text-end inputs">
          <form onSubmit={handleOnSubmit}>
            <FormInput label="الاسم الكامل" type="text" id="name" name="name" placeholder="أدخل اسمك" onChange={handleOnChange} required />
            <FormInput label="البريد الإلكتروني" type="email" id="email" name="email" placeholder="example@email.com" onChange={handleOnChange} required />
            <FormInput label="رقم الهاتف" type="tel" id="phone" name="phone" placeholder="مثال: 01123456789" onChange={handleOnChange} required />
            <FormInput label="وصف الحالة" type="text" id="description" name="description" placeholder="..." onChange={handleOnChange} required />

            <FormSelect
              label="الجنس"
              name="gender"
              valueKey="gender"
              options={genderOptions}
              onChange={handleOnChange}
            />

            <FormSelect
              label="نوع الحجز"
              name="consultationType"
              valueKey="type"
              labelKey="label"
              options={consultationTypes.map(item => ({
                type: item.type,
                label: consultationTypeTranslations[item.type]
              }))}
              onChange={handleOnChange}
            />

            <button className="btn btn-primary mt-2">إرسال</button>
          </form>
        </div>

        <InfoData />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Booking;
