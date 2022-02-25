<template>
  <div class="col aContainer" id="about">
    <h2 class="title"><span class="numerals">01. </span>About Me</h2>
    <div class="line"></div>
    <div class="row">
      <div class="col-md-8 textContent">
        Hello! This is Sahil, from Ahmedabad. I am a web developer and a poet.
        <br />
        <br />

        I am a creative, time punctual, dedicated, goal-oriented individual with
        decent moral Values and Ethicates along with a high-energy level, honed
        communication skills, strong organizational skills, and meticulous
        attention to detail.
        <br />
        <br />
        I have a double diploma, in Software Engineering and Software Testing.
        It gives me strength knowing SDLCs in developement as well as different
        methodologies in testing like Agile. I had started my career being a
        WordPress developer doing Digital Marketing along side. I have also done
        many small projects in Python as well. At the moment I am practicing my
        Vue JS skills and learning API development with Node. Now I am looking
        better opportunities in Front-end development.
        <br />
        <br />
        Recently I have been doing a lot of open source contributions on Github.
        Most of my work is in WordPress sites, so building better portfolio on
        Github.
        <br />
        <br />
        I like to read books and also write poetry on Medium.
      </div>
      <div class="col-md-4">
        <div class="image">
          <img src="https://avatars.githubusercontent.com/u/33144146?v=4" />
        </div>
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

<style lang="css" scoped>
.numerals {
  color: cyan;
}
.aContainer {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);
}
.line {
  width: 30%;
  height: 2px;
  background: cyan;
}
.title {
  color: #e6f1ff;
  font-size: 30px;
}

.image {
  position: relative;
  width: 100%;
  text-align: center;
  margin: auto;
  display: block;
}

.image img {
  width: 100%;
  vertical-align: middle;
}

.image:after {
  content: "\A";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00ffff50;
  opacity: 50;
  transition: all 1s;
  -webkit-transition: all 1s;
}
.image:hover:after {
  opacity: 0%;
}


.textContent {
  max-width: 700px;
  padding: 20px;
  padding-top: 40px;
  text-align: justify;
  color: #8892b0;
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-size: 16px;
}
.imageArea {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 48rem) {
  .aContainer {
    align-items: start;
    justify-content: flex-start;
    padding: 50px 10px;
  }

  .row {
    align-items: center;
    justify-content: center;
  }
}
</style>
