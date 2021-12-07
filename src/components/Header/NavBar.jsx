import s from './Header.module.scss';

const NavBar = ({name, id, href}) => {
  return (
    <div>
      <li key={id}>
        <a className={s.item} href={href}>{name}</a>

      </li>

    </div>

  )
}

export default NavBar;