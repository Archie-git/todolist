import axios from 'axios';

export default function Ajax(url){
    return new Promise((resolve, reject) => {
        axios.get(url).then(ret => {
            resolve(ret)
        }, err => {
            reject(err)
        })
    })
}