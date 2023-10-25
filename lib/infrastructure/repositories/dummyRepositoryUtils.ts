
export function delay(millis: number): Promise<void> {
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve();
    }, millis);
  })
}

export function randomFail(percent: number) {
  if (Math.random() <= percent / 100) {
    throw new Error('Random Error');
  }
}