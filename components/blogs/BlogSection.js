import Moment from 'react-moment';
import Link from 'next/link';
import SectionHeader from '@/ui/SectionHeader';
import Card from '@/ui/Card';
import ExternalImage from '@/ui/ExternalImage';
import GeneralImage from '@/ui/GeneralImage'
import LinkAnchor from '@/ui/LinkAnchor';
const BlogSection = ({ data }) => {
    return (
        <section className="py-8 lg:py-12 bg-[#ECF1F4]">
            <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8">
                <SectionHeader span="" />
                
                <div className="flex flex-row lg:flex-row">
                    <div className="w-full lg:pr-8 xl:pr-4 grid lg:grid-cols-3 md:grid-cols-1 gap-x-8">
                        {
                            data.slice(1, 4).map((item, index) => (
                                <div key={item.title} className=" mb-10 last:mb-0 group interactive-element top">

                                <Card heading={item.title} hover={true} fixedHeight={true} buttonData={{ enabled: true, link: `/blog/${item.slug}`, text: "Read more", icon: true }} interactive={false}>
                                    <GeneralImage src={item.altImage} layout="responsive" className="transform scale-100 group-hover:scale-110 transition-all duration-300 custom-transition" alt={item.title} width={700} height={394} objectFit="cover" />
                                    <div className="text-gray-800 mt-4">
                                        <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
                                    </div>
                                </Card>

                                    {/* <div className="h-40 sm:h-60 md:h-[12rem] relative mb-6 md:mb-0 overflow-hidden">
                                        <Link href={`/blog/${item.slug}`} legacyBehavior>
                                            <ExternalImage layout="fill" objectFit="cover" className="cursor-pointer group-hover:scale-125 transition-all transform duration-300 in-expo" alt={item.title} src={item.altImage} />
                                        </Link>
                                    </div>
                                    <div className="flex h-100 justify-center flex-col">
                                        <span className="text-gray-800">
                                            <Moment format="DD/MM/YYYY">{item.createdAt}</Moment>
                                        </span>
                                        <Link href={`/blog/${item.slug}`} legacyBehavior>
                                            <h2 className="font-normal text-sm my-4 leading-snug cursor-pointer line-clamp line-clamp-4 ">{item.title}</h2>
                                        </Link>
                                        <LinkAnchor
                                            text="Read blog"
                                            icon="true"
                                            link={`/blog/${item.slug}`}
                                        />
                                    </div> */}
                                </div>
                            ))}
                    </div>
                    {/* {
                        data && data[0] && <>
                        <div className="w-full lg:w-5/12 hidden lg:block">
                        <div className="px-6 pt-6 pb-12 border border-gray-900">
                            <Card heading={data[0].title} imageSource={data[0].image} span={<Moment format="DD/MM/YYYY">{data[0].createdAt}</Moment>} buttonData={{ enabled: true, link: `/blog/${data[0].slug}`, text: "Read blog", icon: true }} fixedHeight={false} interactive={true}>
                                <div className="h-80 relative overflow-hidden">
                                    <ExternalImage layout="fill" objectFit="cover" className="group-hover:scale-125 transform transition-all duration-300 in-expo " alt={data[0].title} src={data[0].altImage} />
                                </div>
                            </Card>
                        </div>
                    </div>   
                        </>
                    } */}
                </div>
            </div>
        </section>
    )
}
export default BlogSection
