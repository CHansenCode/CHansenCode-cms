import { Button, Input } from 'chansencode-lib';

import css from './style.module.scss';

export const PageSelector = ({ data, controller, setController, children }) => {
  return (
    <header className={css.pageSelector}>
      <div>
        <h4>Select page:</h4>
      </div>

      <div className={css.pageSelector_buttons}>
        {children}
        <NewToggle
          text="+ New Page"
          onClick={() => setController({ ...controller, newPage: true })}
          onChange={e => setTitleData({ ...titleData, page: e.target.value })}
          onSubmit={e => onSubmitNewPage(e)}
        />
      </div>
    </header>
  );
};

const NewToggle = ({ text, toggle, onClick, onChange, onSubmit, onReset }) => {
  return (
    <div>
      {toggle ? (
        <>
          <Input onChange={onChange} />
          <Button onClick={onReset}>x</Button>
        </>
      ) : (
        <Button fontSize="1rem" onClick={onClick}>
          {text}
        </Button>
      )}
    </div>
  );
};
