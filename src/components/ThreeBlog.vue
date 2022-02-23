<template>
	<div id="projects">
		<div class="title">
			<h2 class="mainTitle">My Recent Writings</h2>
			<p class="smallText">Checkout my daily thoughts and views on projects building</p>
		</div>
		
<!-- 			<div class="flexbox">
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
			                <a href="#" class="flex-card-button">Read More</a>
			              </div>
			            </div>
			          </li>
			     
			        </ul>
			      </div> -->






<!-- 			
			  <article v-for="post in $page.posts.edges" :key="post.id" >
			    <h2><g-link :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
			    <p>Posted on <time :datetime="post.node.date">{{ post.node.date }}</time></p>

			    <p>{{ post.node.summary }}</p>
			  </article>

 -->			  
            <div class="row">
              <div class="col-md-4 tile" v-for="post in $static.posts.edges" :key="post.id">
                
                <div class="row">
                  <img :src="post.node.image" width="100%" height="180px" />
                </div>

                <div class="tileText">
                  <g-link :to="post.node.path" rel="bookmark" class="tileTextStyle">{{ post.node.title }}</g-link>
                </div>
                <div class="tiledesc">
                  {{ post.node.summary }}
                </div>

              </div>
            </div>
          </div>






	</div>
</template>

<static-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC,limit:3, perPage: 10, page: $page) @paginate {
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



.tile {
  background: #172a45;
  margin: 5px 5px;
  padding-bottom:20px;
}


.tileText {
  color: cyan;
  margin-top: 25px;
  font-size: 18px;
  font-weight: bolder;
  padding: 0px 20px;
  text-decoration: none;
}

.tileTextStyle{
  color: cyan;
}


.tiledesc {
  color: white;
  font-size: 14px;
  margin-top: 10px;
  padding: 0px 20px;
}



</style>


