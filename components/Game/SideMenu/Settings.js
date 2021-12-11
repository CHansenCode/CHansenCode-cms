import { useRouter } from 'next/router';

export const Settings = ({ data }) => {
  const router = useRouter();

  async function saveToLocal(base, increment) {
    let data = {
      base: base,
      increment: increment,
      cost: cost,
    };

    window.localStorage.setItem('funData', JSON.stringify(data));
  }

  async function getSaveFromLocal() {
    let data = window.localStorage.getItem('funData');
    let parsed = JSON.parse(data);

    setBase(parsed.base);
    setIncrement(parsed.increment);
    setCost(parsed.cost);
  }
  return (
    <div>
      <button>save</button>
      <button>load</button>
      <button>reset</button>
    </div>
  );
};
