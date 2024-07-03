import tw from "tailwind-styled-components";

export const Main = tw.div`
    flex
    flex-col
    md:flex-row
    items-center
    md:justify-center
    text-main
    gap-[50px]
`;

export const HeaderTitle = tw.h2`
    font-Haikus-Bold
    text-[32px]
    absolute
    left-[-38px]
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
    text-[64px]
`;

export const Description = tw.p`
    font-AG-Regular
    leading-[28px]
`;

export const VillasContainer = tw.div`
    flex
    flex-wrap
    w-[340px]
    xl:w-[685px]
    text-white
    font-AG-Bold
    font-weight-700
    text-[24px]
    gap-[2px]
    pt-[40px]
`;