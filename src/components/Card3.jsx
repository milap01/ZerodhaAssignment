import React, { useEffect, useState } from 'react'
import bar2 from '../assets/bar2.jpg'
import spinner from '../assets/spinner.jpg'
import { useRecoilValue } from 'recoil';
import { activeButtonAtom } from '../store/atoms/activeButton';
import { data } from '../data';

function Card3() {
    const [activeId] = useRecoilValue(activeButtonAtom);
    const [indicator, setIndicator] = useState("")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const diff = data[activeId]['close'] - data[activeId]['ema20']
        if (diff > 0) {
            if (diff > 5 && diff < 10) {
                setIndicator('232px')
            }
            if (diff > 10 && diff < 30) {
                setIndicator('252px')
            }

            if (diff > 30) {
                setIndicator('272px')
            }
        } else if (diff < 0) {
            setIndicator('154px')
        }

    }, [activeId])

    function openView() {
        setOpen(prev => !prev)
    }

    return (
        <>

            <div className='flex flex-col justify-center border-2 rounded-md w-300 h-300 mr-2 relative ' >

                <div className='m-4 text-sm'>
                    Moving averages
                </div>

                <div className='relative'>
                    <img src={bar2} className=' m-16 mt-10 w-80 relative' />
                    <img src={spinner} className=' w-6 h-6 top-16  absolute' style={{ left: `${indicator}` }} />
                </div>


                <div className='flex justify-center mb-10' >

                    <div className='flex flex-col items-center justify-center text-sm'>

                        <div>
                            3
                        </div>

                        <div className=' p-1 pl-4 m-2 pr-4 bg-orange-100 text-orange-400 rounded-md border-orange-200'>
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
                            EMA(5)
                        </div>

                        <div>
                            {Math.round(data[activeId]['ema5'])}
                        </div>

                    </div>


                    <div className='flex justify-around text-sm mt-5 mb-5'>

                        <div className='mr-40'>
                            SMA(5)
                        </div>

                        <div>
                            {Math.round(data[activeId]['sma5'])}
                        </div>

                    </div>

                    {
                        open ? Object.entries(data[activeId]).filter(item => item[0].startsWith('ema') || item[0].startsWith('sma')).map(item =>


                        (
                            <>

                                <div className='flex justify-around text-sm mt-5 mb-5'>

                                    <div className='mr-40'>
                                        {item[0].toUpperCase()}
                                    </div>

                                    <div>
                                        {Math.round(data[activeId]['sma5'])}
                                    </div>

                                </div>

                            </>
                        )


                        ) : ""
                    }

                </div>

                <div className='flex justify-end'>

                    <button onClick={openView} className='pr-8 mb-5 text-gray-300'>
                        View Details
                    </button>
                </div>



            </div>

        </>
    )
}

export default Card3
