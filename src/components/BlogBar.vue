<template>
    <div class="row">
      <div class="brand">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="50"
          height="50"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <polygon
            class="hex"
            points="37.5,18.75 28.125,35 9.375,35 0,18.75 9.375,2.5 28.125,2.5"
            fill="transparent"
            stroke="cyan"
            stroke-width="3"
            transform="translate(10)"
          ></polygon>
          <text
            x="28"
            y="25"
            fill="cyan"
            font-family="Verdana"
            font-size="18"
            text-anchor="middle"
          >
            S
          </text>
        </svg>
      </div>

      <button
        type="button"
        class="toggle"
        aria-controls="menuItems"
        aria-expanded="false"
      >
        <span class="sr-only">Menu</span>
        <div class="wrapper-menu" :class="{ open: isopen }" @click="clicked">
          <div class="line-menu half start"></div>
          <div class="line-menu"></div>
          <div class="line-menu half end"></div>
        </div>
      </button>

      <div class="menu">
        <ul class="menuitems" id="menuItems" :data-visible="showHide">
          <li class="singleItem">
            <span class="numerals">I.</span
            ><g-link to="/" title="About me" @click="clicked">Portfolio</g-link>
          </li>
          <li class="singleItem">
            <span class="numerals">II.</span
            ><g-link to="/#getintouch" title="Contact" @click="clicked">Contact</g-link>
          </li>

          <li class="specialButton">Resume</li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: "BlogBar",

  data() {
    return {
      isopen: false,
      showHide: false,
    };
  },
  created() {
  	console.log(window.screen.width,window.screen.height)
  },
  methods: {
    clicked() {
      if (this.isopen === true) {
        this.isopen = false;
        this.showHide = false;
        if(window.screen.width < 769){
        	document.body.classList.remove('fixedBody');
        }


      } else {
        this.isopen = true;
        this.showHide = true;
        if(window.screen.width < 769){
        	document.body.classList.add('fixedBody');
        }

      }
    },
  },
};
</script>

<style lang="css" scoped>

body {
  overflow-x: hidden;
}

.fixed {
  position: fixed;
}




button:focus {
  outline: 0;
}

:root {
  --green: rgb(100, 255, 218);
  --white: #fff;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  justify-content: center;
}
.menu {
  list-style-type: none;
}

.menuitems {
  font-size: 14px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  list-style-type: none;
  display: flex;
  gap: var(--flex-gap, 2rem);
  color: #8892b0;
}
.menu ul li a {
  text-decoration: none;
  color: #8892b0;
}
.menu ul li a:hover {
  color: cyan;
  transition: all 333ms ease-in;
}

.numerals {
  color: cyan;
  padding-right: 5px;
}
.singleItem {
  padding: 10px 5px;
}
.singleItem:hover {
  color: cyan;
  transition: all 1s ease;
}

.specialButton {
  color: rgb(100, 255, 218);
  border: 1px solid cyan;
  padding: 10px 15px;
  border-radius: 7px;
}

.toggle {
  display: none;
}

.menuAnimation {
  transform: translateX(100%);
}

@media (max-width: 48rem) {
  
  .menuitems {
    position: fixed;
    inset: 0 0 0 30%;
    margin: 0;
    padding: 0;
    height: 100vh;
    z-index: 1000;
    background: #172a45;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--flex-gap, 2rem);
    transform: translateX(100%);
    transition: transform 330ms ease-in;
  }
  .menuitems[data-visible="true"] {
    transform: translateX(0%);
  }
  button:focus {
    outline: 0;
  }

  .toggle {
    display: block;
    position: absolute;
    background: transparent;
    border: none;
    outlline: none;
    top: 2rem;
    right: 2rem;
    z-index: 9999;
  }

  .wrapper-menu {
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 330ms ease;
    outlline: none;
    border: none;
  }

  .wrapper-menu.open {
    transform: rotate(-45deg);
  }

  .line-menu {
    background-color: cyan;
    border-radius: 5px;
    width: 100%;
    height: 6px;
  }

  .line-menu.half {
    width: 50%;
  }

  .line-menu.start {
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: right;
  }

  .open .line-menu.start {
    transform: rotate(-90deg) translateX(3px);
  }

  .line-menu.end {
    align-self: flex-end;
    transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
    transform-origin: left;
  }

  .open .line-menu.end {
    transform: rotate(-90deg) translateX(-3px);
  }

  .menuitems {
    font-size: 16px;
  }

  .specialButton {
    color: rgb(100, 255, 218);
    border: 1px solid cyan;
    padding: 15px 20px;

    border-radius: 7px;
  }
}
</style>
