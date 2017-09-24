import $ from 'jquery';

const flickrApi =  `https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?`;

export const fetchData = async () => {
  return await $.getJSON(flickrApi);
};
