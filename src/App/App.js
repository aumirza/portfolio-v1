import { BrowserRouter as Router } from "react-router-dom"
import WebfontLoader from '@dr-kobros/react-webfont-loader'
import { Layout } from "../Components/Layout/Layout"
import { ScrollHandler } from "../Components/ScrollHandler/ScrollHandler";


export function App() {

  const fontConfig = {
    google: {
      families: ['Handlee']
    }
  }

  return (
    <div className="App">
      <WebfontLoader config={fontConfig}>
        <Router >
          <ScrollHandler />
          <Layout />
        </Router>
      </WebfontLoader>
    </div>
  );
}

export default App;
