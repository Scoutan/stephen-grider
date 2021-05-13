import axios from 'axios';

const KEY = 'AIzaSyCo4Aft7Gou3zQNiwNbZs7QN5wpn89DAeA';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})