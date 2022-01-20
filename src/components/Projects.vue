<template>
	<div class="projectContainer">
		<div class="title">
			<h2 class="mainTitle">Noteworthy Projects</h2>
			<p class="smallText">View all the projects</p>
		</div>
		<div class="tiles">
			<div class="tile">
				<div class="icons">
					<img class="flex-start" src="/folder.svg" />
					<img class="flex-end"src="/github.svg" />
					<img class="flex-end" src="/link.svg" />

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pile">HTML</p>
					<p class="pile">CSS</p>
					<p class="pile">Photoshop</p>
				</div>
			</div>

			<div class="tile">
				<div class="icons">
					<img class="flex-start" src="/folder.svg" />
					<img class="flex-end"src="/github.svg" />
					<img class="flex-end" src="/link.svg" />

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pile">HTML</p>
					<p class="pile">CSS</p>
					<p class="pile">Photoshop</p>
				</div>
			</div>


			<div class="tile">
				<div class="icons">
					<img class="flex-start" src="/folder.svg" />
					<img class="flex-end"src="/github.svg" />
					<img class="flex-end" src="/link.svg" />

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pile">HTML</p>
					<p class="pile">CSS</p>
					<p class="pile">Photoshop</p>
				</div>
			</div>




		</div>
	</div>
</template>

<script>
export default {

  name: 'Projects',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>

.mainTitle {
	color: white;
	font-size: 45px;
font-family: Calibre, "San Francisco", "SF Pro Text", -apple-system, system-ui, BlinkMacSystemFont, Roboto, "Helvetica Neue", "Segoe UI", Arial, sans-serif;
}
.smallText {
	color:cyan;
	margin-top:-25px;
}
.title{
	display: flex;
	flex-direction:column;
	align-items:center;
	justify-content:center;
	padding:10px;
}

.projectContainer{
padding: 70px 70px;
background:red;
}

.tiles{
	display:flex;
	flex-wrap:wrap;

}

.tile{
	background:black;
	padding: 10px 20px;
}
.icons{
	display:flex;
	background:orange;
}
.flex-start{
	justify-content:flex-start;
}

.flex-end{
	justify-content:flex-end;
}


</style>