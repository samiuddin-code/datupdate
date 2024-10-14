import React, { useState } from "react";
import Image from 'next/image';
import useIsMobile from '@/ui/useIsMobile';
import { Button, Box, Typography, Tab, Tabs } from '@mui/material';

const HomeTabs = () => {
    const [activeTab, setActiveTab] = useState("design");
    const isMobile = useIsMobile();

    const tabs = [
        {
            id: "design",
            label: "Design",
            content: "Explore sleek urban landscapes to serene retreats in our diverse portfolio.",
            image: "/edv-slide.webp",
        },
        {
            id: "manage",
            label: "Manage",
            content: "Expertise demonstrated across the UAE, especially in Dubai, Abu Dhabi, and Sharjah.",
            image: "/dji-build-slide.webp",
        },
        { 
            id: "build",
            label: "Build",
            content: "Our team specializes in Building and Villa Design, with competencies in multiple engineering fields.",
            image: "/dji-build-slide.webp",
        }
    ];

    const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

    return (
        <section className="relative w-full overflow-hidden">
            {isMobile ? (
                <Box>
                    <Tabs
                        value={activeTab}
                        onChange={(e, newValue) => setActiveTab(newValue)}
                        variant="scrollable"
                        scrollButtons="auto"
                        textColor="inherit"
                        indicatorColor="primary"
                    >
                        {tabs.map(tab => (
                            <Tab 
                                key={tab.id} 
                                label={tab.label} 
                                value={tab.id} 
                            />
                        ))}
                    </Tabs>

                    <Box className="text-gray-900 text-sm pt-6 pb-6 rounded-lg shadow-md m-auto">
                        <Typography variant="body1">{activeTabData.content}</Typography>
                    </Box>

                    <div className="relative inset-0 z-0">
                        <Image
                            src={activeTabData.image}
                            alt="Background Image"
                            layout="responsive"
                            width={1920}
                            height={600}
                            objectFit="cover"
                            quality={100}
                        />
                    </div>
                </Box>
            ) : (
                <Box className="relative w-full h-screen">
                    <div className="absolute inset-0 z-0">
                        <Image
                            src={activeTabData.image}
                            alt="Background Image"
                            layout="fill" // Set to fill for full coverage
                            objectFit="cover" // Ensure it covers the area
                            quality={100}
                        />
                    </div>

                    <div className="relative z-20 flex pt-8">
                        <Box className="w-1/3 m-auto">
                            <div className="flex justify-between text-white">
                                {tabs.map(tab => (
                             <Button
                             key={tab.id}
                             onClick={() => setActiveTab(tab.id)}
                             variant={activeTab === tab.id ? "contained" : "outlined"}
                             style={{
                                 flex: 1,
                                 margin: '0 5px',
                                 textTransform: 'capitalize',
                                 backgroundColor: activeTab === tab.id ? '#137749' : 'transparent', 
                                 color: 'white', // White text color
                                 borderRadius: '25px',
                                 border: `1px solid white`, // White border for all buttons
                                 opacity: activeTab === tab.id ? 1 : 0.8, // Slightly transparent for inactive buttons
                                 transition: 'background-color 0.2s ease', // Smooth transition for hover effect
                             }}
                         >
                             {tab.label}
                         </Button>
                         
                                ))}
                            </div>
                        </Box>
                    </div>

                    <Box className="w-2/3 relative text-white text-lg pt-20 mr-4 rounded-lg mx-auto transform scale-100 group-hover:scale-110 transition-all duration-300 custom-transition">
                        <Typography variant="h6">{activeTabData.content}</Typography>
                    </Box>
                </Box>
            )}
        </section>
    );
};

export default HomeTabs;
