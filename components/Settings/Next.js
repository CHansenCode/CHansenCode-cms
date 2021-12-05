import { useState } from 'react';
import { InputField } from 'chansencode-lib';

export const Next = () => {
  //This page will contain the settings where the next version of the homepage & cms etc is configured
  const [formData, setFormData] = useState({
    url: 'https://dev3.chansen.design',
  });

  return (
    <div>
      {formData.url}
      <div style={{ width: '30rem' }}>
        <InputField
          label="url"
          type="input"
          value={formData.url}
          data={formData.url}
          setData={setFormData}
          objKey="url"
        />
      </div>
    </div>
  );
};
