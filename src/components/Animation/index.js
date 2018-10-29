import posed from 'react-pose'

export const Container = posed.div({
  enter: { staggerChildren: 0, minWidth: '50vw'  }
});

export const P = posed.p({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});