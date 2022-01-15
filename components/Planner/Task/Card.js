import { useState } from 'react';
import { Input } from 'components/Planner';
import { DeleteTask } from '../Delete';

import { Subtasks } from '../Subtask';

import css from './Card.module.scss';

export const Card = ({ ...props }) => {
  const [subtasksOpen, setSubtasksOpen] = useState(false);

  async function handleTaskChange(e, key) {
    let newStages = [...props.formData.stages];
    let newTask = { ...props.data, [key]: e.target.value };

    newStages[props.index.stage].tasks[props.index.task] = newTask;

    props.setFormData({ ...props.formData, stages: newStages });
  }

  return (
    <div className={`bg pc3b ${css.card}`}>
      <div className={css.inputs}>
        <Input
          label="title"
          className="sc"
          value={props.data.title}
          ternary={props.controller.isEditing}
          onChange={e => handleTaskChange(e, 'title')}
        />
        <Input
          label="version"
          value={props.data.v}
          ternary={props.controller.isEditing}
          onChange={e => handleTaskChange(e, 'body')}
        />
      </div>

      {props.controller.isDeleting && <DeleteTask {...props} />}

      <div>
        <Subtasks {...props}>{props.children}</Subtasks>
      </div>
    </div>
  );
};
