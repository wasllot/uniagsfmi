<template>

    <div v-if="post">

         <section class="section db p120">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tagline-message page-title text-center">
                            <h3>{{ post.title }}</h3>
                            <ul class="breadcrumb">
                                <li><a href="/">Inicio</a></li>
                                <li><a href="/blog/1/list"> Blog </i></a></li>
                                <li class="active" v-text="post.title"></i></li>
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
                            <div class="content blog-list">
                                <div class="blog-wrapper clearfix">
                                    <div class="blog-meta">
                                        <small><a href="#">{{ categoryName }}</a></small>
                                        <h3>{{ post.title }}</h3>
                                        <ul class="list-inline">
                                            <li>{{ post.created_at }}</li>
                                            <li><span>por</span> <a href="#">{{post.user.profile.first_name}}</a></li>
                                        </ul>
                                    </div><!-- end blog-meta -->

                                    <div class="blog-media">
                                        <img :src="post.cover" alt="" class="img-responsive img-rounded">
                                    </div><!-- end media -->

                                    <div class="blog-desc-big">
                                        <div v-html="post.body"></div>
                                        
                                        <hr class="invis">

                                        <div class="tags-widget">   
                                            <ul class="list-inline">
                                                <li><a href="#">course</a></li>
                                                <li><a href="#">web design</a></li>
                                                <li><a href="#">development</a></li>
                                                <li><a href="#">language</a></li>
                                            </ul>
                                        </div><!-- end list-widget -->

                                    </div><!-- end desc -->
                                </div><!-- end blog -->
                            </div><!-- end content -->

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
    import socialSharing from '../../components/SocialSharing'

    export default {
        metaInfo() {
            return {
                title: `${this.documentTitle}`,
                meta: [
                    {name: 'description', content: this.post ? this.post.totally_stripped_body : ''},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:title', content: this.post ? this.post.title : ''},
                    {name: 'twitter:description', content: this.post ? this.post.totally_stripped_body : ''},
                    {name: 'twitter:image', content: this.post ? `${this.getConfig('app_url')}/${this.post.cover}` : ''},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:site_name', content: this.getConfig('company_name')},
                    {property: 'og:url', content: this.post ? `${this.getConfig('app_url')}/${this.categorySlug}/${this.post.slug}` : ''},
                    {property: 'og:title', content: this.post ? this.post.title : ''},
                    {property: 'og:description', content: this.post ? this.post.totally_stripped_body : ''},
                    {property: 'og:image', content: this.post ? `${this.getConfig('app_url')}/${this.post.cover}` : ''}
                ]
            }
        },
        components: {
            pageNotFound, socialSharing
        },
        data() {
            return {
                category: '',
                categoryName: '',
                categorySlug: '',
                slug: '',
                post: {},
                documentTitle: '',
                categories: [],
                filterPostForm: {
                    search_query: '',
                    category_id: '',
                    created_at_start_date: '',
                    created_at_end_date: '',
                    page_length: helper.getConfig('page_length')
                },
                showFilterPanel: false,
                splitted: [],
                search_query: '',
                blog: {},
                next:true  
            };
        },
        mounted() {
            this.category = this.$route.params.category;
            this.slug = this.$route.params.slug;
            helper.showSpinner();
            axios.get('/api/posts/' + this.category + '/' + this.slug)
                .then(response => response.data)
                .then(response => {
                    this.post = response.post;
                    this.categories = response.categories;
                    this.splitted = this.chunk(response.categories, response.categories.length/2);
                    this.categoryName = this.post ? response.post.category.name : '';
                    this.categorySlug = this.post ? response.post.category.slug : '';
                    if (this.post) {
                        this.documentTitle = `${this.post.title} | ${helper.getConfig('company_name')}`;
                    } else {
                        this.documentTitle = `${i18n.general.page_not_found_heading} | ${helper.getConfig('company_name')}`;
                    }
                    helper.hideSpinner();
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                    helper.hideSpinner();
                });
        },
        methods: {
            getConfig(name) {
                return helper.getConfig(name);
            },
            searchCategory(categoryId) {
                helper.showSpinner();
                this.$store.dispatch('setSearchCategory', categoryId);
                this.$router.push('/search');
            },
            hasRole(role) {
                return helper.hasRole(role);
            },
            search() {
                this.showSpinner();
                this.$store.dispatch('setSearchQuery', this.search_query);
                this.$refs.li.classList.remove("show");
                this.$refs.div.classList.remove("show");
                this.$router.push('/search');
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
            
        }
    }
</script>
