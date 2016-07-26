import $ from 'jquery';

export const getArticles = () => $.get('/api/article');
