import { useState } from 'react';
import { Button } from 'chansencode-lib';

import css from './Section.module.scss';

export const Section = ({ title, foldable, folded, children }) => {
  const [fold, setFold] = useState(folded ? true : false);

  async function handleHeaderClick() {
    if (foldable) {
      setFold(!fold);
    }
  }

  return (
    <section
      className={`pc05bg pc3b ${css.section} ${fold && css.section_closed}`}
    >
      {(title || foldable) && (
        <header
          className={css.header}
          onClick={() => foldable && setFold(!fold)}
        >
          {title ? <SectionTitle title={title} fold={fold} /> : <div />}

          {foldable && (
            <Button
              className={`pc3b ${css.foldBtn} ${!fold && css.foldBtn_closed} ${
                fold && 'sc'
              }`}
              onClick={() => setFold(!fold)}
            >
              <h5>{`^`}</h5>
            </Button>
          )}
        </header>
      )}

      <div>{children}</div>
    </section>
  );
};

const SectionTitle = ({ title }) => {
  return (
    <div className={css.section_title}>
      <h4 className="sc">{title}</h4>
      <div className="sc3b" />
    </div>
  );
};
