import { createContext, useContext, useState } from "react";

const PopupContext = createContext();

function PopupProvider(props) {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);
  const [showSix, setShowSix] = useState(false);
  const [showSeven, setShowSeven] = useState(false);
  const [showEight, setShowEight] = useState(false);
  const [showNine, setShowNine] = useState(false);
  const value = {
    showOne,
    setShowOne,
    showTwo,
    setShowTwo,
    showThree,
    setShowThree,
    showFour,
    setShowFour,
    showFive,
    setShowFive,
    showSix,
    setShowSix,
    showSeven,
    setShowSeven,
    showEight,
    setShowEight,
    showNine,
    setShowNine,
  };
  return (
    <PopupContext.Provider value={value} {...props}></PopupContext.Provider>
  );
}

function usePopup() {
  const context = useContext(PopupContext);
  if (typeof context === "undefined")
    throw new Error("usePopup must be used within a PopupProvider");
  return context;
}

export { PopupProvider, usePopup };
