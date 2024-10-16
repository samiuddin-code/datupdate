import Link from "next/link";
import { ArrowBackward } from "@/icons/UtilIcons";

const LinkButtonPrevious = ({ link = '/', text = 'Click here', classList = 'bg-gray-50 text-gray-900 ', icon = true, external = false, ...rest }) => {
    let btnClass = classList + (icon ? " pr-20" : " pr-8");
    return (
        <>
            {
                external ?
                <div {...rest} rel="noopener noreferrer" target="_blank" className={btnClass + " text-left tracking-widest inline-block text-sm py-5 pr-8 uppercase leading-4 relative group overflow-x-hidden hover:text-white"}>
                    {
                        icon &&
                        <span className="mr-8 absolute left-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:left-8 transition-all duration-300 custom-transition z-10">
                            <ArrowBackward/>
                        </span>
                    }
                    <span className="relative z-10">{text}</span>
                    <span className="w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none"></span>
                </div> :
                <Link href={link}>
                    <div {...rest} className={btnClass + " text-left tracking-widest inline-block text-sm py-5 pl-8 uppercase leading-4 relative group overflow-x-hidden hover:text-white"}>
                        {
                            icon &&
                            <span className="mr-8 absolute left-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:left-8 transition-all duration-300 custom-transition z-10 text-white">
                                <ArrowBackward/>
                            </span>
                        }
                        <span className="relative z-10">{text}</span>
                        <span 
                           className="w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none"
                           style={{
                            background: 'linear-gradient(90deg, rgba(10,188,103,1) 0%, rgba(0,97,74,1) 100%)'
                          }}
                           ></span>
                    </div>
                </Link>
            }
        </>
    );
};

export default LinkButtonPrevious;
