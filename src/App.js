import logo from './logo.svg';
import './App.css';
import firebase from "firebase/compat/app";

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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sweet Art
        </a>
      </header>
    </div>
  );
}

export default App;
