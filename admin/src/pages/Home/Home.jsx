import './Home.css'
import Table from '../../components/Table/Table'
import useFetchData from '../../components/hooks/useFetchData';

const Home = () => {

const {data, loading} = useFetchData('https://api-doctore.vercel.app/api/book/get-all/');
const filteredData = data.filter(
    item => item.bookings.length > 0 && item.bookings[0].consultationType === "Emergency"
  );

   return (
    <>
      {loading ? (
        <p>جاري التحميل...</p>
      ) : (
        <Table title="حالات الطوارئ" data={filteredData} />
      )}
    </>
   )
}

export default Home