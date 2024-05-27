import React from "react"
import Image from 'next/image';
import Button from "./button";

interface ContentProps {
    itemIndex: number;
    title: string;
    content: string;
    image: string;
    cta: string;
    reverse?: boolean;
}

const SectionContent: React.FC<ContentProps> = ( { itemIndex, title, content, image, reverse, cta } ) => {
    return (
        <div className="relative mb-14" >
            <div className={`flex flex-wrap w-full flex-col-reverse text-black container mx-auto px-4 ${itemIndex % 2 !== 0 || reverse ? 'section-reverse' : ''}`}>
                <div className="lg:w-1/2 py-6 lg:py-16 flex flex-col justify-center pr-4 lg:pr-10 section-content">
                    <div className="lg:max-w-[430px]">
                        
                        <h2 className="text-3xl mb-6">{title}</h2>
                        <p className="font-light mb-8">{content}</p>

                        <div className="sectiom-button">
                            <Button url="#">
                                View Details
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 lg:absolute lg:inset-y-0 lg:right-0 section-image">
                    <Image src={image} alt={title} width={940} height={528} className="object-cover w-full h-full"/>
                </div>
            </div>
        </div>
    )
}

export default SectionContent;