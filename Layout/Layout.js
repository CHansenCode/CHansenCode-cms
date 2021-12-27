import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Nav from './Nav/Nav';

import { metaInfo } from 'config';
import { useColors } from 'lib';
import css from './Layout.module.scss';

import { Dev } from 'components';

export default function Layout({ children }) {
  const { colors, setColors } = useColors();
  //#region colors

  //#endregion

  const [showNav, setShowNav] = useState(true);

  return (
    <>
      <Head>
        <title>{metaInfo.title}</title>
      </Head>

      {/* MODALS */}
      {process.env.NODE_ENV !== 'production' && <Dev colors={colors} />}

      <Nav
        colors={colors}
        setColors={setColors}
        showNav={showNav}
        setShowNav={setShowNav}
      />

      <Main showNav={showNav} color={colors} setColors={setColors}>
        {children}
      </Main>

      <style jsx global>
        {`
          html {
            color: ${colors.pc};
            background: ${colors.bg};
            transition: 0.1s ease;
          }
          html * {
            transition: 0.1s ease;
          }
          #nav {
            width: 14rem;
            left: ${showNav ? '0' : '-14rem'};
          }
        `}
      </style>

      <style jsx global>
        {`
          .pc {
            color: ${colors && colors.pc};
          }
          .sc {
            color: ${colors && colors.sc};
          }
          .bg {
            background: ${colors && colors.bg};
          }

          .pc05 {
            color: ${colors && colors.pc05};
          }
          .pc1 {
            color: ${colors && colors.pc1};
          }
          .pc3 {
            color: ${colors && colors.pc3};
          }
          .pc5 {
            color: ${colors && colors.pc5};
          }
          .pc7 {
            color: ${colors && colors.pc7};
          }
          .sc05 {
            color: ${colors && colors.sc05};
          }
          .sc1 {
            color: ${colors && colors.sc1};
          }
          .sc3 {
            color: ${colors && colors.sc3};
          }
          .sc5 {
            color: ${colors && colors.sc5};
          }
          .sc7 {
            color: ${colors && colors.sc7};
          }

          .pc05bg {
            background: ${colors && colors.pc05};
          }
          .pc1bg {
            background: ${colors && colors.pc1};
          }
          .pc3bg {
            background: ${colors && colors.pc3};
          }
          .pc5bg {
            background: ${colors && colors.pc5};
          }
          .pc7bg {
            background: ${colors && colors.pc7};
          }
          .sc05bg {
            background: ${colors && colors.sc05};
          }
          .sc1bg {
            background: ${colors && colors.sc1};
          }
          .sc3bg {
            background: ${colors && colors.sc3};
          }
          .sc5bg {
            background: ${colors && colors.sc5};
          }
          .sc7bg {
            background: ${colors && colors.sc7};
          }

          .pc05b {
            border: thin solid ${colors && colors.pc05};
          }
          .pc1b {
            border: thin solid ${colors && colors.pc1};
          }
          .pc3b {
            border: thin solid ${colors && colors.pc3};
          }
          .pc5b {
            border: thin solid ${colors && colors.pc5};
          }
          .pc5br {
            border-right: thin solid ${colors && colors.pc5};
          }
          .pc7b {
            border: thin solid ${colors && colors.pc7};
          }
          .sc05b {
            border: thin solid ${colors && colors.sc05};
          }
          .sc1b {
            border: thin solid ${colors && colors.sc1};
          }
          .sc3b {
            border: thin solid ${colors && colors.sc3};
          }
          .sc5b {
            border: thin solid ${colors && colors.sc5};
          }
          .sc7b {
            border: thin solid ${colors && colors.sc7};
          }
        `}
      </style>
    </>
  );
}

const Main = ({ children, showNav, colors, setColors }) => {
  return (
    <>
      <main id="main_view">
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            colors: colors,
            setColors: setColors,
          });
        })}
      </main>

      <style jsx>
        {`
          #main_view {
            color: ${colors && colors.pc};
            background: ${colors && colors.bg};
            margin-left: ${showNav ? '14rem' : '0'};
          }
        `}
      </style>
    </>
  );
};
