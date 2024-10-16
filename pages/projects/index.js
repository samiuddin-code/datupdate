import Moment from "react-moment"
import { useState } from "react"
import Layout from "@/components/Layout"
import Meta from "@/components/Meta"
import ExternalImage from "@/ui/ExternalImage"
import GeneralImage from "@/ui/GeneralImage"
import Card from "@/ui/Card"
import { headers } from "@/helpers/helpers"
import SubmitButton from "@/ui/SubmitButton"
import fetchData from "@/apiData/resolver";
import HeroSection from "@/herosection/HeroSection"
import SectionHeader from "@/components/ui/SectionHeader"
import FormsTabs from '@/ui/FormsTabs'


const ProjectCategory = ({response}) => {
    const [data] = response;
    const {categoryData, seoData } = data.data
    const [page,setPage] = useState(2);
    const [categoryList,setCategoryList] = useState(categoryData.rows);
    const [preloader,setPreloader] = useState(false);

    const bannerData = data.bannerData || {
        highlight: "",
        image: "projectbanner.webp",
      };

      console.log("Banner data is: ", bannerData);
      console.log("Banner data is: " + JSON.stringify(bannerData, null, 2));

    async function fetchData(pageNumber){
        const response = await fetch(`${process.env.API_DOMAIN}/projects-category?page=${pageNumber}`,headers);
        return response.json();
    }
    function loadData(){
        setPage(page+1);
        setPreloader(true);
        fetchData(page).then(response=>{
            setCategoryList(prevVal => [...prevVal,...response.data.rows])
            setPreloader(false);
        })
    }
    return (
        <Layout apiData={response} noImageHeader={false}>
            <Meta title={seoData.title} description={seoData.description} keywords={seoData.keywords} image={seoData.image} />
            
            {bannerData && (
                <HeroSection 
                title={bannerData.highlight || ""} 
                folder="uploads/" 
                image={bannerData.image || ""} 
                alt={bannerData.highlight || ""} 
                description={bannerData.shortInfo || ""} 
                />
            )}   
            
            <section className={(preloader ? "opacity-70 pointer-events-none" : "opacity-100 pointer-events-auto") + " py-16 lg:py-20 pt-8 lg:pt-40 relative lg:animate-to-top"}>
                <div className="max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8">
                    <SectionHeader heading="Our Projects" classList="-mt-4" animate={false}/>
                    <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {
                           categoryList.map((item,index) => (
                                <Card key={item.title} heading={item.title} interactive={index>2 ? true :false} imageHover={true} fixedHeight={false} buttonData={{enabled:true,link:`/projects/${(item.slug)}`,text:"View Projects",icon:true}} classList="mt-4">
                                    <GeneralImage src={item.image} layout="responsive" className="filter blur-none group-hover:blur-sm" alt={item.title} width={352} height={260} objectFit="cover" />
                                </Card>
                            ))
                        }
                    </div>
                    {
                        (categoryData?.count != categoryList.length ) &&
                        <div className="mt-16 lg:mt-20 flex interactive-element top">
                            <div className="w-full text-center">
                                <SubmitButton onClick={loadData} text="Load More" classList="bg-gray-900 text-white" icon={false}/>
                            </div>
                        </div>
                    }
                </div>
            </section>
            <FormsTabs />
        </Layout>
    )
}
export async function getServerSideProps() {
    /* api endpoints url */
    let datas = [`/projectCategoryPage`, `/projects`]
    /* response after resolving promise */
    const response = await fetchData(datas);
    /* if response not resolve move to 404 page */
    if (!response) {
      return {
        notFound: true,
      }
    }
    return {
      props: {response}, // will be passed to the page component as props
    }
}
export default ProjectCategory
