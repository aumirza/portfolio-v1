import { BrowserRouter as Router } from "react-router-dom"
import { Layout } from "../Components/Layout/Layout"
import { ScrollHandler } from "../Components/ScrollHandler/ScrollHandler";


export function App() {

  return (
    <div className="App">
      <Router >
        <ScrollHandler />
        <Layout />
      </Router>
    </div>
  );
}

export default App;
