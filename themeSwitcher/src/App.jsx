import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import Card from "./components/Card";
import ThemeButton from "./components/ThemeButton";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () =>{
     setThemeMode("light")
  }
  const darkMode = () =>{
    setThemeMode("dark")
  }

  useEffect(()=>{
   let element = document.querySelector('html');
   element.classList.remove("light", "dark");
   element.classList.add(themeMode);
  }, [themeMode])
  return (
    <>
      <ThemeProvider value={{themeMode, darkMode, lightMode}}>
        <div className="flex flex-wrap min-h-screen items-center text-white">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end focus:outline-none mb-2">
             <ThemeButton />
            </div>
            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
