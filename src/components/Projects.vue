<template>
  <div id="projects">
    <div class="title">
      <h2 class="mainTitle">Noteworthy Projects</h2>
      <p class="smallText">View all the projects</p>
    </div>

    <div class="row">
      <div class="col-md-4 col-sm-4 tile" v-for="pj in projects">
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
        <div class="tilepills" v-for="pill in pj.pills">
          <p class="pill">{{ pill }}</p>
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
            "A WeatherForecast app created with OpenWeatherMap API and Django framework.",
          links: {
            github:
              "https://github.com/sahilpatel09/WeatherForecastOpenWeatherMap",
            external: "https://weatherforecast99.herokuapp.com/",
          },
          pills: ["HTML", "CSS", "PYTHON", "DJANGO"],
        },

        1: {
          title: "IP Tracker",
          description:
            "A small weekend project to get the information of IP address and its possible location.",
          links: {
            github: "https://github.com/sahilpatel09/ip-tracker",
            external: "https://brave-mirzakhani-8081ab.netlify.app/",
          },

          pills: ["HTML", "CSS", "JAVASCRIPT", "NETLIFY"],
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

          pills: ["HTML", "CSS", "JAVASCRIPT", "NETLIFY"],
        },
      },
    };
  },
};
</script>

<style lang="css" scoped>


.mainTitle {
  color: white;
  font-size: 45px;
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
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


.tiles {
  display: grid;
  grid-template-columns: repeat(auto-fit, 342px);
  justify-content: center;
}

.tile {
  background: #172a45;
  padding: 30px 30px;
  margin: 3px 3px;
  flex: 1;
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
  color: #ccd6f6;
  margin-top: 25px;
  font-size: 18px;
  font-weight: bolder;
}
.tiledesc {
  color: white;
  font-size: 14px;
  margin-top: 10px;
}

.tilepills {
  color: cyan;
  display: flex;
  flex-direction: row;
  display: inline-block;
  margin-top: 10px;
}
.pill {
  display: inline-block;
  margin: 2.5px;
  font-size: 14px;
}

@media (max-width: 48rem) {
  .mainTitle {
    font-size: 27px;
    margin-bottom: 30px;
  }
}
</style>
