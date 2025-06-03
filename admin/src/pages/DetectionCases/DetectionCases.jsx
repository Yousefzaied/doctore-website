import React from 'react'
import Table from '../../components/Table/Table'
import useFetchData from '../../components/hooks/useFetchData';

const DetectionCases = () => {
   const {data, loading} = useFetchData('https://api-doctore.vercel.app/api/book/get-all/');

   const filteredData = data.filter(
    item => item.bookings.length > 0 && item.bookings[0].consultationType === "New Consultation"
  );
  
  return (
       <>
      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <Table title="حالات الكشف" data={filteredData} />
      )}
    </>

  )
}

export default DetectionCases