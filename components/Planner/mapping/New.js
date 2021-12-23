import css from './New.module.scss';

export const NewProject = ({ onClick }) => {
  return (
    <div className={`pc1bg ${css.new_project}`} onClick={onClick}>
      <p>+ new Project</p>
    </div>
  );
};

export const NewStage = ({ onClick }) => {
  return (
    <div className={`pc1bg ${css.new_stage}`} onClick={onClick}>
      + new Stage
    </div>
  );
};

export const NewTask = ({ onClick }) => {
  return (
    <div className={`pc1bg ${css.new_task}`} onClick={onClick}>
      + new Task
    </div>
  );
};

export const NewSubtask = ({ onClick }) => {
  return (
    <div className={`pc1bg ${css.new_subtask}`} onClick={onClick}>
      + new Subtask
    </div>
  );
};
