import { Home } from "./components/Home/Home";
import { useAuth } from "./hook/hook";
import { Private } from "./Pages/private";
import { Public } from "./Pages/Public";
import { Register } from "./Pages/Register/Register";

function App() {
  return (
    <>
      <Private />
      <Public />
    </>
  );
}

export default App;
