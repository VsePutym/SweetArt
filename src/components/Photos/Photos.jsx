import s from '../Photos/Photos.module.scss';
import Modal from "../Modal/Modal";
import arrowNext from "../../images/PhotoGalirea/ArrowNext.svg";
import arrowPrev from "../../images/PhotoGalirea/ArrowPrev.svg";
import Sliders from "../../DataBase/Sliders/Sliders";
import {useContext, useRef} from "react";
import useSliders from "../../hooks/useSliders";
import cat from '../../images/PhotoGalirea/cat.jpg'
import {Context} from "../../Functions/Context";
import arrowDown from '../../images/PhotoGalirea/arrowDown.png'


const Photos = () => {
  const {showGalleryPhotos: {galleryPhotos, setGalleryPhotos}} = useContext(Context)
  const sliders = Sliders.items;
  const startSlide = useRef();
  const counterAll = useRef();
  const counterNow = useRef();
  const moveSliders = useSliders(startSlide, counterNow, counterAll);

  return (
    <div className={s.wrapper} id='PhotoGallery'>
      <h1 className={s.title}>Фото галерея работ</h1>
      <div className={s.wrapperArrow}>
        <p>Вы можите ознакомиться с примерами работ, кликнув по ссылке ниже</p>
        <img className={s.arrowDown} src={arrowDown} alt=""/>
      </div>

      <div className={s.openModal} onClick={() => setGalleryPhotos(true)}>
        <img className={s.cat} src={cat} alt=""/>
      </div>
      <div className={s.testText}>
        <p>Сюда хочу какой-то текст, но увы пока нету идей</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A deleniti dicta dignissimos ducimus eos, esse fuga
          id magni omnis placeat rerum sapiente similique, tempora totam ullam ut velit? Atque, quam.Architecto dolorum
          fugiat quae soluta voluptatibus. Accusantium aliquam at, dolore eaque eveniet ex excepturi exercitationem
          facilis ipsam, iusto mollitia natus nihil nobis odit placeat qui quis quo, temporibus veritatis
          voluptatibus?</p>
      </div>


      <Modal active={galleryPhotos} setActive={setGalleryPhotos}>
        <div className={s.counter}>
          <span ref={counterNow} className={s.counterNow}/>
          <span className={s.slesh}>/</span>
          <span ref={counterAll} className={s.counterAll}/>
        </div>
        <img className={s.arrowNext} onClick={() => moveSliders.setHookNext(true)} src={arrowNext} alt=""/>
        <img className={s.arrowPrev} onClick={() => moveSliders.setHookPrev(true)} src={arrowPrev} alt=""/>
        <div ref={startSlide} className={s.items}>
          {sliders.map((item) => (
            <img className={s.item} key={item.id} src={item.img} alt=""/>
          ))}
        </div>
      </Modal>
    </div>
  )
}

export default Photos;