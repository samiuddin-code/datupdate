const SectionHeader = ({span,heading,headingLevel,classList,animate}) => {
    let headingHtml = <h6 className="font-normal mb-6 text-2xl capitalize md:text-2xl font-neuehaas">{heading}</h6>;
    switch (headingLevel) {
        case 'h1':
            headingHtml = <h1 className="font-normal mb-6 text-3xl capitalize md:text-4xl font-neuehaas">{heading}</h1>
            break;
        case 'h2':
            headingHtml = <h2 className="font-normal mb-6 text-3xl capitalize md:text-4xl font-neuehaas">{heading}</h2>
            break;
        case 'h3':
            headingHtml = <h3 className="font-normal mb-6 text-3xl capitalize md:text-4xl font-neuehaas">{heading}</h3>
            break;
        case 'h4':
            headingHtml = <h4 className="font-normal text-xl capitalize md:text-2xl font-neuehaas">{heading}</h4>
            break;
        case 'h5':
            headingHtml = <h5 className="font-normal mb-6 text-2xl capitalize md:text-2xl font-neuehaas">{heading}</h5>
            break;
        default:
            break
    }
    return (
        <div className={(animate ? "interactive-element top " : "") + classList}>
            {
                span &&
                <span className="font-bold uppercase block mb-2 text-sm tracking-widest">{span}</span>
            }
            {headingHtml}
        </div>
    )
}

// SectionHeader.defaultProps = {
//     animate: true,
//     heading: "Some heading text",
//     classList: "mb-8 lg:mb-10 w-full",
//     headingLevel:'h2'
// }

export default SectionHeader
