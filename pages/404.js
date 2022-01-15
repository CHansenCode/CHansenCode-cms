import { Logo, Button } from 'chansencode-lib';
import router from 'next/router';

import css from './styles/404.module.scss';

export default function NotFound() {
  async function goBack() {
    router.push('/');
  }
  return (
    <div className={css.wrapper}>
      <Logo height="100px" />
      <p>404: Couldn't find the page requested.</p>

      <Button onClick={goBack}>
        <h5>
          Go back to <b>HOME</b>
        </h5>
      </Button>
    </div>
  );
}
