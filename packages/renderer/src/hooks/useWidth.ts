import { onUnmounted, ref } from 'vue';

const useWidth = () => {
  const width = ref(document.documentElement.clientWidth);
  const resize = () => {
    width.value = document.documentElement.clientWidth;
  };
  window.addEventListener('resize', resize);
  onUnmounted(() => {
    window.removeEventListener('resize', resize);
  });

  return {
    width,
  };
};

export default useWidth;
