import React from 'react';

import { Buttons, FixedWrapper } from './';
import { Fold, Image, InputSwitch } from 'components';

import css from './Form.module.scss';

import { formConstructor } from 'config/media';

export const Form = ({ ...props }) => {
  //

  return (
    <FixedWrapper {...props}>
      <div className={css.wrapper}>
        <div>
          <h3 className={`sc ${css.title}`}>MEDIA FORM</h3>
        </div>

        <header>
          <div>
            {formConstructor.header.map((p, i) => (
              <InputSwitch
                key={`in${p.label}${i}`}
                data={props.formData}
                setData={props.setFormData}
                {...props}
                {...p}
              />
            ))}
          </div>

          <div>
            <Image
              modal
              data={{ src: props.formData.url, title: props.formData.title }}
            />
          </div>
        </header>

        <div>
          {formConstructor.basic.map((p, i) => (
            <InputSwitch
              key={`in${p.label}${i}`}
              data={props.formData}
              setData={props.setFormData}
              {...props}
              {...p}
            />
          ))}
        </div>

        <Fold>
          {formConstructor.advanced.map((p, i) => (
            <InputSwitch
              key={`in${p.label}${i}`}
              data={props.formData}
              setData={props.setFormData}
              {...props}
              {...p}
            />
          ))}
        </Fold>

        <Buttons {...props} />
      </div>
    </FixedWrapper>
  );
};
