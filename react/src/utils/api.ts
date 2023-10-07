import _ from 'lodash';
export const API_ENDPOINT =
  'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

const cache: { [url: string]: string } = {};

const request = async (url: string, options = { method: 'GET' }) => {
  console.log('enter');
  if (cache[url]) return cache[url]; // is it better to store just the keyword as key in the cache?
  try {
    const results = await fetch(url, options);
    if (results.ok) {
      const data = await results.json();
      cache[url] = data;

      return data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error fetching suggestions:', error);
  }
};

const fetchLangs = async (query: string) => {
  // const debounced_request = _.debounce(request, 100); // debounce working?
  return request(
    `${API_ENDPOINT}/languages?keyword=${encodeURIComponent(query)}`
  );
};

export default fetchLangs;
