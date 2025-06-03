
import React from "react";
import "./Nav.css";

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm pt-3 pb-3 sticky-top" dir="rtl">
      <div className="container">
        <a className="navbar-brand text-primary fw-bold" href="#">
          Dr. Zaied
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/#about">نبذة عنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/#services">الخدمات</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="/#contact">اتصل بنا</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold active text-bg-primary" href="/#appointment">حجز موعد</a>
            </li>
          </ul>
        </div>

        <div className="d-flex">
          {isLoggedIn ? (
            <a className="btn btn-outline-primary fw-bold" href="/my-reservations">
              حجوزاتي
            </a>
          ) : (
            <a className="btn btn-primary fw-bold" href="/login">
              تسجيل الدخول
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
