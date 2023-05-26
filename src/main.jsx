import ReactDOM from "react-dom/client";
import "./index.css";
import "./coustomCss/style.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
      <RouterProvider router={router} />
  </AuthProvider>
);
