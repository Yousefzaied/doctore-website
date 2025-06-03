import React from 'react'
import "./About.css"
import {FaGraduationCap, FaRegHospital, FaCertificate } from "react-icons/fa"

const About = () => {
  return (
      <div className='about mb-5 pb-5' id='about'>
        <div className="title mt-5">
  <h2 className="text-primary text-center mt-5 mb-3 pt-5 pb-2">
    نبذة عن الدكتور زايد
  </h2>

  <div style={{
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  }}>
    <div style={{
      width: '80px',
      height: '4px',
      backgroundColor: '#34a853', 
      borderRadius: '2px'
    }}></div>
  </div>

  <p className="text-center text-black-50 fw-bold mt-3">
    متخصص في تقديم رعاية قلبية استثنائية
  </p>
</div>

        <div class="container" dir="rtl">
  <div class="row align-items-center">
    <div class="col-md-6 image">
        <img src="/images/hero.jpg" alt="" />
    </div>

    <div class="col-md-6">
        <div className="content">
            <p className='text-end mt-3 mb-3'>الدكتور زايد هو طبيب قلب معتمد ذات خبرة
            واسعة في تشخيص وعلاج مجموعة واسعة من أمراض القلب. أكمل الدرجه الطبية في كلية
            الطب بجامعة هارفارد وزمالتها في أمراض القلب في مستشفى جونز هوبكنز.
            </p>

            <p className='text-end mt-3 mb-3'>تتبع الدكتور زايد نهجًا شاملاً لرعاية المرضى،
            مع التركيز ليس فقط على علاج الأعراض ولكن
            على صحة القلب الشاملة والتدابير الوقائية.
            وهي معروفة بأسلوبها الرحيم في التعامل مع المرضى وقدرتها على شرح الحالات الطبية المعقدة بمصطلحات مفهومة.
            </p>

            <p className='text-end mt-3 mb-3'>كطبيب قلب رائد في المنطقة، تبقى الدكتور زايد
            في طليعة رعاية القلب من خلال البحث المستمر وتنفيذ أحدث الممارسات القائمة على الأدلة.
            </p>
        </div>
        <div className="row mt-5 cards">
          
          <div className="col-md-6 mb-3">
            <div className="p-3 text-center crd">
                <FaGraduationCap />
                <h5>التعليم</h5>
                <p className='text-black-50'>كلية الطب بجامعة هارفارد</p>
            </div>
          </div>

          
          <div className="col-md-6 mb-3">
            <div className="p-3 text-center crd">
                <FaCertificate />
                <h5>الشهادات المهنية</h5>
                <p className='text-black-50'>المجلس الأمريكي لأمراض القلب</p>
            </div>
          </div>

          
          <div className="col-12">
            <div className="p-3 text-center crd">
                <FaRegHospital />
                <h5>الانتماء المستشفى</h5>
                <p className='text-black-50'>المركز الطبي المركزي</p>
            </div>
          </div>
        </div>
    </div>
  </div>
</div>
</div>
  )
}

export default About
