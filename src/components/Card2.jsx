import React, { useEffect, useState } from 'react'
import bar3 from '../assets/bar3.jpg'
import { useRecoilValue } from 'recoil';
import { activeButtonAtom } from '../store/atoms/activeButton';
import spinner2 from  '../assets/spinner2.jpg'
import { resData } from '../data';

function Card2() {

    const [activeId] = useRecoilValue(activeButtonAtom);
    const [indicator,setIndicator] = useState("") 

    useEffect(() => {

        const data = resData[activeId]
        const close= data['close']
        const supports = [data['s1'],data['s2'],data['s3']]
        const resistances = [data['r1'],data['r2'],data['r3']]
        

        const distancesToSupports = supports.map(level => Math.abs(close - level));
        const distancesToResistances = resistances.map(level => Math.abs(close - level));
        
        // Find the nearest support and resistance levels
        const nearestSupportIndex = distancesToSupports.indexOf(Math.min(...distancesToSupports));
        const nearestResistanceIndex = distancesToResistances.indexOf(Math.min(...distancesToResistances));
        const nearestSupport = supports[nearestSupportIndex];
        const nearestResistance = resistances[nearestResistanceIndex];
        
        // Determine the direction of movement based on the closest levels
        const direction = close > nearestSupport ? 'up' : 'down';
        
        // Calculate the magnitude of movement
        const magnitude = direction === 'up' ? nearestResistance - close : close - nearestSupport;

        console.log(magnitude);

        if (magnitude < 54 && magnitude > 0){
            setIndicator('54px')
        }else{
            setIndicator(`${magnitude}px`)
        }

        
       

    },[activeId])

    return (
        <>


            <div className='flex flex-col justify-center border-2 rounded-md w-300 h-300 mr-2 relative ' >

                <div className='m-4 text-sm'>
                Support & Resistance
                </div>

                <div className='relative'>
                    <img src={bar3} className=' ml-16 mr-16 mt-10 w-80 relative' />
                    <img src={spinner2} className=' w-6 h-6 top-16  absolute' style={{ left: `${indicator}` }} />
                </div>

                <div className='flex justify-between text-sm ml-16 mr-16 mb-20'>
                    <div className='pl- pr-2 '>
                            S3
                    </div>

                    <div className='pl-2 pr-2 '>
                            S2
                    </div>

                    <div className='pl-2 pr-2 '>
                            S1
                    </div>

                    <div className='pl-2 pr-2 '>
                            R1
                    </div>

                    <div className='pl-2 pr-2 '>
                    R2
                    </div>
                           
                    <div className='pl-2 pr-2 '>
                    R3
                    </div>
                </div>



                <div className='flex justify-center text-md '>

                    <div className='pl-12 pr-10 pt-4'>

                        <div>
                            {Math.round(resData[activeId]['s1'])}
                        </div>

                        <div className='text-gray-300 text-lg' style={{ fontSize: '12px' }}>
                            S1
                        </div>

                    </div>

                    <div className='pl-12 pr-12 pt-4'>

                        <div>
                            {Math.round(resData[activeId]['s2'])}
                        </div>

                        <div className='text-gray-300 text-lg' style={{ fontSize: '12px' }}>
                            S2
                        </div>

                    </div>

                    <div className='pl-12 pr-12 pt-4'>

                        <div>
                            {Math.round(resData[activeId]['s3'])}
                        </div>

                        <div className='text-gray-300 text-lg' style={{ fontSize: '12px' }}>
                           S3
                        </div>

                    </div>

                </div>

                <div className='flex justify-center text-md '>

                    <div className='pl-12 pr-10 pt-4'>

                        <div>
                            {Math.round(resData[activeId]['r1'])}
                        </div>

                        <div className='text-gray-300 text-lg' style={{ fontSize: '12px' }}>
                            R1
                        </div>

                    </div>

                    <div className='pl-12 pr-12 pt-4'>

                        <div>
                            {Math.round(resData[activeId]['r2'])}
                        </div>

                        <div className='text-gray-300 text-lg' style={{ fontSize: '12px' }}>
                            R2
                        </div>

                    </div>

                    <div className='pl-12 pr-12 pt-4'>

                        <div>
                            {Math.round(resData[activeId]['r3'])}
                        </div>

                        <div className='text-gray-300 text-lg' style={{ fontSize: '12px' }}>
                           R3
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Card2
