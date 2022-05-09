<template>
  <div>
    <div class="flex flex-col items-center justify-center mt-20">
      <g-image
        src="@/assets/couch.png"
        alt="Software-Developer"
        class="md:w-1/2 md:ml-32 ml-16"
      />

      <div class="py-2">
        <ul class="flex flex-row text-light-slate gap-6 antialiased text-lg">
          <li class="transition duration-400 hover:text-white">
            <g-link to="/#about">About</g-link>
          </li>
          <li class="transition duration-400 hover:text-white">
            <g-link to="/blog">Blog</g-link>
          </li>
          <li class="transition duration-400 hover:text-white">
            <g-link to="/">Portfolio</g-link>
          </li>
        </ul>
      </div>

      <span class="flex py-3">
        <a class="text-gray-400 hover:text-gray-200">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
            ></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400 hover:text-gray-200">
          <svg
            fill="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              style="stroke: none; fill-rule: evenodd; fill-opacity: 1"
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
        </a>
        <a class="ml-3 text-gray-400 hover:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            data-darkreader-inline-stroke=""
            style="--darkreader-inline-stroke: currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            ></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-400 hover:text-gray-200">
          <svg
            fill="currentColor"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="0"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path
              stroke="none"
              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
            ></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>

      <p
        class="text-lg text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4"
      >
        © {{ new Date().getFullYear() }}
        <a
          href="https:github.com/sahilpatel09"
          title="Sahil Patel | Github Profile"
          class="text-lightest-slate transition duration-200 hover:text-green-400"
        >
          Sahil Patel.
        </a>

        All rights reserved.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",

  data() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
