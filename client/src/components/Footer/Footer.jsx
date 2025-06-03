import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4 text-end">
            <h5 className="fw-bold mb-3">Dr. Zaied</h5>
            <p>Cardiology Specialist, MD</p>
          </div>
          
          <div className="col-md-3 mb-4 text-end links">
            <h5 className="fw-bold mb-3">روابط سريعة</h5>
            <ul className="list-unstyled">
              <li className='mt-1 mb-2'><a href="#home" className="text-decoration-none">الرئيسية</a></li>
              <li className='mt-1 mb-2'><a href="#about" className="text-decoration-none">من نحن</a></li>
              <li className='mt-1 mb-2'><a href="#services" className="text-decoration-none">الخدمات</a></li>
              <li className='mt-1 mb-2'><a href="#contact" className="text-decoration-none">اتصل بنا</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 text-end">
            <h5 className="fw-bold mb-3">الخدمات</h5>
            <ul className="list-unstyled">
              <li className='mt-1 mb-2'><span className="text-white-50">استشارات القلب</span></li>
              <li className='mt-1 mb-2'><span className="text-white-50">تحاليل طبية</span></li>
              <li className='mt-1 mb-2'><span className="text-white-50">متابعة الحالات المزمنة</span></li>
              <li className='mt-1 mb-2'><span className="text-white-50">فحوصات دورية</span></li>
            </ul>
          </div>

          <div className="col-md-3 mb-4 text-end">
            <h5 className="fw-bold mb-3">معلومات الاتصال</h5>
            <p className="mb-2 mt-1 text-white-50"> الرياض، المملكة العربية السعودية</p>
            <p className="mb-2 mt-1 text-white-50"> +966 123 456 789</p>
            <p className="mb-2 mt-1 text-white-50"> info@example.com</p>
          </div>
        </div>

        <div className="text-center border-top pt-3 mt-3" style={{ borderColor: "#444" }}>
          <small>2025 الدكتور زايد. جميع الحقوق محفوظة.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
