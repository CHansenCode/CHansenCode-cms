import css from './Textarea.module.scss';

export const Textarea = ({ ...props }) => {
  const propStyle = {
    display: props.children && 'flex',
    alignItems: 'center',
  };
  return (
    <div
      style={propStyle}
      className={`${css.wrapper}${
        props.className ? ` ${props.className}` : ''
      }`}
    >
      {props.children && props.children}
      {props.label && (
        <header>
          <h6>{props.label} :</h6>
        </header>
      )}

      <textarea
        type="text"
        value={props.value}
        className={props.ternary ? css.isEditing : ''}
        onChange={props.onChange}
        disabled={!props.ternary ? true : false}
        readOnly={!props.ternary ? true : false}
      ></textarea>
    </div>
  );
};
