<template>
	<div class="row">
		<div class="brand">
			Sahil Patel
		</div>
	<div class="menu">
			<ul class="menuitems">
				<li class="singleItem"><span class="numerals">01. </span>About</li>
				<li class="singleItem"><span class="numerals">02. </span>About</li>
				<li class="singleItem"><span class="numerals">03. </span>About</li>
				<li class="singleItem"><span class="numerals">04. </span>About</li>

				<li class="specialButton">Resume</li>

			</ul>
	</div>

	</div>
</template>

<script>
export default {

  name: 'Bar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
:root{
	--green: rgb(100, 255, 218);
	--white: #fff;

}

.row{
display:flex;
flex-direction:row;
justify-content: space-between;
}

.brand {
	color: #fff;
	font-family:cursive;
	display: flex;
	font-size:20px;
	justify-content: center;
	align-items:center;
}
.menu{

	list-style-type: none;

}
.menuitems{
		font-size:14px;
		font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "Lucida Console", Monaco, monospace;
		list-style-type: none;
		display: flex;
		gap: var(--flex-gap, 2rem);
		color:#8892b0;
		
}

.numerals{
	color: white;
	padding-right: 5px;

}
.singleItem{
	padding:10px 5px;
}
.singleItem:hover{
	color:cyan;
	transition: all 1s ease;
}


.specialButton{
	color: rgb(100, 255, 218);
	border: 1px solid cyan;
	padding:10px 15px;
	border-radius: 7px;
}


</style>