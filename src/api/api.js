import axios from 'axios'
axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '35175572-0d962d8c0f95ebedc007c0b09'
const PER_PAGE = '12'
export const getSearchImg = async (text, page) => {
            const response = await axios.get(`?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`)
            return await response.data
}