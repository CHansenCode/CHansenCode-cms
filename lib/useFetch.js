import axios from 'axios';

export async function useFetch(url, token) {
  const config = {
    headers: {
      'auth-token': token,
    },
  };

  try {
    let { data } = await axios.get(url, config);

    return data;
  } catch (error) {
    console.log(error);
  }
}
