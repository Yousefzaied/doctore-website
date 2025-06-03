import React, { useEffect, useState } from 'react'
import BookingCard from '../../components/BookingCard/BookingCard'

const MyReservations = () => {

  const [myReservations, setReservations] = useState([]);

  // get my book
  const getMyBooking = async () => {
      try {
        const token = localStorage.getItem("token");
        if(!token) {
          console.log("no token found");
          return;
        }

        const res = await fetch('https://api-doctore.vercel.app/api/book/get-mybooks', {
        method:'GET',
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data  = await res.json();
           if(data.status === "success") {
              setReservations(data.data);
          } else {
           console.error("Failed to fetch bookings:", data.message);
          }

      } catch(error) {
        console.log("error =>", error)
      }
  };

  useEffect(() => {
    getMyBooking();
  },[]);


  return (
    <>
     <BookingCard booking={myReservations}/>
    </>
  )
}

export default MyReservations