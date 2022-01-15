import { Input } from '../Input';
import { Button } from 'chansencode-lib';

import { DeleteSubtask } from '../Delete';

import { AiOutlineClockCircle } from 'react-icons/ai';

import css from './Card.module.scss';

export const Subtask = ({ ...props }) => {
  async function handleChange(e, key) {
    let newStages = [...props.formData.stages];

    let newSubtask = { ...props.data, [key]: e.target.value };

    newStages[props.index.stage].tasks[props.index.task].subtasks[
      props.index.sub
    ] = newSubtask;

    props.setFormData({ ...props.formData, stages: newStages });
  }

  const resolved = props.data.isResolved;

  return (
    <div className={`pc1b ${css.card} ${resolved ? css.isResolved : ''}`}>
      <div className={css.inputs}>
        <ResolveRadio {...props} />
        <Input
          ternary={props.controller.isEditing}
          value={props.data.title}
          onChange={e => handleChange(e, 'title')}
        />

        <div className={css.timeInput}>
          <Input
            ternary={props.controller.isEditing}
            value={props.data.timeRemaining}
            onChange={e => handleChange(e, 'timeRemaining')}
          >
            <AiOutlineClockCircle />
          </Input>
        </div>
      </div>

      {props.controller.isDeleting && <DeleteSubtask {...props} />}
    </div>
  );
};

const ResolveRadio = ({ ...props }) => {
  async function onClickToggleResolved() {
    let newStages = [...props.formData.stages];

    newStages[props.index.stage].tasks[props.index.task].subtasks[
      props.index.sub
    ] = {
      ...props.data,
      resolved: !props.data.resolved,
    };

    props.setFormData({ ...props.formData, stages: newStages });
  }

  return (
    <div
      className={css.resolve_radio}
      onClick={e => onClickToggleResolved(e, props.data)}
    >
      <Button>{props.data.resolved ? '✓' : ' '}</Button>
    </div>
  );
};
