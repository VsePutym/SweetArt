import recipe from '../../images/Recipe/noteBook2.jpg'
import doCake from '../../images/Recipe/doCake2.jpg'
import s from './Recipe.module.scss'
import {useEffect, useRef, useState} from "react";
import styled from "styled-components";


const MaineBG = styled.div`
  background-image: url("${doCake}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 60vh;
  background-position: center;
  position: relative;
  ::before{
    content: "";
    width: 100%;
    height: 60vh;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.5;
  }
`

const Recipe = () => {

  const [position, setPosition] = useState(0);

  function onScroll(testRef) {
    setPosition(window.scrollY);
    console.log(window.scrollY)
  }

  const testRef = useRef()
  useEffect(() => {

    console.log()
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, []);


  return (
    <div className={s.wrapperRecipe}>
      {/*<h1 className={s.title}>Рецепт домашнего торта от SweetArt</h1>*/}

      <MaineBG ref={testRef} style={{backgroundPositionY: position -2150}} >
        <div className={s.textDoCake}>
          <h2>SweetArt</h2>
          <p >SweetArt подготовила для вас рецепт вкусного домашнего пирога, что-бы вы могли порадовать ваших родных и близких</p>
        </div>
      </ MaineBG>
      <div className={s.wrapperNotebook}>
        <img className={s.imgBG} src={recipe} alt=""/>
        <div className={s.textRecipe}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias
            eligendi est explicabo illum
            Нужно взять картошку, немного укропу , кинуть травы в бочку, 200гр свечей, после этого варить 2ч.
          </p>
        <p>
          Сделать крем 200гр сахара, соедить с водой, добапвить желатина, размешать и медленно греть на огне, полсле
          положить в бульон
        </p>
        <p>Кумука 1кг соедитьнить с сухой смесью добавить како и запккать 40минут при 220градусов</p>
        </div>
      </div>
    </div>
  )
}

export default Recipe;