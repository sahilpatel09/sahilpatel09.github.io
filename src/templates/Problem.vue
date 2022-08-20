

<template>
  <div class="container mx-auto">

    <BlogMenu/>


    <div class="px-2 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-3xl md:px-24 lg:px-8 lg:pt-20">
  <div class="max-w-3xl mb-5 md:mx-auto text-center lg:max-w-4xl">
    <div>
      <p class="inline-block mb-2 text-xl font-semibold tracking-wider text-gray-400">
        {{ $page.problem.date }} |           <span class="text-slate ">{{ $page.problem.category }}</span>
          <!-- <g-link
            class="text-lightest-slate"
            v-for="tag in $page.problem.tags"
            :to="tag.path"
            :key="tag.id"
          >
            #{{ tag.title }}
          </g-link> -->

      </p>
    </div>
    <h2 class="max-w-full font-sans text-4xl font-bold leading-none tracking-tight sm:text-6xl md:mx-auto text-slate text-lightest-slate text-center">
{{ $page.problem.title }}
    </h2>

<p class="text-base md:text-lg text-lightest-slate max-w-2xl py-2 mx-auto">
      {{ $page.problem.summary }}
    </p>
  </div>



  <img :src="$page.problem.img" class="postImage" />
</div>





<div class="flex md:flex-wrap flex-col gap-4 mx-auto flex-col-reverse md:flex-row md:flex-nowrap">

 

  <div class="w-full h-auto md:bg-light-navy shadow-lg pb-7">
    <img :src="$page.problem.image" class="w-full object-cover pb-5" />
      <div
              class="markdown-body mb-8 md:px-40 px-2 text-xl"
              id="article-area"
              v-html="$page.problem.content"
            />
      </div>

  </div>

    <div class="w-1/2 mx-auto my-4 text-white text-center bg-light-navy py-3">
                <img class="object-cover w-20 mx-auto rounded-full m-3" src="@/assets/small_me.jpg" alt="avatar">
            
            <div class="flex flex-col justify-center items-center px-3 py-3">


                <h1 class="mx-3 text-lg font-semibold bg-light-navy text-white">Sahil Patel</h1>
                <p class="text-center text-gray-400">Full Stack Developer, UI / UX Designer , and lifelong learner.</p>

            </div>
  </div>

  

  <Footer />
</div>
</template>


<page-query>
query Problem ($path: String!) {
  problem: problem (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    category
    summary
    gitlink
    liveurl
    tags {
      title
    }
  
  }
}
</page-query>

<script>
import BlogMenu from "~/components/BlogBar.vue";
import Footer from "~/components/Footer.vue";
export default {
  name: 'ProjectHJR',
  components: {
    BlogMenu, Footer
  },
  metaInfo() {
    return {
//      title: this.$page.post.title,
    };
  },
};
</script>
