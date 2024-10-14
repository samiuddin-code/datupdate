import { trimSpaces } from "@/helpers/helpers"

const AddressSection = ({branchLocations}) => {
    return (
        // <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-24">
<div className="grid grid-cols-1">
        {
                branchLocations.map(item => (
                    <div key={item.title} className="mb-8">
                        <address className="w-10/12 not-italic font-normal">
                            <span className="block mb-2 uppercase font-bold">{item.title}</span>
                            <div title={item.contactText} href={`tel:${trimSpaces(item.contactNumber)}`} target="_blank" rel="noopener noreferer" className="font-normal block mb-2 ">{item.contactNumber}</div>
                            <div href={item.mapLocation} target="_blank" rel="noopener noreferer" className="uppercase leading-4 block">{item.address}</div>
                        </address>
                    </div>
                ))
            }
        </div>
    )
}

export default AddressSection
