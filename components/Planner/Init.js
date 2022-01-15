import { useState, useEffect } from 'react';
import { useDebouncedCallback, usePlanningApp } from 'lib';

import { Project, Stage, Task, Subtask } from './';

export const Init = ({ data }) => {
  const [controller, setController] = useState({
    showProject: false,
    showTasks: false,
    showSubtasks: false,
    isEditing: false,
    isDeleting: false,
    editInProcess: false,
    triggerUpdateToDb: 0,
    savingChanges: false,
  });
  const [formData, setFormData] = useState({ ...data });

  const props = { formData, setFormData, controller, setController };

  return formData ? (
    <Project {...props}>
      {formData.stages.map((s, i) => (
        <Stage key={s._id} data={s} index={{ stage: i }} {...props}>
          {s.tasks.map((t, ind) => (
            <Task
              key={t.id}
              data={t}
              index={{ stage: i, task: ind }}
              {...props}
            >
              {t.subtasks.map((sub, index) => (
                <Subtask
                  key={sub.id}
                  data={sub}
                  index={{
                    stage: i,
                    task: ind,
                    sub: index,
                  }}
                  {...props}
                />
              ))}
            </Task>
          ))}
        </Stage>
      ))}
    </Project>
  ) : (
    'loading'
  );
};

export default Project;

/*

const cow = usePlanningApp(data);

useEffect(() => {
  console.log(cow);
}, [cow]);

*/

/*

async function updateProject() {
    console.log(formData);
  }
  const [debounceHandler] = useDebouncedCallback(() => updateProject(), 1000);
  useEffect(() => {
    controller.triggerUpdateToDb > 0 && debounceHandler();
  }, [controller.triggerUpdateToDb]);

  */
