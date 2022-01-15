import React from 'react';
import Head from 'next/head';

import { metaInfo } from 'config';

export const Meta = () => {
  return (
    <Head>
      <title>{metaInfo.title}</title>
    </Head>
  );
};
