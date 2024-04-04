import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routers";

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>

      <GlobalStyle/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
