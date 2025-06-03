import React from 'react'
import Table from '../../components/Table/Table'
import useFetchData from '../../components/hooks/useFetchData';

const ReturnCases = () => {
//   const[data, setData] = useState([]);
  
//      const getData = async () => {
//         try {
//            const token = localStorage.getItem("token");
//            if(!token) {
//               console.log("no token found");
//               return;
//            };
  
//            const res = await fetch(`http://localhost:3000/api/book/get-all/`, {
//               method:'GET',
//               headers:{
//                  "Content-Type": "application/json",
//                  Authorization: `Bearer ${token}`,
//               },
//            });
  
//            const data  = await res.json();
//            if(data.status === "success") {
//               setData(data.data);
//           } else {
//            console.error("Failed to fetch bookings:", data.message);
//           }
//         } catch(erro){
//            console.log(erro)
//         }
//      };
  
//      useEffect(() => {
//         getData();
//      }, []);

const {data, loading} = useFetchData('https://api-doctore.vercel.app/api/book/get-all/');
const filteredData = data.filter(
    item => item.bookings.length > 0 && item.bookings[0].consultationType === "Follow-up"
  );
  
  return (
    <>
      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <Table title="حالات الاعاده" data={filteredData} />
      )}
    </>
  )
}

export default ReturnCases