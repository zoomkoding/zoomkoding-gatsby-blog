export default class Post {
  constructor(edge) {
    const { id, html, excerpt, frontmatter } = edge.node;
    const { slug, categories, title, date } = frontmatter;

    this.id = id;
    this.excerpt = excerpt;
    this.html = html;
    this.slug = slug;
    this.title = title;
    this.date = date;
    this.categories = categories.split(' ');
  }
}
