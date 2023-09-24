import {logo} from '../assets' ;

const Hero = () => {
  return (
    <header className = "w-full flex justify-center items-center flex-col">
        <nav className = "flex justify-between items-center w-full nb-10 pt-3" >
               <img src = {logo} alt = "sumz_logo" className = "w-28 object-contain " />

               <button 
                     type = "button"
                     onClick = {() => window.open(
                         'https://github.com/Raja1704/AI-Artical-Sumerizer'
                     )}
                     className = "black_btn"
                >
                    Github
                </button>
        </nav>

         <h1 className = "head_text">
             Summarize Articles With <br/>
             
         </h1>
    </header>
  )
}

export default Hero