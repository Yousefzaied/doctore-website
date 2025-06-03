import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero pt-5 pb-2">
    <div class="container" dir="rtl">
  <div class="row align-items-center">
    
    <div class="col-md-6 mb-3 mt-5 mb-5">
      <div class="p-3 text-center content">
        <h2 className='text-primary text-end mb-2'>رعاية قلبية متخصصة</h2>
        <p className='text-end fw-bold text-black-50 mt-3 mb-3'>مع أكثر من 15 عامًا من الخبرة في طب القلب، تقدم
        الدكتورة جونسون رعاية استثنائية مع نهج يركز على المريض</p>
        <div className="buttons mt-3 mb-3 text-end">
            <a class="btn btn-primary m-2" href="#" role="button">حجز موعد </a>
            <a type="button" class="btn btn-outline-primary m-2">اتصل بنا</a>
        </div>
      </div>
    </div>

    <div class="col-md-6 mb-3">
      <div class="p-3 text-center mt-5 mb-5 image">
        <img src="/images/hero.jpg" alt="" />
      </div>
    </div>
  </div>
</div>
    </div>
)
}

export default Hero