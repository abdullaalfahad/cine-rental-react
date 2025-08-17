import { useReducer } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartData, cartReducer } from "./reducer/cartReducer";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cart, dispatch] = useReducer(cartReducer, cartData);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <MovieContext.Provider value={{ cart, dispatch }}>
        <Page />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
