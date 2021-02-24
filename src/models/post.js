export default class Post {
  constructor(node) {
    const { id, html, excerpt, frontmatter } = node;
    const { slug, emoji, categories, title, author, date } = frontmatter;

    this.id = id;
    this.excerpt = excerpt;
    this.emoji = emoji;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.author = author;
    this.date = date;
    this.categories = categories.split(' ');
  }
}
