import { watch } from 'vue';
import { useI18n } from 'vue-i18n';
import local from '/@/core/data';

const useMyI18n = () => {
  // const { useLocalKey } = useLocal();
  // const lang = useLocalKey('locale', 'en');
  const { locale } = useI18n();
  watch(
    locale,
    (l) => {
      local.setValue('locale', l);
    },
    { immediate: true },
  );
};

export default useMyI18n;
