import {useEffect, useState} from "react";

const useNewOrder = () => {
  const [newOrder, setNewOrder] = useState(null);

  useEffect(() => {

    console.log(newOrder);

  }, [newOrder, setNewOrder])

  return{newOrder, setNewOrder}
}

export default useNewOrder;