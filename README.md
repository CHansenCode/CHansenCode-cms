## Introduction

---

<br>

<br>

## Dependencies

---

<br>

- chansencode-lib
-

<br>

## Styling rules

---

<br>

Tbc..

<br>

## Component import structure

---

<br>

All components will be structured by the following pattern

All components are exported from index.js

<br>

```javascript
** COMPONENT FOLDER:
file: '~/components/index.js';

export * from './Foo';
export * from './Bar';
//...for all components


** FOO FOLDER
file: '~/components/Foo/index.js';

export * from './Foo';


** FOO FILE
file: '~/components/Foo/Foo.js';

export const Foo = () => {
return (
    <div>
        <h4>foo</h4>
    </div>
);


** IMPORTING COMPONENTS:
file: '~/pages/index.js'

import {Foo} from 'components'
```
