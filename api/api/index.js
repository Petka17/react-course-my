const assign     = require('object-assign');
const { Router } = require('express');

const router = new Router();

const { comments, articles } = require('./mock');

/**
 * Helper: list of articles with comments array
 */
const getArticlesWithComments = () =>
    articles.map(article =>
        assign({}, article, {
            comments: comments.filter(comment => comment.articleId === article.id)
                              .map(comment => comment.id)
        })
    );

/**
 * Get All articles
 */
router.get('/article', (req, res) => {
    const articles =
        getArticlesWithComments()
            .map(article => {
                const articleTitle = assign({}, article);
                delete articleTitle.text;
                return articleTitle;
            }
    );

    let { limit, offset } = req.query;

    limit = Number(limit) || articles.length;
    offset = Number(offset) || 0;

    res.json(articles.slice(offset, limit + offset));
});

/**
 * Get article by id
 */
router.get('/article/:id', (req, res) => {
    const articleId = Number(req.params.id);

    const articleText =
        getArticlesWithComments()
            .filter(article => article.id === articleId)[0];

    if (articleText)
        res.json(articleText);
    else
        res.status(404).json({ error: 'not found' });
});

/**
 * Create article with text and user
 */
router.post('/article', (req, res) => {
    const { text, user } = req.body;

    const article = {
        id:        articles.length + 1,
        timeStamp: new Date(),
        text,
        user
    };

    articles.push(article);

    res.json(article);
});

/**
 * Get All Comments
 */
router.get('/comment', (req, res) => {
    let { limit, offset } = req.query;

    limit = Number(limit) || comments.length;
    offset = Number(offset) || 0;

    res.json({
        total:   comments.length,
        records: comments.slice(offset, limit + offset)
    });
});

/**
 * Get comments for the article
 */
router.get('/comment/:articleId', (req, res) => {
    const articleId = Number(req.params.articleId);

    res.json(comments.filter(comment => comment.articleId === articleId));
});

/**
 * Create new comment for the article
 */
router.post('/comment', (req, res) => {
    const { text, user, articleId } = req.body;

    const comment = {
        id:        comments.length + 1,
        timeStamp: new Date(),
        text,
        user,
        articleId
    };

    comments.push(comment);

    res.json(comment);
});

module.exports = router;
