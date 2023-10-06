export const API_ENDPOINT =
  'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const cache: { [url: string]: string } = {};

const request = async (url: string, options = { method: 'GET' }) => {
  if (cache[url]) return cache[url];
  const results = await fetch(url, options);
  // console.log('results:', results);

  if (results.ok) {
    const data = await results.json();
    cache[url] = data;
    return data;
  } else {
    throw new Error();
  }
};

const fetchLangs = async (query: string) => {
  if (query.length === 0) return [];
  return request(
    `${API_ENDPOINT}/languages?keyword=${encodeURIComponent(query)}`
  );
};

export default fetchLangs;
