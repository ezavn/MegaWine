import BackToTop from "./components/BackToTop";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Category2 from "./components/Category2";
import Client from "./components/Client";
import PopupEight from "./components/common/PopupEight";
import PopupFive from "./components/common/PopupFive";
import PopupFour from "./components/common/PopupFour";
import PopupNine from "./components/common/PopupNine";
import PopupOne from "./components/common/PopupOne";
import PopupSeven from "./components/common/PopupSeven";
import PopupSix from "./components/common/PopupSix";
import PopupThree from "./components/common/PopupThree";
import PopupTwo from "./components/common/PopupTwo";
import Footer from "./components/Footer";
import Policy from "./components/Policy";
import Register from "./components/Register";
import Top from "./components/Top";
import Why from "./components/Why";
import { PopupProvider } from "./contexts/popupContext";

function App() {
  return (
    <>
      <PopupProvider>
        <div className="w-full bg-background">
          <Banner></Banner>
          <Category></Category>
          <Register></Register>
          <Why></Why>
          <Policy></Policy>
          <Category2></Category2>
          <Top></Top>
          <Register></Register>
          <Client></Client>
          <Footer></Footer>
          <BackToTop></BackToTop>
        </div>
        <PopupOne></PopupOne>
        <PopupTwo></PopupTwo>
        <PopupThree></PopupThree>
        <PopupFour></PopupFour>
        <PopupFive></PopupFive>
        <PopupSix></PopupSix>
        <PopupSeven></PopupSeven>
        <PopupEight></PopupEight>
        <PopupNine></PopupNine>
      </PopupProvider>
    </>
  );
}

export default App;
