import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Input } from '../Input';
import { Button, Diagram } from 'chansencode-lib';
import { ObjectViewer } from 'components';
import { ControllerMenu, Stage, Task, Subtask } from 'components/Planner';
import { NewStage, NewTask, NewSubtask } from 'components/Planner';
import { uniqueIdGenerator } from 'lib';

import { updatePlan } from 'pages/api';

import css from './Project.module.scss';

export const Project = ({ onClickDelete, id }) => {
  const dispatch = useDispatch();
  //#region states
  const [open, setOpen] = useState(false);
  const [controller, setController] = useState({
    isOpen: false,
    isEditing: false,
    isDeleting: false,
    editInProcess: false,
    trigger: 0,
  });
  const [formData, setFormData] = useState({});
  const [formDataCopy, setFormDataCopy] = useState(null);
  //#endregion

  let data = useSelector(state =>
    state.planning.find(project => project._id === id),
  );

  useEffect(() => {
    setFormData(data);
    setFormDataCopy(data);
  }, [controller.trigger]);

  useEffect(() => {
    let str1 = JSON.stringify(formData);
    let str2 = JSON.stringify(formDataCopy);

    str1 === str2
      ? setController({ ...controller, editInProcess: false })
      : setController({ ...controller, editInProcess: true });
  }, [formData]);

  //#region functions
  async function onClickSaveChanges() {
    try {
      await dispatch(updatePlan(formData));

      setController({
        ...controller,
        trigger: controller.trigger + 1,
        isEditing: false,
        isDeleting: false,
      });
    } catch (error) {
      console.log(error);
    }
  }
  async function onClickDiscardChanges() {
    setFormData(formDataCopy);
  }

  async function handleProjectChange(e, propName) {
    setFormData({ ...formData, [propName]: e.target.value });
  }
  async function handleClickOpen() {
    controller.editInProcess
      ? alert('edit in process! Save or discard changes before continuing')
      : setController({
          ...controller,
          isOpen: !controller.isOpen,
          isEditing: controller.isOpen ? null : false,
          isDeleting: controller.isOpen ? null : false,
        });
  }
  async function handleClickEdit() {
    setController({
      ...controller,
      isEditing: !controller.isEditing,
      isDeleting: controller.isEditing === true && false,
    });
  }
  async function handleClickDelete() {
    setController({ ...controller, isDeleting: !controller.isDeleting });
  }

  async function onClickNewStage() {
    let newStage = {
      id: uniqueIdGenerator(),
      title: '',
      v: '',
      deadline: '',
      body: '',
      tasks: [],
    };

    let newStages = [...formData.stages, newStage];

    setFormData({ ...formData, stages: newStages });
  }
  async function onClickNewTask(stageIndex) {
    let newStages = [...formData.stages];

    let newTask = {
      id: uniqueIdGenerator(),
      title: '',
      timeRemaining: 0,
      v: '',
      subtasks: [],
    };

    newStages[stageIndex].tasks = [...newStages[stageIndex].tasks, newTask];

    setFormData({ ...formData, stages: newStages });
  }
  async function onClickNewSubtask(stageIndex, taskIndex) {
    let newStages = [...formData.stages];

    let newSubtask = {
      id: uniqueIdGenerator(),
      title: '',
      resolved: false,
      assignedTo: [],
    };

    newStages[stageIndex].tasks[taskIndex].subtasks = [
      ...newStages[stageIndex].tasks[taskIndex].subtasks,
      newSubtask,
    ];

    setFormData({ ...formData, stages: newStages });
  }
  //#endregion

  return (
    <>
      <div className={`${css.project} ${open && css.project_open}`}>
        <ProjectCard open={controller.isOpen}>
          <Button
            className={css.project_card_openBtn}
            onClick={handleClickOpen}
          >
            <p>➤</p>
          </Button>

          <div className={`${css.project_card_inputs}`}>
            <div>
              <h5>title</h5>
              <Input
                className="sc"
                ternary={controller.isEditing}
                value={formData.title}
                onChange={e => handleProjectChange(e, 'title')}
              />
            </div>
            <div>
              <h5>category</h5>
              <Input
                ternary={controller.isEditing}
                value={formData.category}
                onChange={e => handleProjectChange(e, 'category')}
              />
            </div>
            <div>
              <h5>deadline</h5>
              <Input
                ternary={controller.isEditing}
                value={formData.deadline}
                onChange={e => handleProjectChange(e, 'deadline')}
              />
            </div>
          </div>

          <ProgressionDiagrams data={formData ? formData : data} />
        </ProjectCard>

        {controller.isOpen && (
          <ControllerMenu>
            {controller.editInProcess && (
              <>
                <Button onClick={onClickSaveChanges}>Save changes</Button>
                <Button onClick={onClickDiscardChanges}>Discard changes</Button>
              </>
            )}

            <Button
              className={controller.isEditing && 'sc'}
              onClick={handleClickEdit}
            >
              Enable editing
            </Button>
            {controller.isEditing && (
              <Button
                className={controller.isDeleting && 'sc'}
                onClick={handleClickDelete}
              >
                Allow deletion
              </Button>
            )}
            {controller.isEditing && controller.isDeleting && (
              <Button onClick={onClickDelete}>Delete this project</Button>
            )}
          </ControllerMenu>
        )}

        {formData && controller.isOpen && (
          <div className={css.stage_wrapper}>
            {formData.stages &&
              formData.stages.map((stage, stageIndex) => (
                <Stage
                  key={stage._id || stage.id}
                  data={stage}
                  //
                  stageIndex={stageIndex}
                  //
                  formData={formData}
                  setFormData={setFormData}
                  controller={controller}
                >
                  {stage.tasks.map((task, taskIndex) => (
                    <Task
                      key={task._id || task.id}
                      data={task}
                      //
                      stageIndex={stageIndex}
                      taskIndex={taskIndex}
                      //
                      formData={formData}
                      setFormData={setFormData}
                      controller={controller}
                    >
                      {task.subtasks.map((subtask, subtaskIndex) => (
                        <Subtask
                          key={subtask._id || subtask.id}
                          data={subtask}
                          //
                          stageIndex={stageIndex}
                          taskIndex={taskIndex}
                          subtaskIndex={subtaskIndex}
                          //
                          formData={formData}
                          setFormData={setFormData}
                          controller={controller}
                        />
                      ))}
                      {controller.isEditing && (
                        <NewSubtask
                          stageIndex={stageIndex}
                          taskIndex={taskIndex}
                          onClick={() =>
                            onClickNewSubtask(stageIndex, taskIndex)
                          }
                        />
                      )}
                    </Task>
                  ))}
                  {controller.isEditing && (
                    <NewTask onClick={() => onClickNewTask(stageIndex)} />
                  )}
                </Stage>
              ))}
            {controller.isEditing && formData.stages.length < 4 && (
              <NewStage onClick={() => onClickNewStage()} />
            )}
          </div>
        )}
      </div>
      {/* <div style={{ display: 'flex' }}>
        {controller.isOpen && (
          <>
            <ObjectViewer title="formData" fontSize="12px" data={formData} />
            <ObjectViewer
              title="formDataCopy"
              fontSize="12px"
              data={formDataCopy}
            />
            <ObjectViewer title="redux" fontSize="12px" data={data} />
          </>
        )}
      </div> */}
    </>
  );
};

const ProjectCard = ({ open, children, onClick }) => {
  return (
    <div
      className={`sc3b ${css.project_card} ${open && css.project_card_open}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const ProgressionDiagrams = ({ data }) => {
  console.log(data);
  return data && <div className={css.circles}>progress</div>;
};

const ProgressDiagram = ({ data }) => {
  let resolved = 0;
  let unresolved = 0;

  return (
    <div className={css.progressDiagram}>
      <Diagram size="5rem" factor={0.4} strokeWidth={30} />
    </div>
  );
};

export default Project;
