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
              as a software developer
            </p>
          </div>
          <h2
            class="max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-slate sm:text-4xl md:mx-auto"
          >
            Let's Talk About Me
          </h2>
          <hr class="line md:w-1/2 md:mx-auto mt-3 mb-4" />
          <p class="text-base md:text-lg text-lightest-slate antialiased">
            Hello! This is Sahil, from Montreal. I am a web developer and a
            poet. I am a creative, time punctual, dedicated, goal-oriented
            individual with decent moral Values and Ethicates along with a
            high-energy level, honed communication skills, strong organizational
            skills, and meticulous attention to detail.
          </p>
        </div>
        <div class="mb-4 lg:mb-6 flex items-center justify-center">
          <g-image
            class="object-cover w-full h-56 max-w-2xl rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="@/assets/developer.png"
            alt="working-on-desk"
          />
        </div>
        <!-- <p class="max-w-4xl mb-4 text-base text-lightest-slate sm:mx-auto">
          I have a double diploma, in Software Engineering and Software Testing.
          It gives me strength knowing SDLCs in developement as well as
          different methodologies in testing like Agile. I had started my career
          being a WordPress developer doing Digital Marketing along side. I have
          also done many small projects in Python as well. At the moment I am
          practicing my Vue JS skills and learning API development with Node.
          Now I am looking better opportunities in Front-end development.
          Recently I have been doing a lot of open source contributions on
          Github. Most of my work is in WordPress sites, so building better
          portfolio on Github. I like to read books and also write poetry on
          Medium.
        </p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",

  data() {
    return {};
  },
};
</script>

<style lang="css">
.line {
  border: 1px solid hsla(0, 0%, 100%, 0.16);
}
</style>
