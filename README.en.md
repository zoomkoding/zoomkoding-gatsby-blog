<h1 align="center">
  Zoomkoding Gatsby Blog
</h1>

<p align="center">
  <a href="https://github.com/zoomkoding/zoomkoding-gatsby-blog/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-0BSD-blue.svg" alt="Zoomkoding Gatsby Blog is released under the 0BSD license." />
  </a>
  <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
  <img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat" alt="contributions welcome" />
</p>

**Demo Websites**: [**English**](https://zoomkoding.netlify.app) | [**Korean**](https://www.zoomkoding.com)

## 👋 Introduction

This is a blog theme created for developers who want to create a pretty, clean and search engine friendly development blog.🏅

> PRs and issues are all welcome! 👍

## ✨ Features

- 😛 Biography using Memoji and rotating-text
- 💅 Code Highlight
- 🌘 Dark MOde
- 🔍 Table of Contents
- 👀 View Counter
- 💬 Comments(Utterances)
- ⚙️ Easy to configure
- 🛠 Enhanced SEO & `sitemap.xml`, `robots.txt`
- 📈 Google Analytics
- 🧢 Emoji

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the zoomkoding starter
    gatsby new my-default-starter https://github.com/zoomkoding/zoomkoding-gatsby-blog
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-default-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

## ⚙️ Next Steps

You can customize your blog by modifying contents of `gatsby-meta-config.js`

### 1. default

Provide your blog's title, description, author, siteUrl, ogImage, social Information(`title` is used as the blog name in the upper left corner.)

```js
module.exports = {
    title: '', // zoomkoding.dev
    description: '', // zoomkoding's dev log
    author: '', // zoomkoding

    siteUrl: '', // https://zoomkoding-gatsby-blog.netlify.com
    ogImage: '', // open graph image (image displayed when the link is shared)
    social: {
        github: '', // https://github.com/zoomKoding
        linkedIn: '', // https://www.linkedin.com/in/jinhyeok-jeong-800871192
        email: '', // zoomkoding@gmail.com
    },
    ...
}
```

### 2. bio

**bio(Biography** is a section introducing the blog author.  
For `description`, you can introduce yourself by adding multiple phrases. If you want to **add your Memoji**, replace the video file named `src/assets/author.mp4`.

```js
module.exports = {
    ...

    bio: {
        language: 'en', // en, ko
        name: '', // author name
        description: [''], // phases to describe who you are
    },
    ...
}
```

### 3. comments

If you want to have comments for your blog postings, please provide your github repository which is connected to `utterances`.

> 🦄 If you want to know how to set up utterances for your repository, read [https://utteranc.es/](https://utteranc.es/)

```js
module.exports = {
    ...

    comments: {
        utterances: {
            repo: '' // zoomkoding/zoomkoding-gatsby-blog
        },
    },
    ...
}
```

## 👤 About Page

You can also generate **About Page** with `gatsby-meta-config.js`. In the file, you can find timestamps and projects under about. If you provide information in the correct format, your About Page will be generated.

### 1. timestamps

If you provide each timestamp information in an array as shown below, it will be displayed in the timestamps section according to the order you entered.

> If there is no such information in links, you can omit it.

```js
module.exports = {
    ...

    about: {
        timestamps: [
            {
                date: '', // date
                activity: '', // activity
                links: { // you can omit
                    post: '', // post link
                    googlePlay: '', // googlePlay link
                    appStore: '' // appStore link
                    github: '' // github repostory link
                },
            }
            ...
        ],
        ...
    },
    ...
}
```

### 2. projects

Similarly, if you provide information for each project in an array, it will be displayed in the projects section in the order you entered.

```js
module.exports = {
    ...

    about: {
        ...

        projects: [
            {
                title: '', // project title,
                description: '', // description
                techStack: ['flutter', 'nodejs'], //  tech stack
                thumbnailUrl: '', // thumbnail Url
                links: { // you can omit
                    post: '', // post link
                    googlePlay: '', // googlePlay link
                    appStore: '' // appStore link
                    github: '' // github repostory link
                },
            },
            ...
        ],
        ...
    },
    ...
}
```

<br/>

If you entered the contents without any problem, you can check that your own blog was born.🎉

> Please re-run through `npm start` to check the changes in the running blog!

## ✍️ How to write posts

To write a blog post in earnest, create a directory under `/content` and write a posting using markdown in `index.md`.

> The name of the folder is used to create the path.

### ℹ️ Post's Metadata

At the top of the index.md file, you need to provide emoji, title, date, author, tags, categories information as shown below.

> Emoji will be shown at the top of the post, and the categories can be divided by spaces and multiple entries can be entered.

```
---
emoji: 🧢
title: Getting Started
date: '2021-03-22 23:00:00'
author: 줌코딩
tags: tutorial
categories: tutorial
---
```

### 🖼 Image Path

If you want to attach an image to a post, add an image file to the same directory and use it as follows.

```
![image](./[image.png])
```

### 🔍 Table of Contents

If you want the table of contents to be displayed on the right side of the article, add the following contents to the bottom of the `index.md` file, and the table of contents will be created automatically.

    ```toc
    ```
