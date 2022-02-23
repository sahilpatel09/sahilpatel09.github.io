<template>
  <div class="cfContainer" id="getintouch">
    <center class="col">
      <p class="smallText">What is next?</p>
      <h2 class="bigText">Get In Touch</h2>
      <p class="desc">
        Ping me here and I will reply as soon as I see your email. My inbox is
        open to all, whether you have a question or just wanna say hi! Just ping
        me. Feel free to ping me about job positions.
      </p>
      <div class="loader" v-if="isLoading"></div>
      <p v-else class="smallText">{{ error }}</p>

      <div class="form">
        <form @submit.prevent="sendEmail">
          <input
            type="text"
            v-model="user_name"
            placeholder="Name.."
            class="input"
          />
          <br />
          <input
            type="text"
            v-model="email"
            placeholder="Email.."
            class="input"
          />
          <br />
          <textarea
            id="subject"
            class="input"
            v-model="message"
            name="subject"
            placeholder="Write something.."
            style="height: 100px"
          ></textarea>
          <br />

          <input type="submit" value="Submit" class="button" />
        </form>
      </div>
    </center>
    <center>
      <div class="footerCopyright">
        <p>
          Inspired By
          <span
            ><a
              href="https://github.com/bchiang7/v4"
              title="Profile Link of Brittany Chiang"
              >Brittany Chiang</a
            ></span
          ><br />Re-Developed with Vue js & Gridsome by
          <span
            ><a
              href="https://github.com/sahilpatel09"
              title="Github Profile of Sahil Patel"
              >Sahil Patel</a
            ></span
          >
        </p>
      </div>
    </center>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "Contact",

  data() {
    return {
      error: "",
      isLoading: false,
      user_name: "",
      message: "",
      email: "",
      s34lkdjfla3jlfdskaj: "c2VydmljZV9nZmFzN3p4",
      tertlfsdl45lkdfgal3: "dGVtcGxhdGVfZTdrMWJ2ag==",
      jenteb342sdfklaj3434l3: "dXNlcl9hN0NlQnVlaXZjWmw3SXR6a0x2OTk=",
    };
  },
  methods: {
    sendEmail() {
      this.isLoading = true;

      emailjs
        .send(
          atob(this.s34lkdjfla3jlfdskaj),
          atob(this.tertlfsdl45lkdfgal3),
          { email: this.email, name: this.user_name, message: this.message },
          atob(this.jenteb342sdfklaj3434l3)
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.isLoading = false;
            this.error = "Message sent successfully.";
          },
          (error) => {
            console.log("FAILED...", error);
            this.error = error;
          }
        );
    },
  },
};
</script>

<style lang="css" scoped>
.footerCopyright {
  margin-bottom: -20px;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono",
    "Lucida Console", Monaco, monospace;
  vertical-align: baseline;
  font-size: 12px;
  color: #8892b0;
  line-height: 16px;
}

.footerCopyright span a {
  text-decoration: none;
  color: cyan;
}

.loader {
  border: 5px solid slate; /* Light grey */
  border-top: 9px solid cyan; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin: 10px 10px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.smallText {
  color: cyan;
}
.desc {
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  color: #8892b0;
  font-size: 20px;
  font-weight: 400;
  max-width: 700px;
}
.bigText {
  font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui,
    BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
  font-size: 60px;
  margin-top: -20px;
  margin-bottom: -10px;

  color: #ccd6f6;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 600;
}
.cfContainer {
  padding: 70px 70px;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 0px;
}
.input {
  width: 400px;
  height: 100%;
  margin: 5px auto;
  background: #303c55;
  padding: 10px 20px;
  border-radius: 2px;
  color: white;
  outlline: 0px;
  border: 0px;
}

.input:focus {
  border: 0px;
  outlline: 0px;
}

.button {
  padding: 10px 40px;
  background: #303c55;
  color: white;
  font-family: Calibre;
  font-size: 20px;
  border-radius: 7px;
  border: 0px;
  transform: uppercase;
  font-family: roboto;
  font-style: normal;
  font-weight: 400;
  margin: 20px 40px;
}
.button:hover {
  background: #ccd6f6;
  transition: all 333ms ease-out;
  color: navy;
}

@media (max-width: 48rem) {
  .cfContainer {
    align-items: start;
    justify-content: flex-start;
    padding: 50px 10px;
  }
  .desc {
    font-size: 15px;
    color: #8892b0;
  }
  .bigText {
    font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system,
      system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial,
      sans-serif;
    font-size: 40px;
    font-weight: 600;
  }

  .input {
    width: 250px;
    height: 100%;
  }
}
</style>
