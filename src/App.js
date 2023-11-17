import React from "react";
import {createRoot} from "react-dom/client";
import Button from "./components/Button/Button.jsx"

const el = document.getElementById("app");
const root = createRoot(el)
root.render(<Button>Hello World</Button>)
