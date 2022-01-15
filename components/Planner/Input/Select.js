import { useState } from 'react';

import { Button } from 'chansencode-lib';

import css from './Input.module.scss';

export const Select = ({
  label,
  value,
  ternary,
  onChange,
  children,
  ...props
}) => {
  const propStyle = {
    display: children && 'flex',
    alignItems: 'center',
  };
  return (
    <div
      style={propStyle}
      className={`${css.wrapper}${
        props.className ? ` ${props.className}` : ''
      }`}
    >
      {children && children}
      {label && (
        <header>
          <h6>{label} :</h6>
        </header>
      )}

      <div className={css.options}>
        {value.map((u, i) => (
          <div key={`${props.id}${i}${u}`} className={css.option}>
            <h5>{u}</h5>
          </div>
        ))}
        {ternary && (
          <Button className={css.option} padding="0 0.5rem">
            <h5 className="sc">+ Add</h5>
          </Button>
        )}
      </div>
    </div>
  );
};

// const Select = ({ label, id, value, ...props }) => {
//     const [inputData, setInputData] = useState('');
//     const [input, setInput] = useState(false);
//     const [map, setMap] = useState([]);
//     return (
//       <>
//         <div>
//           <h6>{label} :</h6>

//           <div style={{ display: 'flex' }}>
//             {value.map((u, i) => (
//               <div className="option" key={`users${id}${i}`}>
//                 <h5>{u}</h5>
//               </div>
//             ))}
//             {input ? (
//               <input
//                 value={inputData}
//                 placeholder="type name"
//                 onChange={e => setInputData(e.target.value)}
//               />
//             ) : (
//               <button id="add_new_btn" onClick={() => setInput(true)}>
//                 + new
//               </button>
//             )}
//           </div>
//         </div>

//         <style jsx>
//           {`
//             #add_new_btn {
//               border-radius: 0.5rem;
//               border: thin solid currentColor;
//               outline: none;
//               background: transparent;
//             }
//             #add_new_btn:hover {
//               cursor: pointer;
//               box-shadow: 0 0 1rem -0.5rem black;
//             }
//             .option {
//               border: thin solid;
//               margin-right: 0.25rem;
//               padding: 0 0.25rem;
//               border-radius: 0.5rem;
//             }
//           `}
//         </style>
//       </>
//     );
//   };
