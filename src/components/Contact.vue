<template>
  <div id="getintouch">
    <section class="text-gray-400 body-font relative">
      <div class="container px-5 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white"
          >
            Get in Touch With Me
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Ping me here and I will reply as soon as I see your email. My inbox
            is open to all, whether you have a question or just wanna say hi!
            Just ping me. Feel free to ping me about job positions.
          </p>
        </div>
        <div class="flex items-center justify-center" v-if="isLoading">
          <div class="loader"></div>
        </div>
        <p v-else class="smallText text-center my-2">{{ error }}</p>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-400"
                  >Name</label
                >
                <input
                  type="text"
                  v-model="user_name"
                  id="name"
                  name="name"
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-400"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="email"
                  id="email"
                  name="email"
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-400"
                  >Message</label
                >
                <textarea
                  id="message"
                  v-model="message"
                  name="message"
                  class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button
                @click="sendEmail"
                class="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Shoot.
              </button>
            </div>

            <g-image src="@/assets/couch.png" class="mx-5 mt-4 md:mx-12 md:mt-10" alt="Chilling Software developer" />
            
            <div
              class="p-2 w-full pt-8 mt-8 border-t border-gray-600 text-center"
            >

              <center>
                <div class="footerCopyright">
                  <p>
                    Inspired By
                    <span
                      ><a
                        href="https://github.com/bchiang7/v4"
                        title="Profile Link of Brittany Chiang"
                        >Brittany Chiang</a
                      ></span
                    ><br />Re-Developed with Vue js & Gridsome by
                    <span
                      ><a
                        href="https://github.com/sahilpatel09"
                        title="Github Profile of Sahil Patel"
                        >Sahil Patel</a
                      ></span
                    >
                  </p>
                </div>
              </center>
              <span class="inline-flex my-2">
                <a class="text-gray-500">
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
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                    ></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path
                      d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                    ></path>
                  </svg>
                </a>
                <a class="ml-4 text-gray-500">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                    ></path>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Contact",

  data() {
    return {
      error: "",
      isLoading: false,
      user_name: "",
      message: "",
      email: "",
      s34lkdjfla3jlfdskaj: "c2VydmljZV9nZmFzN3p4",
      tertlfsdl45lkdfgal3: "dGVtcGxhdGVfZTdrMWJ2ag==",
      jenteb342sdfklaj3434l3: "dXNlcl9hN0NlQnVlaXZjWmw3SXR6a0x2OTk=",
    };
  },
  methods: {
    sendEmail() {
      this.isLoading = true;

      emailjs
        .send(
          atob(this.s34lkdjfla3jlfdskaj),
          atob(this.tertlfsdl45lkdfgal3),
          { email: this.email, name: this.user_name, message: this.message },
          atob(this.jenteb342sdfklaj3434l3)
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.isLoading = false;
            this.error = "Message sent successfully.";
          },
          (error) => {
            console.log("FAILED...", error);
            this.error = error;
          }
        );
    },
  },
};
</script>

<style lang="css" scoped>
.footerCopyright {
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  font-size: 12px;
  color: #8892b0;
  line-height: 16px;
}

.footerCopyright span a {
  text-decoration: none;
  color: cyan;
}

.loader {
  border: 5px solid slate; /* Light grey */
  border-top: 9px solid cyan; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px 10px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
