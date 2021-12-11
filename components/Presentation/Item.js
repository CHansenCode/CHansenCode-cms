import css from './Item.module.scss';

export const Item = ({ data, index, setActiveSlide }) => {
  return (
    <li
      className={`${css.slides_item}`}
      onClick={() => setActiveSlide(index + 1)}
    >
      <div>
        <h5>title: </h5>
        <p className="sc">{data.title ? data.title.substring(0, 20) : '...'}</p>
      </div>

      {data.body && (
        <div className={css.slides_item_body}>
          <h5>body: </h5>
          <p className="sc">{data.body.substring(0, 50)}...</p>
        </div>
      )}

      <h6>
        slide. <span>{index + 1}</span>
      </h6>
    </li>
  );
};
