import $ from 'jquery';

export const getArticles = () => $.get('/api/article');
export const getArticleById = ({ id }) => $.get(`/api/article/${id}`);
