import { useRouter } from 'vue-router';

const useToBack = () => {
  const toBack = () => {
    const router = useRouter();
    router.back();
  };
  return {
    toBack,
  };
};
export default useToBack;
