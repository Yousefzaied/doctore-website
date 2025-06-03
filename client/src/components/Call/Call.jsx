
import React from 'react';
import "./Call.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Call = () => {
  return (
    <div className='call-section mt-5 pt-5 pb-5' id='contact'>
      <div className="title mt-2">
        <h2 className="text-primary text-center mt-2 mb-3 pt-2 pb-2">
          اتصل بنا
        </h2>
        <div className="d-flex justify-content-center">
          <div style={{
            width: '80px',
            height: '4px',
            backgroundColor: '#34a853',
            borderRadius: '2px'
          }}></div>
        </div>
        <p className="text-center text-black-50 fw-bold mt-3">
          تواصل مع مكتب الدكتورة جونسون
        </p>
      </div>

      {/* cards */}
      <div className="container mt-5">
        <div className="row g-4">
          
          <div className="col-md-6">
            <div className="card-section p-4 text-center shadow-sm h-100">
              <FaPhoneAlt className="text-primary fs-2 mb-3" />
              <h5 className="fw-bold">رقم الهاتف</h5>
              <p className="text-muted">المكتب: 555 123-4567</p>
              <p className="text-muted">الفكس:555 123-4568</p>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="card-section p-4 text-center shadow-sm h-100">
              <FaEnvelope className="text-primary fs-2 mb-3" />
              <h5 className="fw-bold">البريد الإلكتروني</h5>
              <p className="text-muted">info@example.com</p>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="card-section p-4 text-center shadow-sm h-100">
              <FaMapMarkerAlt className="text-primary fs-2 mb-3" />
              <h5 className="fw-bold">العنوان</h5>
              <p className="text-muted">123 طريق المركز الطبي جناح 456 هارتفيل، كاليفورنيا 90210</p>
            </div>
          </div>

          
          <div className="col-md-6">
            <div className="card-section p-4 text-center shadow-sm h-100">
              <FaClock className="text-primary text-center fs-2 mb-3" />
              <h5 className="fw-bold">ساعات العمل</h5>
              <p className="text-muted">من الأحد إلى الخميس: 9 صباحًا - 5 مساءً</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Call;
