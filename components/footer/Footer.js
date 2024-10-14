import Link from 'next/link'
import DIcon from '@/icons/DIcon'
import { ClipBoard } from '@/ui/ClipBoard'
import Logo from '@/icons/Logo'
import AddressSection from '@/footer/AddressSection'
import UsefullLink from '@/footer/UsefullLink'
import LinkButton from '@/ui/LinkButton'
import ClientSection from '@/footer/ClientSection'
import Message from '@/images/icons/contact-fill.svg'
import SocialLists from '@/ui/SocialLists'
import FooterSocialLists from '@/ui/FooterSocialLists'
import Image from 'next/image'




export default function Footer({settingsWrap,clientsData}) {
    //const {siteSetting,branchLocations} = settingsWrap.data;
    const siteSetting = settingsWrap?.data?.siteSetting || {};
    const branchLocations = settingsWrap?.data?.branchLocations || [];
    return (
        <>
            
            {/* <ClientSection data={clientsData.data}/>  */}
            {/* <footer className="bg-gray-900 overflow-x-hidden pb-16 text-white text-xs border-b-8 border-green-900 relative"> */}
            <footer className="overflow-x-hidden pb-4 text-gray text-xs relative">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto py-8 px-8">
          

            {/* <div className="w-full lg:w-3/12 "> */}
            <div className="w-full lg:flex sm:flex-row items-center pb-10 border-b-2 border-gray-900 border-opacity-10 -mt-14">
                
                <div className="mt-10 mb-10 lg:mt-20 lg:mb-0 ">
                   <h2 className="mb-5 text-4xl font-light">For project inquiries, please contact:</h2>
                    <ClipBoard email={siteSetting.email} message={Message} animated={true}/>
                </div>

                <div className="w-44 mt-10 mb-10 lg:mt-20 lg:mb-0 ">
                   <p className='font-semibold text-2xl font-neuehaas lg:text-center sm:text-left'>OR</p>
                </div>

                <div className="mt-10 mb-10 lg:mt-20 lg:mb-0 ">
                <LinkButton text="Schedule a Meeting" icon="true" link="/contact" classList="h-16 border-2 border-gray-900 overflow-hidden"/>
                </div>
                
            </div>
            </div> 
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto flex flex-col lg:flex-row justify-between px-8 mt-8 lg:mt-8 opacity-80 2xl:relative interactive-element">
                    {/* <DIcon color="#ffffff" height="400" classList="h-72 lg:h-auto absolute -right-8 bottom-64 lg:bottom-28 2xl:bottom-0 pointer-events-none opacity-100 d-icon"/> */}
                    
                    <div className="w-full lg:w-full gap-x-4 border-b-2 border-gray-900 border-opacity-10">
                        <div className="flex flex-col lg:flex-row mb-8">
                            <div className="w-96 lg:w-1/2">
                                <AddressSection branchLocations={branchLocations}/>
                                <div className="hidden sm:block w-full sm:w-1/2">
                                <ul className="flex justify-around leading-6 sociallinks">
                                    <FooterSocialLists/>
                                </ul>
                                 
                                </div>
                            </div>
                            <div className="flex justify-between w-full lg:w-full lg:flex-row lg:justify-start">
                            <div className="lg:w-1/2 leading-6 uppercase pr-8">
                                <ul>
                                    <UsefullLink text="Home"  link="/"/>
                                    <UsefullLink text="Our Expertise" link="/services" />
                                    <UsefullLink text="Our Projects" link="/projects" />
                                    <UsefullLink text="About Us" link="/about" />
                                    <UsefullLink text="Online Payment" link="/payment" />
                                    <UsefullLink text="Blogs &amp; News" link="/blog" />
                                    <UsefullLink text="Terms and Conditions" link="/terms-and-conditions" />
                                    <UsefullLink text="Privacy Policy" link="/privacy-policy" />
                                    <UsefullLink text="Join Us" link="/join-us" />
                                </ul>
                            </div>

                            <div className="lg:w-1/2 leading-6 uppercase sm:block">
                                       <ul>
                                    <UsefullLink text="Construction Engineering" link="/services/Construction-Engineering" />
                                    <UsefullLink text="Structural Engineering" link="/services/Structural-Engineering" />
                                    <UsefullLink text="Architectural Engineering" link="/services/Architectural-Engineering" />
                                    <UsefullLink text="Interior Design" link="/services/Interior-Design" />
                                    <UsefullLink text="MEP Engineering" link="/services/MEP-Engineering" />
                                    <UsefullLink text="Project Management" link="/services/Project-Management" />
                                    <UsefullLink text="Architect Of Record (AOR)" link="/services/Architect-Of-Record-(AOR)" />
                                    <UsefullLink text="Villa Design" link="/services/Villa-Design" />
                                    <UsefullLink text="Abu Dhabi Municipality Approval" link="https://www.abudhabiapprovals.ae/services/abu-dhabi-municipality-approval" target="_blank"/>
                                </ul>
                            </div>
                            </div>
                        </div>
                         
                    </div>
                </div>   
                
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto mt-5 sm:px-8 ">
                <div className="block lg:hidden w-full">
                            <ul className="leading-6 m-auto sociallinks flex justify-around items-center w-full p-0 list-none font-normal text-sm">
                                <FooterSocialLists/>
                            </ul> 
                        </div>
                    <div className="opacity-80 flex flex-row">
                         <div className="w-1/2 text-center lg:text-left flex items-end">
                       
            <Link href="/">
                <div className="text-green-900">
                    {/* <Logo /> */}
                    <Link href="/">
                                <div className="text-white-900">
                                    <Logo />
                                    <span className="sr-only">Logo</span>
                                </div>
                            </Link>
                    <span className="sr-only">Logo</span>
                    
                </div>
            </Link>        
            <span className="w-full  font-neuehaas hidden lg:inline ml-6 -mt-24 "><span href="/">{siteSetting.siteName}</span> &copy; {new Date().getFullYear()}. All Rights Reserved</span>  
               <div>
                
               </div>
                        
                        </div>
                    </div>
                    <div className="w-full text-center lg:hidden mt-6">
                        <span className="lg:ml-6 font-neuehaas font-normal text-sm w-full"><span href="/">{siteSetting.siteName}</span> &copy; {new Date().getFullYear()}. All Rights Reserved</span> 
                    </div>
                </div>
            </footer>
        </>
    )
}
