
import React from 'react';
import './Certificate.css';

const qualifications = [
  { id: 1, side: 'left', title: 'الشهادة الطبية', description: 'كلية الطب بجامعة هارفارد', date: '2005-2009' },
  { id: 2, side: 'right', title: 'الإقامة في الطب الباطني', description: 'مستشفى ماساتشوستس العام', date: '2009-2012' },
  { id: 3, side: 'left', title: 'زمالة أمراض القلب', description: 'مستشفى جونز هوبكنز', date: '2012-2015' },
  { id: 4, side: 'right', title: 'زمالة التصوير القلبي المتقدم', description: 'كليفلاند كلينك', date: '2015-2016' },
  { id: 5, side: 'left', title: 'شهادة المجلس', description: 'المجلس الأمريكي للطب الباطني - أمراض القلب', date: '2016' },
  { id: 6, side: 'right', title: 'رئيس قسم أمراض القلب', description: 'المركز الطبي المركزي', date: '2020-حتى الآن' }
];

const Certificate = () => {
  return (
    <div className="certificate-section mt-5 mb-5 pt-5 pb-5">
      <div className="title mt-2">
        <h2 className="text-primary text-center mt-2 mb-3 pt-2 pb-2">
          المؤهلات
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
          التعليم والتدريب والإنجازات المهنية
        </p>
      </div>

      <div className="timeline-container position-relative mt-5">
        {qualifications.map((item) => (
          <div key={item.id} className={`timeline-item ${item.side}`}>
            <div className="card p-3 mb-4 rounded">
              <h5 className="fw-bold text-primary text-end">{item.title}</h5>
              <p className="mb-0 text-muted text-end">{item.description}</p>
              <p className='text-end text-black-50 mt-2'>{item.date}</p>
            </div>
            <span className="circle"></span>
          </div>
        ))}

  
        <div className="timeline-line"></div>
      </div>
    </div>
  );
};

export default Certificate;
