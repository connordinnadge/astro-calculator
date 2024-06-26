'use client'
import type { NextComponentType, NextPageContext } from 'next'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'

const Index: NextComponentType<NextPageContext> = () => {
    const [focalLength, setFocalLength] = useState(12)
    const [cropFactor, setCropFactor] = useState(1.6)
    const [exposureTime, setExposureTime] = useState(Math.floor(500 / (focalLength ?? 1 * cropFactor ?? 1)))

    useEffect(() => {
        if (focalLength >= 1 && cropFactor >= 0.1) setExposureTime(Math.floor(500 / (focalLength * cropFactor)))
    }, [focalLength, cropFactor])

    return (
        <div className='w-full'>
            <div className='my-2'>
                <p className='mb-2 font-semibold'>Focal Length (mm)</p>
                <Input
                    type='number'
                    value={focalLength}
                    onChange={(e) => setFocalLength(parseInt(e.target.value))}
                    min={1}
                    max={1000}
                    className='bg-black bg-opacity-60'
                />
            </div>
            <div className='my-2'>
                <p className='mb-2 font-semibold'>Crop Factor</p>
                <Input
                    className='bg-black bg-opacity-60'
                    type='number'
                    value={cropFactor}
                    onChange={(e) => setCropFactor(parseFloat(e.target.value))}
                    min={0.1}
                    max={10}
                />
            </div>
            <Separator className='my-5' />
            <p className='line text-2xl font-semibold uppercase'>Exposure Time</p>
            <p className='text-[10rem] font-bold leading-[9rem]'>{exposureTime ? exposureTime : '-'}</p>
            <p className='mt-2 text-xl font-semibold uppercase'>seconds</p>
        </div>
    )
}

export default Index
