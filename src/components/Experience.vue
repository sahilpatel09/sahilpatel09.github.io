<template>
  <div id="about">
    <div
      class="py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="mx-auto sm:text-center lg:max-w-4xl">
        <div
          class="max-w-2xl mb-10 md:mx-auto sm:text-center lg:max-w-4xl md:mb-12"
        >
          <div>
            <p
              class="inline-block px-3 py-0.5 mb-4 text-xs font-semibold tracking-wider text-teal-300 uppercase rounded-full bg-cygreen"
            >
              As a Dev
            </p>
          </div>
          <h2
            class="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-slate sm:text-4xl md:mx-auto"
          >
            Experience
          </h2>
          <hr class="line md:w-1/2 md:mx-auto mt-3 mb-4" />
          <p class="text-base md:text-lg text-lightest-slate antialiased">
            My recent work history being a software developer. I have worked as a Full-stack developer and also as a freelancer for many companies.
          </p>
        </div>




<!--         <div class="mb-4 lg:mb-6 flex items-center justify-center">
          <ul class="flex flex-wrap border-b border-gray-700">

 <li class="mr-2" v-for="x in expData" :key="x">
        <a href="#" class="inline-block hover:text-gray-400 bg-light-navy hover:text-white transition duration-200 rounded-t-lg py-4 px-4 text-sm font-medium text-center"
        :class="{ 'text-slate': true  }">{{ x.comp }}</a>
    </li>


</ul>
        </div> -->
      </div>
    </div>

    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="grid gap-8 row-gap-5 md:grid-cols-2">

        <div class="relative p-px overflow-hidden transition duration-300 transform shadow-2xl hover:scale-105 group hover:shadow-xl">
          
          <div class="relative flex flex-col h-full p-5 bg-light-navy rounded-sm lg:items-center lg:flex-row">
            <div class="mb-6 mr-6 lg:mb-0">
              <div class="flex items-center justify-center w-20 h-20 rounded-full bg-navy lg:w-32 lg:h-32">
                <img src="@/assets/ipratama.png" class="rounded-full" alt="">
              </div>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <div>
                <h6 class="mb-2 font-semibold text-xl antialiased leading-5 text-lightest-slate">
                  Full-stack Engineer <span class="text-cygreen">@ iPratama</span>
                </h6>
                <p class="mb-2 text-sm text-slate">
                  Cheese on toast airedale the big cheese. Danish fontina cheesy grin airedale danish fontina taleggio the big cheese macaroni cheese port-salut.
                </p>
              </div>
              <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
            </div>
          </div>
        </div>
        <div class="relative p-px overflow-hidden transition duration-300 transform shadow-2xl hover:scale-105 group hover:shadow-xl">
          <div class="relative flex flex-col h-full p-5 bg-light-navy rounded-sm lg:items-center lg:flex-row">
            <div class="mb-6 mr-6 lg:mb-0">
              <div class="flex items-center justify-center w-20 h-20 rounded-full bg-navy lg:w-32 lg:h-32">
                <svg class="w-16 h-16 text-deep-purple-accent-400 lg:w-20 lg:h-20" stroke="currentColor" viewBox="0 0 52 52">
                  <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                </svg>
              </div>
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <div>
                <h6 class="mb-2 font-semibold leading-5">
                  Disrupt inspire and think tank, social
                </h6>
                <p class="mb-2 text-sm text-gray-900">
                  A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear. We never had the chance to.
                </p>
              </div>
              <a href="/" aria-label="" class="inline-flex items-center text-sm font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>  
</template>

<script>
export default {
  name: "About",

  data() {
    return {
      expData: {
        0:{
          comp: 'iPratama',
          startDate:'Feb, 2021',
          endDate:'Present',
          data:"Worked as a software Developer"
        },
        1:{
          comp: "Harry's Auto Service",
          startDate:'Aug 2017',
          endDate:'Present',
          data:"Web master"
        }
      }
    };
  },
};
</script>

<style lang="css">
.line {
  border: 1px solid hsla(0, 0%, 100%, 0.16);
}
</style>
