export const createPassword = () => {
  return Math.random().toString(36).slice(2);
}
