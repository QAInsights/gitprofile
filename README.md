# naveenkumar.pro

This is the forked version of <https://github.com/arifszn/gitprofile>. I have added some more features to it.

- [x] Added Wordpress integration for the recent blog posts.
- [x] Added [Blog](src\components\avatar-card\index.jsx) button to the profile

## How to add Wordpress integration?

1. Fork this repository
2. Clone the forked repository
3. Edit the `gitprofile.config.json` file

```json
  blog: {
    source: 'wordpress', // medium | dev
    username: 'qainsights', // to hide blog section, keep it empty
    limit: 4, // How many posts to display. Max is 10.
    feed: 'https://api.rss2json.com/v1/api.json?rss_url=https://qainsights.com/feed',
  },
```

4. My feed doesn't have thumbnail, so I hardcoded it. In case, your blog has it, then you can use the below code in [index.jsx](src\components\blog\index.jsx).

```js
  const WPPost = (post) => {
  return {
    title: post.title.trim(),
    description: textEllipsis(removeHTMLTags(post.description.trim())),
    thumbnail:post.thumbnail,
    link: post.link,
    categories: post.categories,
    publishedAt: new Date(post.pubDate),
  };
};
```
5. Then, run `npm run dev` to test it locally.
6. Once you are happy with the changes, then commit and push it to your repository.

Then you can deploy it to GitHub pages or Vercel or Netlify by following the instructions in the [original repository](https://github.com/arifszn/gitprofile).
