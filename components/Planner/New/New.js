import { useDispatch } from 'react-redux';

import { Button } from 'chansencode-lib';
import { createPlan } from 'pages/api';

import css from './New.module.scss';
import { uniqueIdGenerator } from 'lib';

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

export const NewProject = ({ ...props }) => {
  const dispatch = useDispatch();

  async function deleteProject() {
    dispatch(createPlan());
  }

  return (
    <ButtonStyle
      className={css.project}
      onClick={() => deleteProject()}
      {...props}
    />
  );
};
export const NewStage = ({ ...props }) => {
  async function onClickNew() {
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
      onClick={() => onClickNew()}
      {...props}
    />
  );
};
export const NewTask = ({ index, ...props }) => {
  async function onClickNew() {
    let stages = [...props.formData.stages];
    let filteredTasks = stages[index.stage].tasks.filter(
      t => t.id !== props.data.id,
    );

    stages[index.stage].tasks = filteredTasks;

    props.setFormData({ ...props.formData, stages: stages });
  }

  return (
    <ButtonStyle className={css.task} onClick={() => onClickNew()} {...props} />
  );
};
export const NewSubtask = ({ index, ...props }) => {
  async function onClickNew() {
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
      onClick={() => onClickNew()}
      {...props}
    />
  );
};

const stageTemplate = {
  id: uniqueIdGenerator(),
  title: '',
  descr: '',

  tasks: [
    {
      title: '',
      assignedTo: [],
      id: uniqueIdGenerator(),
      subtasks: [
        {
          id: uniqueIdGenerator(),
          title: '',
          timeRemaining: 0,
          resolved: false,
        },
      ],
    },
  ],
};
const taskTemplate = {
  title: '',
  assignedTo: [],
  id: uniqueIdGenerator(),
  subtasks: [
    {
      id: uniqueIdGenerator(),
      title: '',
      timeRemaining: 0,
      resolved: false,
    },
  ],
};
const subtaskTemplate = {
  id: uniqueIdGenerator(),
  title: '',
  timeRemaining: 0,
  resolved: false,
};
