const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
const sortObjectByValue = (obj) => {
  let sortable = [];
  for (let item in obj) sortable.push([item, obj[item]]);
  sortable.sort((a, b) => b[1] - a[1]);
  return sortable;
};

const getSortedCategoriesByCount = (categories) => {
  const cntPerCategory = {};

  categories.forEach((category) => {
    cntPerCategory[category] = cntPerCategory[category] ? cntPerCategory[category] + 1 : 1;
  });

  return sortObjectByValue(cntPerCategory).map(([category]) => category);
};

const createBlogPages = ({ createPage, results }) => {
  const blogPostTemplate = require.resolve(`./src/templates/blog-template.js`);
  results.data.allMarkdownRemark.edges.forEach(({ node, next, previous }) => {
    createPage({
      path: node.fields.slug,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        slug: node.fields.slug,
        nextSlug: next?.fields.slug ?? '',
        prevSlug: previous?.fields.slug ?? '',
      },
    });
  });
};

const createPostsPages = ({ createPage, results }) => {
  const categoryTemplate = require.resolve(`./src/templates/category-template.js`);

  let categories = [];

  results.data.allMarkdownRemark.edges.forEach(({ node }) => {
    categories = categories.concat(node.frontmatter.categories.split(' '));
  });

  const sortedCategories = ['All', ...getSortedCategoriesByCount(categories)];

  createPage({
    path: `/posts`,
    component: categoryTemplate,
    context: {
      currentCategory: 'All',
      categories: sortedCategories,
      edges: results.data.allMarkdownRemark.edges,
    },
  });

  categories.forEach((category) => {
    createPage({
      path: `/posts/${category}`,
      component: categoryTemplate,
      context: {
        currentCategory: category,
        categories: sortedCategories,
        edges: results.data.allMarkdownRemark.edges.filter(({ node }) =>
          node.frontmatter.categories.includes(category),
        ),
      },
    });
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const results = await graphql(`
    {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            id
            excerpt(pruneLength: 350, truncate: true)
            fields {
              slug
            }
            frontmatter {
              categories
              title
              date(formatString: "MMMM DD, YYYY")
            }
          }
          next {
            fields {
              slug
            }
          }
          previous {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (results.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  createBlogPages({ createPage, results });
  createPostsPages({ createPage, results });
};
