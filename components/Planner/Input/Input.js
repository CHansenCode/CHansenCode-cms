import css from './Input.module.scss';

export const Input = ({
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

      <input
        type="text"
        value={value}
        className={ternary ? css.isEditing : ''}
        onChange={onChange}
        disabled={!ternary ? true : false}
        readOnly={!ternary ? true : false}
      />
    </div>
  );
};
