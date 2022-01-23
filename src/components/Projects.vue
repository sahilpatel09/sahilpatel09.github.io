<template>
	<div class="projectContainer">
		<div class="title">
			<h2 class="mainTitle">Noteworthy Projects</h2>
			<p class="smallText">View all the projects</p>
		</div>
		
		<div class="tiles">
			
			<div class="tile">
				<div class="icons">
					<div class="folder">
						<img class="flex-start" src="/folder.svg" />						
					</div>
					<div class="outbound_links">
						<img class="flex-end"src="/github.svg" />
						<img class="flex-end" src="/link.svg" />						
					</div>

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pill">HTML</p>
					<p class="pill">CSS</p>
					<p class="pill">Photoshop</p>
				</div>
			</div>

			<div class="tile">
				<div class="icons">
					<div class="folder">
						<img class="flex-start" src="/folder.svg" />						
					</div>
					<div class="outbound_links">
						<img class="flex-end"src="/github.svg" />
						<img class="flex-end" src="/link.svg" />						
					</div>

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pill">HTML</p>
					<p class="pill">CSS</p>
					<p class="pill">Photoshop</p>
				</div>
			</div>



			<div class="tile">
				<div class="icons">
					<div class="folder">
						<img class="flex-start" src="/folder.svg" />						
					</div>
					<div class="outbound_links">
						<img class="flex-end"src="/github.svg" />
						<img class="flex-end" src="/link.svg" />						
					</div>

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pill">HTML</p>
					<p class="pill">CSS</p>
					<p class="pill">Photoshop</p>
				</div>
			</div>




			<div class="tile">
				<div class="icons">
					<div class="folder">
						<img class="flex-start" src="/folder.svg" />						
					</div>
					<div class="outbound_links">
						<img class="flex-end"src="/github.svg" />
						<img class="flex-end" src="/link.svg" />						
					</div>

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pill">HTML</p>
					<p class="pill">CSS</p>
					<p class="pill">Photoshop</p>
				</div>
			</div>


			<div class="tile">
				<div class="icons">
					<div class="folder">
						<img class="flex-start" src="/folder.svg" />						
					</div>
					<div class="outbound_links">
						<img class="flex-end"src="/github.svg" />
						<img class="flex-end" src="/link.svg" />						
					</div>

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pill">HTML</p>
					<p class="pill">CSS</p>
					<p class="pill">Photoshop</p>
				</div>
			</div>



			<div class="tile">
				<div class="icons">
					<div class="folder">
						<img class="flex-start" src="/folder.svg" />						
					</div>
					<div class="outbound_links">
						<img class="flex-end"src="/github.svg" />
						<img class="flex-end" src="/link.svg" />						
					</div>

				</div>
				<div class="tileText">
					Voter Registraion App
				</div>
				<div class="tiledesc">
					The app has been so good and doing all the important things on the scale of the best of the sessions.
				</div>
				<div class="tilepills">
					<p class="pill">HTML</p>
					<p class="pill">CSS</p>
					<p class="pill">Photoshop</p>
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

.projectContainer{
padding: 70px 70px;
}

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



.tiles{
	display: grid;
  grid-template-columns: repeat(auto-fit, 342px);
  justify-content: center;


}

.tile{
	background: #172a45;
	padding: 30px 30px;
	margin: 3px 3px;
}

.icons{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

.folder img {
	margin: 0px;
}
.outbound_links img {
	margin:5px;
}

.tileText{
	color: #ccd6f6;
	margin-top: 25px;
	font-size: 18px;
	font-weight: bolder;

}
.tiledesc{
	color: white;
	font-size: 14px;
	margin-top:10px;
}

.tilepills{
	color: cyan;
	display: flex;
	flex-direction: row;
	margin-top: 10px;
}
.pill{
	margin: 2.5px;
	font-size: 14px;
}
</style>