export function buildPlayerPageUrl({ baseUrl = '', code = '', url = '' } = {}) {
  if (url) {
    return url;
  }

  if (!code) {
    return '';
  }

  const base = String(baseUrl).replace(/\/$/, '');
  return `${base}/t/${encodeURIComponent(code)}`;
}
