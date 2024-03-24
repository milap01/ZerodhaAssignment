import React, { useEffect, useState } from 'react';
import bar1 from '../assets/bar1.jpg'
import spinner from '../assets/spinner.jpg'
import { useRecoilValue } from 'recoil';
import { activeButtonAtom } from '../store/atoms/activeButton';
import { data } from '../data';

function Card() {

    const [activeId] = useRecoilValue(activeButtonAtom);
    const [indicator, setIndicator] = useState("")

    useEffect(() => {

        if (data[activeId]['rsi'] > 48 && data[activeId]['rsi'] < 52) {
            setIndicator("212px")
        }
        else if (data[activeId]['rsi'] > 55) {
            if (data[activeId]['rsi'] > 55 && data[activeId]['rsi'] < 60) {
                setIndicator("272px")
            }
            else if (data[activeId]['rsi'] > 60 && data[activeId]['rsi'] < 70) {
                setIndicator("292px")
            }
        }
        else if (data[activeId]['rsi'] < 48) {
            if (data[activeId]['rsi'] > 40 && data[activeId]['rsi'] < 48) {
                setIndicator("174px")
            }
            else if (data[activeId]['rsi'] > 30 && data[activeId]['rsi'] < 40) {
                setIndicator("154px")
            }
        }

    }, [activeId])

    return (
        <>

            <div className='flex flex-col justify-center border-2 rounded-md w-300 h-300 mr-2 relative ' >

                <div className='m-4 text-sm'>
                    Summary
                </div>

                <div className='relative'>
                    <img src={bar1} className=' m-16 mt-10 w-80 relative' />
                    <img src={spinner} className=' w-6 h-6 top-16  absolute' style={{ left: `${indicator}` }} />
                </div>


                <div className='flex justify-center' >

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

                        <div className=' p-1 pl-4 m-2 pr-4 bg-green-100 text-green-400 rounded-md border-green-200'>
                            Bullish
                        </div>

                    </div>

                </div>

                <div className='flex justify-center text-md '>

                    <div className='pl-12 pr-10 pt-4'>

                        <div>
                            {Math.round(data[activeId]['ema20'])}
                        </div>

                        <div className='text-gray-300 text-sm' style={{ fontSize: '10px' }}>
                            EMA (20)
                        </div>

                    </div>

                    <div className='pl-12 pr-12 pt-4'>

                        <div>
                            {Math.round(data[activeId]['sma20'])}
                        </div>

                        <div className='text-gray-300 text-sm' style={{ fontSize: '10px' }}>
                            SMA (20)
                        </div>

                    </div>

                    <div className='pl-12 pr-12 pt-4'>

                        <div>
                            {Math.round(data[activeId]['rsi'])}
                        </div>

                        <div className='text-gray-300 text-sm' style={{ fontSize: '10px' }}>
                            RSI (14)
                        </div>

                    </div>

                </div>

                <div className='flex justify-center text-md  mb-6'>

                    <div className='pl-8 pr-8 pt-4'>

                        <div>
                            {Math.round(data[activeId]['awesome_oscillator'])}
                        </div>

                        <div className='text-gray-300 text-sm' style={{ fontSize: '10px' }}>
                        Awesome Osc.
                        </div>

                    </div>

                    <div className='pl-8 pr-8 pt-4'>

                        <div>
                            {Math.round(data[activeId]['macd'])}
                        </div>

                        <div className='text-gray-300 text-sm' style={{ fontSize: '10px' }}>
                            Macd (12, 26, 9)
                        </div>

                    </div>

                    <div className='pl-8 pr-8 pt-4'>

                        <div>
                            {Math.round(data[activeId]['cci'])}
                        </div>

                        <div className='text-gray-300 text-sm' style={{ fontSize: '10px' }}>
                        CCI (20)
                        </div>

                    </div>

                </div>

            </div>

        </>
    )

}

export default Card
