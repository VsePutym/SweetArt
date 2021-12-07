import './App.scss';
import firebase from "firebase/compat/app";
import Header from './components/Header/Header'
import WhyInfo from "./components/WhyInfo/WhyInfo";
import GalinaInfo from "./components/GalinaInfo/GalinaInfo";
import Recipe from "./components/Recipe/Recipe";
import Modal from "./components/Modal/Modal";
import {Context} from './Functions/Context'
// import useOpenModal from "./hooks/useOpenModal";
import useContacts from "./hooks/useContacts";
import Photos from "./components/Photos/Photos";
import useGalleryPhotos from "./hooks/useGalleryPhotos";
import arrowUp from '../src/images/arrowUp.svg'
import {animateScroll as scroll} from 'react-scroll';
import Footer from "./components/Footer/Footer";
import ModalOrder from "./components/ModalOrder/ModalOrder";
import useOpenModal from "./hooks/useOpenModal";


const firebaseConfig = {
  apiKey: "AIzaSyCclR1cOUO4JtIQ-2j2xmc7RbQ0YZUnsTU",
  authDomain: "sweetart-70163.firebaseapp.com",
  projectId: "sweetart-70163",
  storageBucket: "sweetart-70163.appspot.com",
  messagingSenderId: "22431365291",
  appId: "1:22431365291:web:c7bd87af34d391ed2c9fee",
  measurementId: "G-34LXRCKV94"
};

firebase.initializeApp(firebaseConfig);


function App() {


  const showContact = useContacts();
  const showGalleryPhotos = useGalleryPhotos();
  const showModal = useOpenModal();


  return (
    <Context.Provider value={{showContact, showGalleryPhotos, showModal}}>
      <div className="App">
        <Header/>
        <WhyInfo/>
        <GalinaInfo/>
        <Recipe/>
        <Photos />
        <Footer />
        <Modal active={showContact.contact} setActive={showContact.setContact}>
          <div className='contacts'>Contacts</div>
          <div className='contacts'>Модуль пока в доработке, ожидайте....</div>
        </Modal>
        <ModalOrder />
        <img className='arrowUp' onClick={() => scroll.scrollToTop()} src={arrowUp} alt=""/>
      </div>
    </Context.Provider>
  );
}

export default App;
