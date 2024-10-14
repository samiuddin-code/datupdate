import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"
import Layout from "@/components/Layout"
import Meta from "@/components/Meta"
import CallImage from '@/images/icons/call.svg'
import SectionHeader from "@/ui/SectionHeader"
import Message from '@/images/icons/email.svg'
import { ClipBoard } from "@/ui/ClipBoard"
import { trimSpaces } from "@/helpers/helpers"
import ExternalImage from "@/ui/ExternalImage"
import InputBox from "@/forms/InputBox"
import SubmitButton from "@/ui/SubmitButton"
import fetchData from "@/apiData/resolver";
import { Chevron } from "@/icons/UtilIcons";
import Styles from "@/css/card.module.scss";
import LinkButton from "@/components/ui/LinkButton"
import CallusButton from "@/components/ui/CallusButton"
import MailusButton from "@/components/ui/MailusButton"
import HeroSection from '@/herosection/HeroSection'

const Contact = ({ response }) => {
    const [contactData, blogData, clientData, settingsWrap] = response;
    const { siteSetting, branchLocations } = settingsWrap.data;
    const { bannerData } = contactData.data;
    const [formData, setFormData] = useState({});
    const [formMessage, setFormMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState({});
    const [formSubmitting, setFormSubmitting] = useState(false);
    const router = useRouter();
    const sendMessage = (event) => {
        event.preventDefault();
        setFormSubmitting(true);
        axios.post(`/sendContactRequest`, formData).then(res => {
            let formMessage;
            let obj = {};
            if (res.data.errorMsg) {
                res.data.errorMsg.map(item => (
                    obj[item.param] = item.msg
                ))
            }
            if (res.data.success) {
                router.push({
                    pathname: '/thankyou',
                    query: { message: res.data.msg }
                });
            } else {
                formMessage = <span className="text-[#ff0000]">{res.data.msg}</span>
            }
            setFormMessage(formMessage);
            setErrorMessage(obj);
            setFormSubmitting(false);
        }).catch(error => {
            console.log(error);
            setFormMessage(<span className="text-[#ff0000]">Please fix the above error</span>);
            setFormSubmitting(false);
        })
    }
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Layout apiData={response} >
            <Meta title={contactData.data.seoData.title} description={contactData.data.seoData.description} keywords={contactData.data.seoData.keywords} image={contactData.data.seoData.image} />
            <HeroSection title={bannerData.highlight} folder="uploads/generalSections" image={bannerData.image} alt={bannerData.highlight} description={bannerData.shortInfo} />
            
            <section className="pb-16 pt-16 lg:pb-20" id="contactForm">
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 interactive-element top">
                    {/* <SectionHeader classList="mb-10" heading="Let's discuss your project" span="Powered by engineers" animate={false} /> */}
                    <SectionHeader classList="mb-10" heading="Let's discuss your project" span="" animate={false} />
                    <div className="grid lg:grid-cols-2 lg:gap-16">
                    <form method="post" autoComplete="off" onSubmit={sendMessage} className={(formSubmitting ? "pointer-events-none" : "mb-10")}>
                        
                            <div className="grid grid-cols-1 gap-y-8">
                                <InputBox rounded={false} labelText="Full Name" onChange={changeHandler} name="name" error={errorMessage} />
                                <InputBox rounded={false} labelText="Email" type="email" onChange={changeHandler} name="email" error={errorMessage} />
                                <InputBox rounded={false} labelText="Contact Number" onChange={changeHandler} name="contactNumber" error={errorMessage} />
                                <InputBox rounded={false} textareaField={true} classList="h-100" name="message" onChange={changeHandler} labelText="Type your message here" resize="resize-none" error={errorMessage} />
                            </div>
                            
                        
                        <div className="mt-16">
                            <SubmitButton type="submit" text="Send enquiry" animateIcon={formSubmitting} classList={(formSubmitting ? "pointer-events-none bg-gray-50" : " border")} />
                            {
                                formMessage &&
                                <span className="mt-4 block">{formMessage}</span>
                            }
                        </div>
                    </form>

                    {/* <div className="p-6 mb-8 lg:mb-0 shadow custom-transition duration-300 transition-all hover:shadow-lg"> */}
                    <div className="lg:p-6 mb-8 lg:mb-0 custom-transition duration-300 transition-all lg:border-l border-gray-300">      
                        <div className="">
                            <h2 className="font-normal text-2xl mb-4 mt-4">Call Us</h2>
                            <p className="text-gray-800 mb-4">Call us any time from 08:00 till 18:30 Monday - Friday</p>
                            <CallusButton classList="border text-gray-500 py-3" text="Call Us" link={`tel:${siteSetting.phoneNumber.replace(/\s/g, '')}`} />
                        </div>

                        <div className="">
                            <h2 className="font-normal text-2xl mb-4 mt-4">Mail Us</h2>
                            <p className="text-gray-800 mb-4">Email us anytime, we usually reply within 24 hours</p>
                            <MailusButton classList="border text-gray-500 py-3" text="Mail Us" link={`mailto:${siteSetting.email}`} />
                        </div>

                    </div>
                    </div>
                </div>
            </section>
            
            <section className="py-8 lg:py-8 relative lg:animate-to-top">
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 relative">
                    <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    {
                        branchLocations.map(item => (
                            <div className="interactive-element top mb-8 md:mb-0 relative">
                                <a href={item.mapLocation} target="_blank" className="block relative overflow-hidden">
                                    <ExternalImage key={branchLocations.title} alt={branchLocations.title} src={item.image} folder="uploads/locations" layout="responsive" width={352} height={260} objectFit="cover" className="filter blur-none group-hover:blur-sm transition-all transform duration-300 hover:scale-125" />
                                </a>
                                <div className="absolute bottom-0 left-0 w-6/12 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
        <h2 className="mb-2 text-xl font-medium">{item.title}</h2>
        <p className="text-sm mb-2">{item.address}</p>
        <a href={`tel:${trimSpaces(item.contactNumber)}`} rel="noopener noreferrer" target="_blank" className="text-sm">
            {item.contactNumber}
        </a>
    </div>

    <div className="absolute bottom-[50px] right-0 p-4 bg-white rounded-full h-[70px] w-[70px] text-center flex items-center mr-[10px]">
        <a href={item.mapLocation} target="_blank" rel="noopener noreferrer" className="tracking-widest text-xs group-hover:text-green-900 uppercase leading-4 relative group overflow-hidden inline-block transition-all duration-300 custom-transition">
             View Map
            <span className="font-medium lg:font-normal text-gray-900 relative z-10 transform lg:top-12 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-0 transition-all duration-300">View google map</span>
            <span className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 custom-transition z-10 text-gray-900 w-4 lg:left-0 group-hover:right-4 lg:group-hover:left-btn-inset">
                <span className="text-4xl leading-4 relative flex items-center justify-center group-hover:text-green-900 transition-all duration-300 custom-transition">
                    <Chevron />
                </span>
            </span>
        </a>
    </div>

                                {/* <div className="pt-6">
                                    <div className={Styles.card__contact__height + " relative"}>
                                        <h2 className="mb-4 text-xl font-medium cursor-pointer">{item.title}</h2>
                                        <p className="text-gray-700 text-sm mb-4">{item.address}</p>
                                        <a href={`tel:${trimSpaces(item.contactNumber)}`} rel="noopener noreferrer" target="_blank" className="text-gray-700 text-sm">{item.contactNumber}</a>
                                        <div className="absolute bottom-0 left-0">
                                            <a href={item.mapLocation} target="_blank" rel="noopener noreferrer" className="tracking-widest text-sm group-hover:text-green-900 uppercase leading-4 relative group overflow-hidden inline-block transition-all duration-300 custom-transition pr-8">
                                                <span className="font-medium lg:font-normal text-gray-900 relative z-10 transform lg:top-12 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-0 transition-all duration-300">View google map</span>
                                                <span className="absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 custom-transition z-10 text-gray-900 w-4 lg:left-0 group-hover:right-4 lg:group-hover:left-btn-inset">
                                                    <span className="text-4xl leading-4 relative flex items-center justify-center group-hover:text-green-900 transition-all duration-300 custom-transition">
                                                        <Chevron />
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        ))
                    }
                    </div>
                </div>
            </section>
            
        </Layout>
    )
}
export async function getServerSideProps() {
    const page = ['contactUsPage']
    const response = await fetchData(page);
    /* if response not resolve move to 404 page */
    if (!response) {
        return {
            notFound: true,
        }
    }
    return { props: { response } };
}
export default Contact
