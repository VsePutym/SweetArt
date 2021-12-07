import s from './GalinaInfo.module.scss'
import Galina from '../../images/aboutMe/GalinaBG.jpg'
import instagram from '../../images/aboutMe/instagram.svg'
import {useContext, useEffect, useState} from "react";

import {Context} from "../../Functions/Context";
// import Modal from "../Modal/Modal";
// import useOpenModal from "../../hooks/useOpenModal";
// import testCake from '../../images/ModalOrder/1.jpg'


const GalinaInfo = () => {
  const{showModal:{setModalActive}} = useContext(Context)


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
    <div className={s.wrapperGalinaInfo} id='aboutMe'>
      <h1 className={s.title}>Обо мне</h1>
      <img className={s.GalinaBG} src={Galina} alt=""/>
      <div className={s.description}>
        <p className={s.text1} style={{
          opacity: (position - 700) / 300
        }}>
          В SweetArt не принято экономить на продуктах и стоимости сырья – наоборот, я
          стремлюсь произвести впечатление на своих клиентов и для этого использую лучшие ингредиенты, которые способна
          найти. Само собой, это сказывается на вкусе кондитерского изделия наилучшим образом. А вот массовая продукция,
          украшающая витрины крупных кондитерских и супермаркетов, не всегда может этим похвастать – ведь производят ее
          с
          оглядкой на себестоимость и возможность на чем-то сэкономить.
        </p>
        <p className={s.text2} style={{
          opacity: (position - 800) / 300
        }}>
          Творческий процесс не знает границ, в том числе и в кулинарном искусстве – творите вместе со мной на этапе
          обсуждения заказа и наслаждайтесь эффектом, произведенным готовым произведением!
        </p>
        <p className={s.text3} style={{
          opacity: (position - 900) / 300
        }}>
          Если вы хотите получить оригинальное изделие, которое надолго запомнится гостям своим внешним видом и вкусом,
          тогда смело делайте заказ в SweetArt.
        </p>
      </div>
      <div className={s.wrapperInstagram}>
        <img className={s.instagram} src={instagram} alt=""/>
        <p>GalinaMednis</p>
        <button onClick={() => setModalActive(true)} className={s.btn}>Оформить заказ</button>
      </div>

    </div>
  )
}

export default GalinaInfo;