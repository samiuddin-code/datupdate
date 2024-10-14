import React from 'react'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@/icons/SocialIcons'
import Link from 'next/link'

const SocialLists = () => {
    return (
        <>
            <li className="flex-inline border border-gray-900 p-1.5 rounded-full">
                <Link href="https://www.facebook.com/DATengineeringConsultancy" rel="noreferrer noopener" target="_blank" className="text-gray-900 uppercase">
                    <FacebookIcon/> 
                    <span className="sr-only">Facebook</span>
                </Link>
            </li>
            <li className="flex-inline border border-gray-900 p-1.5 rounded-full">
               <Link href="https://instagram.com/dat.architects?igshid=YmMyMTA2M2Y" rel="noreferrer noopener" target="_blank" className="text-gray-900 uppercase">
                <InstagramIcon/>
                    <span className="sr-only">Instagram</span>
                </Link>
            </li>
            <li className="flex-inline border border-gray-900 p-1.5 rounded-full">
                <Link href="https://www.linkedin.com/company/dat-engineering-consultancy/" target="_blank" rel="noreferrer noopener" className="text-gray-900 uppercase">
                    <LinkedInIcon/>
                    <span className="sr-only">Linked In</span>
                </Link>
            </li>
        </>
    )
}

export default SocialLists
