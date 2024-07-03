import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const Villa = ({ name, image }) => {
    const imgSrc = require(`../assets/images/villas/${image}`);

    return (
        <div className="
                bg-cover 
                bg-center 
                w-[338px]
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
                w-full absolute 
                left-0 
                top-0 
                z-0 
                h-full
                opacity-50"></div>
            <div className="flex items-end z-10 w-full">
                <div className="flex items-center p-8 justify-between w-full">
                    {name}
                    <FontAwesomeIcon icon={faArrowRight} className="w-[16px]" />
                </div>
            </div>
        </div>
    )
}