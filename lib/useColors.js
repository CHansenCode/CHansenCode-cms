import { useState, useEffect } from 'react';

export const useColors = () => {
  const [colors, setColors] = useState({
    //dark & light toggle
    darkmode: false,

    //Connected to colorPicker
    light: {
      pc: { r: 30, g: 80, b: 90, a: 1 },
      sc: { r: 245, g: 110, b: 120, a: 1 },
      bg: { r: 250, g: 250, b: 250, a: 1 },
    },
    dark: {
      pc: { r: 190, g: 230, b: 235, a: 1 },
      sc: { r: 240, g: 170, b: 180, a: 1 },
      bg: { r: 10, g: 50, b: 60, a: 1 },
    },

    //compiled strings
    pc: '',
    sc: '',
    bg: '',
    pc05: '',
    pc1: '',
    pc3: '',
    pc5: '',
    pc7: '',
    sc05: '',
    sc1: '',
    sc3: '',
    sc5: '',
    sc7: '',
  });

  //Compiler
  useEffect(() => {
    let compiledColors = {
      pc: '',
      sc: '',
      bg: '',
      pc05: '',
      pc1: '',
      pc3: '',
      pc5: '',
      pc7: '',
      sc05: '',
      sc1: '',
      sc3: '',
      sc5: '',
      sc7: '',
    };
    colors.darkmode
      ? (compiledColors = {
          pc: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`,
          sc: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`,
          bg: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`,
          pc05: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.05)`,
          pc1: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.1)`,
          pc3: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.3)`,
          pc5: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.5)`,
          pc7: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.7)`,
          sc05: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.05)`,
          sc1: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.1)`,
          sc3: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.3)`,
          sc5: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.5)`,
          sc7: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.7)`,
        })
      : (compiledColors = {
          pc: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`,
          sc: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`,
          bg: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`,
          pc05: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.05)`,
          pc1: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.1)`,
          pc3: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.3)`,
          pc5: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.5)`,
          pc7: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.7)`,
          sc05: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.05)`,
          sc1: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.1)`,
          sc3: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.3)`,
          sc5: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.5)`,
          sc7: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.7)`,
        });

    setColors({
      ...colors,
      ...compiledColors,
    });
  }, [
    colors.dark.pc,
    colors.dark.sc,
    colors.dark.bg,
    colors.light,
    colors.darkmode,
  ]);

  return { colors: colors, setColors: setColors };
};

// const [colors, setColors] = useState({
//   darkmode: true,
//   dark: {
//     pc: { r: 65, g: 170, b: 190, a: 1 },
//     sc: { r: 245, g: 160, b: 145, a: 1 },
//     bg: { r: 10, g: 50, b: 70, a: 1 },
//   },
//   light: {
//     pc: { r: 65, g: 170, b: 190, a: 1 },
//     sc: { r: 245, g: 160, b: 145, a: 1 },
//     bg: { r: 250, g: 250, b: 250, a: 1 },
//   },
//   pc: '',
//   sc: '',
//   bg: '',
//   pc05: '',
//   pc1: '',
//   pc3: '',
//   pc5: '',
//   pc7: '',
//   sc05: '',
//   sc1: '',
//   sc3: '',
//   sc5: '',
//   sc7: '',
// });
// useEffect(() => {
//   let compiledColors = {
//     pc: '',
//     sc: '',
//     bg: '',
//     pc05: '',
//     pc1: '',
//     pc3: '',
//     pc5: '',
//     pc7: '',
//     sc05: '',
//     sc1: '',
//     sc3: '',
//     sc5: '',
//     sc7: '',
//   };

//   colors.darkmode
//     ? (compiledColors = {
//         pc: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, ${colors.dark.pc.a})`,
//         sc: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, ${colors.dark.sc.a})`,
//         bg: `rgba(${colors.dark.bg.r}, ${colors.dark.bg.g}, ${colors.dark.bg.b}, ${colors.dark.bg.a})`,
//         pc05: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.05)`,
//         pc1: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.1)`,
//         pc3: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.3)`,
//         pc5: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.5)`,
//         pc7: `rgba(${colors.dark.pc.r}, ${colors.dark.pc.g}, ${colors.dark.pc.b}, 0.7)`,
//         sc05: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.05)`,
//         sc1: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.1)`,
//         sc3: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.3)`,
//         sc5: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.5)`,
//         sc7: `rgba(${colors.dark.sc.r}, ${colors.dark.sc.g}, ${colors.dark.sc.b}, 0.7)`,
//       })
//     : (compiledColors = {
//         pc: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, ${colors.light.pc.a})`,
//         sc: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, ${colors.light.sc.a})`,
//         bg: `rgba(${colors.light.bg.r}, ${colors.light.bg.g}, ${colors.light.bg.b}, ${colors.light.bg.a})`,
//         pc05: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.05)`,
//         pc1: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.1)`,
//         pc3: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.3)`,
//         pc5: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.5)`,
//         pc7: `rgba(${colors.light.pc.r}, ${colors.light.pc.g}, ${colors.light.pc.b}, 0.7)`,
//         sc05: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.05)`,
//         sc1: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.1)`,
//         sc3: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.3)`,
//         sc5: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.5)`,
//         sc7: `rgba(${colors.light.sc.r}, ${colors.light.sc.g}, ${colors.light.sc.b}, 0.7)`,
//       });

//   setColors({
//     ...colors,
//     ...compiledColors,
//   });
// }, [
//   colors.dark.pc,
//   colors.dark.sc,
//   colors.dark.bg,
//   colors.light,
//   colors.darkmode,
// ]);
