import s from "../WhyInfo/WhyInfo.module.scss";
import newBlock from "../../images/aboutMe/NewBlock2.png";
import Check from "../../images/aboutMe/check.png";
import styled from "styled-components";
import whyInfo from "../../DataBase/WhyInfo/whyInfo";

const BgWhyInfo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  background-position: left;`

const WhyInfo = () => {

const whyInfoItems = whyInfo;

  return (
    <BgWhyInfo>
      <img className={s.wave} src={newBlock} alt=""/>
      <div className={s.fastInfo}>
        {whyInfoItems.map(item =>
          <div key={item.id} className={s.item}>
            <img src={Check} alt=""/>
            <div className={s.titleItem}>{item.title}</div>
            <div className={s.textItem}>{item.text}</div>
          </div>
        )}


      </div>
    </BgWhyInfo>
  )
}

export default WhyInfo;