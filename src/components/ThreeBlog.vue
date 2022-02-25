<template>
  <div id="blog">
    <div class="title">
      <h2 class="mainTitle">My Recent Writings</h2>
      <p class="smallText">
        Checkout my daily thoughts and views on projects building.
      </p>
    </div>

    <!-- 			
			  <article v-for="post in $page.posts.edges" :key="post.id" >
			    <h2><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
			    <p>Posted on <time :datetime="post.node.date">{{ post.node.date }}</time></p>

			    <p>{{ post.node.summary }}</p>
			  </article>

 -->
    <div class="row">
      <div class="col-md-4" v-for="post in $static.posts.edges" :key="post.id">
        <g-link :to="post.node.path">
        <div class="tile">
          <div class="image">
            <img :src="post.node.image" class="img-fluid" />
          </div>

          <div class="tileText">
            <g-link :to="post.node.path" rel="bookmark" class="tileTextStyle">{{
              post.node.title
            }}</g-link>
          </div>

          <div class="tiledesc">
            {{ post.node.summary }}
          </div>
        </div>
      </g-link>
      </div>
    </div>
  </div>
</template>

<static-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC,limit:3, perPage: 10, page: $page) @paginate {
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
</static-query>

<script>
export default {
  name: "Projects",

  data() {
    return {
      hello: "dfs",
    };
  },
};
</script>

<style lang="css" scoped>
#blog {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);
}
.img-fluid {
  display: block;
  max-width: 100%;
  width: 100%;
  height: 180px;
  background-size: cover;
}

.mainTitle {
  color: var(--lightest-slate);
  font-size: var(--section-heading-font-size);
  font-family: var(--font-sans);
}

.smallText {
  color: cyan;
  margin-top: -25px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
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

.image {
  position: relative;
  width: 100%;
  text-align: center;
  margin: auto;
  display: block;
}

.image img {
  width: 100%;
  vertical-align: middle;
}

.image:after {
  content: "\A";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00ffff50;
  opacity: 100%;
  transition: all 1s;
  -webkit-transition: all 1s;
}
.image:hover:after {
  opacity: 0%;
}


</style>
