import axios from 'axios';

const KEY='AIzaSyAst-YryvQR3QYEX3W_4q2LE-27tA-5MDU';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part :'snippet',
        maxResults:5,
        key: KEY
    }
});

