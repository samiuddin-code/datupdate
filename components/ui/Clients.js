import { SwiperSlide } from "swiper/react";
import SwiperComponent from '@/swiper/SwiperComponent'
import GeneralImage from '@/ui/ExternalImage';
import SectionHeader from '@/ui/SectionHeader'
const Clients = ({ data }) => {
    return (
        
        <section className="py-10 lg:py-10 bg-white">
        <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
            <div className="w-full interactive-element top">
                <h2 className="mb-16 text-3xl font-semibold capitalize md:text-4xl ">Prestigious clients</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 last:mb-0 mb-8 gap-x-8 gap-y-4">

                {
                    data.map((item, index) => (
                        <div key={`client-${index}`} className="shadow-none flex flex-col justify-center items-center bg-white bg-opacity-0 transition-all duration-300 ease-linear h-full interactive-element top">
                            <div className="mb-4 mt-4 w-2/3 h-2/3 relative overflow-hidden">
                            <GeneralImage className="transform scale-100 group-hover:scale-110 transition-all duration-300 custom-transition" src={item.image} layout="responsive" alt={item.imageAlt} width={400} height={300} objectFit="cover" />
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
      </section>
    )
}
export default Clients