import React from 'react'

const Hero2 = () => {
    const data = [
        {id:0,tittle:"Lorem ipsum dolor",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto earum! Placeat nam distinctio molestiae doloremque, "},
        {id:1,tittle:"Lorem ipsum dolor",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto earum! Placeat nam distinctio molestiae doloremque, "},
        {id:2,tittle:"Lorem ipsum dolor",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, iusto earum! Placeat nam distinctio molestiae doloremque, "}
    ]
  return (
    <div className='w-full min-h-screen lg:h-[500px] flex flex-col items-center justify-center gap-5 text-white bg-black bg-gradient-to-b from-black to-[#141B26]  py-8 '>
        <p className='font-bold text-[30px] lg:text-[50px]  '>Lorem ipsum dolor</p>
        <div className=' w-full flex flex-col gap-5 lg:gap-0 lg:flex-row  items-center justify-center '>
            {
                data.map((el:any) => (
                    <div key={el.id} className='flex flex-col items-center justify-center border-2 w-[350px] h-[300px]  py-10 gap-10 '>
                        <h2 className='font-semibold text-[25px] lg:text-[35px]' >{el.tittle}</h2>
                        <p className='w-[300px] text-[18px] text-center '>{el.desc}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Hero2