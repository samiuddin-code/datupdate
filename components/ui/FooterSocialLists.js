import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/icons/SocialIcons'
import Link from 'next/link'

const FooterSocialLists = () => {
    return (
        <>
            <li className="flex-inline p-1.5">
                <Link href="https://www.facebook.com/DATengineeringConsultancy" rel="noreferrer noopener" target="_blank" className="text-gray-900 uppercase">
                    {/* <FacebookIcon/>  */} Facebook
                    <span className="sr-only">Facebook</span>
                </Link>
            </li>
            <li className="flex-inline p-1.5">
               <Link href="https://instagram.com/dat.architects?igshid=YmMyMTA2M2Y" rel="noreferrer noopener" target="_blank" className="text-gray-900 uppercase">
                {/* <InstagramIcon/> */} Instagram
                    <span className="sr-only">Instagram</span>
                </Link>
            </li>
            <li className="flex-inline p-1.5">
                <Link href="https://www.linkedin.com/company/dat-engineering-consultancy/" target="_blank" rel="noreferrer noopener" className="text-gray-900 uppercase">
                    {/* <LinkedInIcon/> */} Linkedin
                    <span className="sr-only">Linked In</span>
                </Link>
            </li>
        </>
    )
}

export default FooterSocialLists
