export const EnterTransition = {
  initial: {
    opacity: 0, x: '25%', y: '25%', scale: 0.5,
  },
  animate: {
    opacity: 1, x: 0, y: 0, scale: 1,
  },
  transition: { duration: 0.3, ease: 'easeIn' },
};
