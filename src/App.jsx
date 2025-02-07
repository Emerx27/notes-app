import Sidebar from "./components/Sidebar";
import "normalize.css";
import "./scss/index.scss";
import { ScreenProvider } from "./contexts/ScreenContext";
import { DarkModeContext } from "./contexts/DarkModeContext";
import { useContext } from "react";
function App() {

  const { isDarkMode }= useContext(DarkModeContext);

  return (
    <>
      <ScreenProvider>
        <main className={`main ${isDarkMode ? "main--dark" : "main--light"}`}>
          <Sidebar />
        </main>
      </ScreenProvider>
    </>
  );
}

export default App;