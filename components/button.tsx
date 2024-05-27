import React from "react"
import ArrowDown from "./icons/arrowDown";

interface ButtonProps {
    url: string;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ url, children }) => {
    return (
        <a href={url} className="group bg-transparent border border-black px-8 py-3 rounded-full text-black text-sm inline-block hover:border-primary hover:text-primary">
            <div className="flex items-center">
                <span className="mr-4">{children}</span>
                <ArrowDown className="group-hover:text-primary"/>
            </div>
        </a>
    )
}

export default Button;