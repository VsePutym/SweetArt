import {useState} from "react";


const useContacts = () => {
  const [contact, setContact] = useState(false);
  return {contact, setContact}
}

export default useContacts;