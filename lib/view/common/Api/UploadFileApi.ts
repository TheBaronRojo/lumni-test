

export async function uploadFileToUrl(
  url: string,
  blob: Blob | File,
  progressCallback?: (percent: number) => void
) {
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();

    req.open("PUT", url, true);

    req.upload.addEventListener("progress", (evt) => {
      if (evt.lengthComputable) {
        let done = evt.loaded;
        let total = evt.total;
        let percent = Math.floor(done / total * 1000) / 10;
        if (progressCallback) progressCallback(percent)
      }
    });

    req.onreadystatechange = function () {
      if (req.readyState === 4) {
        resolve({
          success: req.status >= 200 && req.status <= 299,
          status: req.status,
        })
      }
    }


    req.send(blob);
  });
}
