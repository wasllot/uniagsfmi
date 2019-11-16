<template>
  <section class="row" v-if="show">
	  <!--Start slider news-->
	  <div class="col-12 col-md-6 pb-0 pb-md-3 pt-2 pr-md-1">
	      <div id="featured" class="carousel slide carousel" data-ride="carousel">
	          <!--dots navigate-->
	          <ol class="carousel-indicators top-indicator">
	              <li data-target="#featured" v-for="(item, index) in posts" :data-slide-to="index"v-bind:class="{ 'active': index == '0'}"></li>
	          </ol>
	          
	          <!--carousel inner-->
	          <div class="carousel-inner">
	              <!--Item slider-->
	              <div  v-for="(item, index) in posts" v-bind:class="{ 'active': index == '0'}" class="carousel-item">
	                  <div class="card border-0 rounded-0 text-light overflow zoom">
	                      <div class="position-relative">
	                          <!--thumbnail img-->
	                          <div class="ratio_left-cover-1 image-wrapper">

								    <router-link @click.native="showSpinner" :to="`${item.category.slug}/${item.slug}`">
								    	 <img class="img-fluid w-100" :src="item.cover" :alt="item.title">
								    </router-link>
	                          </div>
	                          <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">
	                              <!--title-->
	                              <router-link @click.native="showSpinner" :to="`${item.category.slug}/${item.slug}`">
	                              	 <h4 class="h3 post-title text-white my-1">{{item.title}}</h4>
								    </router-link>
	                              
	                              <div class="news-meta">
	                                  <span class="news-author"><a class="text-white font-weight-bold" href="../category/author.html">{{ item.category.name }}</a></span>
	                                  <span class="news-date"> / {{ item.created_at }}</span>
	                              </div>
	                          </div>
	                      </div>
	                  </div>
	              </div>
	               
	          </div>
	          <!--end carousel inner-->
	      </div>
	      
	      <!--navigation-->
	      <a class="carousel-control-prev" href="#featured" role="button" data-slide="prev">
	          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
	          <span class="sr-only">Anterior</span>
	      </a>
	      <a class="carousel-control-next" href="#featured" role="button" data-slide="next">
	          <span class="carousel-control-next-icon" aria-hidden="true"></span>
	          <span class="sr-only">Siguiente</span>
	      </a>
	  </div>
	  <!--End slider news-->
	  
	  <!--Start box news-->
	  <div class="col-12 col-md-6 pt-2 pl-md-1 mb-3 mb-lg-4">
	      <div class="row">
	          <!--news box-->
	          <div class="col-md-6 col-12  pb-1 pt-0 pr-1">
	              <div class="card border-0 rounded-0 text-white overflow zoom">
	                  <div class="position-relative">
	                      <!--thumbnail img-->
	                      <div class="ratio_right-cover-2 image-wrapper">
                      			<router-link @click.native="showSpinner" :to="`${grid[0].category.slug}/${grid[0].slug}`">
							    	 <img class="img-fluid" :src="grid[0].cover" :alt="grid[0].title">
							    </router-link>

	                      </div>
	                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

	                          <router-link @click.native="showSpinner" class="p-1 badge badge-primary rounded-0" :to="`${grid[0].category.slug}/${grid[0].slug}`">
	                              	 {{grid[0].category.name}}
							  </router-link>                    

							  <router-link @click.native="showSpinner" :to="`${grid[0].category.slug}/${grid[0].slug}`">
	                              	 <p class="text-white my-1">{{grid[0].title}}</p>
							  </router-link>

	                      </div>
	                  </div>
	              </div>
	          </div>
	          
	          <!--news box-->
	          <div class="col-md-6 col-12  pb-1 pl-1 pt-0">
	             	<div class="card border-0 rounded-0 text-white overflow zoom">
	                  <div class="position-relative">
	                      <!--thumbnail img-->
	                      <div class="ratio_right-cover-2 image-wrapper">
                      			<router-link @click.native="showSpinner" :to="`${grid[1].category.slug}/${grid[1].slug}`">
							    	 <img class="img-fluid" :src="grid[1].cover" :alt="grid[1].title">
							    </router-link>

	                      </div>
	                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

	                          <router-link @click.native="showSpinner" class="p-1 badge badge-primary rounded-0" :to="`${grid[1].category.slug}/${grid[1].slug}`">
	                              	 {{grid[1].category.name}}
							  </router-link>                    

							  <router-link @click.native="showSpinner" :to="`${grid[1].category.slug}/${grid[1].slug}`">
	                              	 <p class="text-white my-1">{{grid[1].title}}</p>
							  </router-link>

	                      </div>
	                  </div>
	              </div>
	          </div>
	          
	          <!--news box-->
	          <div class="col-md-6 col-12  pb-1 pr-1 pt-1">
	              <div class="card border-0 rounded-0 text-white overflow zoom">
	                  <div class="position-relative">
	                      <!--thumbnail img-->
	                      <div class="ratio_right-cover-2 image-wrapper">
                      			<router-link @click.native="showSpinner" :to="`${grid[2].category.slug}/${grid[2].slug}`">
							    	 <img class="img-fluid" :src="grid[2].cover" :alt="grid[2].title">
							    </router-link>

	                      </div>
	                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

	                          <router-link @click.native="showSpinner" class="p-1 badge badge-primary rounded-0" :to="`${grid[2].category.slug}/${grid[2].slug}`">
	                              	 {{grid[2].category.name}}
							  </router-link>                    

							  <router-link @click.native="showSpinner" :to="`${grid[2].category.slug}/${grid[2].slug}`">
	                              	 <p class="text-white my-1">{{grid[2].title}}</p>
							  </router-link>

	                      </div>
	                  </div>
	              </div>
	          </div>
	          
	          <!--news box-->
	          <div class="col-md-6 col-12  pb-1 pl-1 pt-1">
	              <div class="card border-0 rounded-0 text-white overflow zoom">
	                  <div class="position-relative">
	                      <!--thumbnail img-->
	                      <div class="ratio_right-cover-2 image-wrapper">
                      			<router-link @click.native="showSpinner" :to="`${grid[3].category.slug}/${grid[3].slug}`">
							    	 <img class="img-fluid" :src="grid[3].cover" :alt="grid[3].title">
							    </router-link>

	                      </div>
	                      <div class="position-absolute p-2 p-lg-3 b-0 w-100 bg-shadow">

	                          <router-link @click.native="showSpinner" class="p-1 badge badge-primary rounded-0" :to="`${grid[3].category.slug}/${grid[3].slug}`">
	                              	 {{grid[3].category.name}}
							  </router-link>                    

							  <router-link @click.native="showSpinner" :to="`${grid[3].category.slug}/${grid[3].slug}`">
	                              	 <p class="text-white my-1">{{grid[3].title}}</p>
							  </router-link>

	                      </div>
	                  </div>
	              </div>
	          </div>
	          <!--end news box-->
	      </div>
	  </div>
	  <!--End box news-->
  </section>
</template>

<script>
    export default {
       data: function() {
		return {
			posts: [],
			grid: [],
			show: false
		}

		},
		mounted() {
          this.getPosts();
        },
		methods: {
			getPosts(page) {
                helper.showSpinner();
                axios.get('/api/post/getPostSlider')
                    .then(response => response.data)
                    .then(response => {
                        this.show = true;

                        this.posts = response.posts;
                        this.grid = response.grid;
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
            },
			
		}
    }
</script>
