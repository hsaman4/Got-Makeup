import Axios from 'axios'
const BASE_URL = `https://5dced57c75f9360014c26416.mockapi.io/`

export const api = Axios.create({
	baseURL: BASE_URL,
	headers: {
	}
})