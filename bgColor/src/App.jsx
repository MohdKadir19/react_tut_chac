import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed right-0 inset-y-32 flex">
        <div className="bg-white rounded-s-lg py-5 px-2 shadow-lg flex justify-between flex-col">
          <button onClick ={() => setColor("#0d6efd")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#0d6efd"}}></button>
          <button onClick ={() => setColor("#6c757d")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#6c757d"}}></button>
          <button onClick ={() => setColor("#198754")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#198754"}}></button>
          <button onClick ={() => setColor("#dc3545")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#dc3545"}}></button>
          <button onClick ={() => setColor("#ffc107")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#ffc107"}}></button>
          <button onClick ={() => setColor("rgb(123 153 184)")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"rgb(123 153 184)"}}></button>
          <button onClick ={() => setColor("#212529")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#212529"}}></button>
          <button onClick ={() => setColor("#967bb6")} className="outline-0 h-5 w-5 rounded-full" style={{backgroundColor:"#967bb6"}}></button>
        </div>
      </div>
    </div>
  );
}

export default App;
