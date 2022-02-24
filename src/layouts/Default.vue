<template>
  <div class="">
    <slot />
  </div>
  <!--   <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>

    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;


  </div> -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: var(--font-sans);
  padding: 30px;
  margin: 0;
  /*  line-height: 1.5;*/
  background-color: #0a192f;
}

:root {

      --dark-navy: #020c1b;
      --navy: #0a192f;
      --light-navy: #112240;
      --lightest-navy: #233554;
      --navy-shadow: rgba(2,12,27,0.7);
      --dark-slate: #495670;
      --slate: #8892b0;
      --light-slate: #a8b2d1;
      --lightest-slate: #ccd6f6;
      --white: #e6f1ff;
      --green: #64ffda;
      --green-tint: rgba(100,255,218,0.1);
      --pink: #f57dff;
      --blue: #57cbff;
      --font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
      --font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
      --fz-xxl: 22px;
      --section-space: 50px;
      --section-heading-font-size: 32px;





}




</style>
