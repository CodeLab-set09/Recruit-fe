import { useState } from "react"
import { MdCancel, MdMenu } from "react-icons/md"



const Header = () => {
   const [toggle,setToggle] = useState(false)
  return (
     <main>
         <div className="h-[80px] w-full flex justify-between items-center px-6 bg-black text-white ">
       <img src="https://res.cloudinary.com/dv4dlmp4e/image/upload/v1728504305/Untitled-1_yv8zfp.png" alt=""  className="h-[150px] w-[150px] object-contain text-black" />
        <div className="hidden lg:flex gap-10 items-center font-semibold">
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 ">Home</p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 ">About</p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 ">Contact us</p>
        </div>
        <div className="hidden lg:flex gap-5 ">
           <button className="w-[80px] h-[45px] border rounded-md hover:bg-purple-600 hover:border-none  ">Sign-in</button>
           <button className="w-[80px] h-[45px] hover:border hover:bg-inherit rounded-md bg-purple-600  " >Sign-up</button>
        </div>
         <div className="flex lg:hidden">
         {
            toggle ?(<MdCancel className="flex lg:hidden h-[40px] w-[40px] " onClick={() => {
                setToggle(false)
  
            }} />) :(<MdMenu className="flex lg:hidden h-[40px] w-[40px] " onClick={() => {
               setToggle(true)
 
           }} />)
           } 
         </div>
            
           
          
    </div>
     {toggle? (
      <div className="flex bg-black w-full justify-end h-[400px] relative top-0  ">
         <div className="flex w-full flex-col items-center justify-center gap-10 text-white p-4 " >
         <div className="flex flex-col gap-10 items-center font-semibold">
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 ">Home</p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 ">About</p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 ">Contact us</p>
        </div>

        <div className=" w-full flex flex-col gap-5 ">
           <button className="w-full h-[45px] border rounded-md hover:bg-purple-600 hover:border-none  ">Sign-in</button>
           <button className="w-full h-[45px] hover:border hover:bg-inherit rounded-md bg-purple-600  " >Sign-up</button>
        </div>
         </div>
      </div>
   ):("")}
     </main>
  )
}

export default Header