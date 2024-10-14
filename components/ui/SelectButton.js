import Link from "next/link";

const SelectButton = ({ link, text, classList, icon, external, onClick, isActive, ...rest }) => {
    const btnClass = classList + (icon ? "" : " pr-8");
    const activeClass = isActive ? "bg-green-700 text-white" : "bg-white text-gray-900"; // Base styles

    return (
        <>
            {external ? (
                <div
                    {...rest}
                    onClick={(e) => { e.preventDefault(); onClick(); }}
                    rel="noopener noreferrer"
                    target="_blank"
                    className={`${btnClass} ${activeClass} text-left tracking-widest inline-block text-sm py-5 pl-4 uppercase leading-4 relative border border-gray-900 transition-colors duration-300 hover:bg-green-700 hover:text-white hover:border-0`}
                >
                    <span className="relative z-10">{text}</span>
                    <span className="w-full h-0 absolute bottom-0 left-0 bg-green-900 transition-all duration-300 hover:h-full pointer-events-none"></span>
                </div>
            ) : (
                <Link href={link}>
                    <div>
                        <div
                            {...rest}
                            onClick={(e) => { e.preventDefault(); onClick(); }}
                            className={`${btnClass} ${activeClass} text-center tracking-widest inline-block text-sm py-5 leading-4 relative border border-gray-900 transition-colors duration-300 hover:bg-green-700 hover:text-white hover:border-0`}
                        >
                            <span className="relative z-10">{text}</span>
                            <span
                                className="w-full h-0 absolute bottom-0 left-0 bg-green-900 transition-all duration-300 hover:h-full pointer-events-none"
                                style={{ background: 'linear-gradient(90deg, rgba(10,188,103,1) 0%, rgba(0,97,74,1) 100%)' }}
                            ></span>
                        </div>
                    </div>
                </Link>
            )}
        </>
    );
};

SelectButton.defaultProps = {
    link: '/',
    classList: 'bg-gray-50 text-gray-900',
    text: 'Click here',
    icon: true,
    external: false,
};

export default SelectButton;
