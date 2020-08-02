import Ajax from '../api/ajax';

//user
export const reqLogin = (data) => Ajax('/user/login', data, 'POST');
export const reqUserAdd = (data) => Ajax('/user/add', data, 'POST');
export const reqUserInfo = (data) => Ajax('/user/info', data, 'GET');

//diary
export const reqDiaryAdd = (data) => Ajax('/diary/add', data, 'POST');
export const reqDiaryList = (data) => Ajax('/diary/list', data, 'GET');
export const reqFavoritesList = (data) => Ajax('/diary/favorites', data, 'GET');