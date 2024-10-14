exports.id=983,exports.ids=[983],exports.modules={1698:e=>{e.exports={slider__overlay:"slider_slider__overlay__3zYZK",slider__height:"slider_slider__height__hcR9U"}},3232:()=>{},2481:()=>{},2196:(e,a,t)=>{"use strict";t.a(e,async(e,l)=>{try{t.d(a,{Z:()=>j});var s=t(997),r=t(6689),n=t(1163);t(1664);var i=t(9648),c=t(1398);t(6382),t(3232),t(5118),t(2481),t(3910),t(9878),t(4960);var o=t(8326),d=t(9933),m=t(2227);t(2412),t(4705),t(7558);var x=t(109),h=t(1772),g=e([i,c,m]);[i,c,m]=g.then?(await g)():g;let u=()=>s.jsx("div",{className:"sm:p-4 md:pl-0 bg-white",children:s.jsx("h3",{className:"text-xl font-normal mb-4",children:"Building Inquiry"})}),p=()=>s.jsx("div",{className:"sm:p-4 md:pl-0 bg-white",children:s.jsx("h3",{className:"text-xl font-normal mb-4",children:"Design Inquiry"})}),b=()=>s.jsx("div",{className:"sm:p-4 md:pl-0 bg-white",children:s.jsx("h3",{className:"text-xl font-normal mb-4",children:"Concept Inquiry"})}),v=()=>s.jsx("div",{className:"sm:p-4 md:pl-0 bg-white",children:s.jsx("h3",{className:"text-xl font-normal mb-4",children:"General Query Inquiry"})}),j=({response:e,formType:a,isVisible:t})=>{let l;if(!t)return null;switch(a){case"building":l=u;break;case"design":l=p;break;case"concept":l=b;break;case"general":l=v;break;default:return null}let[c,m]=(0,r.useState)({serviceChosen:"{}"===JSON.stringify((0,n.useRouter)().query)?"any":(0,n.useRouter)().query.slug}),[g,j]=(0,r.useState)(null),[f,w]=(0,r.useState)({}),[N,C]=(0,r.useState)(!1),y=(0,n.useRouter)(),k=e=>{m({...c,[e.target.name]:null!=e.target.files?e.target.files[0]:e.target.value})};return(0,s.jsxs)("div",{className:"mt-6 py-4 z-50",children:[s.jsx(l,{}),(0,s.jsxs)("form",{method:"post",encType:"multipart/form-data",autoComplete:"off",onSubmit:e=>{e.preventDefault(),C(!0),i.default.post("https://api.datconsultancy.com/web-api/v1.0/sendEnquiry",c,headers).then(e=>{let a;console.log(e);let t={};e.data.errorMsg&&e.data.errorMsg.map(e=>t[e.param]=e.msg),1==e.data.code?y.push({pathname:"/thankyou",query:{message:e.data.msg}}):a=s.jsx("span",{className:"text-[#ff0000]",children:e.data.msg}),j(a),w(t),C(!1)}).catch(e=>{console.log(e),j(s.jsx("span",{className:"text-[#ff0000]",children:"Error Encountered! Please Try again after a while"})),C(!1)})},className:N?"pointer-events-none":"",children:[(0,s.jsxs)("div",{className:("/"!=y.pathname?"md:grid-cols-2":"")+" grid gap-x-8 mb-8",children:[s.jsx(o.Z,{labelText:"Full Name",name:"name",changeHandler:k,error:f}),"/"!=y.pathname&&s.jsx(o.Z,{labelText:"Company Name",name:"companyName",changeHandler:k,error:f})]}),(0,s.jsxs)("div",{className:(y.pathname,"md:grid-cols-2 grid gap-x-8 mb-8"),children:[s.jsx("div",{className:"mb-8 sm:mb-8 md:mb-0 lg:mb-0",children:s.jsx(o.Z,{labelText:"Contact Number",name:"contactNumber",changeHandler:k,error:f})}),s.jsx("div",{className:"mb-8 sm:mb-8 md:mb-0 lg:mb-0",children:s.jsx(o.Z,{labelText:"Email",name:"email",changeHandler:k,error:f})}),"/"!=y.pathname&&(0,s.jsxs)(SelectBox,{labelText:"Choose Location",name:"location",changeHandler:k,error:f,children:[s.jsx("option",{value:"Dubai",children:"Dubai"}),s.jsx("option",{value:"Abu Dhabi",children:"Abu Dhabi"})]})]}),(0,s.jsxs)("div",{className:(y.pathname,"md:grid-cols-2 grid gap-x-8 mb-8"),children:[s.jsx("div",{className:"mb-8 sm:mb-8 md:mb-0 lg:mb-0",children:s.jsx(h.Z,{labelText:"Start Date",name:"startDate",error:f,onChange:k})}),s.jsx("div",{className:"mb-8 sm:mb-8 md:mb-0 lg:mb-0",children:s.jsx(o.Z,{labelText:"Project Budget",name:"projectBudget",changeHandler:k,error:f})})]}),s.jsx("div",{className:"grid mb-6",children:s.jsx(o.Z,{textareaField:!0,classList:"h-100",name:"message",changeHandler:k,error:f,labelText:"Project Description",resize:"resize-none"})}),s.jsx("div",{className:"w-full",children:s.jsx(x.Z,{text:"Upload",name:"clientFiles",accept:"application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*",formData:c,error:f,onChange:k})}),(0,s.jsxs)("div",{className:"mt-10",children:[s.jsx(d.Z,{text:"Submit",type:"submit",animateIcon:N,classList:N?"pointer-events-none border":"border"}),g&&s.jsx("span",{className:"mt-4 text-green-900 block",children:g})]})]})]})};l()}catch(e){l(e)}})},5152:(e,a,t)=>{"use strict";t.a(e,async(e,l)=>{try{t.d(a,{Z:()=>o});var s=t(997),r=t(6689),n=t(816),i=t(2196),c=e([i]);i=(c.then?(await c)():c)[0];let o=()=>{let[e,a]=(0,r.useState)(""),t=t=>{a(e===t?"":t)};return s.jsx("section",{className:"py-16 px-8 lg:py-20 relative bg-white top z-50 h-full",children:(0,s.jsxs)("div",{className:"lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl lg:px-8 lg:mx-auto md:text-gray-900",children:[(0,s.jsxs)("div",{className:"max-w-lg sm:max-w-xl md:max-w-2xl",children:[s.jsx("h2",{className:"relative mb-10 text-3xl lg:text-5xl lg:z-10 leading-none",children:"Have a project in mind?"}),s.jsx("h1",{className:"relative font-bold uppercase block mb-6 text-sm lg:tracking-widest z-10",children:"Send your query below"})]}),(0,s.jsxs)("div",{className:"relative mb-10 md:mb-0 md:top-0 md:h-full w-full z-0",children:[(0,s.jsxs)("div",{className:"flex flex-wrap gap-4 md:grid md:grid-cols-4 md:gap-6 lg:w-full",children:[s.jsx("div",{className:"flex-1 min-w-[100px]",children:s.jsx(n.Z,{text:"Building",onClick:()=>t("building"),classList:"bg-white w-full rounded-full text-center",isActive:"building"===e})}),s.jsx("div",{className:"flex-1 min-w-[100px]",children:s.jsx(n.Z,{text:"Design",onClick:()=>t("design"),classList:"bg-white w-full rounded-full text-center",isActive:"design"===e})}),s.jsx("div",{className:"flex-1 min-w-[100px]",children:s.jsx(n.Z,{text:"Concept",onClick:()=>t("concept"),classList:"bg-white w-full rounded-full text-center",isActive:"concept"===e})}),s.jsx("div",{className:"flex-1 min-w-[100px]",children:s.jsx(n.Z,{text:"General Query",onClick:()=>t("general"),classList:"bg-white w-full rounded-full text-center",isActive:"general"===e})})]}),s.jsx(i.Z,{formType:e,isVisible:""!==e})]})]})})};l()}catch(e){l(e)}})},816:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var l=t(997),s=t(1664),r=t.n(s);let n=({link:e,text:a,classList:t,icon:s,external:n,onClick:i,isActive:c,...o})=>{let d=t+(s?"":" pr-8"),m=c?"bg-green-700 text-white":"bg-white text-gray-900";return l.jsx(l.Fragment,{children:n?(0,l.jsxs)("div",{...o,onClick:e=>{e.preventDefault(),i()},rel:"noopener noreferrer",target:"_blank",className:`${d} ${m} text-left tracking-widest inline-block text-sm py-5 pl-4 uppercase leading-4 relative border border-gray-900 transition-colors duration-300 hover:bg-green-700 hover:text-white hover:border-0`,children:[l.jsx("span",{className:"relative z-10",children:a}),l.jsx("span",{className:"w-full h-0 absolute bottom-0 left-0 bg-green-900 transition-all duration-300 hover:h-full pointer-events-none"})]}):l.jsx(r(),{href:e,children:l.jsx("div",{children:(0,l.jsxs)("div",{...o,onClick:e=>{e.preventDefault(),i()},className:`${d} ${m} text-center tracking-widest inline-block text-sm py-5 leading-4 relative border border-gray-900 transition-colors duration-300 hover:bg-green-700 hover:text-white hover:border-0`,children:[l.jsx("span",{className:"relative z-10",children:a}),l.jsx("span",{className:"w-full h-0 absolute bottom-0 left-0 bg-green-900 transition-all duration-300 hover:h-full pointer-events-none",style:{background:"linear-gradient(90deg, rgba(10,188,103,1) 0%, rgba(0,97,74,1) 100%)"}})]})})})})};n.defaultProps={link:"/",classList:"bg-gray-50 text-gray-900",text:"Click here",icon:!0,external:!1};let i=n},1772:(e,a,t)=>{"use strict";t.d(a,{Z:()=>i});var l=t(997),s=t(6689),r=t(8743),n=t.n(r);t(5994);let i=e=>{let[a,t]=(0,s.useState)(new Date),r=(0,s.useRef)(null);return(0,l.jsxs)("div",{className:"w-full relative",children:[l.jsx("label",{class:"InputBox_label__width__l1qzP left-4 top-3 bg-white absolute text-sm transition-all duration-300 custom-transition text-gray-700 pointer-events-none",for:"contactNumber",children:"Start Date"}),l.jsx(n(),{placeholderText:"Start Date",ref:r,onChange:e=>t(e),className:"w-full h-11 px-4 border rounded outline-none transition-all duration-300 custom-transition  border-gray-900 border-opacity-20 focus:border-green-900"}),l.jsx("span",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer",onClick:()=>{r.current&&r.current.setOpen(!0)},children:l.jsx("svg",{width:"29",height:"29",viewBox:"0 0 29 29",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:l.jsx("path",{d:"M24.8125 3.5H20.6875V1.4375C20.6875 1.25516 20.6151 1.0803 20.4861 0.951364C20.3572 0.822433 20.1823 0.75 20 0.75C19.8177 0.75 19.6428 0.822433 19.5139 0.951364C19.3849 1.0803 19.3125 1.25516 19.3125 1.4375V3.5H9.6875V1.4375C9.6875 1.25516 9.61507 1.0803 9.48614 0.951364C9.35721 0.822433 9.18234 0.75 9 0.75C8.81766 0.75 8.6428 0.822433 8.51386 0.951364C8.38493 1.0803 8.3125 1.25516 8.3125 1.4375V3.5H4.1875C3.27615 3.50109 2.40245 3.86361 1.75803 4.50803C1.11361 5.15245 0.751092 6.02615 0.75 6.9375V24.8125C0.751092 25.7238 1.11361 26.5976 1.75803 27.242C2.40245 27.8864 3.27615 28.2489 4.1875 28.25H24.8125C25.724 28.2493 26.5979 27.8869 27.2424 27.2424C27.8869 26.5979 28.2493 25.724 28.25 24.8125V6.9375C28.2493 6.02604 27.8869 5.15212 27.2424 4.50762C26.5979 3.86313 25.724 3.50073 24.8125 3.5ZM26.875 24.8125C26.875 25.3595 26.6577 25.8841 26.2709 26.2709C25.8841 26.6577 25.3595 26.875 24.8125 26.875H4.1875C3.64049 26.875 3.11589 26.6577 2.72909 26.2709C2.3423 25.8841 2.125 25.3595 2.125 24.8125V13.125H26.875V24.8125ZM26.875 11.75H2.125V6.9375C2.125 5.799 3.04625 4.875 4.1875 4.875H8.3125V6.9375C8.3125 7.11984 8.38493 7.2947 8.51386 7.42364C8.6428 7.55257 8.81766 7.625 9 7.625C9.18234 7.625 9.35721 7.55257 9.48614 7.42364C9.61507 7.2947 9.6875 7.11984 9.6875 6.9375V4.875H19.3125V6.9375C19.3125 7.11984 19.3849 7.2947 19.5139 7.42364C19.6428 7.55257 19.8177 7.625 20 7.625C20.1823 7.625 20.3572 7.55257 20.4861 7.42364C20.6151 7.2947 20.6875 7.11984 20.6875 6.9375V4.875H24.8125C25.3595 4.875 25.8841 5.0923 26.2709 5.47909C26.6577 5.86589 26.875 6.39049 26.875 6.9375V11.75Z",fill:"#1F1F2D"})})})]})}},5994:()=>{}};