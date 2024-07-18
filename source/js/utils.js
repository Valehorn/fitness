const checkBreakpointchange = (callFunc) => {
  const breakpoint = window.innerWidth;
  if (breakpoint < 320) {
    callFunc();
  } else if (breakpoint >= 320 && breakpoint < 768) {
    callFunc();
  } else if (breakpoint >= 768 && breakpoint < 1366) {
    callFunc();
  } else if (breakpoint >= 1366) {
    callFunc();
  }
};

window.addEventListener('resize', checkBreakpointchange);

export { checkBreakpointchange };

