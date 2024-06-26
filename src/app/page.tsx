'use client'
import Calculator from '@/components/Calculator'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import bgImage from '../../public/phil-botha-a0TJ3hy-UD8-unsplash.jpg'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export default function HomePage() {
    return (
        <main>
            <section className='relative flex h-[100vh] w-full flex-col items-center justify-center px-3 py-5 text-center'>
                <Image
                    src={bgImage}
                    alt='Astro Photography Photo by Albert Antony on Unsplash'
                    layout='fill'
                    objectFit='cover'
                    className='z-0'
                    priority={true}
                />
                <Card className='relative z-10 rounded-2xl border-slate-500 bg-black bg-opacity-70 text-white'>
                    <CardHeader>
                        <h1 className='text-3xl font-semibold'>Astro Photography Exposure Calculator</h1>
                        <p>Get precise exposure times for your astro photography needs</p>
                    </CardHeader>
                    <CardContent>
                        <Separator />
                        <Calculator />
                    </CardContent>
                </Card>
                <p className='absolute bottom-10 w-full text-xs text-slate-600'>
                    Created by{' '}
                    <Link href='https://connordinnadge.com' target='_blank' className='underline'>
                        Connor Dinnadge
                    </Link>
                </p>
            </section>
        </main>
    )
}
