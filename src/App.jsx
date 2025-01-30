import Sidebar from "./components/Sidebar";
import "normalize.css";
import "./scss/index.scss";
import { ScreenProvider } from "./contexts/ScreenContext";
function App() {

  return (
    <>
      <ScreenProvider>
        <main>
          <Sidebar />
        </main>
      </ScreenProvider>
    </>
  );
}

export default App;