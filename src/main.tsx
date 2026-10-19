import { createRoot } from "react-dom/client";
import "@/i18n/index.ts";
import "@/styles/globals.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(<App />);
