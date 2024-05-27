import React from "react"
import SectionContent from "./sectionContent";   

interface ContentData {
    id: string;
    title?: string;
    subTitle?: string;
    content: {
        title: string;
        content: string;
        image: string;
        cta: string;
        reverse?: boolean;
    }[];
}

interface SectionProps {
    data: ContentData;
}

const Section: React.FC<SectionProps> = ({ data }) => {
    return (
        <div id={data?.id}>
            <div className="border-b border-[#EE7500] px-4 py-1">
                <div className="container mx-auto lg:flex text-black justify-between">
                    <h2 className="text-xl uppercase tracking-widest">{data?.title}</h2>
                    <p className="text-sm text-right lg:text-left">{data?.subTitle}</p>
                </div>
            </div>
            {data.content.map((item, index) => (
                <SectionContent 
                    key={index}
                    title={item.title}
                    content={item.content}
                    image={item.image}
                    cta={item.cta}
                    reverse={item.reverse}
                    itemIndex={index}
                />
            ))}
        </div>
    )
}

export default Section;