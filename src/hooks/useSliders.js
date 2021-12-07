import {useEffect, useState} from "react";

const useSliders = (startSlide, counterNow, counterAll) => {
  const [hookNext, setHookNext] = useState(false);
  const [hookPrev, setHookPrev] = useState(false);
  const [count, setCount] = useState(0)




  useEffect(() => {

    console.log(counterNow.current, counterAll.current)
    const arr = startSlide.current.childNodes;
    const maxCount = arr.length - 1;
    const minCount = 0;
    counterAll.current.innerHTML = maxCount + 1;
    counterNow.current.innerHTML = count + 1;

    if(arr[count] === undefined && count > maxCount){
      arr[minCount].style.display = 'block';
    } else if(arr[count] === undefined && count < minCount){
      arr[maxCount].style.display = 'block';
    }else{
      arr[count].style.display = 'block';
    }

    const getOpacity = () => {
      arr.forEach((item, index) => {
        item.style.display = 'none';
      })
    }
  if(hookNext === true){
    getOpacity();
    setCount(count + 1);
    counterNow.current.innerHTML = count + 1;
    setHookNext(false);
  }
    if(hookPrev === true){
      getOpacity();
      setCount(count - 1);
      counterNow.current.innerHTML = count + 1;
      setHookPrev(false);
    }
    if(count > maxCount){
      setCount(minCount);
    } else if(count < minCount){
      setCount(maxCount)
    }
    console.log(count)
  }, [hookNext, hookPrev, count, setCount])

  return {hookNext, setHookNext, hookPrev, setHookPrev, count, setCount}
}

export default useSliders;