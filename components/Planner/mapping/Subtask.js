import { Input } from '../Input';
import { Button } from 'chansencode-lib';

import css from './Subtask.module.scss';

export const Subtask = ({
  data,
  //
  stageIndex,
  taskIndex,
  subtaskIndex,
  //
  controller,
  formData,
  setFormData,
}) => {
  //#region functions
  async function handleSubtaskChange(e, propName, data) {
    let newStages = [...formData.stages];

    let newSubtask = { ...data, [propName]: e.target.value };

    newStages[stageIndex].tasks[taskIndex].subtasks[subtaskIndex] = newSubtask;

    setFormData({ ...formData, stages: newStages });
  }
  async function onClickToggleResolved(e, data) {
    let newStage = [...formData.stages];

    newStage[stageIndex].tasks[taskIndex].subtasks[subtaskIndex] = {
      ...data,
      resolved: !data.resolved,
    };

    setFormData({ ...formData, stages: newStage });
  }
  async function onClickDeleteSubtask() {
    let newStages = [...formData.stages];

    let filteredSubtasks = newStages[stageIndex].tasks[
      taskIndex
    ].subtasks.filter(subtask => subtask.id !== data.id);

    newStages[stageIndex].tasks[taskIndex].subtasks = filteredSubtasks;

    setFormData({ ...formData, stages: newStages });
  }
  //#endregion

  return (
    <div className={`pc3b ${css.subtask} ${data.resolved && css.resolved}`}>
      <div className={css.editResolve}>
        <div onClick={e => onClickToggleResolved(e, data)}>
          <Button ternary={controller.isEditing}>
            {data.resolved ? '✓' : ' '}
          </Button>
        </div>

        <Input
          ternary={controller.isEditing}
          value={data.title}
          onChange={e => handleSubtaskChange(e, 'title', data)}
        />
      </div>

      {controller.isDeleting && (
        <div className={css.deleteBtn}>
          <Button onClick={() => onClickDeleteSubtask()}>x</Button>
        </div>
      )}
    </div>
  );
};
