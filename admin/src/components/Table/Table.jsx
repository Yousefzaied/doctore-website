
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2"


const Table = ({ title, data }) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [newStatus, setNewStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    setReservations(data);
  }, [data]);

  const handleEdit = (reservation) => {
    setSelectedUser(reservation);
    setNewStatus(reservation.status);
    setShowModal(true);
  };

const handleDelete = async (_id) => {
  const confirmDelete = await Swal.fire({
    title: "هل انت متأكد من حذف هذا المستخدم",
    text: "after delete these item not found",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "موافق",
    cancelButtonText: "إلغاء",
  });

  if (confirmDelete.isConfirmed) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found");
        return;
      }

      const res = await fetch(`https://api-doctore.vercel.app/api/book/delete-book/${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      console.log("Fetched Data:", data);

      if (data.status === "success") {
        Swal.fire("تم حذف المستخدم بنجاح",`${data.message}`);
        setReservations((prevData) => prevData.filter((item) => item._id !== _id));
      } else {
        Swal.fire("Error", "An error occurred while deleting, please try again.", "error");
      }
    } catch (error) {
      console.error("Error deleting transaction:", error);
      Swal.fire("Error", "We were unable to delete the statement", "Error");
    }
  }
};

  const handleSave = () => {
    const updatedReservations = reservations.map((item) =>
      item._id === selectedUser._id ? { ...item, status: newStatus } : item
    );
    setReservations(updatedReservations);
    setShowModal(false);

    fetch(`https://api-doctore.vercel.app/api/book/update-books/${selectedUser._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ status: newStatus }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message));
      toast.success("تم تعديل الحالة بنجاح")
  };

  const status = [
    {type: "pending"},
    {type: "approved"},
    {type: "rejected"}
  ]

  // status translation
  const statusTranslations = {
  "pending": "قيد الانتظار",
  "approved": "تم القبول",
  "rejected": "مرفوض",
};

const statusClasses = {
  "follow up": "bg-info text-white",
  "pending": "bg-warning text-dark",
  "approved": "bg-success text-white",
  "rejected": "bg-danger text-white",
};


  return (
    <div className="container mt-5">
      <h3 className="mb-4 text-end">{title}</h3>
      <table className="table table-bordered text-center">
        <thead className="table-dark">
          <tr>
            <th>الاسم</th>
            <th>رقم الهاتف</th>
            <th>العمر</th>
            <th>الجنس</th>
            <th>الحالة</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>
                  <span className={`px-2 py-1 rounded ${statusClasses[user.status] || "bg-secondary text-white"}`}>
                      {statusTranslations[user.status] || user.status}
                  </span>
              </td>

              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(user)}
                >
                  تعديل
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user._id)}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>تعديل الحالة للمستخدم</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="statusSelect">
            <Form.Label>اختر الحالة الجديدة:</Form.Label>
            <Form.Select
              value={newStatus}
              onChange={(e) => setNewStatus(e.target.value)}
            >
              {status.map((item, index) => (
                <option  key={index} value={item.type}>{statusTranslations[item.type]}</option>
              ))}
            </Form.Select>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            إلغاء
          </Button>
          <Button variant="primary" onClick={handleSave}>
            حفظ
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default Table;
