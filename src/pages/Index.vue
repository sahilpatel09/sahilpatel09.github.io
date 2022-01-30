<template>
  <Layout>
<!--     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <Bar />
    <div class="areaContainer">
      <Hero />
      <About />
      <Featured />
      <Projects />
      <Contact />
    </div>








<!--     <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Sahil Patel.</h1>

    <p>
      Welcome to my website. I do front end development as well as some backend development like building APIs.
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          Hello there
        </div>

        <div class="col-md-6">
          Hello there
        </div>
      </div>
    </div> -->

  </Layout>
</template>

<script>
import Bar from '../components/Bar.vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Featured from '../components/Featured.vue'
import Projects from '../components/Projects.vue'
import Contact from '../components/Contact.vue'

export default {
  metaInfo: {
    title: 'Sahil Patel, Frontend Developer',
    description: "My name is Sahil and I do most of my work with Vue js."
  },
  components:{
    Bar, Hero, About,Featured, Projects, Contact
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
