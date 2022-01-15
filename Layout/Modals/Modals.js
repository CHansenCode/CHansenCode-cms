import React from 'react';

import { ImageModal, Dev } from 'components';

export const Modals = ({ ...props }) => {
  return (
    <>
      {process.env.NODE_ENV !== 'production' && <Dev colors={props.colors} />}

      <ImageModal {...props} />
    </>
  );
};
