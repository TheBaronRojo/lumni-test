export function openUrl(url: string) {
    window.open(url, "_blank");
  }
  
  export function openUrlSameTab(url: string) {
    if ( url !== "") window.location.href = url;
  }