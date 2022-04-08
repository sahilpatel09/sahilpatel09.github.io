<template>
  <div>
    <BlogMenu />
    <div class="row">
      <div class="col-md-12">
        <center>
          <!-- <img :src="$page.post.image" class="postImage" />   -->
          <h1 class="postTitle text-white">{{ $page.post.title }}</h1>
        </center>
        <hr class="line" />
        <div>
          <span class="metahead">Tags:</span>
        </div>
        <p class="metadata">
          Posted on
          <span class="metahead text-white">{{ $page.post.title }}</span>
        </p>
        <p class="metadata">
          Posted on <span class="metahead">{{ $page.post.date }}</span>
        </p>

        <div
          class="markdown-body mb-8"
          id="article-area"
          v-html="$page.post.content"
        />
      </div>
    </div>
  </div>
</template>

<page-query>
query Project ($path: String!) {
  post: project (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
  }
}
</page-query>

<script>
import BlogMenu from "~/components/BlogBar.vue";

export default {
  components: {
    BlogMenu,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>
