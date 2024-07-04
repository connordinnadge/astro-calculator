'use client'
import React from 'react'
import { SparklesCore } from '@/components/ui/sparkles'
import Calculator from '@/components/Calculator'
import { Separator } from '@/components/ui/separator'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import Link from 'next/link'

export function PageComp() {
    return (
        <div className='relative flex h-[100vh] w-full flex-col items-center justify-center overflow-hidden bg-black px-5 text-center'>
            <div className='absolute inset-0 h-screen w-full'>
                <SparklesCore
                    id='tsparticlesfullpage'
                    background='transparent'
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className='h-full w-full'
                    particleColor='#FFFFFF'
                />
            </div>
            <Card className='relative z-10 rounded-2xl border-slate-500 bg-black bg-opacity-70 text-center text-white'>
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
        </div>
    )
}
