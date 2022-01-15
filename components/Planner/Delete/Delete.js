import { useDispatch } from 'react-redux';

import { Button } from 'chansencode-lib';
import { deletePlan } from 'pages/api';

import css from './Delete.module.scss';

// ** STYLE
const ButtonStyle = ({ onClick, className, ...props }) => {
  return (
    <Button
      className={`${css.delete} ${className}`}
      onClick={onClick}
      {...props}
    >
      <p>🗴</p>
    </Button>
  );
};
// **

export const DeleteProject = ({ ...props }) => {
  const dispatch = useDispatch();

  async function deleteProject() {
    dispatch(deletePlan(props.formData._id));
  }

  return (
    <ButtonStyle
      className={css.project}
      onClick={() => deleteProject()}
      {...props}
    />
  );
};

export const DeleteStage = ({ ...props }) => {
  async function onClickDelete() {
    let stages = [...props.formData.stages];
    let filteredStages = stages.filter(s => s.id !== props.data.id);

    props.setFormData({
      ...props.formData,
      stages: filteredStages,
    });
  }

  return (
    <ButtonStyle
      className={css.stage}
      onClick={() => onClickDelete()}
      {...props}
    />
  );
};

export const DeleteTask = ({ index, ...props }) => {
  async function onClickDelete() {
    let stages = [...props.formData.stages];
    let filteredTasks = stages[index.stage].tasks.filter(
      t => t.id !== props.data.id,
    );

    stages[index.stage].tasks = filteredTasks;

    props.setFormData({ ...props.formData, stages: stages });
  }

  return (
    <ButtonStyle
      className={css.task}
      onClick={() => onClickDelete()}
      {...props}
    />
  );
};

export const DeleteSubtask = ({ index, ...props }) => {
  async function onClickDelete() {
    let stages = [...props.formData.stages];
    let filteredSubtasks = stages[index.stage].tasks[
      index.task
    ].subtasks.filter(subtask => subtask.id !== props.data.id);

    stages[index.stage].tasks[index.task].subtasks = filteredSubtasks;

    props.setFormData({ ...props.formData, stages: stages });
  }

  return (
    <ButtonStyle
      className={css.subtask}
      onClick={() => onClickDelete()}
      {...props}
    />
  );
};
