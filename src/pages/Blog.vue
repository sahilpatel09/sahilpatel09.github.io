<template>
  <div class="container mx-auto">
    <BlogMenu />

    <div class="row scrollmenu">
      <a href="tag/Tailwindcss">Tailwindcss</a>
      <a href="tag/Design">Design</a>
      <a href="tag/Nuxt3">Nuxt3</a>

    </div>

    <div class="row">
      <div class="col-12 tron">
        <h1 class="blogTitle font-mono">Writing</h1>
        <p class="blogDescription text-center text-base md:text-2xl">
          So far I’ve written 6 longform tutorials & articles. For more compact
          content visit my Digital Garden. RSS.
        </p>
      </div>
    </div>

    <section class="text-gray-400 body-font mt-10">
      <div class="container md:px-5 py-5 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div
            class="p-4 md:w-1/3"
            v-for="post in $page.posts.edges"
            :key="post.id"
          >
            <div
              class="bg-light-navy h-full border-2 border-gray-800 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                :src="post.node.image"
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

    <!--       <div class="">
        <div class="flex">
            <a v-if="$page.posts.pageInfo.totalPages != $page.posts.pageInfo.currentPage" :href="$page.posts.pageInfo.currentPage-1" class="px-4 py-2 mx-1 text-gray-300 bg-light-navy rounded-md cursor-not-allowed hover:text-gray-500">
                <div class="flex items-center -mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>

                    <span class="mx-1">
                        previous
                    </span>
                </div>
            </a>

            <div v-for="index in $page.posts.pageInfo.totalPages" :key="index">
              
              <div v-if="index == 1">
                <a href="/blog" class="px-4 py-2 mx-2 text-gray-300 bg-lightest-navy transition duration-200 rounded-md sm:inline hover:bg-navy ">
                  {{ index }}
              </a>  
              </div>

              <div v-if="index > 1">
                <a :href='index' class="px-4 py-2 mx-2 text-gray-300 bg-lightest-navy transition duration-200 rounded-md sm:inline hover:bg-navy ">
                    {{ index }}
                </a>
              </div>


            </div>

            <a v-if="$page.posts.pageInfo.totalPages != $page.posts.pageInfo.currentPage" :href="$page.posts.pageInfo.currentPage+1" class="px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md dark:bg-gray-900 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
                <div class="flex items-center -mx-1">
                    <span class="mx-1">
                        Next
                    </span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </a>
        </div>
      </div>
            
        
      <div class="text-white">
        {{ $page.posts.pageInfo }}
      </div> -->
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
        tags {
          title
          path
        }
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
  computed:{
      seperateTags(){

      }
  }
};
</script>

<style scoped>
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
  max-width: 50ch;
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
