import { Button } from 'chansencode-lib';

import css from './SlideItem.module.scss';

export const SlideItem = ({
  data,
  index,
  setActiveSlide,
  onDelete,
  showDelete,
}) => {
  return (
    <li className={`${css.slides_item}`}>
      <div onClick={() => setActiveSlide(index + 1)}>
        <div>
          <h5>title: </h5>
          <p className="sc">
            {data.title ? data.title.substring(0, 20) : '...'}
          </p>
        </div>
        <div className={css.opaque}>
          <h5>body: </h5>
          <p className="sc">{data.body.substring(0, 50)}...</p>
        </div>

        <h6>
          slide. <span>{index + 1}</span>
        </h6>
      </div>

      {showDelete && (
        <Button id={css.slide_del_btn} size="1.25rem" onClick={onDelete}>
          x
        </Button>
      )}
    </li>
  );
};
