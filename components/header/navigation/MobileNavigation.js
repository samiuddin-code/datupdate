import Link from 'next/link';
import {useRouter} from 'next/navigation'
import SocialLists from '@/ui/SocialLists';
import Image from 'next/image'

const MobileNavigation = ({navigation,isOpen,hide,show,toggle}) => {
    const router = useRouter()
    const active = "w-full"
    const nonactive = "w-0"
    return (
        <div className={(isOpen ? "animate-skew-nav" : "animate-skew-nav-reverse") + " flex flex-col h-full transform -skew-x-12 -translate-x-full absolute right-[-10px] w-[250px]"}>
            <ul className="flex flex-col px-2">
            {
                navigation.map(item => (
                    <li key={item.text}>
                        <Link href={item.link}>
                            <div onBlur={hide} onFocus={show} onClick={toggle} className={(router.pathname == item.link && "mb-4") + " rounded-none transition-all duration-1000 ease-linear capitalize text-gray-900 py-2 text-xl relative inline-block"}>
                                <span className={(router.pathname == item.link ? active : nonactive) + " bg-white absolute h-0.5 bottom-0 left-0 transition-all duration-1000 ease-linear"}></span> 
                                {
                                    router.pathname == item.link &&
                                    <span className="sr-only">current</span>
                                }
                                {item.text}
                            </div>
                        </Link>
                    </li>
                ))
            }
               
            </ul>
            <div className="mt-4 lg:w-1/2">
            <div className={`relative w-44 h-[200px] aspect-w-16 aspect-h-9 mb-20`} >
                <Image
                    src="/mobile-vector.webp" 
                    alt="DAT"
                    layout="fill"
                />
            </div>   
            
            <ul className="mt-6 flex flex-row justify-around">
                <SocialLists/>
            </ul>
            </div>
        </div>
    )
}
export default MobileNavigation
