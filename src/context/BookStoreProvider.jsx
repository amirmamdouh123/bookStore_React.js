import { useState } from "react";
import BookStoreContext from "./bookStorContext";

const BookStoreProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);

  const [isSelected , setSelected] =useState(false);

  // Handle Add To Cart
  
  return (
    <BookStoreContext.Provider
      value={{isSelected,setSelected,cartInfo,setCartInfo}} >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;
