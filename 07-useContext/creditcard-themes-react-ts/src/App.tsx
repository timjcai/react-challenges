import React from 'react';
import './App.css';
import Frame from './components/common/Frame/Frame';
import SelectorButton from './components/SelectorButton/SelectorButton'
import { Container } from './components/common/Container/Container';
import { StyledContainer } from './components/common/Container/Container.styles';
import { ThemeProvider } from './components/common/ThemeContext';
import ThemeWrapper from './components/common/ThemeWrapper';


function App() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <div className="App">
          <header className="App-header">
            <Container $direction={'row'}>
              <Frame />
              <StyledContainer $direction={'column'} $ms={1} $justify={ 'center' }>
                <SelectorButton companylogo={'Up'} group={'bankingbrands'} />
                <SelectorButton companylogo={'CBA'} group={'bankingbrands'} />
                <SelectorButton companylogo={'ANZ'} group={'bankingbrands'} />
                <SelectorButton companylogo={'NAB'} group={'bankingbrands'} />
                <SelectorButton companylogo={'Westpac'} group={'bankingbrands'} />
              </StyledContainer>
            </Container>
          </header>
          </div>
      </ThemeWrapper>
    </ThemeProvider>
  );
}

export default App;
