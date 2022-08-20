<template>
  <Layout>
    <ClientOnly>
      <div>
        <Bar />
        <div>
          <Hero />
          <About />
<!--           <Experience /> -->
          <Featured />
          <Projects />
          <BlogSection />
          <Contact />
        </div>
      </div>
    </ClientOnly>
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
import Experience from "../components/Experience.vue";
import Contact from "../components/Contact.vue";

export default {
  metaInfo: {
    title: "Sahil Patel, Full Stack Web Developer",
    description:
      "Welcome to my small website. I do share my work and learning here.",
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
    Experience
  },
};
</script>

<style>
:root {
  --navy: #0a192f;
  --light-navy: #112240;
  --lightest-navy: #233554;
  --slate: #8892b0;
  --light-slate: #a8b2d1;
  --lightest-slate: #ccd6f6;
  --white: #e6f1ff;
  --green: #64ffda;
}

.navy {
  color: ;
}

html {
  scroll-behavior: smooth;
}
.fixedBody {
  margin: 0;
  height: 100%;
  overflow: hidden;
  position: fixed;
}
</style>
