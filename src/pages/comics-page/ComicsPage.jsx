import { useEffect, useState } from 'react'

import ApiHashedUrlGenerator from '../../utils/ApiHashedUrlGenerator';
import Card from '../../components/card/Card';
import Loader from '../../components/loader/Loader';
import { MARVEL_API_URL } from '../../constants/apiDetails';
import cp from './ComicsPage.module.css'

const ComicsPage = () => {
  const [comics, setComics] = useState([{ name: "avengers", content: "adfdafgdafafdfadkf" }, { name: "cartos", content: "adfdafgdafafdfadkfadfafdf" }, { name: "javpa", content: "adfdafgdafafdfadfadfdfkf" }]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);
  // useEffect(() => {

  //   const fetchComics = async () => {
  //     setError(false);
  //     setLoading(true);
  //     try {
  //       const response = await fetch(`${MARVEL_API_URL}/v1/public/comics${ApiHashedUrlGenerator.getApiRemainingUrl()}`);
  //       if (response.ok) {
  //         const { data } = await response.json();
  //         setComics([...data.results]);

  //       }
  //     }
  //     catch (error) {
  //       setError(true)
  //       console.log(error);
  //       setLoading(false)
  //     }


  //   }
  //   fetchComics();
  //   setLoading(false);
    
  //   return () => {
     
      
  //   }
  // }, [comics])




  return (
    <div className={cp.container}>
      <div className={cp.wrapper}>
        {comics.map((comic) => 
        <Card comic={comic}></Card>
        
        )}
        
      </div>
    </div>


  )
}

export default ComicsPage