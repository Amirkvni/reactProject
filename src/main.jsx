import { createContext, StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes";
import "./index.css";
const MyContext = createContext();
const users = [
  { id: 1, name: "Sara", age: 22 },
  { id: 2, name: "amir", age: 23 },
  { id: 3, name: "gholi", age: 24 },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyContext.Provider value={users}>
      <RouterProvider
        router={router}
        fallbackElement={<div>⏳ در حال بارگذاری...</div>} 
      />
    </MyContext.Provider>
  </StrictMode>
);
export default MyContext;
