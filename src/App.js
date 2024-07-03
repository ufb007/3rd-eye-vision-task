import { Stamp } from './components/Stamp';
import content from './assets/content/data.json';
import { Main, Description, Title, VillasContainer, HeaderTitle } from './components/StyledComponents';
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
      <div className='w-[680px] flex items-center flex-col pt-[80px] pb-[40px]'>
        <div className='w-[438px] flex-col gap-10 flex relative'>
          <HeaderTitle>{headText}</HeaderTitle>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <ButtonGradient title={bookNowText} />
        </div>
      </div>
      <VillasContainer>
        {villas.map((villa, index) => <Villa key={index} {...villa} />)}
      </VillasContainer>
    </Main>
  );
}

export default App;
