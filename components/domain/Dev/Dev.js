import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ObjectViewer } from 'components/domain';

import css from './Dev.module.scss';

export const Dev = ({ colors }) => {
  const [show, setShow] = useState(false);
  const store = useSelector(state => state);
  return (
    <>
      <button className={`pc ${css.button}`} onClick={() => setShow(!show)}>
        {'dev'}
      </button>

      <div
        id="dev_outerDiv"
        className={`pc bg ${css.outerDiv} ${show ? css.outerDiv_open : null}`}
      >
        <div id="dev_innerDiv" className={css.innerDiv}>
          <ObjectViewer title="redux.store" data={store} fontSize="14px" />
          <ObjectViewer title="colors" data={colors} fontSize="14px" />
        </div>
      </div>
    </>
  );
};
