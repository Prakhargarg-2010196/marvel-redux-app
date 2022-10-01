import Card from '../../components/card/Card';
import Characters from '../../assets/groot.jpg';
import Comics from '../../assets/comics.avif';
import { NavLink } from 'react-router-dom'
import React from 'react'

// import home from './HomePage.module.css';

const HomePageContent = {
  ComicsContent: `Comics from marvel`,
  Characters:`Characters from marvel`,
}


const HomePage = () => {
  return (
    <div className='flex px-4 
                    bg-[url("assets/home-background.jpg")]
                    bg-no-repeat
                    bg-left
                    bg-cover
                    min-h-screen'>
      <div className='mx-auto 
                      pt-3.5
                      md:pt-20
                      flex
                      flex-col
                      md:flex-row
                      gap-5'>
        <Card cardTitle={"Characters"} 
          cardImageSource={Characters}
          cardContent={HomePageContent["Characters"]}
        >
          <NavLink style={{ "color": 'white' }} to={"/comicPage"}>Go To Characters' Page</NavLink>

          </Card>
        <Card cardTitle={"Comics"}
          cardContent={HomePageContent["ComicsContent"]}
          cardImageSource={Comics}
        >
          <NavLink style={{"color":'white'}} to={"/comicPage"}>Go To Comics' Page</NavLink>
        </Card>

      </div>
      </div>
  )
}

export default HomePage