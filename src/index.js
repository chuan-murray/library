import React from "react";
import {createRoot} from "react-dom/client";
import {Button} from "./components"

const el = document.getElementById("root");
const root = createRoot(el)
root.render(<Button>Hello World</Button>)
