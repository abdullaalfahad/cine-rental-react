import { useReducer } from "react";
import { MovieContext } from "./context";
import Page from "./Page";
import { cartData, cartReducer } from "./reducer/cartReducer";

function App() {
  const [cart, dispatch] = useReducer(cartReducer, cartData);

  return (
    <MovieContext.Provider value={{ cart, dispatch }}>
      <Page />
    </MovieContext.Provider>
  );
}

export default App;
