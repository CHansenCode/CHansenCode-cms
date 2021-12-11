import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Iframe, Section } from 'components';

import { getMeta } from 'pages/api';

export default function ComponentLibrary() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeta());
  }, []);

  const url = useSelector(state => state.meta);

  return (
    <Section>
      <div style={{ height: '90vh' }}>
        <Iframe src="https://dev3.chansen.design" />
      </div>
    </Section>
  );
}

export const getServerSideProps = async () => {
  const { data } = await fetch('https://chansendesign.herokuapp.com/meta');

  let texts = parsedTexts.filter(text => text.pageTitle === 'FRONTPAGE');

  return {
    props: { media, texts },
  };
};
