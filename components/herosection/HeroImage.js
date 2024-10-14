import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper';
import 'swiper/swiper-bundle.css';
import SwiperComponent from '@/swiper/SwiperComponent';
import ExternalImage from '@/ui/ExternalImage';
import Style from '@/css/slider.module.scss';
import LinkButtonForward from '@/ui/LinkButtonForward'
import LinkButtonPrevious from '@/ui/LinkButtonPrevious'
import { useEffect, useState } from 'react';

const HeroImage = ({ sliderData }) => {

  const [animation, setAnimation] = useState({
    prevIndex: -1,
    curIndex: 0,
  });

  const handleSlideChange = (swiper) => {
    setAnimation({
      prevIndex: animation.curIndex,
      curIndex: swiper.activeIndex,
    });
  };

  useEffect(() => {
    // Cleanup animation classes after the animation ends
    const timeout = setTimeout(() => {
      document.querySelectorAll('.slide-up, .slide-down').forEach(el => el.classList.remove('slide-up', 'slide-down'));
    }, 4500); // Match this to the duration of the animation

    return () => clearTimeout(timeout);
  }, [animation.curIndex]);

  return (
    <section className="relative">
      <SwiperComponent
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        //pagination={{ clickable: true }}
        slidesPerView={1}
        effect="fade"
        autoplay={{ delay: 4500 }}
        spaceBetween={0}
        removeOptions={true}
        onSlideChange={handleSlideChange}
      >
        {sliderData.data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={`${Style.slider__height} flex flex-col w-full relative`}>
              <ExternalImage
                key={item.link}
                src={item.image}
                alt={item.link}
                layout="fill"
                objectFit="cover"
                priority={index === 0}
                loading="eager"
              />
              <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 z-20 lg:pt-24">
                <div className="text-white pl-8 interactive-slider">
                  <span className="text-sm uppercase block font-neuehaas font-light">Crafting Architecture</span>
                  <h2 className="w-full text-3xl lg:text-4xl xl:text-5xl md:leading-12 lg:leading-normal font-semibold relative z-10 font-neuehaas">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* <div style={{ top: 'auto', bottom: '0' }} className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 lg:pt-24">
                  <div className="text-white pl-8 interactive-slider">
                    <span className="text-sm uppercase block font-neuehaas font-light">Crafting Architecture</span>
                    <h2 className="w-full text-3xl lg:text-4xl xl:text-5xl md:leading-12 lg:leading-normal font-semibold relative z-10 font-neuehaas slide-target">
                      {item.title}
                    </h2>
                  </div>
              </div> */}

              {/* <div style={{ top: 'auto', bottom: '0' }} className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 lg:pt-24">
                <div className="text-white pl-8 interactive-slider">
                  <span className="text-sm uppercase block font-neuehaas font-light">Crafting Architecture</span>
                  <h2 className={`text-3xl lg:text-4xl xl:text-5xl md:leading-12 lg:leading-normal font-semibold relative z-10 font-neuehaas ${animation.prevIndex === index ? 'slide-down' : ''} ${animation.curIndex === index ? 'slide-up' : ''}`}>
                    {item.title}
                  </h2>
                </div>
              </div> */}
               
              {/* <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-2/3 top-2/3 left-1/2 z-20 lg:pt-24 sm:top-auto sm:bottom-0 sm:-translate-y-2/3">
                <div className="text-white lg:pl-8 interactive-slider">
                  <span className="text-sm uppercase block font-neuehaas font-light">Crafting Architecture</span>
                  <h2 className="w-full text-3xl lg:text-4xl xl:text-5xl md:leading-12 lg:leading-normal font-semibold relative z-10 font-neuehaas">
                    {item.title}
                  </h2>
                </div>
              </div> */}
              
              <div className={`${Style.slider__overlay} left-0 top-0 w-full h-full absolute`} />

            </div>
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 lg:pt-24">
        <div className="text-white">
        <LinkButtonPrevious text="" icon="true" classList="h-16 border-2 border-gray-900 overflow-hidden swiper-button-prev custom-swiper-button"/>
        <LinkButtonForward text="" icon="true" classList="h-16 border-2 border-gray-900 overflow-hidden swiper-button-next custom-swiper-button"/>
        {/* <div className="swiper-button-prev custom-swiper-button" />
        <div className="swiper-button-next custom-swiper-button" /> */}
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
