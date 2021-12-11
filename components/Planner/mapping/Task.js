import { Input } from '../Input';
import { Button } from 'chansencode-lib';

import css from './Task.module.scss';

export const Task = ({
  data,
  //
  stageIndex,
  taskIndex,
  //
  formData,
  setFormData,
  controller,
  //
  children,
}) => {
  async function handleTaskChange(e, propName) {
    let newStages = [...formData.stages];

    let newTask = { ...data, [propName]: e.target.value };

    newStages[stageIndex].tasks[taskIndex] = newTask;

    setFormData({ ...formData, stages: newStages });
  }
  async function onClickDeleteTask() {
    let newStages = [...formData.stages];

    let filteredTasks = newStages[stageIndex].tasks.filter(
      task => task.id !== data.id,
    );

    newStages[stageIndex].tasks = filteredTasks;

    setFormData({ ...formData, stages: newStages });
  }

  return (
    <div className={`pc3b ${css.task}`}>
      <div className={css.task_card}>
        <div>
          <Input
            className="sc"
            value={data.title}
            ternary={controller.isEditing}
            onChange={e => handleTaskChange(e, 'title')}
          />
          {controller.isDeleting && (
            <Button onClick={onClickDeleteTask}>x</Button>
          )}
        </div>
        <Input
          value={data.v}
          ternary={controller.isEditing}
          onChange={e => handleTaskChange(e, 'v')}
        />
      </div>

      <div className={css.subtaskWrapper}>{children}</div>
    </div>
  );
};
