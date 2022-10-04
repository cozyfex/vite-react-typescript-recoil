import { SampleInterface } from '@interfaces/sample-interface';
import { atom, DefaultValue, selector } from 'recoil';

const sampleStore = atom<SampleInterface>({
  key: 'sampleStore',
  default: {
    count: 0,
    title: '',
  },
});

const countStore = selector({
  key: 'countStore',
  get: ({ get }) => ((get(sampleStore).count)),
  set: ({ get, set }, count) => {
    if (typeof count === 'number') {
      set(sampleStore, { ...get(sampleStore), count });
    }
  },
});

export { sampleStore, countStore };
