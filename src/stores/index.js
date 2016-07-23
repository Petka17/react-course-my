import SimpleStore  from './SimpleStore';
import ArticleStore from './ArticleStore';

import { articles, comments } from '../fixtures';

const stores = {};

Object.assign(stores, {
    articles: new ArticleStore(articles, stores),
    comments: new SimpleStore(comments, stores)
});

export const articleStore = stores.articles;

