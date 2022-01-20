<template>
	<div class="col aContainer">
		<h2 class="title">
			<span class="numerals">01. </span>About Me
		</h2>
		<div class="line"></div>
			<div class="row">
		<div class="col-md-4 textContent">
			Hello! I'm Sahil, from Ahmedabad, also known as the Manchester of India.
			<br />

			I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.
		</div>
		<div class="col-md-4">
			<div class="image">
			<img src="https://avatars.githubusercontent.com/u/33144146?v=4"/>
			</div>
		</div>

	</div>
	</div>
</template>

<script>
export default {

  name: 'About',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.numerals{
	color:cyan;
}
.aContainer{
	padding: 70px 70px;
	

}
.line{
	width: 30%;
	height: 2px;
	background:cyan;
}
.title{
	color: white;
}

.image {
    position: relative;
    width: 250px;
}

.image img {
    width: 100%;
    vertical-align: top;
}

.image:after {
    content: '\A';
    position: absolute;
    width: 100%; height:100%;
    top:0; left:0;
    background:#00FFFF50;
    opacity: 50;
    transition: all 1s;
    -webkit-transition: all 1s;
}
.image:hover:after {
    opacity:0%;
}


.textContent{
	padding: 20px;
	color: #8892b0;
	font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
	font-size: 16px;
}


@media (max-width: 48rem){

.aContainer{
	align-items:start;
	justify-content:flex-start;
	padding: 50px 10px;
}





}

</style>