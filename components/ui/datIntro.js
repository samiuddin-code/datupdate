import Moment from 'react-moment';
import Link from 'next/link';
import SectionHeader from '@/ui/SectionHeader';
import Image from 'next/image'

const datIntro = () => {
    return (
        <section className="py-8 lg:py-12 bg-[#ECF1F4]">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 lg:px-0">
                <h2 class="font-normal mb-6 text-3xl capitalize md:text-4xl font-neuehaas text-center">We are a top UAE engineering firm</h2>
                <p class="font-normal mb-6 text-lg capitalize md:text-normal font-neuehaas text-center text-gray-700 max-w-three-lines">DAT was founded in the year 2014 and since then we upholds principles that motivate us to layout innovative architectural and engineering design solutions seizing avant-garde results for the best benefit of our clients. </p>

                <div className="flex flex-row lg:flex-row mt-10">
                    <div className="w-full lg:pr-8 xl:pr-4 grid grid-cols-1 md:grid-cols-3 gap-x-8">
                    <div className="mb-10 last:mb-0 group interactive-element top">
                    <div className="h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden">
                        <Image
                            src="/datrec.webp"
                            alt="DAT"
                            layout="fill"
                            
                            className="filter grayscale transition duration-300 ease-in-out group-hover:filter-none cursor-pointer group-hover:scale-125"
                        />                        
                    </div>
                    </div>

                    <div className=" mb-10 last:mb-0 group interactive-element top">
                    <div className="h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden">
                        <Image
                            src="/datstaff.webp"
                            alt="DAT"
                            layout="fill"
                            
                            className="filter grayscale transition duration-300 ease-in-out group-hover:filter-none cursor-pointer group-hover:scale-125"
                        />                        
                    </div>
                    </div>

                    <div className=" mb-10 last:mb-0 group interactive-element top">
                    <div className="h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden">
                        <Image
                            src="/meetingroom.webp"
                            alt="DAT"
                            layout="fill"
                            
                            className="filter grayscale transition duration-300 ease-in-out group-hover:filter-none cursor-pointer group-hover:scale-125"
                        />                        
                    </div>
                    </div>
                    </div>
                </div>
                <p className='w-full text-medium font-normal text-center'>DAT Headquarter, Dubai</p>
            </div>
        </section>
    )
}
export default datIntro
