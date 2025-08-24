import "./index.css";
import App from "./App";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
