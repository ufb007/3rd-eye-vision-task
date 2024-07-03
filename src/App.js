import { Stamp } from './components/Stamp';
import content from './assets/content/data.json';
import { Main, Content, Description, Title, VillasContainer, HeaderTitle } from './components/StyledComponents';
import { Villa } from './components/Villa';
import { ButtonGradient } from './components/ButtonGradient';

function App() {
  const { 
    headText,
    title,
    description,
    bookNowText,
    villas
  } = content;

  return (
    <Main>
      <Stamp />
      <Content>
        <div className='w-full md:w-[400px] lg:w-[438px] flex-col gap-10 flex relative'>
          <HeaderTitle>{headText}</HeaderTitle>
          <Title>{title}</Title>
          <Description>{description}</Description>

          <div className='hidden md:flex md:visible justify-center md:justify-start'>
            <ButtonGradient title={bookNowText}  />
          </div>
        </div>
      </Content>
      <VillasContainer>
        {villas.map((villa, index) => <Villa key={index} {...villa} />)}

        <div className='visible flex md:hidden justify-center w-full py-10'>
          <ButtonGradient title={bookNowText} />
        </div>
      </VillasContainer>
    </Main>
  );
}

export default App;
