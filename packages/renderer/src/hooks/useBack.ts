import router from '/@/router/router';

const useBack = () => {};

const useBackHostList = async () => {
  await router.push({ name: 'HostList' });
};
export { useBackHostList };
export default useBack;
