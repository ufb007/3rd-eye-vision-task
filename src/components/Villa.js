import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Villa = ({ name, image }) => {
    const imgSrc = require(`../assets/images/villas/${image}`);

    return (
        <div className="
                flex-grow-0 
                flex-shrink-0 
                w-[calc(50%-1px)]
                bg-cover 
                bg-center 
                h-[185px]
                md:w-[340px]
                md:h-auto
                flex
                z-0
                relative
                text-[24px]
                cursor-pointer" 
            style={{ backgroundImage: `url(${imgSrc})` }}>
            <div className="
                bg-gradient-to-b
                from-transparent
                to-black
                w-full 
                absolute 
                left-0 
                top-0 
                z-0 
                h-full
                opacity-50"></div>
            <div className="flex items-end md:items-center xl:items-end z-10 w-full">
                <div className="flex items-center p-8 justify-between w-full text-[20px] md:text-[24px]">
                    {name}
                    <FontAwesomeIcon icon={faArrowRight} className="w-[16px]" />
                </div>
            </div>
        </div>
    )
}