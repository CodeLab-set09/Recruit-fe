import { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc"
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom"
import pic from "../../../public/hero3.jfif"
import { MdEmail, MdPassword } from "react-icons/md";


const Signin = () => {
    const [show, setShow] = useState(true);
    const [loading, setLoading] = useState(false);
  return (
    <main className="w-full h-screen flex justify-center items-center  bg-[radial-gradient(#000,#9560EB)] ">
        <div className="hidden lg:flex w-[50%] h-full  relative ">
        <img src={pic} alt='' className='absolute w-full h-full object-cover   '/>
        {/* <div className=' w-full h-full opacity-70 bg-black flex  justify-center items-center text-white ' >

        </div> */}
        </div>
        <div className="w-full lg:w-[50%] h-full  flex justify-center items-center  ">

            <form action="" className="flex absolute  justify-center items-center flex-col w-full md:w-[400px]  min-h-[400px] border rounded-md p-2 ">

            <img src="https://res.cloudinary.com/dv4dlmp4e/image/upload/v1728504305/Untitled-1_yv8zfp.png" alt=""  className="h-[80px] w-[150px] object-contain text-black" />

            <div className="border p-2 rounded-md flex justify-center gap-2 items-center  ">
                  <FcGoogle className="text-[30px]" />
                </div>
            <div className="w-full flex uppercase text-[12px] items-center justify-center gap-1 p-2 ">
            <hr className="w-[189px] bg-gray-300" />
            <p className="text-white">or</p>
            <hr className="w-[189px] bg-gray-300" />
          </div>

          
              <div className="w-full p-4 gap-5 flex flex-col">
                 <div  >
                    <label className="font-semibold text-white" >Email</label>
                    <div className="flex w-full h-[40px] items-center bg-white p-2 rounded-md">
                    <MdEmail className="text-[20px] mt-1 text-slate-600" />
                    <input type="email" placeholder="example@gmail.com" className="w-full h-[40px] outline-none rounded-md p-2 " />
                    </div>
                 </div>
                 <div  >
                    <label className="font-semibold text-white" >Password</label>
                    <div className="flex w-full justify-between items-center bg-gray-100 p-2 gap-2 rounded-md">
                    <MdPassword className="text-[20px] mt-1 text-slate-600" />
                  <input
                    className="outline-none text-black bg-inherit placeholder:text-[14px] w-full"
                    type={show ? "password" : "text"}
                    placeholder="Password"
                    name="password"
                    required
                  />
                  {show ? (
                    <IoMdEyeOff
                      onClick={() => {
                        setShow(false);
                      }}
                      className="text-[20px] text-slate-600"
                    />
                  ) : (
                    <IoMdEye
                      onClick={() => {
                        setShow(true);
                      }}
                      className="text-[20px] text-slate-600"
                    />
                  )}
                </div>
                 </div>

                 <button type="submit" className=" py-6 border rounded-md h-[30px] flex justify-center items-center text-white font-semibold hover:bg-purple-600 ">
                {loading ? <FaSpinner /> : "Sign in"}
              </button>
              </div>



              <p className="text-[12px] font-semibold text-white ">Don't have an account <Link to={"/signup"} className="underline italic " >Sign-up</Link></p>

            </form>

        </div>
        
    </main>
  )
}

export default Signin