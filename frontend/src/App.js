import React from "react";
import Landing from "@/pages/Landing";
import { Toaster } from "@/components/ui/sonner";
import "@/App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <Toaster theme="dark" position="bottom-right" />
    </div>
  );
}

export default App;
