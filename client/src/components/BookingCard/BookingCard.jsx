
import 'bootstrap/dist/css/bootstrap.min.css';

const BookingCard = ({ booking }) => {
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const consultationTypeTranslations = {
    "New Consultation": "كشف جديد",
    "Follow-up": "متابعة كشف",
    "Emergency": "طوارئ",
  };

  // تحقق من إن booking مصفوفة
  const isValidArray = Array.isArray(booking) && booking.length > 0;

  return (
    <div className="container text-end">
      <div className="title mt-5">
  <h2 className="text-primary text-center mt-5 mb-3 pt-5 pb-2">
    حجوزاتي
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

</div>
      {isValidArray ? (
        booking.map((item, index) =>
          Array.isArray(item.bookings) ? (
            item.bookings.map((booking, idx) => (
              <div className="card shadow p-3 my-4" key={`${index}-${idx}`}>
                <div className="card-body">
                  <h5 className="card-title text-primary">
                    نوع الاستشارة : {consultationTypeTranslations[booking.consultationType] || 'غير معروف'}
                  </h5>
                  <p className="card-text">الوصف : {booking.description}</p>
                  <p className="card-text">
                    <span className={`ms-2 badge ${item.status === 'pending' ? 'bg-warning' : 'bg-success'}`}>
                      {item.status === 'pending' ? 'قيد المراجعة' : 'تمت الموافقة'}
                    </span>
                    : الحالة
                  </p>
                  <p className="card-text">تاريخ الحجز: {formatDate(item.createdAt)}</p>
                </div>
              </div>
            ))
          ) : null
        )
      ) : (
        <div className="alert alert-info mt-4" role="alert">
          لا توجد حجوزات حالياً.
        </div>
      )}
    </div>
  );
};

export default BookingCard;
