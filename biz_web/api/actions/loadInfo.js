export default function loadInfo() {
  return new Promise((resolve) => {
    resolve({
      message: 'Current Time:',
      time: Date.now()
    });
  });
}
