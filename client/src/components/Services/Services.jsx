
import React from 'react'
import "./Services.css"
import {FaHeartbeat, FaHandHoldingHeart,FaStethoscope, FaBriefcaseMedical,FaPills,FaUserMd} from "react-icons/fa"

const Services = () => {
  return (
    <div className='service mt-5 mb-5 pt-5 pb-5' id='services'>
      <div className="title mt-2">
        <h2 className="text-primary text-center mt-2 mb-3 pt-2 pb-2">
          الخدمات
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
          خدمات رعاية القلب الشاملة
        </p>
      </div>

      <div className="container py-5">
        <div className="d-flex justify-content-center gap-4 flex-wrap text-center">
          
          <div className="p-4 border rounded service-card">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3 mx-auto" style={{ width: '60px', height: '60px', padding:"10px"}}>
              <FaHeartbeat />
            </div>
            <h5>استشارة القلب</h5>
            <p className='text-black-50'>تقييم شامل لصحة القلب وخطط العلاج الشخصية.</p>
          </div>

          
          <div className="p-4 rounded service-card">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3 mx-auto" style={{ width: '60px', height: '60px' }}>
              <FaStethoscope />
            </div>
            <h5>تخطيط صدى القلب</h5>
            <p className='text-black-50'>إجراء الموجات فوق الصوتية غير الغازية لتقييم بنية القلب ووظيفته.</p>
          </div>
          
          <div className="p-4 rounded service-card">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3 mx-auto" style={{ width: '60px', height: '60px' }}>
              <FaHandHoldingHeart />
            </div>
            <h5>اختبار الإجهاد</h5>
            <p className='text-black-50'>تقييم وظيفة القلب أثناء النشاط البدني للكشف عن مرض الشريان التاجي.</p>
          </div>

          <div className="p-4 rounded service-card">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3 mx-auto" style={{ width: '60px', height: '60px' }}>
              <FaUserMd />
            </div>
            <h5>طب القلب الوقائي </h5>
            <p className='text-black-50'>مراقبة مستمرة لتخطيط القلب الكهربائي للكشف عن عدم انتظام ضربات القلب على مدار 24-48 ساعة</p>
          </div>

          <div className="p-4 rounded service-card">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3 mx-auto" style={{ width: '60px', height: '60px' }}>
              <FaPills />
            </div>
            <h5>إدارة الأدوية</h5>
            <p className='text-black-50'>تحسين أدوية القلب لتحسين صحة القلب والسيطرة على الأعراض.</p>
          </div>

          <div className="p-4  rounded  service-card">
            <div className="bg-primary text-white rounded-circle d-flex justify-content-center align-items-center mb-3 mx-auto" style={{ width: '60px', height: '60px' }}>
              <FaBriefcaseMedical />
            </div>
            <h5>مراقبة هولتر</h5>
            <p className='text-black-50'>تقييم المخاطر واستراتيجيات الوقاية من أمراض القلب والمضاعفات ذات الصلة.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
