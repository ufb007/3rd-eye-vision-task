import stampImage from '../assets/images/stamp.png';

export const Stamp = ({ className }) => {
    return <img 
                src={stampImage}
                alt='Stamp' 
                className='
                    opacity-15
                    absolute 
                    md:top-[23px] 
                    md:left-[39px]
                    top-[10px]
                    right-[10px]
                    w-[140px]
                    md:w-[281px]
                '
            />
}