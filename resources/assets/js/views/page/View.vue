<template>
    <div  v-if="page">

        <section class="section db p120 sec" :style="{ 'background-image' : 'url(\'' + page.cover + '\')' }">
        <div class="overlay" style="z-index:0 !important;"></div>

            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tagline-message page-title text-center">
                            <h3>{{page.title}}</h3>
                            <ul class="breadcrumb">
                                <li><a href="/">Inicio</a></li>
                                <li class="active">{{page.title}}</li>
                            </ul>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->
            </div><!-- end container -->
        </section><!-- end section -->
        <section class="section nopadtop ">
            <div class="container">
                <div class="boxed boxedp4">
                    <div class="row">

                        <div class="col-lg-8">
                            
                            <div v-html="page.body"></div>
                            
                        </div>
                        <div class="col-lg-4">

                            <div class="widget clearfix">

                                <h2>Páginas relacionadas</h2> 

                                <div class="tags-widget">

                                    <ul class="" style="list-style: none;" v-if="pages.total">

                                        <li v-for="p in pages.data" :key="p.id"><a :href="`${p.slug}`" class="" >{{p.title}}</a></li>
                                    </ul>

                                </div>

                            </div>
                            
                        </div>
                        
                    </div>
                </div>
            </div>
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
                    {name: 'description', content: this.page ? this.page.totally_stripped_body : ''},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:title', content: this.page ? this.page.title : ''},
                    {name: 'twitter:description', content: this.page ? this.page.totally_stripped_body : ''},
                    {name: 'twitter:image', content: `${this.getConfig('app_url')}/uploads/images/cover-default.png`},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:site_name', content: this.getConfig('company_name')},
                    {property: 'og:url', content: this.page ? `${this.getConfig('app_url')}/${this.page.slug}` : ''},
                    {property: 'og:title', content: this.page ? this.page.title : ''},
                    {property: 'og:description', content: this.page ? this.page.totally_stripped_body : ''},
                    {property: 'og:image', content: `${this.getConfig('app_url')}/uploads/images/cover-default.png`}
                ]
            }
        },
        components: {
            pageNotFound, socialSharing
        },
        data() {
            return {
                slug: '',
                page: {},
                pages: {
                    total: 0,
                    data: []
                },
                documentTitle: '',
                categories: []
            };
        },
        mounted() {
            this.slug = this.$route.params.slug;
            helper.showSpinner();
            axios.get('/api/pages/' + this.slug)
                .then(response => response.data)
                .then(response => {
                    this.page = response.page;
                    this.pages = response.pages;
                    this.categories = response.categories;
                    if (this.page) {
                        this.documentTitle = `${this.page.title} | ${helper.getConfig('company_name')}`;
                        
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