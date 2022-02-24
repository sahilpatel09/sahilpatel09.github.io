<template>
  <div class="col heroContainer">
    <p class="initialText">Hello My Name is</p>
    <h2 class="theName">Sahil Patel,</h2>
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
body {
  margin: 0;
  inset: 0;
}
.heart {
  color: red;
  font-size: 60px;
}
.navyBlue {
  color: #0a192f;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #303c55;
}
.heroContainer {
  padding-top:40px;
  padding-bottom:40px;

}

.initialText {
  color: cyan;
}
.theName {
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  color: #ccd6f6;
  font-size: 88px;
  padding: 0px;
  margin: 0;
  inset: 0;
}
.supportingText {
  color: #8892b0;
  font-size: 70px;
  line-height: 88px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  margin: 0px 0px 10px;
  padding: 0px;
}

.supportingDescription {
  color: #8892b0;
  max-width: 50rem;
}

.contactButton {
  margin-top: 50px;
  padding: 20px 30px;
  background: transparent;
  color: cyan;
  border: 1px solid cyan;
  border-radius: 7px;
}

.contactButton:hover {
  border: 1px solid #004c4c;
  transition: all 330ms ease;
}

@media (max-width: 48rem) {
  .initialText {
    text-align: start;
    text-indent: 0px;
  }

  .theName {
    font-size: 54px;
    font-weght: 600;
    font-style: normal;
    text-align: start;
    text-indent: 0px;
  }

  .supportingText {
    font-size: 54px;
    inset: 0;
    padding: 0;
    margin: 0;
    line-height: 60px;
    font-weght: 600;
    font-style: normal;
    text-align: start;
    text-indent: 0px;
  }
  .supportingDescription {
    color: #8892b0;
  }

  .heroContainer {
    align-items: start;
    justify-content: flex-start;
    
  }
}
</style>
