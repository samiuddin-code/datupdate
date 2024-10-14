import React from 'react'
import Link from 'next/link';
import {useRouter} from 'next/navigation'
const Navigation = ({navigation,isStick,noImageHeader}) => {
    const router = useRouter()
    const active = "opacity-100"
    const nonactive = "opacity-0"
    return (
        <div id="header-nav" className={(isStick ? "border-opacity-0" : "border-opacity-60") + (noImageHeader ? " border-green-100" : " border-white") +  " transition-all ease-linear duration-300 flex tracking-widest"}>
            {
                navigation.slice(0,5).map(item => (
                    <Link key={item.text} href={item.link} className={((router.pathname == item.link) ? "text-white opacity-100" : "") + (isStick ? " xl:mx-4 text-gray-900" : (noImageHeader ? " xl:mx-6 text-white" : " xl:mx-6 text-white")) + " rounded-none transition-all duration-300 ease-linear uppercase first:ml-0 last:mr-0 mx-6 pt-5 text-sm font-neuehaas font-light hover:scale-105"}>
                        {/* <div className={((router.pathname == item.link) ? "text-white opacity-100" : "text-white") + (isStick ? " xl:mx-4 text-gray-900" : (noImageHeader ? " xl:mx-6 text-gray-900" : " xl:mx-6 text-white")) + " rounded-none transition-all duration-300 ease-linear uppercase first:ml-0 last:mr-0 mx-6 pt-5 text-sm font-neuehaas font-light hover:scale-105"}> */}

                            <span className={(router.pathname == item.link ? active : nonactive) + (isStick ? " -bottom-2.5 bg-green-900" : (noImageHeader ? " bg-green-900 -bottom-0.5" : " bg-white -bottom-0.5")) + " w-full bg-white absolute left-0 transition-all duration-300 ease-linear group-hover:opacity-100"}></span> 
                            {
                                router.pathname == item.link &&
                                <span className="sr-only">current</span>
                            }
                            {item.text}
                        {/* </div> */}
                    </Link>

                ))
            }
        </div>
    )
}
export default Navigation
