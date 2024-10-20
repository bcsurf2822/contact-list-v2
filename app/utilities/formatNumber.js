export function formatNumber(e) {
  return e.substring(0, 1) + '-' + e.substring(1, 4) + '-' + e.substring(4, 7) +  ' (' + e.substring(7) + ')';
}