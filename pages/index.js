import { SwiperSlide } from "swiper/react";
import Card from '@/ui/Card'
import CardProject from '@/ui/CardProject'
import SectionHeader from '@/ui/SectionHeader'
import Meta from '@/components/Meta'
import SwiperComponent from '@/swiper/SwiperComponent'
import GeneralSwiperComponent from '@/swiper/GeneralSwiperComponent'
import BlogSection from '@/blogs/BlogSection';
import ExternalImage from '@/ui/ExternalImage'
import GeneralImage from '@/ui/GeneralImage'
import DatIntro from '@/components/ui/datIntro'
import DatBanner from '@/components/ui/datBanner'
import HomeTabs from '@/components/ui/HomeTabs'
import KsaBanner from '@/components/ui/ksaBanner'
import Tabss from '@/components/ui/tabs'
import BannerSection from '@/banners/BannerSection'
import HeroImage from '@/herosection/HeroImage'
import FormsTabs from '@/ui/FormsTabs'
import LinkButton from '@/ui/LinkButton'
import SelectButton from '@/ui/SelectButton'
import Layout from '@/components/Layout';
import ModalButton from "@/components/ui/modals/ModalButton";
import fetchData from "@/apiData/resolver";
import ProjectSection from "@/components/projects/ProjectSection";
import LatestNewsSection from "@/components/latest-news/news-section";
import ClientSection from '@/footer/ClientSection'
import { Chevron, ChevronLeft } from "@/icons/UtilIcons"
import Image from 'next/image';
import React, { useState } from 'react';


// const items = [
//   {
//     title: "Design",
//     content: "In our company, building beautiful villas is our hallmark. We infuse each project with meticulous attention to detail and a fervent dedication to elegant design.",
//     image: "/accordion1.webp"
//   },
//   {
//     title: "Manage",
//     content: "Experience opulence and grandeur in this magnificent mansion boasting spacious interiors, elegant design elements, and premium finishes, creating a luxurious lifestyle.",
//     image:"/accordion2.webp"
//   },
//   {
//     title: "Build",
//     content: "Discover thoughtful layouts and functional design elements that optimize space, enhance natural light, and offer a harmonious flow between rooms, providing comfort and convenience for daily living.",
//     image:"/accordion3.png"
//   },
// ];



function Home({ response }) {
  const [homeSliders, homePage, clients, latestNews, projects, services, blogs] = response;
  const settingsWrap = response[response.length - 1];
  
  const { siteSetting } = settingsWrap.data;
  // const clientsDataWrap = response[response.length - 1];
  // const { clientsData } = clientsDataWrap.data;
  const { richText, whoWeAre, whyChooseUs, sectionAboveFooter, sectionWithImage, seoData } = homePage.data;

  const [activeForm, setActiveForm] = useState('');

  const handleButtonClick = (formType) => {
    setActiveForm(formType);
  };
return (
    <>
      <Layout modalForm={true} apiData={response}>

        <div className="scroll-container">
        <Meta title={seoData.title} description={seoData.description} keywords={seoData.keywords} image={seoData.image} />
        {/* Hero Image section */}
        <HeroImage sliderData={homeSliders} buttonText="View more info" buttonLink="#" description={true} />
        {/* Clients section */}
        
        {/* Latest News section */}
        {/* <LatestNewsSection latestNews={latestNews} /> */}
        {/* service / our expertise section */}
        <section className="py-16 lg:py-20 bg-gray-50">
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 lg:px-0">
            <div className="lg:px-8">
              {/* <SectionHeader span="Powered by engineers" classList="mb-4 w-full lg:mb-6 md:mb-6" heading="Our expertise" /> */}
              <SectionHeader span="" classList="mb-4 w-full lg:mb-6 md:mb-6" heading="Our expertise" />
            </div>
            <div className="lg:px-2 interactive-element top">
              <SwiperComponent
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 30
                  }
                }}
                autoplay={{
                  "delay": 3000,
                  "disableOnInteraction": false,
                  "pauseOnMouseEnter": true
                }}  >
                {services.data.rows.map((item, index) => (
                  <SwiperSlide className="h-full" key={`services-${index}`}>
                    <Card heading={item.title} hover={true} span={`0${index + 1}`} fixedHeight={true} buttonData={{ enabled: true, link: `/services/${item.slug}`, text: "Read more", icon: true }} interactive={false}>
                      <GeneralImage src={item.altImage} layout="responsive" className="transform scale-100 group-hover:scale-110 transition-all duration-300 custom-transition" alt={item.title} width={700} height={394} objectFit="cover" />
                    </Card>
                  </SwiperSlide>
                ))}
              
              </SwiperComponent>
        </div>
        <div className="flex justify-center md:justify-start items-center mt-4">
          <LinkButton text="View all services" link="/services" classList="bg-white" />
        </div>

        </div>
        </section>
        {/* projects section */}
        {/* <ProjectSection projects={projects} /> */}
        <KsaBanner />
        
        <section className="relative pt-16 lg:pt-20 bg-[#41554E]">
          <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 lg:px-0">
            <div className="lg:px-8">
              {/* <SectionHeader span="Powered by engineers" classList="mb-4 w-full lg:mb-6 md:mb-6" heading="Our expertise" /> */}
              <SectionHeader span="" classList="mb-4 w-full lg:mb-6 md:mb-6 text-center text-white" heading="Discover More Projects" />
            </div>
            <div className="lg:px-2 interactive-element top">
              <GeneralSwiperComponent
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 30
                  },
                  "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 30
                  }
                }}
                // autoplay={{
                //   "delay": 3000,
                //   "disableOnInteraction": false,
                //   "pauseOnMouseEnter": true
                // }}  
                >
                {projects.data.rows.map((item, index) => (
                  <SwiperSlide className="h-44 text-white" key={`projects-${index}`}>
                    <CardProject heading={item.title} hover={true} span={`0${index + 1}`} fixedHeight={true} buttonData={{ enabled: true, link: `/projects/${item.ProjectCategory.slug}/${item.slug}`, text: "", icon: true }} interactive={false}>
                    <div className="h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden transform duration-300 scale-100 hover:scale-125">
                    <Image
                        src={`${process.env.IMAGE_DOMAIN}/uploads/${item.altImage}`}
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    </div>
               
                    {/* <ExternalImage src={item.altImage} layout="fill" className="transform scale-100 group-hover:scale-110 transition-all duration-300 custom-transition w-[500px] h-[300px]" alt={item.title}  objectFit="cover" /> */}
   
                    </CardProject>
                  </SwiperSlide>
                ))}

              <div className={`w-full flex justify-between lg:px-6 mb-12 mt-4 lg:mt-6 interactive-element top swiper-options`} >
                  <div className="flex interactive-element top mt-4">
                      <LinkButton text="View all Projects" link="/projects" classList="bg-white" />
                  </div>
                <div className="w-full lg:w-1/12 flex justify-end lg:justify-between px-0 absolute lg:static top-4 right-4 z-10">
                    <div className="mr-4 cursor-pointer bg-white bg-opacity-70 lg:bg-opacity-0 flex justify-center items-center p-2 swiper-prev-button">
                        <span className="pointer-events-none text-gray-900">
                            <ChevronLeft />
                        </span>
                    </div>
                    <div className="cursor-pointer bg-white bg-opacity-70 lg:bg-opacity-0 flex justify-center items-center p-2 swiper-next-button">
                        <span className="pointer-events-none text-gray-900">
                            <Chevron />
                        </span>
                    </div>
                </div>
              </div>
              </GeneralSwiperComponent>
            </div>
            
          </div>
          
        </section>
      
        {/* banner section */}
        {/* <BannerSection content={richText.highlight} /> */}
        {/* who we are & why choose us section */}
        {/* <section className="pt-16 lg:pt-20 relative interactive-element top">
           <div className="lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto lg:px-8">
            <div className="relative flex flex-col mb-20 lg:flex-row">
              <div className="w-full lg:pr-28 2xl:pr-40 lg:w-5/12 ">
                <h2 className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8 lg:px-0 mb-16 text-xl lg:text-2xl xl:text-3xl leading-tight ">{sectionWithImage[0].highlight}</h2>
                <div className="lg:absolute lg:right-0 lg:w-7/12 lg:top-0 overflow-hidden">
                  <div className="relative h-80 mb-10">
                    <ExternalImage src={sectionWithImage[0].image} className="hover:scale-125 transform transition-all duration-300 custom-transition" layout="fill" objectFit="cover" folder="uploads/generalSections" alt={sectionWithImage[0].imageAlt} />
                  </div>
                </div>
                <p className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8 lg:px-0 text-lg leading-8 mb-10 2xl:mb-16">{sectionWithImage[0].shortInfo}</p>
                <div className="lg:absolute lg:right-0 lg:w-7/12 lg:bottom-0 overflow-hidden">
                  <div className="relative h-80 mb-10 lg:mb-0">
                    <ExternalImage src={sectionWithImage[1].image} layout="fill" className="hover:scale-125 transform transition-all duration-300 custom-transition" folder="uploads/generalSections" objectFit="cover" alt={sectionWithImage[1].imageAlt} />
                  </div>
                </div>
                <p className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8 lg:px-0 text-lg leading-8">{sectionWithImage[1].highlight}</p>
              </div>
            </div>
          </div> */}
          {/* <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8 interactive-element top">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-8">
              <div className="bg-gray-50 py-12 px-8 lg:pt-10 lg:pr-12 lg:pl-12 lg:pb-12">
                <h2 className="text-3xl  capitalize md:text-4xl ">{whoWeAre.title}</h2>
                <div className="h-0.5 w-16 bg-gray-200 mt-2 mb-8" />
                <div className="text-sm">
                  <p className="mb-6">{whoWeAre.highlight}</p>
                  {whoWeAre.shortInfo}
                </div>
              </div>
              <div className="bg-gray-50 py-12 px-8 lg:pt-10 lg:pr-12 lg:pl-12 lg:pb-12">
                <h2 className="text-3xl  capitalize md:text-4xl ">{whyChooseUs.title}</h2>
                <div className="h-0.5 w-16 bg-gray-200 mt-2 mb-8" />
                <div className="text-sm">
                  <p className="mb-6">{whyChooseUs.highlight}</p>
                  {whyChooseUs.shortInfo}
                </div>
              </div>
            </div>
          </div> 
        </section>*/}
        {/* blogs section */}
        <DatBanner />
        <DatIntro />
        <HomeTabs />
        <FormsTabs />
        <Tabss />

        {/* <section className="py-16 lg:py-20 relative bg-gray-50 interactive-element top">
          <div className="lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl lg:px-8 lg:mx-auto flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-7/12 lg:pr-8 md:text-white">
              <div className="max-w-lg sm:max-w-xl md:max-w-2xl px-8 mx-auto lg:max-w-auto lg:px-0">
                <h1 className="relative font-bold uppercase block mb-6 text-sm lg:tracking-widest z-10">{sectionAboveFooter.highlight}</h1>
                <h2 className="relative mb-10 text-3xl lg:text-5xl lg: z-10 leading-none">{sectionAboveFooter.title} </h2>
              </div>
              <div className="relative mb-10 md:mb-0 md:absolute md:top-0 md:left-0 h-72 md:h-full w-full z-0">
                <ExternalImage alt={sectionAboveFooter.imageAlt} folder="uploads/generalSections" src={sectionAboveFooter.image} layout="fill" objectFit="cover" />
              </div>
              <div className="relative max-w-lg sm:max-w-xl md:max-w-2xl px-8 mx-auto lg:max-w-auto lg:px-0 text-sm lg:pr-36 leading-5 z-10" dangerouslySetInnerHTML={{ __html: sectionAboveFooter.shortInfo }} />
            </div>
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl pl-8 pr-8 lg:pr-0 ml-auto mr-auto lg:mr-0 w-full lg:w-4/12 lg:text-right mt-10 relative z-10">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 lg:w-64 ml-auto">
                <div>
                  <LinkButton text="Send Enquiry" icon="true" link="/contact#contactForm" classList="bg-white w-full" />
                </div>
                <div>
                  <ModalButton btnClass="bg-white w-full" btnText="Book a meeting" />
                </div>
                <div>
                  <LinkButton text="Send whatsapp" target="_blank" rel="noopener noreferrer" link={`https://api.whatsapp.com/send?phone=${siteSetting.whatsAppNumber}&text=Hi%20DAT!`} icon="true" classList="bg-white w-full" />
                </div>
                <div>
                  <LinkButton text="Call us" target="_blank" rel="noopener noreferrer" icon="true" link={`tel:${siteSetting.phoneNumber}`} classList="bg-white w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>  
        {/* clients section */}
        <ClientSection data={clients.data}/> 
        <BlogSection data={blogs.data.rows} />
        </div>

      </Layout>
      
    </>
  )
}
export async function getServerSideProps() {
  /* api endpoints url */
  let datas = [
    `/homeSliders`, `/homePage`, `/clients`, `blogs?category=2&latestOnly=yes`, `/projects?limit=6&page=1`,
    `/services?limit=15&page=1`, `/blogs?category=3`
  ]
  
  /* response after resolving promise */
  const response = await fetchData(datas);
  /* if response not resolve move to 404 page */
  if (!response) {
    return {
      notFound: true,
    }
  }
  return {
    props: { response }, // will be passed to the page component as props
  }
}
export default Home
