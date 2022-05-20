export function encodingToB64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
