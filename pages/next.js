import { useState } from 'react';
import { useFetch } from 'lib';

export default function Next() {
  const [src, setSrc] = useState('https://dev3.chansen.design');

  return (
    <div>
      <iframe src={src}></iframe>
    </div>
  );
}
