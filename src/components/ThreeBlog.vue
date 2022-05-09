<template>
  <div id="blog" class="px-2 py-24">
    <div
      class="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12"
    >
      <div>
        <p
          class="inline-block px-3 py-0.5 mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-cygreen"
        >
          Small Digital Garden
        </p>
      </div>
      <h2
        class="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-slate sm:text-4xl md:mx-auto"
      >
        Recent Writings
      </h2>
      <hr class="line md:w-1/2 md:mx-auto mt-3 mb-4" />
      <p class="text-base md:text-lg text-lightest-slate antialiased">
        These are the latest 3 writings of mine. I do post a lot about my
        open-source work.
      </p>
    </div>

    <section class="text-gray-400 body-font">
      <div class="container py-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div
            class="p-4 md:w-1/3"
            v-for="post in $static.posts.edges"
            :key="post.id"
          >
            <div
              class="bg-light-navy h-full border-2 border-gray-800 rounded-lg overflow-hidden"
            >
              <g-image
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                :src="post.node.image"
                width="720px"
                height="400px"
                alt="blog"
              />
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-white mb-3">
                  <g-link :to="post.node.path">
                    {{ post.node.title }}
                  </g-link>
                </h1>
                <p class="leading-relaxed">{{ post.node.summary }}</p>
                <a
                  class="text-indigo-400 inline-flex items-center my-2"
                  :href="post.node.path"
                >
                  Read More.
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    return {};
  },
};
</script>
