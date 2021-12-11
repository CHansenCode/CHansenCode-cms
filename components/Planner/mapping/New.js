import css from './New.module.scss';

export const NewStage = ({ onClick }) => {
  return (
    <div className={css.new_stage} onClick={onClick}>
      <p>+ Stage</p>
    </div>
  );
};

export const NewProject = ({ onClick }) => {
  return (
    <div className={css.new_project} onClick={onClick}>
      <p>+ Project</p>
    </div>
  );
};

export const NewTask = ({ onClick }) => {
  return (
    <div className={css.new_task} onClick={onClick}>
      <h5>+ Task</h5>
    </div>
  );
};

export const NewSubtask = ({ onClick }) => {
  return (
    <div className={css.new_subtask} onClick={onClick}>
      <h5>+ Subtask</h5>
    </div>
  );
};
