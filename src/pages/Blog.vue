<template>
  <div class="container">
    <BlogMenu />

    <div class="row scrollmenu">
      <a href="#home">Vue.js</a>
      <a href="#news">Node.js</a>
      <a href="#contact">Netlify</a>
      <a href="#about">WordPress</a>
      <a href="#support">Support</a>
    </div>



    <div class="row">
      <div class="col-12 tron">
        <h1 class="blogTitle">Writing</h1>
        <p class="blogDescription">
          So far I’ve written 8 longform tutorials & articles. For more compact
          content visit my Digital Garden. RSS.
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4" v-for="post in $page.posts.edges" :key="post.id">
        <div class="tile">
          <img :src="post.node.image" class="img-fluid" />

          <div class="tileText">
            <g-link :to="post.node.path" rel="bookmark" class="tileTextStyle">{{
              post.node.title
            }}</g-link>
          </div>

          <div class="tiledesc">
            {{ post.node.summary }}
          </div>
        </div>
      </div>
    </div>





    <center>
      <Pager :info="$page.posts.pageInfo" class="paginations" />
    </center>
  </div>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 20, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        image
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";
import BlogMenu from "~/components/BlogBar.vue";
export default {
  components: {
    Pager,
    BlogMenu,
  },
  metaInfo: {
    title: "View my blog posts",
  },
};
</script>

<style scoped>
.img-fluid {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 180px;
  background-size: cover;
}

div.scrollmenu {
  background-color: var(--navy);
  overflow: auto;
  white-space: nowrap;
}

div.scrollmenu a {
  display: inline-block;
  color: var(--light-slate);
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

div.scrollmenu a:hover {
  text-decoration: underline;
}

::-webkit-scrollbar {
  height: 4px;
  width: 4px;
  border: 1px solid var(--navy);
  border-radius: 10px;
  background: var(--light-slate);
}
::-webkit-scrollbar-thumb:horizontal {
  background: var(--lightest-navy);
  border-radius: 10px;
  border: 1px solid lightblue;
}

.tron {
  padding-top: 100px;
  color: var(--lightest-slate);
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
}
.blogTitle {
  font-size: 3.052rem;
}
.blogDescription {
  font-size: 20px;
  max-width: 50ch;
  margin-top: -20px;
  text-align: center;
}
.tile {
  background: var(--light-navy);
  margin: 5px 5px;
  padding-bottom: 20px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  border-radius: 7px;
}

.tileText {
  color: var(--lightest-slate);
  margin-top: 10px;
  font-size: 18px;
  text-style: none;
  font-weight: bolder;
  padding: 0px 20px;
  text-decoration: none;
}

.tileTextStyle {
  color: cyan;
  color: var(--lightest-slate);
  text-decoration: none;
}

.tiledesc {
  color: var(--light-slate);
  font-size: 14px;
  margin-top: 2px;
  padding: 0px 20px;
}

.paginations {
  text-align: center;
  margin: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  max-width: 300px;
}
.paginations a {
  color: white;
}
</style>
