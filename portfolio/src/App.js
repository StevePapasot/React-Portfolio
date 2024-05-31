import './App.css';
import styled, {ThemeProvider} from "styled-components";
import {darkTheme} from "./utils/Themes";
import Navbar from "./components/Navbar"

const Body = styled.div`
  background-color: ${({theme}) => theme.bg};
  width:100%;
  height: 100%;
  overflow-x:hidden;
`;


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <Navbar />
      <Body>
       
      </Body>
    </ThemeProvider>
  );
}

export default App;
