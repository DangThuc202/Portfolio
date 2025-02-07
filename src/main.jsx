import { BrowserRouter } from "react-router-dom";
import App from "./App";

const basename = "/Portfolio"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
);
