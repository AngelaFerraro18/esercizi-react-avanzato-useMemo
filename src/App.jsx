import FiltroLibri from "./components/BookFilter";
import SlowSquareCalculator from "./components/Calculator";
import Carrello from "./components/Carrello";
import ListaProdotti from "./components/FilteredOrder";
import OrdinaProdotti from "./components/sortOrder";
import FiltroUtenti from "./components/userFilter";

function App() {

  return (
    <>
      <SlowSquareCalculator />
      <FiltroUtenti />
      <OrdinaProdotti />
      <Carrello />
      <FiltroLibri />
      <ListaProdotti />
    </>
  )
}

export default App
