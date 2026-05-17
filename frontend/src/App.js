import React from "react";
import Landing from "@/pages/Landing";
import { Toaster } from "sonner";
import "@/App.css";

function App() {
  return (
    <div className="App">
      <Landing />
      <Toaster
        theme="dark"
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "#0f0f0f",
            color: "#ffffff",
            border: "1px solid rgba(245, 241, 230, 0.3)",
            fontFamily: "Inter, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
