import axios from 'axios';

export class Fetch {

    static get(url) {
        return axios.get(url)
    }

}