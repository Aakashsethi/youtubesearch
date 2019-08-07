import axios from 'axios';

const KEY='AIzaSyBMCG0Is_u-8n22O9CZdSPkJuIQ2qplYrc';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key: KEY
    }
});

