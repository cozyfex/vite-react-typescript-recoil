import { SampleInterface } from '@interfaces/sampleInterface';
import { atom, DefaultValue, selector } from 'recoil';

const sampleState = atom<SampleInterface>({
  key: 'sampleState',
  default: {
    count: 0,
    title: '',
  },
});

const countSelectorState = selector({
  key: 'countState',
  get: ({ get }) => ((get(sampleState).count)),
  set: ({ get, set }, count) => {
    if (typeof count === 'number') {
      set(sampleState, { ...get(sampleState), count });
    }
  },
});

export { sampleState, countSelectorState };
