<template>
    <div v-if="team" id="wrapper">

            <div class="header">

               <!--<span class="bgimage" :style="{ 'background' : '#1B2030 url(\'' + getBackground + '\') 50% 0 no-repeat' }"></span>-->
      
                <div class="info">

                  <h3>

                      <a href="#">{{ team.subtitle }}</a>

                  </h3>

                  <br>

                  <h1 class="text-white">{{ team.title }}</h1>

                  <br>


                </div>

              </div>

              <div class="container-fluid">


                <div v-html="team.body"></div>
                  

              </div> 
        
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
                    {name: 'description', content: this.team ? this.team.totally_stripped_body : ''},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:title', content: this.team ? this.team.title : ''},
                    {name: 'twitter:description', content: this.team ? this.team.totally_stripped_body : ''},
                    {name: 'twitter:image', content: this.team ? `${this.getConfig('app_url')}/${this.team.cover}` : ''},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:site_name', content: this.getConfig('company_name')},
                    {property: 'og:url', content: this.team ? `${this.getConfig('app_url')}/${this.categorySlug}/${this.team.slug}` : ''},
                    {property: 'og:title', content: this.team ? this.team.title : ''},
                    {property: 'og:description', content: this.team ? this.team.totally_stripped_body : ''},
                    {property: 'og:image', content: this.team ? `${this.getConfig('app_url')}/${this.team.cover}` : ''}
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
                team: {},
                documentTitle: '',
                categories: []
            };
        },
        mounted() {
            this.category = this.$route.params.category;
            this.slug = this.$route.params.slug;
            helper.showSpinner();
            axios.get('/api/teams/details/' + this.slug)
                .then(response => response.data)
                .then(response => {
                    this.team = response.team;
                    this.categories = response.categories;
                    this.categoryName = this.team ? response.team.category.name : '';
                    this.categorySlug = this.team ? response.team.category.slug : '';
                    if (this.team) {
                        this.documentTitle = `${this.team.title} | ${helper.getConfig('company_name')}`;
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
            }
        }
    }
</script>
