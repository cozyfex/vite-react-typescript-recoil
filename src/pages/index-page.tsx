import { countStore, sampleStore } from '@store/sample-store';
import { useRecoilState } from 'recoil';

const IndexPage = () => {
  const [sample, setSample] = useRecoilState(sampleStore);
  const [count, setCount] = useRecoilState(countStore);

  const increase = () => setCount(count + 1);
  const setTitle = () => setSample({ ...sample, title: String(document.querySelector('input')?.value) });

  return (
    <div>
      <div>Index Page</div>
      <div>{count}</div>
      <div>
        <button onClick={increase}>Increase</button>
      </div>
      <div>{sample.title}</div>
      <div>
        <input type="text" />
        <button onClick={setTitle}>Change title</button>
      </div>

    </div>
  );
};

export default IndexPage;
