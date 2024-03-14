import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("");

  //useref hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass= "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed)  str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)    
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() =>{
    passwordGenerator();
  } ,[length, numberAllowed, charAllowed, passwordGenerator])

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 5)
   window.navigator.clipboard.writeText(password);
  },[password])

  return (
    <>
      <div className="w-full h-screen bg-black flex justify-center items-center flex-col">
        <h1 className="text-white text-4xl mb-3">Password Generator </h1>
        <div className="max-w-md mx-auto py-6 px-4 bg-gray-600 rounded-lg">
          <div className="flex mb-3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={copyToClipboard}
            >
              Copy
            </button>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-x-2">
              <input
                type="range"
                min={16}
                max={100}
                value={length}
                className="h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                onChange={(e) => setLength(e.target.value)}
                
              />
              <label>Length :{length}</label>
            </div>
            <div className="flex  items-center gap-x-2 text-white">
              <label>
                <input type="checkbox" 
                defaultChecked={numberAllowed}
                onClick={() => setNumberAllowed((prev) => !prev)}
                className="accent-pink-500" />
                Number
              </label>
            </div>
            <div className="flex  items-center gap-x-2 text-white">
              <label>
                <input type="checkbox"
                defaultChecked={charAllowed}
                onClick={() => setCharAllowed((prev) => !prev)}
                className="accent-pink-500" />
                Character
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
