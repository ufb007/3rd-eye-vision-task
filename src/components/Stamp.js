import stampImage from '../assets/images/stamp.png';

export const Stamp = ({ className }) => {
    return <img 
                src={stampImage}
                alt='Stamp' 
                className='
                    opacity-15
                    absolute 
                    top-[23px] 
                    left-[39px]
                    w-[281px]
                '
            />
}