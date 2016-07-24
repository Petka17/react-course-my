import CommentStore  from './CommentStore';
import ArticleStore from './ArticleStore';

import { articles, comments } from '../fixtures';

const stores = {};

Object.assign(stores, {
    articles: new ArticleStore(articles, stores),
    comments: new CommentStore(comments, stores)
});

export const articleStore = stores.articles;

