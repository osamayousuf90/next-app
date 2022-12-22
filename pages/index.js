import { useRouter } from 'next/router'
import Navbar from '../Components/Navbar/Navbar';
import Cards from '../Components/Cards/Cards';



 const Index = ({data}) => {
  const router = useRouter(); 
  
  return (
    <>
      <Navbar/>
      <div className="homePage">
      <h2>I am Home</h2>
      <h2>Getting Data from SSR</h2>
        <div className="homePage_cards">
        { data?.length === 0 ? <h1>Loading</h1> : data?.map((res) => {
        return (
        <Cards res={res} />               
        )
        })}
      </div>  
      </div>
    </>
  )

}


export default Index  


export async function getServerSideProps() {

      
  // Fetching data
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

  
  // Passing data to the Product Page using props
  return {
      props : {data}
  }

  
}

