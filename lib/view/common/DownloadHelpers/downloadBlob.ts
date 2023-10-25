
export default async function downloadBlob(blob: Blob, fileName: string): Promise<void> {
  const blobUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a") as HTMLAnchorElement;
  anchor.href = blobUrl;
  anchor.download = fileName;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(blobUrl);
}
