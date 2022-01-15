import React, { useState } from 'react';

import { Wrapper } from './Wrapper/Wrapper';
import { Input, Select, Dropdown, Textarea, Password } from './types';

export const InputSwitch = ({ type, ...props }) => {
  const [focus, setFocus] = useState(false);
  //

  switch (type) {
    //
    case 'input':
      return (
        <Wrapper focus={focus} {...props}>
          <Input focus={focus} setFocus={setFocus} {...props} />
        </Wrapper>
      );

    case 'password':
      return (
        <Wrapper focus={focus} {...props}>
          <Password focus={focus} setFocus={setFocus} {...props} />
        </Wrapper>
      );

    case 'select':
      return (
        <Wrapper focus={focus} {...props}>
          <Select focus={focus} setFocus={setFocus} {...props} />
        </Wrapper>
      );

    case 'dropdown':
      return (
        <Wrapper focus={focus} {...props}>
          <Dropdown focus={focus} setFocus={setFocus} {...props} />
        </Wrapper>
      );

    case 'textarea':
      return (
        <Wrapper focus={focus} {...props}>
          <Textarea focus={focus} setFocus={setFocus} {...props} />
        </Wrapper>
      );

    default:
      return 'no "type" specified';
  }
};
