<template>
  <div id="projects">
    <section class="text-gray-400 body-font">
      <div class="container px-2 py-24 mx-auto">
        <div
          class="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12"
        >
          <div>
            <p
              class="inline-block px-3 py-0.5 mb-4 text-xs font-semibold tracking-wider text-black uppercase rounded-full bg-cygreen"
            >
              Real World Work
            </p>
          </div>
          <h2
            class="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-slate sm:text-4xl md:mx-auto"
          >
            Noteworthy Projects
          </h2>
          <hr class="line md:w-1/2 md:mx-auto mt-3 mb-4" />
          <p
            class="text-base md:text-lg text-lightest-slate antialiased"
          >
            I work on various project, here is the list of all the projects that
            I have worked with.
          </p>
        </div>

        <div class="flex flex-wrap -m-4">
          <div
            class="p-2 lg:w-1/3"
            v-for="post in $static.posts.edges"
            :key="post.id"
          >
            <div
              class="h-full bg-lightest-navy bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative"
            >
              <h2
                class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1"
              >
                {{ post.node.category }}
              </h2>

              <h1
                class="title-font sm:text-2xl text-xl font-medium text-white mb-1"
              >
                <g-link :to="post.node.path">
                  {{ post.node.title }}
                </g-link>
              </h1>
              <div
                class="flex flex-wrap items-center justify-center gap-2 mb-3 text-lightest-slate"
              >
                <p v-for="tag in post.node.tags" :key="tag.id">
                  {{ tag.title }}
                </p>
              </div>
              <hr class="line w-1/2 mx-auto mt-3 mb-1" />
              <p class="leading-relaxed mb-3">{{ post.node.summary }}</p>

              <a
                class="text-indigo-400 inline-flex items-center"
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

              <div
                class="text-center mb-3 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 gap-2"
              >
                <g-link :to="post.node.gitlink">
                  <img src="/github.svg" alt="Github link icon" />
                </g-link>

                <g-link :to="post.node.liveurl">
                  <img src="/link.svg" alt="Live URL link icon" />
                </g-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<static-query>
query Projects ($page: Int) {
  posts: allProject (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        category
        title
        summary
        date (format: "MMMM D, Y")
        path
        gitlink
        liveurl
        tags {
          title
          path
        }
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
