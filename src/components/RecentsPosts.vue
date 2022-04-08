<template>
  <div>
    <div
      class="mx-auto overflow-hidden rounded-lg mb-4 shadow-lg bg-light-navy"
      v-for="post in $static.posts.edges"
      :key="post.id"
    >
      <div class="px-4 py-3">
        <h1 class="text-lg font-semibold text-lightest-slate">
          <g-link :to="post.node.path">
            {{ post.node.title }}
          </g-link>
        </h1>
        <p class="mt-1 text-sm text-gray-200">{{ post.node.summary }}</p>
        <a :href="post.node.path" class="text-indigo-500">Read more.</a>
      </div>

<!--       <img class="object-cover w-full h-48 mt-2" :src="post.node.image" /> -->
    </div>
  </div>
</template>

<static-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC,limit:3, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        path
        date (format: "MMMM D, Y")
        summary
        image
      }
    }
  }
}
</static-query>
