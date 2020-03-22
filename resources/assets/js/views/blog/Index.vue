<template>
	<div v-if="blog">

        <section class="section db p120 sec" :style="{ 'background-image' : 'url(\'' + getConfig('background') + '\')' }">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tagline-message page-title text-center">
                            <h3  v-text="blog.title"></h3><br>
                            <h5  v-text="blog.subtitle"></h5>
                            <ul class="breadcrumb">
                                <li><a href="/">Inicio</a></li>
                                <li class="active">Blog</li>
                            </ul>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end section -->

        <section class="section gb nopadtop">
            <div class="container">
                <div class="boxed">
                    <div class="row">
                        <div class="col-md-8">

                            <div v-if="posts.total">
  
                                <blog-card v-for="post in posts.data" :post="post" :key="post.id"></blog-card>
                            
                                 <pagination-record :page-length.sync="filterPostForm.page_length" :records="posts"
                                                   @updateRecords="getPosts"
                                                   @change.native="getPosts"></pagination-record>
     
                            </div>
                            <div v-else>
                                <h2 class="text-center">No hay publicaciones</h2>
                            </div>

                        

                        </div><!-- end col -->

                        <div class="sidebar col-md-4">
                            <div class="widget clearfix">
                                <div class="banner-widget">
                                    <img :src="blog.cover" alt="" class="img-responsive img-rounded">
                                </div>
                            </div>

                            <div class="widget clearfix">
                                <h3 class="widget-title">Buscar</h3>
                                <div class="newsletter-widget">
                                <form  @keydown.enter.prevent="search()" class="form-inline">
                                    <div class="form-1">
                                        <input type="text" class="form-control" v-model="search_query" :placeholder="trans('general.search_for')">
                                          <button class="btn btn-secondary" type="submit"><i class="fas fa-search"></i></button>
                                        
                                    </div>
                                </form>

                                </div><!-- end newsletter -->
                            </div><!-- end widget -->

                            <div class="widget clearfix">
                                <h3 class="widget-title">Categorías</h3>
                                <div class="tags-widget">   
                                    <ul class="list-inline">
                                        <li><a href="#" @click="searchCategory(category.id)" v-for="cat in categories">{{ cat.name }} ({{cat.posts_count}})</a></li>

                                    </ul>
                                </div><!-- end list-widget -->
                            </div><!-- end widget -->
                        </div><!-- end sidebar -->
                    </div><!-- end row -->
                </div><!-- end boxed -->
            </div><!-- end container -->
        </section>
</div>
	<div v-else>
        <page-not-found></page-not-found>
    </div>
</template>

<script>

    import pageNotFound from '../errors/PageNotFound'
    import blogCard from './Blog'
    import dateRangePicker from '../../components/DateRangePicker'



    export default {
    	components: {
            pageNotFound,
            blogCard,
            dateRangePicker
        },
        data() {
            return {
                posts: {
                    total: 0,
                    data: []
                },
                filterPostForm: {
                    search_query: '',
                    category_id: '',
                    created_at_start_date: '',
                    created_at_end_date: '',
                    page_length: helper.getConfig('page_length')
                },
                showFilterPanel: false,
                categories: [],
                splitted: [],
                search_query: '',
                blog: {},
                next:true            
            };
        },
        mounted() {
        	helper.showSpinner();
            axios.get('/api/blog')
                .then(response => response.data)
                .then(response => {
                    
                    this.blog = response.blog;

                    helper.hideSpinner();
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                    helper.hideSpinner();
                });
           
            	this.getPosts();
            
        },
        methods: {
        	getPosts(page) {

        		if (typeof page !== 'number') {
                    page = 1;
                }

                let url = helper.getFilterURL(this.filterPostForm);
                helper.showSpinner();
 			
	                axios.get('../../api/posts/list?page='+ page + url)
	                    .then(response => response.data)
	                    .then(response => {
							 this.posts = response.posts;
							 this.categories  = response.categories; 
							 this.splitted = this.chunk(response.categories, response.categories.length/2);
							 helper.hideSpinner();
	
	                    })
	                    .catch(error =>{
	                    	
	                    	helper.showDataErrorMsg(error);

	                    	helper.hideSpinner();

	                    });
	 
	                

            },
            chunk(arr, len) {
                let chunks = [];
                let i = 0;
                let n = arr.length;
                while (i < n) {
                    chunks.push(arr.slice(i, i += len));
                }
                return chunks;
            },
            searchCategory(categoryId) {
                helper.showSpinner();
                this.$store.dispatch('setSearchCategory', categoryId);
                this.$router.push('/search');
            },
            getAuthUser(name) {
                return helper.getAuthUser(name);
            },
             search() {
                this.showSpinner();
                this.$store.dispatch('setSearchQuery', this.search_query);
                this.$refs.li.classList.remove("show");
                this.$refs.div.classList.remove("show");
                this.$router.push('/search');
            },
            getConfig(name) {
                return helper.getConfig(name);
            },
        },
        watch: {
            'filterPostForm.category_id': function (newVal, oldVal) {
                this.getPosts();
            },
            'filterPostForm.created_at_start_date': function (newVal, oldVal) {
                this.getPosts();
            },
            'filterPostForm.created_at_end_date': function (newVal, oldVal) {
                this.getPosts();
            },
            'filterPostForm.page_length': function (newVal, oldVal) {
                this.getPosts();
            }
        }
    };
</script>
<style>
    .sec{
        background-size: cover;
        background-position: top;
        height: 50vh;
    }

    .sec .page-title{
        margin-top: 10% !important;
    }
</style>