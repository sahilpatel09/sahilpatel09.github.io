<template>
  <div class="projects" id="projects">
    <div class="title">
      <h2 class="mainTitle">Noteworthy Projects</h2>
      <p class="smallText">View all the projects</p>
    </div>

    <div class="row">
      <div class="col-sm-4 col-md-4" v-for="pj in projects">
        <div class="tile">
          <div class="icons">
            <div class="folder">
              <img class="flex-start" src="/folder.svg" />
            </div>

            <div class="outbound_links">
              <a
                :href="pj.links.github"
                title="Github Link For Project"
                target="_blank"
              >
                <img class="flex-end" src="/github.svg" />
              </a>
              <a
                :href="pj.links.external"
                title="External Link | Live Project"
                target="_blank"
              >
                <img class="flex-end" src="/link.svg" />
              </a>
            </div>
          </div>

          <div class="tileText">
            {{ pj.title }}
          </div>
          <div class="tiledesc">
            {{ pj.description }}
          </div>
          <hr class="hline" />
          <div class="tilepills" v-for="pill in pj.pills">
            <p class="pill">{{ pill }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      hello: "dfs",
      projects: {
        0: {
          title: "Weather Forecast App",
          description:
            "A WeatherForecast app created with OpenWeatherMap API and Django framework. Check it out.",
          links: {
            github:
              "https://github.com/sahilpatel09/WeatherForecastOpenWeatherMap",
            external: "https://weatherforecast99.herokuapp.com/",
          },
          pills: ["Python", "Django"],
        },

        1: {
          title: "IP Tracker",
          description:
            "A small weekend project to get the information of IP address and its possible location.",
          links: {
            github: "https://github.com/sahilpatel09/ip-tracker",
            external: "https://brave-mirzakhani-8081ab.netlify.app/",
          },

          pills: ["Vue.js", "Netlify"],
        },

        2: {
          title: "Bing Wallpaper Viewer",
          description:
            "Bing API for wallpapers is fun. I have created this project to search, find and download the daily wallpapers.",
          links: {
            github:
              "https://github.com/sahilpatel09/Bing-Daily-Wallpaper-Viewer-with-Vue-JS-3",
            external: "https://elegant-kirch-8f439a.netlify.app/",
          },

          pills: ["Bing API", "Vue.js", "Netlify"],
        },
      },
    };
  },
};
</script>

<style lang="css" scoped>
.projects {
  padding-top: var(--section-space);
  padding-bottom: var(--section-space);
}

.mainTitle {
  color: var(--lightest-slate);
  font-size: var(--section-heading-font-size);
  font-family: var(--font-sans);
}

.smallText {
  color: cyan;
  margin-top: -25px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.tile {
  background: var(--light-navy);
  padding: 30px 30px;
  margin: 5px 0px;
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
}

.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.folder img {
  margin: 0px;
}
.outbound_links img {
  margin: 5px;
}

.tileText {
  color: var(--lightest-slate);
  margin-top: 25px;
  font-size: var(--fx-xxl);
  font-weight: bolder;
  font-family: var(--font-sans);
}
.tiledesc {
  color: var(--light-slate);
  font-size: 14px;
  margin-top: 10px;
}

.hline {
  border: 1px solid rgba(255, 255, 255, 0.16);
}
.tilepills {
  color: var(--slate);
  display: flex;
  flex-direction: row;
  display: inline-block;
  margin-top: 5px;
}

.pill {
  display: inline-block;
  margin: 3px;
  font-size: 14px;
  font-family: var(--font-mono);
}

@media (max-width: 48rem) {
  .mainTitle {
    font-size: 25px;
    margin-bottom: 30px;
  }

  .pill {
    display: inline-block;
    margin: 2px;
    font-size: 12px;
  }
}
</style>
