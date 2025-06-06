import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Button } from './ui/button'

function HeroSection() {
    return (
        <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                {/* <p>/ your dream job today!</p> */}

                <h1 className='sm:text-4xl lg:text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2] '>Dream Jobs</span></h1>
                <p>Connecting talent with opportunity — your career journey starts here.</p>
                <div className='flex sm:w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input type="text"
                        placeholder='Find your dream jobs'
                        className='outline-none border-none w-full'
                    />
                    <Button className='rounded-r-full bg-[#6A38C2] '>
                        <Search
                            className='h-5 w-5'
                        />
                    </Button>
                </div>
            </div>


        </div>
    )
}

export default HeroSection