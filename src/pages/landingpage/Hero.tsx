import { useState } from "react"
import { MdCancel, MdMenu } from "react-icons/md"
import pic from "../../../public/hero1.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
    const [toggle,setToggle] = useState(false)
  return (
    <div className='relative w-full h-[400px] lg:h-screen  '>
          
        <img src={pic} alt='' className='absolute w-full h-full object-cover  '/>
        <main className="absolute z-20 w-full">
         <div className="h-[80px] w-full flex justify-between items-center px-6 text-white ">
       <img src="https://res.cloudinary.com/dv4dlmp4e/image/upload/v1728504305/Untitled-1_yv8zfp.png" alt=""  className="h-[150px] w-[150px] object-contain text-black" />
        <div className="hidden lg:flex gap-10 items-center font-semibold">
           <p className="hover:underline underline-offset-8 decoration-2 decoration-[#141B26] cursor-pointer"><Link  to={"/"} >Home</Link></p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-[#141B26] cursor-pointer"><Link  to={"/about"} >About</Link></p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-[#141B26] cursor-pointer"><Link  to={"/contactus"} >Contact us</Link></p>
        </div>
        <div className="hidden lg:flex gap-5 ">
        <Link to={"/signin"}>
           <button className="w-[80px] h-[45px] border rounded-md hover:bg-[#141B26] hover:border-none cursor-pointer  ">Sign-in</button></Link>
           <Link to={"/signup"}>
           <button className="w-[80px] h-[45px] hover:border hover:bg-inherit rounded-md bg-[#141B26] cursor-pointer " >Sign-up</button></Link>
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
         <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 cursor-pointer"><Link  to={"/"} >Home</Link></p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 cursor-pointer"><Link  to={"/about"} >About</Link></p>
           <p className="hover:underline underline-offset-8 decoration-2 decoration-purple-600 cursor-pointer"><Link  to={"/contactus"} >Contact us</Link></p>
        </div>

        <div className=" w-full flex flex-col gap-5 ">
        <Link to={"/signin"}>
           <button className="w-full h-[45px] border rounded-md hover:bg-purple-600 hover:border-none cursor-pointer  ">Sign-in</button></Link>
           <Link to={"/signup"}>
           <button className="w-full h-[45px] hover:border hover:bg-inherit rounded-md bg-purple-600 cursor-pointer " >Sign-up</button></Link>
        </div>
         </div>
      </div>
   ):("")}
     </main>
        <div className=' w-full h-full opacity-70 bg-[#141B26] flex flex-col justify-center items-center text-white p-6 '>
            <h1 className="text-[40px] lg:text-[70px] font-semibold text-center " >Lorem ipsum dolor, sit amet</h1>
            <p className="text-[12px] w-full lg:w-[600px] text-center">adipisicing elit. Iste nobis vero neque nulla, deleniti inventore animi obcaecati consectetur tempora repellat itaque modi expedita quis aut. Modi tenetur quod enim porro?</p>
        </div>
    </div>
  )
}

export default Hero