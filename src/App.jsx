import SlowSquareCalculator from "./components/Calculator";
import Carrello from "./components/Carrello";
import OrdinaProdotti from "./components/sortOrder";
import FiltroUtenti from "./components/userFilter";

function App() {

  return (
    <>
      <SlowSquareCalculator />
      <FiltroUtenti />
      <OrdinaProdotti />
      <Carrello />
    </>
  )
}

export default App
