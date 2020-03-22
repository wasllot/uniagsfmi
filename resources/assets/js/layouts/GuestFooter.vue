<template>
<!--    <footer class="footer d-print-none text-center" style="left:0">
              <div class="container my-2">
            <div class="row">
                <div class="col-12 col-md-12 col-sm-12 col-xs-12">
                   <ul class="social-icons-ql" style="justify-content: center;display: flex;">
                       <li><a :href="getConfig('facebook')" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                       <li><a :href="getConfig('linkedin')" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                       <li><a :href="getConfig('whatsapp')" target="_blank"><i class="fab fa-whatsapp"></i></a></li>
                       <li><a :href="getConfig('instagram')" target="_blank"><i class="fab fa-instagram"></i></a></li>
                       
                   
                   </ul>
               </div>
          
            </div>

        </div>
        {{ getConfig('footer_credit') }}
    </footer>-->

<!--         <div id="main-footer">

<footer class="footer">

    <div class="container bottom_border">

        <div class="row">

            <div class=" col-sm-4 col-md col-sm-4  col-12 col">

                <h5 class="headin5_amrc col_white_amrc pt2">Contáctano</h5>

                headin5_amrc
                <p class="mb10">{{ getConfig('contact_info')}}</p>

                <p>

                    <i class="fa fa-location-arrow"></i> {{ getConfig('company_name')}} 

                </p>

                <p>

                    <i class="fa fa-phone"></i>  {{ getConfig('company_description')}} 

                </p>

                <p>

                    <i class="fa fa fa-envelope"></i> info@example.com  

                </p>


            </div>


            <div class=" col-sm-4 col-md  col-6 col">

                <h5 class="headin5_amrc col_white_amrc pt2">Equipo</h5>

                headin5_amrc
                <ul class="footer_ul_amrc">

                    <li v-for="team in teams" :key="team.id">

                        <router-link @click.native="showSpinner" :to="`/team/${team.slug}/details`">

                           {{ team.title }}
                            

                        </router-link>

                    </li>

                   

                </ul>
              
            </div>


            <div class=" col-sm-4 col-md  col-6 col">

                <h5 class="headin5_amrc col_white_amrc pt2">Últimos posts</h5>

                headin5_amrc
                <ul class="footer_ul_amrc">

                    <li v-for="post in posts.data" :key="post.id">

                        <router-link @click.native="showSpinner" :to="`/${post.category.slug}/${post.slug}`">

                           {{ post.title }}

                        </router-link>
                    </li>

                   
                </ul>

                
            </div>



        </div>

    </div>


    <div class="container">

        <ul class="foote_bottom_ul_amrc">

            <li>

                <router-link to="/">
                    Inicio
                    
                </router-link>

            </li>

            <li>

                  <a  href="/blog/1/list">
                    Blog
                </a>

            </li>

            <li>

                 <a  href="/portfolio/1/list">
                    Portafolio
                </a>

            </li>


        </ul>
        foote_bottom_ul_amrc ends here
        <p class="text-center">{{ getConfig('footer_credit') }}</p>

        <ul class="social_footer_ul">
            <li>
                <a :href="getConfig('facebook')" target="_blank">

                    <i class="fab fa-facebook-f"></i>

                </a>
            </li>

            <li>

                <a :href="getConfig('twitter')" target="_blank">

                    <i class="fab fa-twitter"></i>

                </a>

            </li>

            <li>

                <a :href="getConfig('whatsapp')" target="_blank">

                    <i class="fab fa-whatsapp"></i>

                </a>

            </li>

            <li>

                <a :href="getConfig('instagram')" target="_blank">

                    <i class="fab fa-instagram"></i>

                </a>

            </li>

        </ul>

        social_footer_ul ends here
    </div>

</footer>  

    </div> -->

    <div>
        

        <footer class="section footer noover">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4">
                        <div class="widget clearfix">
                            <h3 class="widget-title">Encuentra información de interés</h3>
                            <div class="newsletter-widget">
                                <p>Ingresa aquí lo que estés buscando.</p>
                                <form class="form-inline"  @keydown.enter.prevent="search()">
                                    <div class="form-1">
                                        <input type="text" class="form-control" v-model="search_query" :placeholder="trans('general.search_for')">
                                        <button type="submit" class="btn btn-primary"><i class="fas fa-search"></i></button>
                                    </div>
                                </form>
                            </div><!-- end newsletter -->
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-3">
                        <div class="widget clearfix">
                            <h3 class="widget-title">ÚNETE</h3>
                            <p>Y encuentra el programa formativo que más se adapte a ti.</p>
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-3 col-md-3">
                        <div class="widget clearfix">
                            <h3 class="widget-title">Algunas publicaciones</h3>
                            <div class="tags-widget">   
                                <ul class="list-inline">
                                    <li v-for="post in posts.data" :key="post.id">
                                        <router-link :to="`${post.category.slug}/${post.slug}`">{{post.title}}</router-link>
                                    </li>
                                    
                                </ul>
                            </div><!-- end list-widget -->
                        </div><!-- end widget -->
                    </div><!-- end col -->

                    <div class="col-lg-2 col-md-2">
                        <div class="widget clearfix">
                            <h3 class="widget-title">Páginas más visitadas</h3>
                            <div class="list-widget">   
                                <ul>
                                    <li v-for="page in pages.data" :key="page.id">
                                        <router-link :to="`${page.slug}`">{{page.title}}</router-link>
                                    </li>
                                </ul>
                            </div><!-- end list-widget -->
                        </div><!-- end widget -->
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </footer><!-- end footer -->

        <div class="copyrights">
            <div class="container">
                <div class="clearfix">
                    <div class="pull-left">
                        <div class="cop-logo">
                            <a href="#"><img :src="getConfig('logo')" width="30" :alt="getConfig('company_name')"></a>
                        </div>
                    </div>

                    <div class="pull-right">
                        <div class="footer-links">
                            <ul class="list-inline">
                                <li>Copyright {{getConfig('company_name')}} 2020</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!-- end container -->
        </div><!-- end copy -->        
    </div>

</template>

<script>
    export default {
        data() {
            return {
                categories: {
                    total: 0,
                    data: []
                },
                search_query: '',                
                pages: { 
                    total: 0,
                    data: []
                },                
                posts: {
                    total: 0,
                    data: []
                },
                menus: []
            }
        },
        mounted(){

            axios
                .get('/api/posts')
                .then(response => response.data)
                .then(response => {

                    this.categories = response.categories;
                    this.posts = response.posts;

                })
                .catch(error =>{

                    helper.showDataErrorMsg(error);

                });           

                axios
                .get('/api/pages/by_views')
                .then(response => response.data)
                .then(response => {

                    this.pages = response.pages;

                })
                .catch(error =>{

                    helper.showDataErrorMsg(error);
                    
                });
        },
        methods: {
            getConfig(config) {
                return helper.getConfig(config);
            },
            search() {
                this.showSpinner();
                this.$store.dispatch('setSearchQuery', this.search_query);
                this.$refs.li.classList.remove("show");
                this.$refs.div.classList.remove("show");
                this.$router.push('/search');
            },
        }
    }
</script>
