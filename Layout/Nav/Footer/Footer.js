import { useRouter } from 'next/router';

import NavLink from '../NavLink/NavLink';
import { Button, List } from 'chansencode-lib';

import { GiYinYang } from 'react-icons/gi';
import { VscCalendar, VscHome } from 'react-icons/vsc';
import { BsChatSquareDots } from 'react-icons/bs';
import { AiOutlineUserAdd } from 'react-icons/ai';

import css from './Footer.module.scss';

const Footer = ({ colors, setColors, showNav, setShowNav, className }) => {
  const router = useRouter();

  async function onLogOut(e) {
    e.preventDefault();
  }

  return (
    <footer className={`${css.footer} ${className}`}>
      <List className={css.styleMenu}>
        <Button
          children={<GiYinYang />}
          onClick={e => setColors({ ...colors, darkmode: !colors.darkmode })}
        />
      </List>

      <List className={css.settingsMenu}>
        <NavLink href="/" children={<VscHome />} />
        <NavLink href="/settings" children={<AiOutlineUserAdd />} />
        <NavLink href="/calendar" children={<VscCalendar />} />
        <NavLink href="/intercom" children={<BsChatSquareDots />} />
      </List>

      <List className={`${css.functionMenu} ${!showNav && css.collapsed}`}>
        <Button children="Log out" onClick={onLogOut} />
        <Button onClick={() => setShowNav(!showNav)}>
          <IconCollapseExpand ternary={showNav} />
        </Button>
      </List>
    </footer>
  );
};

export default Footer;

const IconCollapseExpand = ({ size, ternary }) => {
  const inline = {
    transformOrigin: 'center',
    transition: '0.5s ease',
    transform: ternary
      ? 'rotate(270deg) translate(0, 20%)'
      : 'rotate(90deg) translate(0, -5%)',
  };

  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="1px"
      viewBox="0 0 1024 1024"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        style={inline}
        d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"
      ></path>
    </svg>
  );
};
IconCollapseExpand.defaultProps = {
  size: '100%',
};
