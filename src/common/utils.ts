const globalEnv = process.env.NODE_ENV;
const isDev = globalEnv === "development";


export { globalEnv, isDev };

export function add(lhs: number, rhs: number): number {
  return lhs + rhs;
}

// uuid
export const uuid = (): string => {
  const S4 = () => {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

type FunctionalControl = (this: any, fn: any, delay?: number) => (...args: any) => void;
type DebounceEvent = FunctionalControl;
type ThrottleEvent = FunctionalControl;

// 防抖函数
export const debounce: DebounceEvent = function(fn, delay = 1000) {
  let timer: NodeJS.Timeout | null = null;
  return (...args: any) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

// 节流函数
export const throttle: ThrottleEvent = function(fn, delay = 500) {
  let flag = true;
  return (...args: any) => {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, args);
      flag = true;
    }, delay);
  };
};

