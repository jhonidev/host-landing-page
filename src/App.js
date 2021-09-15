import ThemeContextProvider from "./contexts/ThemeContext";
import Landing from "./pages/Landing";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
  * {
    margin:0;
    padding:0;
  }
  body {
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
`;

function App() {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Landing />
    </ThemeContextProvider>
  );
}

export default App;
