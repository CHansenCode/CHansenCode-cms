import React from 'react';

export const GlobalStyles = ({ colors }) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            color: ${colors.pc};
            background: ${colors.bg};
            transition: 0.1s ease;
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
};
