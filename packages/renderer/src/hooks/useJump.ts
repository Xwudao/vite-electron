const useJump = (url: string) => {
  const ok = window.open(url, '_blank');
  if (!ok) {
    location.href = url;
  }
};
export default useJump;
