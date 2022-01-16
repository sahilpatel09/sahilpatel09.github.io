<template>
	<div class="cfContainer">
		<center class="col">
			<p class="smallText">What is next?</p>
			<h2 class="bigText" >Get In Touch</h2>
			<p class="smallText">{{error}}</p>
		</center>
		<div class="form">
			<form @submit.prevent="sendEmail">

			    <input type="text" v-model="user_name" placeholder="Name.." class="input">
			    <br>
			    <input type="text" v-model="email" placeholder="Email.." class="input">
			    <br>
			    <textarea id="subject" class="input" v-model="message" name="subject" placeholder="Write something.." style="height:100px"></textarea>
			    <br>

			    <input type="submit" value="Submit" class="button" />

			  </form>
		</div>
	</div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {

  name: 'Contact',

  data () {
    return {

    	error: "",

    	user_name: "",
    	message: "",
    	email: '',
    	s34lkdjfla3jlfdskaj: "c2VydmljZV9nZmFzN3p4",
    	tertlfsdl45lkdfgal3: "dGVtcGxhdGVfZTdrMWJ2ag==",
    	jenteb342sdfklaj3434l3:"dXNlcl9hN0NlQnVlaXZjWmw3SXR6a0x2OTk="

    };
  },
  methods:{


  	sendEmail(){

  		emailjs.send(atob(this.s34lkdjfla3jlfdskaj), atob(this.tertlfsdl45lkdfgal3), {email: this.email,name: this.user_name, message: this.message}, atob(this.jenteb342sdfklaj3434l3))
  		        .then((result) => {
  		            console.log('SUCCESS!', result.text);
  		            this.error = "Message sent successfully."
  		        }, (error) => {
  		            console.log('FAILED...', error);
  		            this.error = error
  		        });



  	}


  }
}
</script>

<style lang="css" scoped>
.smallText{
	color:cyan;
}
.bigText{

font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
font-size: 60px;
margin-top:-20px;
color:#ccd6f6;
font-style: normal;
font-variant-caps: normal;
font-variant-east-asian: normal;
font-variant-ligatures: normal;
font-variant-numeric: normal;
font-weight: 600;

}
.cfContainer{
	width: 90%;
	padding: 70px 70px;

}

.form{
	display: flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	padding-top: 0px;
}
.input{
	width: 400px;
	margin: 10px 40px;
	background: #303C55;
	padding: 10px 20px;
	border-radius: 7px;
	color: white;
	outlline: none;
	border: mone;
}

.input:focus{
border: 0;
outlline:0;
}
.button{
	padding: 10px 40px;
	border: 1px solid cyan;
	background: #303C55;
	color: white;
	font-family: Calibre;
	font-size: 20px;
	border-radius: 7px;
	margin: 20px 40px;
}

@media (max-width: 48rem){

.cfContainer{
	align-items:start;
	justify-content:flex-start;
	padding: 50px 10px;
}

.bigText{

font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
font-size: 40px;
color:#8892b0;
font-weight: 600;

}



}
</style>