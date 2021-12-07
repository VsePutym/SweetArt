import React, {useContext} from 'react';
import Modal from "../Modal/Modal";
import s from './ModalOrder.module.scss';
import testCake from "../../images/ModalOrder/1.jpg";
import {Context} from "../../Functions/Context";
import {Formik} from "formik";
import * as yup from "yup";
import useNewOrder from "../../hooks/useNewOrder";

const ModalOrder = () => {
  const{showModal:{setModalActive, modalActive}} = useContext(Context);

  const getNewOrder = useNewOrder();

  const phoneValid = /8[-(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/gm;
  const fullRegistration = yup.object().shape({
    name: yup.string().typeError('Должно быть числом').required('Обязательное поле'),
    surname: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    address: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    chocolate: yup.boolean(),
    email: yup.string().email('Введите верный email, пример: sweetArt@mail.ru').required('Обязательное поле'),
    phone: yup.string().matches(phoneValid, 'Введите верный формат телефона:  89633265671 или \n' +
      '8(962)326-56-71 или \n' +
      '8-962-326-56-71 или \n' +
      '8(962)3265671').required('Обязательное поле')
  })

  return (
    <Modal active={modalActive} setActive={setModalActive}>
      <div className={s.wrapper}>
        <img className={s.testCake} src={testCake} alt=""/>
        <div className={s.orderInfo}>
          <Formik
            initialValues={{
              name: '',
              surname: '',
              email: '',
              phone: '',
              address: '',
              chocolate: false,
              fruit: false,
              sourCream: false

            }}
            validateOnBlur
            onSubmit={(values) => {
              getNewOrder.setNewOrder(values)
            }}
            validationSchema={fullRegistration}
          >
            {({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
            <div className={s.form}>
              <p className={s.inputForm}>
                <label className={s.inputTitle}>Имя</label>
                <input
                  className={'input'}
                  type={'text'}
                  name={'name'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </p>
              {touched.name && errors.name && <p className={s.error}>{errors.name}</p>}
              <p className={s.inputForm}>
                <label className={s.inputTitle}>Фамилия</label>
                <input
                  className={'input'}
                  type={'text'}
                  name={'surname'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.surname}
                />
              </p>{touched.surname && errors.surname && <p className={s.error}>{errors.surname}</p>}
              <p className={s.inputForm}>
                <label className={s.inputTitle}>Email</label>
                <input
                  className={'input'}
                  type={'email'}
                  name={'email'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </p>
              {touched.email && errors.email && <p className={s.error}>{errors.email}</p>}
              <p className={s.inputForm}>
                <label className={s.inputTitle}>Номер телефона</label>
                <input
                  className={'input'}
                  type={'tel'}
                  name={'phone'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                />
              </p>
              {touched.phone && errors.phone && <p className={s.error}>{errors.phone}</p>}
              <p className={s.inputForm}>
                <label className={s.inputTitle}>Адресс доставки</label>
                <input
                  className={'input'}
                  type={'text'}
                  name={'address'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
              </p>
              {touched.address && errors.address && <p className={s.error}>{errors.address}</p>}
              <p className={s.inputForm}>
                <p>Начинка</p>
                <label className={s.inputTitle}>Шоколадная</label>
                <input
                  className={'input'}
                  type={'checkbox'}
                  name={'chocolate'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.chocolate}
                />
              </p>{touched.chocolate && errors.chocolate && <p className={s.error}>{errors.surname}</p>}
              <button  disabled={!isValid} onClick={handleSubmit} type={'submit'} >Submit</button>
            </div>
          )}
          </Formik>
        </div>
      </div>
    </Modal>
  );
};

export default ModalOrder;