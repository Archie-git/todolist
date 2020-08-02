import axios from 'axios';

export default function Ajax(url, data, method){
    return new Promise((resolve, reject) => {
        let promise;
        switch (method) {
            case 'GET': promise = axios.get(url, {params: data});break;
            case 'POST': promise = axios.post(url, data);break;
            default: promise = axios.get(url, data);break;
        }
        promise.then(res => {
            if(res.data.status === 1){
                resolve(res.data)
            }else{
                reject(res.data)
            }
        })
    })
}