import { ref, watch } from 'vue';
import local from '../core/data';

const useLocal = () => {
  const useLocalKey = <T>(key: string, value: T) => {
    const vl = local.getValue(key, value);
    const v = ref(vl);
    watch(v, (n) => {
      local.setValue(key, n);
    });
    return v;
  };
  return {
    useLocalKey,
  };
};

export default useLocal;
