import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <div class="flex gap-4">
        <Card 
        username="Cyxus"
        img="/images/shoes-1.jpg"
        desc="Latest Men Sneakers - White-Red "
        btnText="Visit More"
        />
        <Card 
        username="Vitike"
        img="/images/shoes-2.jpg"
        desc="Latest Men Sneakers - White-Black"
        btnText="Visit More"/>
        <Card 
        username="Aomei"
        img="/images/shoes-3.jpg"
        desc="Latest Men Sneakers - White-Orange"
        btnText="Visit More"/>
        <Card 
        username="Puma"
        img="/images/shoes-4.jpg"
        desc="Latest Men Sneakers - Grey-Pink"
        />
      </div>
    </>
  );
}

export default App;
