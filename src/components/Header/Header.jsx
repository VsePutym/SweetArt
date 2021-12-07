import s from './Header.module.scss';
import BG from '../../images/Header/2.jpg'
import styled from 'styled-components';
import logo from '../../images/Header/logo.png'
import {useContext, useEffect, useState} from "react";
import {Context} from "../../Functions/Context";
import {Link} from 'react-scroll';
import ModalOrder from "../ModalOrder/ModalOrder";

const MaineBG = styled.div`
  background-image: url("${BG}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: right;
`

const Header = () => {
  const {showContact: {setContact}, showModal:{setModalActive, modalActive} } = useContext(Context);

  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div>
      <img className={s.logo} src={logo} alt=""/>
      <ul className={s.listItems}>
        <Link className={s.itemButton} to='PhotoGallery' smooth={true} duration={2000}>Фото галерея</Link>
        <Link className={s.itemButton} to='aboutMe' smooth={true} duration={1000}>Обо мне</Link>
        <button onClick={() => setContact(true)} className={s.itemButton}>Контакты</button>
        <button onClick={() => setModalActive(true)} className={s.itemButton}>Оформить заказ</button>
      </ul>
      <MaineBG style={{backgroundPositionY: position / 2}}>
        <div style={{transform: `translateX(${position * 3}px)`}} className={s.title}>
          <h3 className={s.welcome}>Welcome to</h3>
          <h3>Sweet Art</h3>
          <h3 className={s.welcomeG}>Galina Mednis</h3></div>
      </MaineBG>
      <ModalOrder />
    </div>
  )
}

export default Header;