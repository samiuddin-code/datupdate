import { Chevron, ChevronLeft } from "@/icons/UtilIcons"
import LinkButton from '@/ui/LinkButton'

const SwiperOptions = (props) => {
    const {
        activeSlide, slidesLength, widthFixed, hideOptions,
        className
    } = props

    return (
        <div className={`${hideOptions ? "hidden" : "w-full flex-col sm:flex-col lg:flex lg:flex-row justify-between"} lg:px-6 mb-12 mt-4 lg:mt-6 interactive-element top swiper-options ${className}`}>
            
            <div className="w-6/12 lg:w-1/12 lg:flex items-center text-sm">
                <span className="font-semibold inline-block">
                    {activeSlide}
                </span>
                <span className="font-semibold inline-block h-1 w-8 bg-gray-200 mx-4" />
                <span className="font-semibold inline-block">
                    {slidesLength}
                </span>
            </div>
            
            <div className="hidden lg:flex w-10/12 px-8 items-center py-2">
                <div className="w-full h-1 bg-gray-200 relative">
                    <span className="block bg-gray-900 absolute top-0 left-0 h-full custom-transition transition-all duration-300" style={{ width: `${widthFixed}%` }} />
                    <span className="sr-only">{Math.round(widthFixed)}% of carousel</span>
                </div>
            </div>

            <div className="w-6/12 lg:w-1/12 flex justify-end lg:justify-between px-0 absolute bottom-4 lg:bottom-0 lg:static lg:top-4 right-4 z-10">
                <div className="mr-4 cursor-pointer flex justify-center items-center swiper-prev-button">
                    <span className="pointer-events-none">
                        <ChevronLeft />
                    </span>
                </div>
                <div className="cursor-pointer flex justify-center items-center swiper-next-button">
                    <span className="pointer-events-none">
                        <Chevron />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SwiperOptions
