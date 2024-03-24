import React, { useEffect, useState }  from 'react'
import bar4 from '../assets/bar4.jpg'
import spinner from '../assets/spinner.jpg'
import { useRecoilValue } from 'recoil';
import { activeButtonAtom } from '../store/atoms/activeButton';
import { data } from '../data';


function Card4() {
    const [activeId] = useRecoilValue(activeButtonAtom);
    const [indicator, setIndicator] = useState("")

    useEffect(() => {
       const value =  data[activeId]['awesome_oscillator']

       if(value > 110){

            if (value > 110 && value < 200){
                setIndicator('252px')
            }

       }else if (value < 0 ){

            setIndicator('174px')    

       }
       else if (value > 0 && value <110){
            if (value > 0 && value < 50){
                setIndicator('194px')
            }else if (value > 50 && value < 110){
                setIndicator('212px')
            }
       }
    })

  return (

    <>

    <div className='flex flex-col justify-center border-2 rounded-md w-300 h-300 mr-2 relative ' >

        <div className='m-4 text-sm'>
        Oscillators
        </div>

        <div className='relative'>
            <img src={bar4} className=' m-16 mt-10 w-80 relative' />
            <img src={spinner} className=' w-6 h-6 top-16  absolute' style={{ left: `${indicator}` }} />
        </div>


        <div className='flex justify-center mb-10' >

                    <div className='flex flex-col items-center justify-center text-sm'>

                        <div>
                            3
                        </div>

                        <div className=' p-1 pl-4 m-2 pr-4 bg-red-100 text-red-400 rounded-md border-red-200'>
                            Bearish
                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center text-sm'>

                        <div>
                            14
                        </div>

                        <div className='p-1 pl-4 m-2 pr-4 bg-gray-100 text-gray-400 rounded-md border-gray-200'>
                            Neutral
                        </div>

                    </div>

                    <div className='flex flex-col items-center justify-center text-sm'>

                        <div>
                            11
                        </div>

                        <div className=' p-1 pl-4 m-2 pr-4 bg-blue-100 text-blue-400 rounded-md border-blue-200'>
                            Bullish
                        </div>

                    </div>

                </div>

        <div className='flex flex-col '>

            <div className='flex justify-around text-sm'>

                <div className='mr-40'>
                    RSI(14)
                </div>  

                <div>
                    {Math.round(data[activeId]['rsi'])}
                </div>

            </div>


            <div className='flex justify-around text-sm mt-5 mb-5'>

                <div className=''>
                Stoch.%K (14, 3, 3)
                </div>  

                <div className='ml-24'>
                    {Math.round(data[activeId]['stoch_rsi_fast'])}
                </div>

            </div>

        </div>


        <div className='flex justify-end'>

            <button className='pr-8 mb-5 text-gray-300'>
                View Details
            </button>
        </div>
       

      
    </div>

</>
  )
}

export default Card4
