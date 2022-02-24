<template>
  <Layout>
    <div class="container">
      <Bar />
      <div class="container">
        <Hero />
        <About />
        <Featured />
        <Projects />
        <BlogSection />
        <Contact />  
      </div>
    </div>
  </Layout>
</template>

<script>
import Work from "../components/Maintenance.vue";
import Bar from "../components/Bar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Featured from "../components/Featured.vue";
import Projects from "../components/Projects.vue";
import BlogSection from "../components/ThreeBlog.vue";

import Contact from "../components/Contact.vue";

export default {
  metaInfo: {
    title: "Sahil Patel, Frontend Developer",
    description: "My name is Sahil and I do most of my work with Vue js.",
  },
  components: {
    Work,
    Bar,
    Hero,
    About,
    Featured,
    Projects,
    BlogSection,
    Contact,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
.fixedBody {margin: 0; height: 100%; overflow: hidden; position: fixed;}
</style>
