import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
    <>
        <section class="relative bg-white overflow-hidden">
            <div class="py-20 md:py-28">
                <div class="container px-4 mx-auto">
                    <div class="flex flex-wrap xl:items-center -mx-4">
                        <div class="w-full md:w-1/2 px-4 mb-16 md:mb-0">
                            <h1 class="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">A small business is only as good as its tools.</h1>
                            <p class="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">We’re different. Flex is the only saas business platform that lets you run your business on one platform, seamlessly across all digital channels.</p>
                            <div class="flex flex-wrap">
                                <div class="w-full md:w-auto py-1 md:py-0 md:mr-4"><a class="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm" href="#"> View All Exercises </a></div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-4">
                            <div class="relative mx-auto md:mr-0 max-w-max">
                                <img class="relative rounded-7xl" src={HeroBannerImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default HeroBanner;
