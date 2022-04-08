<template>
  <div>
    <!-- <p class="initialText">Hello My Name is</p>
    <h2 class="theName text-center">Sahil Patel,</h2>
    <h3 class="supportingText">
      & I <span class="heart">&hearts;</span>
      <span class="navyBlue"> Navy Blue.</span>
    </h3>
    <p class="supportingDescription">
      I love coding and traveling to new places. Apart from coding I love to
      meet new people who code and enjoy coding. I am a college graduate with a
      2 Diplomas in Advance Software Engineering and Software Testing.
    </p>
    <button class="contactButton">Get In Touch</button>
    <section class="text-gray-400 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Sahil Patel</h1>
      <p class="leading-relaxed mb-8">I love coding and traveling to new places. Apart from coding I love to meet new people who code and enjoy coding. I am a college graduate with a 2 Diplomas in Advance Software Engineering and Software Testing.

</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
        <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
      </div>
    </div>
  </div>
</section> -->

    <div
      class="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full"
    >
      <div
        class="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-24 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/3 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center"
      >
        <g-image
          src="@/assets/boy.png"
          class="object-cover object-right w-full h-auto lg:w-auto lg:h-full"
          alt="Sahil Patel | 3D Image"
        />
      </div>
      <div
        class="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl"
      >
        <div class="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
          <div class="max-w-xl mb-6">
            <div>
              <p
                class="inline-block mb-4 text-xs font-semibold tracking-wider text-cygreen uppercase rounded-full"
              >
                Hello My name is,
              </p>
            </div>
            <h2
              class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl sm:leading-none theName"
            >
              Sahil Patel & I <span class="heart">&hearts;</span>
              <span class="navyBlue"> Navy Blue.</span>
            </h2>
            <p class="text-base text-gray-400 md:text-lg my-2">
              I love coding and traveling to new places. Apart from coding I
              love to meet new people who code and enjoy coding. I am a college
              graduate with a 2 Diplomas in Advance Software Engineering and
              Software Testing.
            </p>
          </div>
          <form>
            <div class="flex items-center mt-4">
              <g-link
                to="/#getintouch"
                class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-600 focus:shadow-outline focus:outline-none"
              >
                Get in touch
              </g-link>
              <a
                href="mailto:smppatel99999@gmail.com"
                aria-label=""
                class="inline-flex items-center justify-center h-12 px-4 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-light-navy hover:bg-lightest-navy focus:shadow-outline focus:outline-none"
                >Email me.</a
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.heart {
  color: red;
  font-size: 60px;
}
</style>
