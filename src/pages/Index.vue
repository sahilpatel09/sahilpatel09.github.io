<template>
  <Layout>
<!--     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <Work />
    <Bar />
    <div class="areaContainer">
      
      <Hero />
      <About />
      <Featured />
      <Projects />
      <BlogSection />
      <Contact />
    </div>

  </Layout>
</template>

<script>
import Work from '../components/Maintenance.vue'
import Bar from '../components/Bar.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Featured from '../components/Featured.vue'
import Projects from '../components/Projects.vue'
import BlogSection from '../components/ThreeBlog.vue'

import Contact from '../components/Contact.vue'

export default {
  metaInfo: {
    title: 'Sahil Patel, Frontend Developer',
    description: "My name is Sahil and I do most of my work with Vue js."
  },
  components:{
    Work, Bar, Hero, About,Featured, Projects, BlogSection, Contact
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.areaContainer{

}


</style>
