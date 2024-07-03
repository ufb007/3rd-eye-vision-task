import tw from "tailwind-styled-components";

export const Main = tw.div`
    flex
    flex-col
    md:flex-row
    items-center
    md:justify-center
    md:items-stretch
    text-main
    md:gap-[50px]
`;  

export const Content = tw.div`
    flex 
    items-center 
    flex-col 
    px-[30px]
    w-full
    md:w-[400px]
    lg:w-[438px] 
    2xl:w-[680px] 
    pt-[60px] 
    sm:pt-[85px] 
    pb-[40px]
`;

export const HeaderTitle = tw.h2`
    font-Haikus-Bold
    text-[24px]
    md:text-[32px]
    absolute
    left-[-15px]
    md:left-[20px]
    lg:left-[-38px]
    top-[-28px]
    bg-gradient-to-r
    from-primary
    to-secondary
    text-transparent
    bg-clip-text
    py-[3px]
`;

export const Title = tw.h1`
    font-DD-Bold
    text-[30px]
    md:text-[44px]
    lg:text-[64px]
`;

export const Description = tw.p`
    font-AG-Regular
    leading-[28px]
`;

export const VillasContainer = tw.div`
    flex
    flex-wrap
    md:w-[340px]
    xl:w-[685px]
    text-white
    font-AG-Bold
    font-weight-700
    pt-[30px]
    gap-[2px]
`;