// import Tasks from '../Tasks/Tasks';
import { Input } from '../Input';
import { Button } from 'chansencode-lib';

import css from './Stage.module.scss';

export const Stage = ({
  data,
  //
  stageIndex,
  //
  formData,
  setFormData,
  controller,
  //
  children,
}) => {
  async function handleStageChange(e, propName) {
    let newStages = [...formData.stages];

    let newStage = { ...data, [propName]: e.target.value };

    newStages[stageIndex] = newStage;

    setFormData({ ...formData, stages: newStages });
  }
  async function handleStageDelete() {
    let newStages = [...formData.stages];

    newStages = formData.stages.filter(stage => stage.id !== data.id);

    setFormData({ ...formData, stages: newStages });
  }

  return (
    <div className={`pc1b bg ${css.stage}`}>
      <h4>STAGE {stageIndex + 1}</h4>
      <div className={`pc3b ${css.stage_card}`}>
        {controller.isDeleting && (
          <Button padding="0" onClick={handleStageDelete}>
            x
          </Button>
        )}

        <Input
          className="sc"
          value={data.title}
          ternary={controller.isEditing}
          onChange={e => handleStageChange(e, 'title')}
        />
        <Input
          value={data.body}
          ternary={controller.isEditing}
          onChange={e => handleStageChange(e, 'body')}
        />
        <Input
          value={data.v}
          ternary={controller.isEditing}
          onChange={e => handleStageChange(e, 'v')}
        />
        <Input
          value={data.deadline}
          ternary={controller.isEditing}
          onChange={e => handleStageChange(e, 'deadline')}
        />
      </div>
      <div className={css.task_wrapper}>
        <h5>Tasks:</h5>
        {children}
      </div>
    </div>
  );
};
