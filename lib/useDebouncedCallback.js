import { useCallback } from 'react';
import debounce from 'lodash.debounce';

export const useDebouncedCallback = (callback, wait) => {
  const debouncedFunction = useCallback(debounce(callback, wait), []);
  return [debouncedFunction];
};

/*  _Usage

import { useDebouncedCallback } from "lib";

const [debounceHandler] = useDebouncedCallback(value => func(value), wait);

const eventHandler = useCallback(e => {
    debounceHandler(e || value);
    },
    [debounceHandler]
);

*/
