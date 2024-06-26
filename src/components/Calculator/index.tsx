'use client'
import type { NextComponentType, NextPageContext } from 'next'
import { Input } from '@/components/ui/input'
import { useEffect, useState } from 'react'
import { Separator } from '../ui/separator'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const cropFactors: { value: string; label: string }[] = [
    {
        label: 'Full-Frame (35mm)',
        value: '1.0',
    },
    {
        label: 'APS-C (Nikon, Sony, Pentax)',
        value: '1.5',
    },
    {
        label: 'APS-C (Canon)',
        value: '1.6',
    },
    {
        label: 'Micro Four Thirds (MFT)',
        value: '2.0',
    },
    {
        label: 'Medium Format',
        value: 'varies, commonly less than 1.0',
    },
    {
        label: '1-inch',
        value: '2.7',
    },
    {
        label: '1.5-inch',
        value: '2.0',
    },
    {
        label: '1/2.3-inch',
        value: '5.6',
    },
    {
        label: '1/1.7-inch',
        value: '4.5',
    },
    {
        label: '1/3.2-inch',
        value: '7.6',
    },
]

const Index: NextComponentType<NextPageContext> = () => {
    const [focalLength, setFocalLength] = useState(12)
    const [cropFactor, setCropFactor] = useState('')
    const [exposureTime, setExposureTime] = useState(Math.floor(500 / (focalLength ?? 1 * parseFloat(cropFactor) ?? 1)))

    useEffect(() => {
        if (focalLength >= 1 && cropFactor) setExposureTime(Math.floor(500 / (focalLength * parseFloat(cropFactor))))
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
                <Select value={cropFactor} onValueChange={setCropFactor}>
                    <SelectTrigger className='bg-black bg-opacity-60'>
                        <SelectValue placeholder='Select crop factor' />
                    </SelectTrigger>
                    <SelectContent className='bg-black bg-opacity-85 text-white'>
                        {cropFactors.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <Separator className='my-5' />
            <p className='line text-2xl font-semibold uppercase'>Exposure Time</p>
            <p className='text-[10rem] font-bold leading-[9rem]'>{exposureTime ? exposureTime : '-'}</p>
            <p className='mt-2 text-xl font-semibold uppercase'>seconds</p>
        </div>
    )
}

export default Index
