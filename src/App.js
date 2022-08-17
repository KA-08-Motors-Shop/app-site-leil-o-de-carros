import { GlobalStyle } from "./Style/style";
import Routes from "./Routes";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <div className="body-background"/>
        <Routes />
      </div>
    </>
  );
}

export default App;
