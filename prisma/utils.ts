import _ from "lodash";

export async function allProgress(
  proms: Promise<unknown>[],
  progress_cb: (progress: number) => void
) {
  let d = 0;
  progress_cb(0);
  for (const p of proms) {
    p.then(() => {
      d++;
      progress_cb((d * 100) / proms.length);
    });
  }
  return Promise.all(proms);
}

export function updateProgressBar(): (progress: number) => void {
  return (percentage: number) => {
    const progressBar = _.repeat("=", Math.floor((percentage * 100) / 100));
    const remainingBar = _.repeat(" ", 100 - Math.floor(percentage));
    process.stdout.write("\x1B[2K\r");
    process.stdout.write(
      `[${progressBar}${remainingBar}] ${percentage.toFixed(2)}%`
    );
  };
}
