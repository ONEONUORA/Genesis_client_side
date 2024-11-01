
import { Link } from 'react-router-dom';
import page from '../assets/react404.jpeg';
import brandlogo from "../assets/logo(8).png"


const PageNotFound = () =>{
    return(
        <>
          

                <section className=' relative p-10 flex flex-col items-center gap-20 text-center' >
                   
                      <img src={page} className='select-none border-2 border-gray-500  w-72 aspect-square object-cover rounded'/>
                          <h1 className='text-4xl  leading-7'>Page Not Found</h1>
                           <p className='text-gray-500 text-xl leading-7 -mt-8'>The page you are searching for does not exist<br/> 
                            <Link to='/' className='text-black underline'>Back to home</Link>
                           </p>

                        <div className='mt-auto'>
                           <img src={brandlogo}  alt='Brand Logo' className='h-20  object-contain block mx-auto select-none'/>
                           <p className='mt-5 text-blue-500'>Let your voice be heard</p>
                           <h6 className='mt-3 font-bold'>Genesis</h6>
                        </div>
                          
            
                </section>
                
      
        </>
    )
}


export default PageNotFound