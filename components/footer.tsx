import React from "react";

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {

    return (
        <footer className="text-center text-xs py-4 border-t border-[#E0E0E0] text-[#808080]">LEGO, the LEGO logo and the Brick and Knob configurations are<br/> trademarks of the LEGO Group. ©2022 The LEGO Group.</footer>
    );

}

export default Footer;