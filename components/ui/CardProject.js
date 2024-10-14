import React from 'react'
import Link from 'next/link'
import LinkProjectAnchor from '@/ui/LinkProjectAnchor'
import { ArrowForward } from '@/icons/UtilIcons'
import Styles from "@/css/card.module.scss"

const CardProject = ({span,heading,description,buttonData,hover,children,fixedHeight,imageHover,interactive, classList}) => {
    return (
        // <div className={(hover ? "lg:hover:shadow-xl lg:hover:bg-opacity-100 lg:p-6 " : "") + (interactive ? " interactive-element top " : "") + " shadow-none bg-white bg-opacity-0 h-full group transition custom-transition duration-300 "+classList}>
        <div className={ (interactive ? " interactive-element top " : "") + " shadow-none bg-white bg-opacity-0 h-full group transition custom-transition duration-300 "+classList}>

            <div className="mb-4 cursor-pointer relative group">
                {
                    buttonData.external ? 
                    <div target="_blank" rel="noopener noreferrer" href={buttonData.link ? buttonData.link : "/"}>
                        <div className="overflow-hidden">
                            {children}
                        </div>
                    </div> : 
                    <Link href={buttonData.link ? buttonData.link : "/"}>
                        <div className="overflow-hidden">
                            {children}
                        </div>
                    </Link>
                }
                {
                    imageHover && 
                    <div className="bg-green-900 flex items-center justify-center text-white absolute top-0 left-0 w-full h-full bg-opacity-10 transition-all ease-linear duration-300 group-hover:bg-opacity-70 pointer-events-none opacity-0 group-hover:opacity-100">
                        <span className="w-12 h-12 flex items-center justify-center border border-white rounded-full">
                            <ArrowForward/>
                        </span>
                    </div>
                }
            </div>
            <div className={(fixedHeight ? (description ? Styles.card__fixed__height : Styles.card__fixed__height__nodesc) : " ") + (imageHover ? ` ${Styles.card__hover}`: " ")}>
                {/* {
                    span &&
                    <span className="text-white-800 mb-4 block">{span}</span>
                } */}
                {
                    buttonData.external ? 
                    <div target="_blank" rel="noopener noreferrer" href={buttonData.link ? buttonData.link : "/"}>
                        <h3 className="flex flex-row justify-between mb-4 text-xl font-medium cursor-pointer">
                            {heading}

                            <span class="text-4xl leading-4 relative flex items-center justify-center group-hover:text-green-900 transition-all duration-300 custom-transition"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"></polygon></g></svg></span>
                        </h3>
                    </div>:
                    <Link href={buttonData.link ? buttonData.link : "/"}>
                        <h3 className="flex flex-row justify-between mb-4 text-xl font-medium cursor-pointer">
                            {heading}
                            <span class="text-4xl leading-4 relative flex items-center justify-center group-hover:text-green-900 transition-all duration-300 custom-transition"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><g><path d="M0,0h24v24H0V0z" fill="none"></path></g><g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"></polygon></g></svg></span>
                        </h3>
                    </Link>
                }
                {
                    description &&
                    <div className="text-white-700 text-sm line-clamp line-clamp-5 " dangerouslySetInnerHTML={{ __html: description }}/>
                }
                {
                    buttonData.enabled &&
                    <div className="mt-6 text-white">
                        <LinkProjectAnchor external={buttonData.external} link={buttonData.link} icon={buttonData.icon} classList={buttonData.classList}/>
                    </div>
                }
            </div>
        </div>
    )
}

CardProject.defaultProps = {
    hover : false,
    imageSource : 'images/file.jpg',
    heading:"Some long long heading data",
    fixedHeight:true,
    imageHover:false,
    interactive:false,
    buttonData:{
        enabled:false,
        external:false,
    }
}

export default CardProject;
