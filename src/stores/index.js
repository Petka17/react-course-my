import CommentStore  from './CommentStore';
import ArticleStore from './ArticleStore';

const stores = {};

Object.assign(stores, {
    articles: new ArticleStore(null, stores),
    comments: new CommentStore(null, stores)
});

export const articleStore = stores.articles;
