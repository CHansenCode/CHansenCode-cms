import { Card } from './Card';
import { Stages } from '../Stage';
import css from './Project.module.scss';

export const Project = ({ ...props }) => {
  return (
    <div className={css.project}>
      <Card {...props} />

      <Stages {...props}>{props.children}</Stages>
    </div>
  );
};

export default Project;
