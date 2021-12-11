import css from './Input.module.scss';

export const Input = ({ value, ternary, className, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      className={`${css.input} ${ternary && css.isEditing} ${className}`}
      onChange={onChange}
      disabled={!ternary ? true : false}
      readOnly={!ternary ? true : false}
    />
  );
};
