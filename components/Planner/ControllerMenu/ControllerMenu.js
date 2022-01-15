import { Button } from 'chansencode-lib';
import { AiOutlineEye } from 'react-icons/ai';

import css from './ControllerMenu.module.scss';

export const ControllerMenu = ({ ...props }) => {
  return (
    <div className={`${css.menu}`}>
      <div className="pc1b">
        <ToggleProject {...props} />

        <div>
          <ShowTasks {...props} />
          <ShowSubtasks {...props} />
          <ToggleEdit {...props} />
          <ToggleDelete {...props} />
        </div>
      </div>
    </div>
  );
};

//

const ToggleProject = ({ controller, setController }) => {
  async function onClickToggleProject() {
    setController({
      ...controller,
      showProject: !controller.showProject,
    });
  }

  let highlight = controller.showProject;

  return (
    <Button
      style={{ width: '4rem' }}
      className={highlight ? 'sc' : ''}
      onClick={() => onClickToggleProject()}
    >
      <h5>{!highlight ? 'open' : 'close'}</h5>
    </Button>
  );
};

// ⚙

const ShowTasks = ({ controller, setController }) => {
  async function onClickShowTasks() {
    setController({
      ...controller,
      showTasks: !controller.showTasks,
      showSubtasks: controller.showTasks && false,
    });
  }

  let show = controller.showProject;
  let highlight = controller.showTasks;

  return (
    <Button
      className={`${show ? css.show_btn : ''}${highlight ? ' sc' : ''}`}
      onClick={() => onClickShowTasks()}
    >
      <AiOutlineEye /> <h5 style={{ marginLeft: '0.5rem' }}>TASKS</h5>
    </Button>
  );
};
const ShowSubtasks = ({ controller, setController }) => {
  async function onClickShowSubtasks() {
    setController({
      ...controller,
      showSubtasks: !controller.showSubtasks,
    });
  }

  let show = controller.showTasks;
  let highlight = controller.showSubtasks;

  return (
    <Button
      className={`${show ? css.show_btn : ''}${highlight ? ' sc' : ''}`}
      onClick={() => onClickShowSubtasks()}
    >
      <AiOutlineEye /> <h5 style={{ marginLeft: '0.5rem' }}>SUBTASKS</h5>
    </Button>
  );
};

const ToggleEdit = ({ controller, setController }) => {
  async function onClickToggleIsEditing() {
    setController({
      ...controller,
      isEditing: !controller.isEditing,
      isDeleting: controller.isEditing && false,
    });
  }

  let show = controller.showProject;
  let highlight = controller.isEditing;

  return (
    <Button
      className={`${show ? css.show_btn : ''}${highlight ? ' sc' : ''}`}
      onClick={() => onClickToggleIsEditing()}
    >
      <h5>Enable editing</h5>
    </Button>
  );
};
const ToggleDelete = ({ controller, setController }) => {
  async function onClickToggleIsDeleting() {
    setController({
      ...controller,
      isDeleting: !controller.isDeleting,
    });
  }

  let show = controller.isEditing;
  let highlight = controller.isDeleting;

  return (
    <Button
      className={`${show ? css.show_btn : ''}${highlight ? ' sc' : ''}`}
      onClick={() => onClickToggleIsDeleting()}
    >
      <h5>Allow deletion</h5>
    </Button>
  );
};
