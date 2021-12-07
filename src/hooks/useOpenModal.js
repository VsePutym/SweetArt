import {useState} from "react";

const useOpenModal = () => {
  const [modalActive, setModalActive] = useState(false);
  return {modalActive, setModalActive}
}

export default useOpenModal;