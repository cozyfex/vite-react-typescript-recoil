import { countStore, sampleStore } from '@store/sample-store';
import { useRecoilState } from 'recoil';

const AnotherPage = () => {
  const [sample, setSample] = useRecoilState(sampleStore);
  const [count, setCount] = useRecoilState(countStore);

  const decrease = () => setCount(count - 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  return (
    <div>
      <div>Another Page</div>
      <div>{count}</div>
      <div>
        <button onClick={decrease}>Decrease</button>
      </div>
      <div>{sample.title}</div>
      <div>
        <input type="text" onChange={setTitle} />
      </div>

    </div>
  );
};

export default AnotherPage;
