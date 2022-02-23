<template>
	<div class="projectContainer" id="projects">
		<div class="title">
			<h2 class="mainTitle">My Recent Writings</h2>
			<p class="smallText">Checkout my daily thoughts and views on projects building</p>
		</div>
		
			<div class="flexbox">
			        <ul class="flex-card-list">
			          <li class="flex-card-listitem" v-for="post in $static.posts.edges" :key="post.id">
			            <div class="flex-card">
			              <div class="flex-card-image">
			                <img :src="post.node.image" />
			              </div>
			              <div class="flex-card-content">
			                <h3 class="flex-card-heading">
			                	<g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link>
			                </h3>
			                <p>{{post.node.summary}}</p>
			                <!-- <a href="#" class="flex-card-button">Read More</a> -->
			              </div>
			            </div>
			          </li>
			     
			        </ul>
			      </div>




<!-- 			
			  <article v-for="post in $page.posts.edges" :key="post.id" >
			    <h2><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
			    <p>Posted on <time :datetime="post.node.date">{{ post.node.date }}</time></p>

			    <p>{{ post.node.summary }}</p>
			  </article>

 -->			  



	</div>
</template>

<static-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        image
        path
      }
    }
  }
}
</static-query>


<script>
export default {

  name: 'Projects',

  data () {
    return {
    	hello: "dfs",
    	
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


ul
  {
    list-style-type: none;
    padding: 0; 
  }
  .flexbox .flex-card-list {
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
  }
  .flexbox .flex-card-listitem {
    display:flex;
    background-color: #233554;
    padding: 1em;
    border-radius: 10px;
  }
  
  .flexbox .flex-card {
    display:flex;
    flex-direction:column;
  }
  .flex-card-list li {
    width:400px;
    margin: .55em;
  }
  .flexbox .flex-card-content {
    
  }
  .flexbox .flex-card-content p {
    font-weight: 600;
    font-family: Calibre, serif;
    color:ghostwhite;
  }
  
  .flex-card-image img{
      width:400Px;
      height:250px;
      border-radius: 12px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .flex-card-heading{
      padding:5px;
      width:100%;
      color:cyan important!;
  }  


</style>


