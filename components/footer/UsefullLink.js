import Link from 'next/link'
const UsefullLink = ({text,link,target}) => {
    return(
        <li className="mb-1.5 usefull">
            <Link href={link} target={target}>
                <div className="relative transition-all duration-300 ease-linear left-0 hover:left-1 group hover:opacity-900">
                    {text}
                </div>
            </Link>
        </li>
    )
}
export default UsefullLink