import { Suspense, lazy, useEffect } from 'react'
import { marvelComicsFetch, selectAllComics } from '../../store/slices/marvel-slices/marvelComicsSlice';
import { useDispatch, useSelector } from 'react-redux';

// import { GeneralLoader } from '../../components/loader/Loader';
import {ImageLoader} from '../../components/loader/ImageLoader'
import ImagePathGenerator from '../../utils/ImagePathGenerator';
import cp from './ComicsPage.module.css'

const Card=lazy(()=>import ('../../components/card/Card'));

const ComicsPage = () => {
  const comics = useSelector(selectAllComics); 
  console.log(comics);
  const dispatch = useDispatch();
  useEffect(() => {
  
    // if( comics.length===0)
      dispatch(marvelComicsFetch());
    
  }, [dispatch])
  return (
    <>
      <div className={cp.container}>
        {/* {isLoading===true ? (<GeneralLoader/>) : */}
          <div className={cp.comicsContainer}>
          {comics.map((comic, index) => {
            let imagePath = ImagePathGenerator(comic?.thumbnail?.path, comic?.thumbnail?.extension, 'portrait_uncanny');
            return (
              <Suspense key={index} fallback={<ImageLoader />}>

                <Card cardTitle={comic.title} cardImageSource={imagePath} cardContent={""}></Card>

              </Suspense>
              )              
            
            }
              

            )}
          </div>
        {/* } */}
      </div>
      
    </>)
}

export default ComicsPage