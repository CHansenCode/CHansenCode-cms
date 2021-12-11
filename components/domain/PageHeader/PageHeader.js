import css from './PageHeader.module.scss';

export function PageHeader({ title, children }) {
  return (
    <header className={css.header}>
      <div>
        {title && <h4 className={`sc`}>{title}</h4>}
        <figure className={`pc3b`} />
      </div>

      <aside>{children}</aside>
    </header>
  );
}
