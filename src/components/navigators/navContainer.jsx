import { useRef } from 'react';
import styles from './navigator.module.css';
import Logo from '../logo';
import SearchInput from '../inputs/search';
import titleImg from '/images/title.png';
import Profile from '../containers/profile';
import guest from '/images/anonymous-men.png';

function NavContainer(props) {
  const navRef = useRef(null);
  const backBtnRef = useRef(null);

  const navExpendHandler = () => {
    const navWidth = getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-width');
    const navWidthExpanded = getComputedStyle(document.documentElement)
      .getPropertyValue('--nav-width-expanded');

    const navEl = navRef.current;
    const backBut = backBtnRef.current;

    const expanded = backBut.innerText === "<";
    backBut.innerText = expanded ? ">" : "<";
    navEl.style.width = expanded ? navWidth : navWidthExpanded;
  };

  return (
    <nav ref={navRef} className={`${styles.navigator} flex ${props.classNames}`}>
      <div className="flex column full pos-rel w100">
        <button
          ref={backBtnRef}
          onClick={navExpendHandler}
          className={`circle btn pos-abs ${styles.back}`}
        >
          &gt;
        </button>

        <div className={`${styles.head} flex column`}>
          <div className="flex row a-center pdl overflow-h pdv">
            <Logo width={30} />
            <img className="self-a-center pdl" src={titleImg} alt="Unitime" height={15} />
          </div>
          <SearchInput onClick={navExpendHandler} inputParms={{ id: "nav-search" }} />
        </div>

        {props.children}

        <div className={`${styles.foot} pdv flex a-center overflow-h`}>
          <Profile image={guest} width={30} ml={1} mr={1} />
          <div className="flex j-center column text-a-l">
            <h1 className="s c-text">Username</h1>
            <h2 className="s c-text-l">Example@example.com</h2>
          </div>
          <i className="fa-solid fa-right-from-bracket mrla mrr"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavContainer;
