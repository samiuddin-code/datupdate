import Link from 'next/link'

const Langugae = ({isStick,noImageHeader}) => {
    return (
        <ul className={(isStick ? "text-gray-900" : (noImageHeader ? " text-white" : " text-white" ) ) + " transition-all duration-300 ease-linear flex space-x-6 text-sm"}>
            <li className="uppercase font-neuehaas font-light hover:scale-105">
                <Link href="/" legacyBehavior>
                    <div>Eng</div> 
                </Link>
            </li>
            <li>|</li>
            <li className=" font-neuehaas font-normal hover:scale-105">
                <Link href="/" legacyBehavior>
                    <div>عربي</div> 
                </Link>
            </li>
        </ul>
    )
}

export default Langugae
