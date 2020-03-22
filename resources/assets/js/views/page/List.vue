<template>


    <section class="section gb nopadtop">
        <div class="container">
            <div class="row">
                <div class="col-md-3" v-if="items.data[0]">
                    <div :style="{ 'background-image' : 'url(\'' + items.data[0].cover + '\')' }" class="box pages_box m30 " v-bind:class="{imgbox: items.data[0].cover}">
                        <div v-if="items.data[0].cover" class="overlay"></div>
                        <h4>{{ items.data[0].title }}</h4>
                        <p v-html="limitWords(items.data[0].totally_stripped_body)"></p>
                        <router-link class="card" :to="`${items.data[0].slug}`">
                        Ver más</router-link>
                    </div>
                </div>

                <div class="col-md-6" v-if="items.data[1]">
                    <div :style="{ 'background-image' : 'url(\'' + items.data[1].cover + '\')' }" class="box pages_box m30" v-bind:class="{imgbox: items.data[1].cover}">
                        <div v-if="items.data[1].cover" class="overlay"></div>

                        <h4>{{ items.data[1].title }}</h4>
                        <p v-html="limitWords(items.data[1].totally_stripped_body)"></p>
                        <router-link class="card" :to="`${items.data[1].slug}`">
                        Ver más</router-link>
                    </div>
                </div>
                

                <div class="col-md-3" v-if="items.data[2]">
                    <div :style="{ 'background-image' : 'url(\'' + items.data[2].cover + '\')' }" class="box pages_box m30" v-bind:class="{imgbox: items.data[2].cover}">
                        <div v-if="items.data[2].cover" class="overlay"></div>

                        <h4>{{ items.data[2].title }}</h4>
                        <p v-html="limitWords(items.data[2].totally_stripped_body)"></p>
                        <router-link class="card" :to="`${items.data[2].slug}`">
                        Ver más</router-link>
                    </div>
                </div>
            </div>

            <hr class="invis">

            <div class="row">
                <div class="col-md-6" v-if="items.data[3]">
                    <div :style="{ 'background-image' : 'url(\'' + items.data[3].cover + '\')' }" class="box pages_box" v-bind:class="{imgbox: items.data[3].cover}">
                        <div v-if="items.data[3].cover" class="overlay"></div>

                        <h4>{{ items.data[3].title }}</h4>
                        <p v-html="limitWords(items.data[3].totally_stripped_body)"></p>
                        <router-link class="card" :to="`${items.data[3].slug}`">
                        Ver más</router-link>
                    </div>
                </div><!-- end col -->

                <div class="col-md-6" v-if="items.data[4]">
                    <div :style="{ 'background-image' : 'url(\'' + items.data[4].cover + '\')' }" class="box pages_box " v-bind:class="{imgbox: items.data[4].cover}">
                        <div v-if="items.data[4].cover" class="overlay"></div>

                        <h4>{{ items.data[4].title }}</h4>
                        <p v-html="limitWords(items.data[4].totally_stripped_body)"></p>
                        <router-link class="card" :to="`${items.data[4].slug}`">
                        Ver más</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
                 
</template>

<script>
    import pageLink from './PageLink'

    export default {
        metaInfo() {
            return {
                title: `${this.getConfig('company_name')}`,
                meta: [
                    {name: 'description', content: this.getConfig('company_description')},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:title', content: this.getConfig('company_name')},
                    {name: 'twitter:description', content: this.getConfig('company_description')},
                    {name: 'twitter:image', content: `${this.getConfig('app_url')}/uploads/images/cover-default.png`},
                    {property: 'og:type', content: 'website'},
                    {property: 'og:site_name', content: this.getConfig('company_name')},
                    {property: 'og:url', content: `${this.getConfig('app_url')}`},
                    {property: 'og:title', content: this.getConfig('company_name')},
                    {property: 'og:description', content: this.getConfig('company_description')},
                    {property: 'og:image', content: `${this.getConfig('app_url')}/uploads/images/cover-default.png`}
                ]
            }
        },
        data() {
            return {
                items:  {
                    total: 0,
                    data: []
                },
            }
        },
        components: {
            pageLink
        },
        mounted() {
            this.getPages();
        },
        methods: {
            limitWords(str) {
                return this.words(str, 35);
            },

            words(textToLimit, wordLimit) {
                  if (!textToLimit) return;
                  let finalText = "";
                  let text2 = textToLimit.replace(/\s+/g, ' ');
                  let text3 = text2.split(' ');
                  let numberOfWords = text3.length;
                  let i = 0;

                  if (numberOfWords > wordLimit) {
                      for (i = 0; i < wordLimit; i++) {
                          finalText = finalText + " " + text3[i] + " ";
                      }

                      return finalText + "...";
                  }

                  return textToLimit;
              },
            getPages(page) {
                axios.get('/api/pages')
                    .then(response => response.data)
                    .then(response => {
                        this.items = response.pages;
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                    });
            },
             limitWords(str) {
                return helper.limitWords(str, 35);
            },
            getConfig(name) {
                return helper.getConfig(name);
            }
        }
    };
</script>

<style>
    .imgbox, .imgbox h4, .imgbox a{

        color: white !important;
    }



    .pages_box .overlay{

        z-index: -1 !important;
        background: url(/images/pattern.png) center center repeat rgba(0, 0, 0, 0.5) !important;
    }
</style>