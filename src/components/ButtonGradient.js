import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const ButtonGradient = ({title}) => {
    return <button className="
                bg-gradient-to-r
                from-primary
                to-secondary
                text-white
                py-4
                px-8
                w-[226px]
                sm:w-1/2
                flex
                justify-between
                items-center
                font-AG-Bold
                text-[18px]
                drop-shadow-[0_5px_3px_rgba(0,0,0,0.3)]">
            {title}
            <FontAwesomeIcon icon={faArrowRight} />
        </button>
}