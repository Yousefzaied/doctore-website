import React from 'react'
import {FaClock, FaPhone,FaMailBulk} from "react-icons/fa"

const InfoData = () => {
  return (
    <div className="col-lg-4 text-end info-data">
          <h5 className='text-primary'>معلومات الموعد</h5>
          <p>يرجى ملء النموذج لطلب موعد. سيتصل بك فريقنا لتأكيد التفاصيل</p>
    
          <div className="card-info mt-3 mb-2 d-flex flex-row-reverse align-items-center px-3 py-2">
            <div className="ms-3">
              <FaClock className='fs-1 text-primary'/>
            </div>
            <div>
              <h5 className="mb-1">ساعات العمل</h5>
              <p className="mb-0 text-black-50">الاثنين - الجمعة: 9:00 صباحًا - 5:00 مساءً</p>
              <p className="mb-0 text-black-50">السبت: 9:00 صباحًا - 1:00 ظهرًا</p>
              <p className="mb-0 text-black-50">الأحد: مغلق</p>
            </div>
          </div>
    
          <div className="card-info mt-3 mb-2 d-flex flex-row-reverse align-items-center px-3 py-2">
            <div className="ms-3">
              <FaPhone className='fs-1 text-primary' />
            </div>
            <div>
              <h5 className="mb-1">الهاتف</h5>
              <p className="mb-0 text-black-50">(555) 123-4567</p>
            </div>
          </div>
    
          <div className="card-info mt-3 mb-2 d-flex flex-row-reverse align-items-center px-3 py-2">
            <div className="ms-3">
              <FaMailBulk className='fs-1 text-primary' />
            </div>
            <div>
              <h5 className="mb-1">البريد الإلكتروني</h5>
              <p className="mb-0 text-black-50">appointments@drjohnson.com</p>
            </div>
          </div>
        </div>
  )
}

export default InfoData