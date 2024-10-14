import Image from 'next/image';
import { useState } from 'react';
import { Box } from '@mui/material';

const DatBanner = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="pt-8 lg:pt-12">
            <h2 className="font-normal z-10 mb-6 text-3xl capitalize md:text-xl lg:text-4xl font-neuehaas text-center max-w-two-lines">
                Experts in Engineering Consulting & Design Solutions.
            </h2>
            
            {/* Main container for the images */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingBottom: '52.25%',  // Aspect ratio for 16:9
                    overflow: 'hidden',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* First Image (default) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transition: 'transform 2.5s ease, opacity 2.5s ease',
                        transform: isHovered ? 'translateY(-30px)' : 'translateY(0)',
                        opacity: isHovered ? 0 : 1,
                    }}
                >
                    <Image
                        src="/defaultbanner.webp"
                        alt="Default Banner"
                        layout="fill"  // Ensure full container coverage
                        objectFit="cover"  // Cover the box area
                    />
                </Box>

                {/* Second Image (hover) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        transition: 'transform 2.5s ease, opacity 2.5s ease',
                        transform: isHovered ? 'translateY(0)' : 'translateY(30px)',
                        opacity: isHovered ? 1 : 0,
                    }}
                >
                    <Image
                        src="/defaultcolorbanner.webp"
                        alt="Color Banner"
                        layout="fill"
                        objectFit="cover"
                    />
                </Box>
            </Box>
        </section>
    );
};

export default DatBanner;
