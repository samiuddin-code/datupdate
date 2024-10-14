(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(91330)}])},94574:function(e,t,a){"use strict";var l=a(85893);t.Z=e=>{let{content:t}=e;return(0,l.jsx)("section",{className:"relative bg-gray-50 interactive-element top",children:(0,l.jsx)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8",children:(0,l.jsx)("div",{className:"py-16 lg:py-20",children:(0,l.jsx)("p",{className:(t.length>250?"text-lg":"text-xl lg:text-2xl xl:text-3xl ")+" lg:text-left  text-center leading-normal font-light",children:t})})})})}},86163:function(e,t,a){"use strict";var l=a(85893),s=a(67294),i=a(69878),n=a(94960),r=a(30781),o=a(69933),c=a(87066),d=a(55118),x=a(27558),h=a(11163);t.Z=function(e){let{projects:t}=e,[a,m]=(0,s.useState)(2),[u,g]=(0,s.useState)(t.data.rows),[p,v]=(0,s.useState)(!1),f=(0,h.useRouter)();async function w(e){return t.data.category?await c.Z.get("".concat("https://api.datconsultancy.com/web-api/v1.0","/projects/category/").concat(t.data.category.slug,"?limit=6&page=").concat(e)).then(e=>e.data):await c.Z.get("".concat("https://api.datconsultancy.com/web-api/v1.0","/projects?limit=6&page=").concat(e)).then(e=>e.data)}return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("section",{className:(p?"opacity-70 pointer-events-none":"opacity-100 pointer-events-auto")+" py-16 lg:py-20",children:(0,l.jsxs)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-8",children:[(0,l.jsx)(d.Z,{span:"Latest Design",heading:(t.data.category?t.data.category.title:"Featured")+" Projects"}),(0,l.jsx)("div",{className:"grid grid-cols-1 md:grid md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(e=>(0,l.jsx)(r.Z,{heading:e.title,imageHover:!0,fixedHeight:!0,buttonData:{enabled:!0,link:"/projects/".concat(e.ProjectCategory.slug,"/").concat(e.slug),text:"See more",icon:!0},description:(0,i.bC)(e.highlight,0,200),interactive:!0,children:(0,l.jsx)(n.Z,{src:e.altImage,layout:"responsive",alt:e.title,width:352,height:260,objectFit:"cover",className:"filter blur-none group-hover:blur-sm"})},e.title))}),(0,l.jsxs)("div",{className:"mt-16 lg:mt-20 flex interactive-element top justify-end",children:[t.data.count!=u.length&&(0,l.jsx)("div",{className:"/"==f.asPath?"hidden lg:block w-1/2":"w-full text-center",children:(0,l.jsx)(o.Z,{onClick:function(){m(a+1),v(!0),w(a).then(e=>{g(t=>[...t,...e.data.rows]),v(!1)})},classList:"bg-gray-50",text:"Load More",link:"",icon:!1})}),"/"==f.asPath&&(0,l.jsx)("div",{className:(t.data.count!=u.length?"lg:w-full":"lg:w-1/2")+" w-full lg:text-right",children:(0,l.jsx)(x.Z,{text:"View all projects",link:"/projects",icon:"true"})})]})]})})})}},94396:function(e,t,a){"use strict";var l=a(85893),s=a(67294),i=a(9786),n=a(69933);t.Z=e=>{let{btnText:t,btnClass:a,btnIcon:r}=e,{modal:o,modalState:c}=(0,s.useContext)(i.k);return(0,l.jsx)(n.Z,{text:t,classList:a,icon:r,onClick:c})}},91330:function(e,t,a){"use strict";a.r(t),a.d(t,{__N_SSP:function(){return X},default:function(){return $}});var l=a(85893),s=a(24002),i=a(30781),n=a(67294),r=a(41664),o=a.n(r),c=a(22412);let d=e=>{let{link:t,text:a,classList:s,icon:i,external:n,...r}=e,d=s+(i?" pr-8":"");return(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)("div",{...r,href:t,target:"_blank",rel:"noopener noreferrer",className:d+" tracking-widest text-sm group-hover:text-white-900 uppercase leading-4 relative group overflow-hidden inline-block transition-all duration-300 custom-transition",children:[(0,l.jsx)("span",{className:"font-medium lg:font-normal text-white-900 relative z-10 transform lg:top-12 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-0 transition-all duration-300",children:a}),i&&(0,l.jsx)("span",{className:"absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 custom-transition z-10 text-white-900 w-4 lg:left-0 group-hover:right-4 lg:group-hover:left-btn-inset",children:(0,l.jsx)("span",{className:"text-4xl leading-4 relative flex items-center justify-center group-hover:text-white-900 transition-all duration-300 custom-transition",children:(0,l.jsx)(c.Tt,{})})})]}):(0,l.jsx)(o(),{href:t,children:(0,l.jsxs)("div",{...r,className:d+" tracking-widest text-sm group-hover:text-white-900 uppercase leading-4 relative group overflow-hidden inline-block transition-all duration-300 custom-transition",children:[(0,l.jsx)("span",{className:"font-medium lg:font-normal text-white-900 relative z-10 transform lg:top-12 lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:top-0 transition-all duration-300",children:a}),i&&(0,l.jsx)("span",{className:"absolute top-1/2 transform -translate-y-1/2 transition-all duration-300 custom-transition z-10 text-white-900 w-4 lg:left-0 group-hover:right-4 lg:group-hover:left-btn-inset",children:(0,l.jsx)("span",{className:"text-4xl leading-4 relative flex items-center justify-center group-hover:text-white-900 transition-all duration-300 custom-transition",children:(0,l.jsx)(c.Tt,{})})})]})})})};d.defaultProps={link:"/",classList:"text-white-900",text:"",icon:!0,external:!1};var x=a(13833),h=a.n(x);let m=e=>{let{span:t,heading:a,description:s,buttonData:i,hover:n,children:r,fixedHeight:x,imageHover:m,interactive:u,classList:g}=e;return(0,l.jsxs)("div",{className:(u?" interactive-element top ":"")+" shadow-none bg-white bg-opacity-0 h-full group transition custom-transition duration-300 "+g,children:[(0,l.jsxs)("div",{className:"mb-4 cursor-pointer relative group",children:[i.external?(0,l.jsx)("div",{target:"_blank",rel:"noopener noreferrer",href:i.link?i.link:"/",children:(0,l.jsx)("div",{className:"overflow-hidden",children:r})}):(0,l.jsx)(o(),{href:i.link?i.link:"/",children:(0,l.jsx)("div",{className:"overflow-hidden",children:r})}),m&&(0,l.jsx)("div",{className:"bg-green-900 flex items-center justify-center text-white absolute top-0 left-0 w-full h-full bg-opacity-10 transition-all ease-linear duration-300 group-hover:bg-opacity-70 pointer-events-none opacity-0 group-hover:opacity-100",children:(0,l.jsx)("span",{className:"w-12 h-12 flex items-center justify-center border border-white rounded-full",children:(0,l.jsx)(c.ZJ,{})})})]}),(0,l.jsxs)("div",{className:(x?s?h().card__fixed__height:h().card__fixed__height__nodesc:" ")+(m?" ".concat(h().card__hover):" "),children:[i.external?(0,l.jsx)("div",{target:"_blank",rel:"noopener noreferrer",href:i.link?i.link:"/",children:(0,l.jsxs)("h3",{className:"flex flex-row justify-between mb-4 text-xl font-medium cursor-pointer",children:[a,(0,l.jsx)("span",{class:"text-4xl leading-4 relative flex items-center justify-center group-hover:text-green-900 transition-all duration-300 custom-transition",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),(0,l.jsx)("g",{children:(0,l.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})})]})}):(0,l.jsx)(o(),{href:i.link?i.link:"/",children:(0,l.jsxs)("h3",{className:"flex flex-row justify-between mb-4 text-xl font-medium cursor-pointer",children:[a,(0,l.jsx)("span",{class:"text-4xl leading-4 relative flex items-center justify-center group-hover:text-green-900 transition-all duration-300 custom-transition",children:(0,l.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","enable-background":"new 0 0 24 24",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"currentColor",children:[(0,l.jsx)("g",{children:(0,l.jsx)("path",{d:"M0,0h24v24H0V0z",fill:"none"})}),(0,l.jsx)("g",{children:(0,l.jsx)("polygon",{points:"6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"})})]})})]})}),s&&(0,l.jsx)("div",{className:"text-white-700 text-sm line-clamp line-clamp-5 ",dangerouslySetInnerHTML:{__html:s}}),i.enabled&&(0,l.jsx)("div",{className:"mt-6 text-white",children:(0,l.jsx)(d,{external:i.external,link:i.link,icon:i.icon,classList:i.classList})})]})]})};m.defaultProps={hover:!1,imageSource:"images/file.jpg",heading:"Some long long heading data",fixedHeight:!0,imageHover:!1,interactive:!1,buttonData:{enabled:!1,external:!1}};var u=a(55118),g=a(26382),p=a(9295);a(55416),a(87953),a(53104),a(33448);var v=a(69447),f=a(30172),w=a(86584),j=a(7649),b=a(52997),y=a(95186);a(50665),f.Z.use([w.Z,j.Z,b.Z,y.Z]);let N=e=>{let{children:t,removeOptions:a,...s}=e,[i,r]=(0,n.useState)({activeSlide:0,slidesLength:0,widthFixed:0});function o(e,t){let a=e.length-1,l=Math.round(t*a+1);return{activeSlide:l,slidesLength:a,widthFixed:100/e.length*l}}return(0,l.jsx)(v.t,{speed:"1000ms",navigation:{nextEl:".swiper-next-button",prevEl:".swiper-prev-button"},onInit:e=>{let{progress:t,slides:a,navigation:l,params:s}=e;r(e=>({activeSlide:o(a,t).activeSlide,slidesLength:o(a,t).slidesLength+1,widthFixed:o(a,t).widthFixed})),o(a,t)},onUpdate:e=>{let{progress:t,slides:a}=e;r(e=>({activeSlide:o(a,t).activeSlide,slidesLength:o(a,t).slidesLength+1,widthFixed:o(a,t).widthFixed})),o(a,t)},onSlideChange:e=>{let{progress:t,slides:a}=e;r(e=>({...e,activeSlide:o(a,t).activeSlide,widthFixed:o(a,t).widthFixed}))},...s,children:t})};N.defaultPropTypes={removeOptions:!1};var k=a(38604),Z=a(94960),_=a(40582);a(94803);var S=a(25675),z=a.n(S),E=()=>(0,l.jsx)("section",{className:"py-8 lg:py-12 bg-[#ECF1F4]",children:(0,l.jsxs)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 lg:px-0",children:[(0,l.jsx)("h2",{class:"font-normal mb-6 text-3xl capitalize md:text-4xl font-neuehaas text-center",children:"We are a top UAE engineering firm"}),(0,l.jsx)("p",{class:"font-normal mb-6 text-lg capitalize md:text-normal font-neuehaas text-center text-gray-700 max-w-three-lines",children:"DAT was founded in the year 2014 and since then we upholds principles that motivate us to layout innovative architectural and engineering design solutions seizing avant-garde results for the best benefit of our clients. "}),(0,l.jsx)("div",{className:"flex flex-row lg:flex-row mt-10",children:(0,l.jsxs)("div",{className:"w-full lg:pr-8 xl:pr-4 grid grid-cols-1 md:grid-cols-3 gap-x-8",children:[(0,l.jsx)("div",{className:"mb-10 last:mb-0 group interactive-element top",children:(0,l.jsx)("div",{className:"h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden",children:(0,l.jsx)(z(),{src:"/datrec.webp",alt:"DAT",layout:"fill",className:"filter grayscale transition duration-300 ease-in-out group-hover:filter-none cursor-pointer group-hover:scale-125"})})}),(0,l.jsx)("div",{className:" mb-10 last:mb-0 group interactive-element top",children:(0,l.jsx)("div",{className:"h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden",children:(0,l.jsx)(z(),{src:"/datstaff.webp",alt:"DAT",layout:"fill",className:"filter grayscale transition duration-300 ease-in-out group-hover:filter-none cursor-pointer group-hover:scale-125"})})}),(0,l.jsx)("div",{className:" mb-10 last:mb-0 group interactive-element top",children:(0,l.jsx)("div",{className:"h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden",children:(0,l.jsx)(z(),{src:"/meetingroom.webp",alt:"DAT",layout:"fill",className:"filter grayscale transition duration-300 ease-in-out group-hover:filter-none cursor-pointer group-hover:scale-125"})})})]})}),(0,l.jsx)("p",{className:"w-full text-medium font-normal text-center",children:"DAT Headquarter, Dubai"})]})}),L=a(58429),C=()=>{let[e,t]=(0,n.useState)(!1);return(0,l.jsxs)("section",{className:"pt-8 lg:pt-12",children:[(0,l.jsx)("h2",{className:"font-normal z-10 mb-6 text-3xl capitalize md:text-xl lg:text-4xl font-neuehaas text-center max-w-two-lines",children:"Experts in Engineering Consulting & Design Solutions."}),(0,l.jsxs)(L.Z,{sx:{position:"relative",width:"100%",height:0,paddingBottom:"52.25%",overflow:"hidden"},onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[(0,l.jsx)(L.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:"transform 2.5s ease, opacity 2.5s ease",transform:e?"translateY(-30px)":"translateY(0)",opacity:e?0:1},children:(0,l.jsx)(z(),{src:"/defaultbanner.webp",alt:"Default Banner",layout:"fill",objectFit:"cover"})}),(0,l.jsx)(L.Z,{sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%",transition:"transform 2.5s ease, opacity 2.5s ease",transform:e?"translateY(0)":"translateY(30px)",opacity:e?1:0},children:(0,l.jsx)(z(),{src:"/defaultcolorbanner.webp",alt:"Color Banner",layout:"fill",objectFit:"cover"})})]})]})},D=()=>{let[e,t]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{let e=()=>t(window.matchMedia("(max-width: 768px)").matches);return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e},F=a(10324),P=a(76957),B=a(91827),I=a(98163),T=()=>{let[e,t]=(0,n.useState)("design"),a=D(),s=[{id:"design",label:"Design",content:"Explore sleek urban landscapes to serene retreats in our diverse portfolio.",image:"/edv-slide.webp"},{id:"manage",label:"Manage",content:"Expertise demonstrated across the UAE, especially in Dubai, Abu Dhabi, and Sharjah.",image:"/dji-build-slide.webp"},{id:"build",label:"Build",content:"Our team specializes in Building and Villa Design, with competencies in multiple engineering fields.",image:"/dji-build-slide.webp"}],i=s.find(t=>t.id===e)||s[0];return(0,l.jsx)("section",{className:"relative w-full overflow-hidden",children:a?(0,l.jsxs)(L.Z,{children:[(0,l.jsx)(F.Z,{value:e,onChange:(e,a)=>t(a),variant:"scrollable",scrollButtons:"auto",textColor:"inherit",indicatorColor:"primary",children:s.map(e=>(0,l.jsx)(P.Z,{label:e.label,value:e.id},e.id))}),(0,l.jsx)(L.Z,{className:"text-gray-900 text-sm pt-6 pb-6 rounded-lg shadow-md m-auto",children:(0,l.jsx)(B.Z,{variant:"body1",children:i.content})}),(0,l.jsx)("div",{className:"relative inset-0 z-0",children:(0,l.jsx)(z(),{src:i.image,alt:"Background Image",layout:"responsive",width:1920,height:600,objectFit:"cover",quality:100})})]}):(0,l.jsxs)(L.Z,{className:"relative w-full h-screen",children:[(0,l.jsx)("div",{className:"absolute inset-0 z-0",children:(0,l.jsx)(z(),{src:i.image,alt:"Background Image",layout:"fill",objectFit:"cover",quality:100})}),(0,l.jsx)("div",{className:"relative z-20 flex pt-8",children:(0,l.jsx)(L.Z,{className:"w-1/3 m-auto",children:(0,l.jsx)("div",{className:"flex justify-between",children:s.map(a=>(0,l.jsx)(I.Z,{onClick:()=>t(a.id),variant:e===a.id?"contained":"outlined",style:{flex:1,margin:"0 5px",textTransform:"capitalize",backgroundColor:e===a.id?"#137749":"rgba(76, 175, 80, 0.3)",color:"white",border:"1px solid white",opacity:(a.id,1),transition:"background-color 0.3s ease"},children:a.label},a.id))})})}),(0,l.jsx)(L.Z,{className:"w-2/3 relative text-white text-lg pt-20 mr-4 rounded-lg mx-auto",children:(0,l.jsx)(B.Z,{variant:"h6",children:i.content})})]})})},M=()=>{let e=(0,n.useRef)([]),[t,a]=(0,n.useState)([!1,!1,!1]),s=e=>{a(t=>{let a=[...t];return a[e]=!0,a})};return(0,n.useEffect)(()=>{let t=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(e.target.style.opacity="1",e.target.style.transform="scale(1)"):(e.target.style.opacity="0",e.target.style.transform="scale(0.95)")})},{threshold:.5});return e.current.forEach(e=>{e&&t.observe(e)}),()=>e.current.forEach(e=>{e&&t.unobserve(e)})},[]),(0,l.jsx)("section",{className:"relative bg-gray-900 overflow-hidden",children:["/featured1.webp","/featured2.webp","/featured3.webp"].map((a,i)=>(0,l.jsxs)("div",{className:"relative w-full aspect-w-16 aspect-h-9",ref:t=>e.current[i]=t,style:{position:"relative",overflow:"hidden",transition:"transform 0.5s ease, opacity 0.6s ease",opacity:t[i]?1:0,transform:t[i]?"scale(1)":"scale(0.95)"},children:[(0,l.jsx)(z(),{src:a,alt:"Banner ".concat(i+1),layout:"responsive",width:1920,height:1200,onLoad:()=>s(i),style:{transition:"opacity 0.6s ease",opacity:t[i]?1:0}}),(0,l.jsxs)("div",{className:"absolute bottom-8 left-8 z-20 text-left",children:[(0,l.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-white drop-shadow-md",children:0===i?"A Modern Townhouse Design in KSA":1===i?"Simplicity Redefined: A Versatile Modern Villa Design":"A Luxury Private Mansion in a Modern Design"}),(0,l.jsx)("h3",{className:"text-lg md:text-xl font-light text-white drop-shadow-md mt-2",children:0===i?"Townhouse Lara Community, Mohammadiya, KSA":1===i?"White Pearl Villa, Pearl Jumeirah, Dubai":"Private Mansion, District One"})]})]},i))})},V=a(43321);function A(){let[e,t]=n.useState("photos");return(0,l.jsx)("div",{className:"flex w-full flex-col -m-8",children:(0,l.jsx)(V.n,{"aria-label":"Options",selectedKey:e,onSelectionChange:t})})}a(94574),a(35609);var O=a(74826),H=a.n(O);let q=e=>{let{link:t,text:a,classList:s,icon:i,external:n,...r}=e,d=s+(i?" pr-20":" pr-8");return(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)("div",{...r,rel:"noopener noreferrer",target:"_blank",className:d+" text-left tracking-widest inline-block text-sm py-5 pl-8 uppercase  leading-4 relative group overflow-x-hidden hover:text-white",children:[(0,l.jsx)("span",{className:"relative z-10",children:a}),i&&(0,l.jsx)("span",{className:"ml-8 absolute right-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:right-8 transition-all duration-300 custom-transition z-10",children:(0,l.jsx)(c.ZJ,{})}),(0,l.jsx)("span",{className:"w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none"})]}):(0,l.jsx)(o(),{href:t,children:(0,l.jsxs)("div",{...r,className:d+" text-left tracking-widest inline-block text-sm py-5 pl-8 uppercase leading-4 relative group overflow-x-hidden hover:text-white",children:[(0,l.jsx)("span",{className:"relative z-10",children:a}),i&&(0,l.jsx)("span",{className:"ml-8 absolute right-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:right-8 transition-all duration-300 custom-transition z-10 text-white",children:(0,l.jsx)(c.ZJ,{})}),(0,l.jsx)("span",{className:"w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none",style:{background:"linear-gradient(90deg, rgba(10,188,103,1) 0%, rgba(0,97,74,1) 100%)"}})]})})})};q.defaultProps={link:"/",classList:"bg-gray-50 text-gray-900 ",text:"Click here",icon:!0,external:!1};var J=e=>{let{link:t="/",text:a="Click here",classList:s="bg-gray-50 text-gray-900 ",icon:i=!0,external:n=!1,...r}=e,d=s+(i?" pr-20":" pr-8");return(0,l.jsx)(l.Fragment,{children:n?(0,l.jsxs)("div",{...r,rel:"noopener noreferrer",target:"_blank",className:d+" text-left tracking-widest inline-block text-sm py-5 pr-8 uppercase leading-4 relative group overflow-x-hidden hover:text-white",children:[i&&(0,l.jsx)("span",{className:"mr-8 absolute left-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:left-8 transition-all duration-300 custom-transition z-10",children:(0,l.jsx)(c.u5,{})}),(0,l.jsx)("span",{className:"relative z-10",children:a}),(0,l.jsx)("span",{className:"w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none"})]}):(0,l.jsx)(o(),{href:t,children:(0,l.jsxs)("div",{...r,className:d+" text-left tracking-widest inline-block text-sm py-5 pl-8 uppercase leading-4 relative group overflow-x-hidden hover:text-white",children:[i&&(0,l.jsx)("span",{className:"mr-8 absolute left-12 top-1/2 transform -translate-y-1/2 text-xl leading-4 group-hover:left-8 transition-all duration-300 custom-transition z-10 text-white",children:(0,l.jsx)(c.u5,{})}),(0,l.jsx)("span",{className:"relative z-10",children:a}),(0,l.jsx)("span",{className:"w-full h-0 absolute bottom-0 left-0 bg-green-900 custom-transition transition-all duration-300 group-hover:h-full pointer-events-none",style:{background:"linear-gradient(90deg, rgba(10,188,103,1) 0%, rgba(0,97,74,1) 100%)"}})]})})})},R=e=>{let{sliderData:t}=e,[a,i]=(0,n.useState)({prevIndex:-1,curIndex:0});return(0,n.useEffect)(()=>{let e=setTimeout(()=>{document.querySelectorAll(".slide-up, .slide-down").forEach(e=>e.classList.remove("slide-up","slide-down"))},4500);return()=>clearTimeout(e)},[a.curIndex]),(0,l.jsxs)("section",{className:"relative",children:[(0,l.jsx)(p.Z,{modules:[y.Z,b.Z,j.Z,w.Z],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:1,effect:"fade",autoplay:{delay:4500},spaceBetween:0,removeOptions:!0,onSlideChange:e=>{i({prevIndex:a.curIndex,curIndex:e.activeIndex})},children:t.data.map((e,t)=>(0,l.jsx)(s.o,{children:(0,l.jsxs)("div",{className:"".concat(H().slider__height," flex flex-col w-full relative"),children:[(0,l.jsx)(Z.Z,{src:e.image,alt:e.link,layout:"fill",objectFit:"cover",priority:0===t,loading:"eager"},e.link),(0,l.jsx)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2 z-20 lg:pt-24",children:(0,l.jsxs)("div",{className:"text-white pl-8 interactive-slider",children:[(0,l.jsx)("span",{className:"text-sm uppercase block font-neuehaas font-light",children:"Crafting Architecture"}),(0,l.jsx)("h2",{className:"w-full text-3xl lg:text-4xl xl:text-5xl md:leading-12 lg:leading-normal font-semibold relative z-10 font-neuehaas",children:e.title})]})}),(0,l.jsx)("div",{className:"".concat(H().slider__overlay," left-0 top-0 w-full h-full absolute")})]})},t))}),(0,l.jsx)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl w-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-20 lg:pt-24",children:(0,l.jsxs)("div",{className:"text-white",children:[(0,l.jsx)(J,{text:"",icon:"true",classList:"h-16 border-2 border-gray-900 overflow-hidden swiper-button-prev custom-swiper-button"}),(0,l.jsx)(q,{text:"",icon:"true",classList:"h-16 border-2 border-gray-900 overflow-hidden swiper-button-next custom-swiper-button"})]})})]})},Y=a(17380),K=a(27558);a(816);var U=a(40851);a(94396),a(86163),a(11163),a(69878),a(69933);var W=a(90256),X=!0,$=function(e){let{response:t}=e,[a,r,o,d,x,h,v]=t,{siteSetting:f}=t[t.length-1].data,{richText:w,whoWeAre:j,whyChooseUs:b,sectionAboveFooter:y,sectionWithImage:Z,seoData:S}=r.data,[L,D]=(0,n.useState)("");return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(U.Z,{modalForm:!0,apiData:t,children:(0,l.jsxs)("div",{className:"scroll-container",children:[(0,l.jsx)(g.Z,{title:S.title,description:S.description,keywords:S.keywords,image:S.image}),(0,l.jsx)(R,{sliderData:a,buttonText:"View more info",buttonLink:"#",description:!0}),(0,l.jsx)("section",{className:"py-16 lg:py-20 bg-gray-50",children:(0,l.jsxs)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 lg:px-0",children:[(0,l.jsx)("div",{className:"lg:px-8",children:(0,l.jsx)(u.Z,{span:"",classList:"mb-4 w-full lg:mb-6 md:mb-6",heading:"Our expertise"})}),(0,l.jsx)("div",{className:"lg:px-2 interactive-element top",children:(0,l.jsx)(p.Z,{spaceBetween:30,slidesPerView:1,breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30}},autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},children:h.data.rows.map((e,t)=>(0,l.jsx)(s.o,{className:"h-full",children:(0,l.jsx)(i.Z,{heading:e.title,hover:!0,span:"0".concat(t+1),fixedHeight:!0,buttonData:{enabled:!0,link:"/services/".concat(e.slug),text:"Read more",icon:!0},interactive:!1,children:(0,l.jsx)(_.Z,{src:e.altImage,layout:"responsive",className:"transform scale-100 group-hover:scale-110 transition-all duration-300 custom-transition",alt:e.title,width:700,height:394,objectFit:"cover"})})},"services-".concat(t)))})}),(0,l.jsx)("div",{className:"flex justify-center md:justify-start items-center mt-4",children:(0,l.jsx)(K.Z,{text:"View all services",link:"/services",classList:"bg-white"})})]})}),(0,l.jsx)(M,{}),(0,l.jsx)("section",{className:"relative pt-16 lg:pt-20 bg-[#41554E]",children:(0,l.jsxs)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl 2xl:max-w-7xl mx-auto px-8 lg:px-0",children:[(0,l.jsx)("div",{className:"lg:px-8",children:(0,l.jsx)(u.Z,{span:"",classList:"mb-4 w-full lg:mb-6 md:mb-6 text-center text-white",heading:"Discover More Projects"})}),(0,l.jsx)("div",{className:"lg:px-2 interactive-element top",children:(0,l.jsxs)(N,{spaceBetween:30,slidesPerView:1,breakpoints:{640:{slidesPerView:2,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30}},children:[x.data.rows.map((e,t)=>(0,l.jsx)(s.o,{className:"h-44 text-white",children:(0,l.jsx)(m,{heading:e.title,hover:!0,span:"0".concat(t+1),fixedHeight:!0,buttonData:{enabled:!0,link:"/projects/".concat(e.ProjectCategory.slug,"/").concat(e.slug),text:"",icon:!0},interactive:!1,children:(0,l.jsx)("div",{className:"h-40 sm:h-60 relative mb-6 md:mb-0 overflow-hidden transform duration-300 scale-100 hover:scale-125",children:(0,l.jsx)(z(),{src:"".concat("https://api.datconsultancy.com","/uploads/").concat(e.altImage),alt:"Background Image",layout:"fill",objectFit:"cover",quality:100})})})},"projects-".concat(t))),(0,l.jsxs)("div",{className:"w-full flex justify-between lg:px-6 mb-12 mt-4 lg:mt-6 interactive-element top swiper-options",children:[(0,l.jsx)("div",{className:"flex interactive-element top mt-4",children:(0,l.jsx)(K.Z,{text:"View all Projects",link:"/projects",classList:"bg-white"})}),(0,l.jsxs)("div",{className:"w-full lg:w-1/12 flex justify-end lg:justify-between px-0 absolute lg:static top-4 right-4 z-10",children:[(0,l.jsx)("div",{className:"mr-4 cursor-pointer bg-white bg-opacity-70 lg:bg-opacity-0 flex justify-center items-center p-2 swiper-prev-button",children:(0,l.jsx)("span",{className:"pointer-events-none text-gray-900",children:(0,l.jsx)(c.s$,{})})}),(0,l.jsx)("div",{className:"cursor-pointer bg-white bg-opacity-70 lg:bg-opacity-0 flex justify-center items-center p-2 swiper-next-button",children:(0,l.jsx)("span",{className:"pointer-events-none text-gray-900",children:(0,l.jsx)(c.Tt,{})})})]})]})]})})]})}),(0,l.jsx)(C,{}),(0,l.jsx)(E,{}),(0,l.jsx)(T,{}),(0,l.jsx)(Y.Z,{}),(0,l.jsx)(A,{}),(0,l.jsx)(W.Z,{data:o.data}),(0,l.jsx)(k.Z,{data:v.data.rows})]})})})}}},function(e){e.O(0,[885,982,996,653,752,59,643,35,888,774,179],function(){return e(e.s=75557)}),_N_E=e.O()}]);