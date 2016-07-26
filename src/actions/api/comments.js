import $ from 'jquery';

export const getComments = () => $.get('/api/comment');
