import css from './Iframe.module.scss';

export const Iframe = ({ src }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.header}>
        <h5>{JSON.stringify(src)}</h5>
      </div>
      <iframe
        style={{ position: 'relative' }}
        className={css.iframe}
        src={src}
        height="100%"
        width="100%"
      />
    </div>
  );
};
