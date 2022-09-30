import ApiHashedUrlGenerator from '../utils/ApiHashedUrlGenerator'

export const MARVEL_API_URL = `https://gateway.marvel.com/v1/public/comics${ApiHashedUrlGenerator.getApiRemainingUrl()}`;