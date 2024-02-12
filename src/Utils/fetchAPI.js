import axios from 'axios'

const Base_URL = 'https://youtube-v31.p.rapidapi.com'


const REACT_API_KEY = 'cbd103aff3msh9b7cc347c16d7aap18387bjsnb6d164911a2f'

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'cbd103aff3msh9b7cc347c16d7aap18387bjsnb6d164911a2f',
      // 'X-RapidAPI-Key': '465bd1307dmsh2831e09b20847e2p1f346djsn2a65b64c7595',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}

export const fetchAPI = async(url) => {
  const {data} = await axios.get(`${Base_URL}/${url}`, options)

  return data;
}