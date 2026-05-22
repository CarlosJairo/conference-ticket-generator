import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ShowTIcketProvider from "./context/ShowTIcketProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ShowTIcketProvider>
      <App />
    </ShowTIcketProvider>
  </StrictMode>,
);
