import Link from 'next/link';
import LinkAnchor from '@/ui/LinkAnchor';
import { ArrowForward } from '@/icons/UtilIcons';
import Styles from "@/css/card.module.scss";

const ServiceCard = ({ span, heading, description, buttonData, hover, children, fixedHeight, imageHover, interactive, classList }) => {
    

    return (
        <div className={`shadow-none bg-white bg-opacity-0 h-full group transition duration-300 ${hover ? "lg:hover:shadow-xl lg:hover:bg-opacity-100" : ""} ${interactive ? "interactive-element top" : ""} ${classList}`}>
            <div className="mb-4 cursor-pointer relative group">
                {buttonData.external ? (
                    <div target="_blank" rel="noopener noreferrer" href={buttonData.link ? buttonData.link : "/"}>
                        <div className="overflow-hidden">
                            {children}
                        </div>
                    </div>
                ) : (
                    <Link href={buttonData.link ? buttonData.link : "/"}>
                        <div className="overflow-hidden">
                            {children}
                        </div>
                    </Link>
                )}
                {imageHover && (
                    <div className="bg-green-900 flex items-center justify-center text-white absolute top-0 left-0 w-full h-full bg-opacity-10 transition-all ease-linear duration-300 group-hover:bg-opacity-70 pointer-events-none opacity-0 group-hover:opacity-100">
                        <span className="w-12 h-12 flex items-center justify-center border border-white rounded-full">
                            <ArrowForward />
                        </span>
                    </div>
                )}
            </div>
            <div className={`${fixedHeight ? (description ? "h-8" : Styles.card__fixed__height__nodesc) : ""} ${imageHover ? Styles.card__hover : ""}`}>
                <div className={`absolute left-0 right-0 bottom-0 p-2 transform translate-y-[80%] transition duration-300 group-hover:translate-y-0 group-hover:bg-white group-hover:top-[40%] delay-100`}>
                    {span && <span className="text-gray-800 mb-4 block">{span}</span>}
                    {buttonData.external ? (
                        <div target="_blank" rel="noopener noreferrer" href={buttonData.link ? buttonData.link : "/"}>
                            <h3 className="mb-4 text-lg font-normal cursor-pointer line-clamp line-clamp-5">{heading}</h3>
                        </div>
                    ) : (
                        <Link href={buttonData.link ? buttonData.link : "/"}>
                            <h3 className="mb-4 text-sm font-normal cursor-pointer line-clamp line-clamp-5">{heading}</h3>
                        </Link>
                    )}
                    <div className="relative group overflow-visible">
                        <div className="absolute inset-0 z-10">
                            <div
                                className={`text-gray-700 text-sm transform transition-transform duration-300 
                                group-hover:translate-y-0 translate-y-4 
                                group-hover:opacity-100 opacity-0`}
                                style={{
                                    zIndex: 20,
                                }}
                                
                            >
                                {description}
                                {buttonData.enabled && (
                                    <div className="mt-2">
                                        <LinkAnchor
                                            external={buttonData.external}
                                            link={buttonData.link}
                                            text={buttonData.text}
                                            icon={buttonData.icon}
                                            classList={buttonData.classList}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.defaultProps = {
    hover: false,
    imageSource: 'images/file.jpg',
    heading: "Some long long heading data",
    fixedHeight: true,
    imageHover: false,
    interactive: false,
    buttonData: {
        enabled: false,
        external: false,
    }
};

export default ServiceCard;
