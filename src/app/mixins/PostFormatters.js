import { DateTime } from 'luxon';

export default {
  methods: {
    formatPosts(posts) {
      let formatted = [];

      posts.forEach(post => {
        formatted.push(this.formatTruncatedPost(post));
      });

      return formatted;
    },

    formatTruncatedPost(post) {
      return {
        id: post.id,
        title: this.truncateText(post.title.rendered, 50),
        content: this.truncateText(
          this.formatRenderedContent(post.excerpt.rendered),
          50,
        ),
        link: this.formatUrl(post.link),
        date_updated: this.formatDate(post.modified),
        date_created: this.formatDate(post.date),
      };
    },

    formatPost(post) {
      return {
        id: post.id,
        title: post.title.rendered,
        content: post.content.rendered,
        link: this.formatUrl(post.link),
        date_updated: this.formatDate(post.modified),
        date_created: this.formatDate(post.date),
      };
    },

    formatRenderedContent(content) {
      const tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = content;
      return tmpDiv.textContent || tmpDiv.innerText || '';
    },

    formatDate(date) {
      return date ? DateTime.fromISO(date).toFormat('FF') : null;
    },

    formatUrl(url) {
      return url.startsWith('http') ? url : `https://${url}`;
    },

    truncateText(text, max) {
      const truncated =
        text && text.length > max
          ? text.slice(0, max).split(' ').slice(0, -1).join(' ')
          : text;

      return truncated + '...';
    },
  },
};
