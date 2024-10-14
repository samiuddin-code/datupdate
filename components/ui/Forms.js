import { useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from "axios"
import Layout from "@/components/Layout"
import Meta from "@/components/Meta"
import CallImage from '@/images/icons/call.svg'
import SectionHeader from "@/ui/SectionHeader"
import Message from '@/images/icons/email.svg'
import { ClipBoard } from "@/ui/ClipBoard"
import { trimSpaces } from "@/helpers/helpers"
import ExternalImage from "@/ui/ExternalImage"
import InputBox from "@/forms/InputBox"
import SubmitButton from "@/ui/SubmitButton"
import fetchData from "@/apiData/resolver";
import { Chevron } from "@/icons/UtilIcons";
import Styles from "@/css/card.module.scss";
import LinkButton from "@/components/ui/LinkButton"
import UploadFile from '@/forms/UploadFile'
import DateInput from '@/forms/DateInput'

const BuildingForm = () => (
    
  <div className="sm:p-4 md:pl-0 bg-white">
    <h3 className="text-xl font-normal mb-4">Building Inquiry</h3>
  </div>
);

const DesignForm = () => (
  <div className="sm:p-4 md:pl-0 bg-white">
    <h3 className="text-xl font-normal mb-4">Design Inquiry</h3>
  </div>
);

const ConceptForm = () => (
  <div className="sm:p-4 md:pl-0 bg-white">
    <h3 className="text-xl font-normal mb-4">Concept Inquiry</h3>
  </div>
);

const GeneralQueryForm = () => (
  <div className="sm:p-4 md:pl-0 bg-white">
    <h3 className="text-xl font-normal mb-4">General Query Inquiry</h3>
  </div>
);

const Form = ({ response, formType, isVisible }) => {
  if (!isVisible) return null;
  let FormComponent;

  switch (formType) {
    case 'building':
      FormComponent = BuildingForm;
      break;
    case 'design':
      FormComponent = DesignForm;
      break;
    case 'concept':
      FormComponent = ConceptForm;
      break;
    case 'general':
      FormComponent = GeneralQueryForm;
      break;
    default:
      return null;
  }

  const [formData,setFormData] = useState({
    serviceChosen:JSON.stringify(useRouter().query) === '{}' ? 'any' : useRouter().query.slug
});
const [formMessage,setFormMessage] = useState(null);
const [errorMessage,setErrorMessage] = useState({});
const [formSubmitting,setFormSubmitting] = useState(false);
const path = useRouter();
const sendMessage = (event) => {
    event.preventDefault()
    setFormSubmitting(true);
    axios.post(`${process.env.API_DOMAIN}/sendEnquiry`,formData,headers).then(res => {
            console.log(res);
            let formMessage;
            let obj = {};
            if(res.data.errorMsg){
                res.data.errorMsg.map(item => (
                    obj[item.param]=item.msg
                ))
            }
            if(res.data.code == 1){
                path.push({
                    pathname: '/thankyou',
                    query: { message: res.data.msg }
                });
            }else{
                formMessage = <span className="text-[#ff0000]">{res.data.msg}</span>
            }
            setFormMessage(formMessage);
            setErrorMessage(obj);
            setFormSubmitting(false);
        })
        .catch(error => {
            console.log(error);
            setFormMessage(<span className="text-[#ff0000]">Error Encountered! Please Try again after a while</span>);
            setFormSubmitting(false);
        })
    }
    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:(e.target.files != null ? e.target.files[0] : e.target.value)
        })
    }

  return (
            <div className="mt-6 py-4 z-50">
            <FormComponent />    
            <form method="post" encType="multipart/form-data" autoComplete="off" onSubmit={sendMessage} className={(formSubmitting ? "pointer-events-none" : "")}>
            <div className={(path.pathname != "/" ? "md:grid-cols-2" : "" ) + " grid gap-x-8 mb-8"}>
                <InputBox labelText="Full Name" name="name" changeHandler={changeHandler} error={errorMessage}/>
                {
                    path.pathname != "/" &&
                    <InputBox labelText="Company Name" name="companyName" changeHandler={changeHandler} error={errorMessage}/>
                }
            </div>
            <div className={(path.pathname != "/" ? "md:grid-cols-2" : "md:grid-cols-2" ) + " grid gap-x-8 mb-8"}>
               <div className="mb-8 sm:mb-8 md:mb-0 lg:mb-0">
                <InputBox labelText="Contact Number" name="contactNumber" changeHandler={changeHandler} error={errorMessage}/>
                </div>
                <div className="mb-8 sm:mb-8 md:mb-0 lg:mb-0">
                <InputBox labelText="Email" name="email" changeHandler={changeHandler} error={errorMessage}/>
                </div>
                {
                    path.pathname != "/" &&
                    <SelectBox labelText="Choose Location" name="location" changeHandler={changeHandler} error={errorMessage}>
                        <option value="Dubai">Dubai</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                    </SelectBox>
                }
            </div>
            <div className={(path.pathname != "/" ? "md:grid-cols-2" : "md:grid-cols-2" ) + " grid gap-x-8 mb-8"}>
                <div className="mb-8 sm:mb-8 md:mb-0 lg:mb-0">
                 <DateInput labelText="Start Date" name="startDate" error={errorMessage} onChange={changeHandler}/>
                </div>
                <div className="mb-8 sm:mb-8 md:mb-0 lg:mb-0">
                <InputBox labelText="Project Budget" name="projectBudget" changeHandler={changeHandler} error={errorMessage}/>
                </div>
            </div>
            <div className="grid mb-6">
                <InputBox textareaField={true} classList="h-100" name="message" changeHandler={changeHandler} error={errorMessage} labelText="Project Description" resize="resize-none"/>
            </div>
            {
            <div className="w-full">
                <UploadFile text="Upload" name="clientFiles" accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,text/plain, application/pdf, image/*" formData={formData} error={errorMessage} onChange={changeHandler}/>
            </div>
            }
            <div className="mt-10">
                <SubmitButton text="Submit" type="submit" animateIcon={formSubmitting} classList={(formSubmitting ? "pointer-events-none border" : "border")} />
                {
                    formMessage &&
                    <span className="mt-4 text-green-900 block">{formMessage}</span>
                }
            </div>
        </form> 
    </div>
  );
};

export default Form;
