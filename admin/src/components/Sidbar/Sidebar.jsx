import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
    <div className="sidBar col-lg-2 col-md-4 col-sm-4">
        <h2 className="text-center p-3 title">لوحة التحكم</h2>
        <div className="links text-center d-block">
          <Link to="/" className="btn btn-primary m-3">حالات الطوارئ</Link>
          <Link to="/Detection-cases" className="btn btn-primary m-3">حالات الكشف</Link>
          <Link to="/Return-ases" className="btn btn-primary m-3">حالات الإعاده</Link>
          <Link to="/user-info" className="btn btn-primary m-3">معلومات المستخدم</Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;