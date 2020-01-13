<template>

<!--      <div class="col-md-6 col-lg-4 col-12">

            <figure class="snip1543">
              <img :src="'/'+page.cover" :alt="page.title"/>
              <figcaption>
                
                <p> {{ page.title }}</p>

              </figcaption>
               <router-link @click.native="showSpinner" :to="`${page.slug}`">
                           
                </router-link>
            </figure>
    </div> -->

 
        <article class="portfolio-item device tablet left flex-order-tablet_0 responsive-design video-design device-list">
            <div class="device-hardware">
                <router-link @click.native="showSpinner" :to="`${page.slug}`" class="hover-trigger">
                    <span class="device-screen" :style="{ 'background-image': 'url(' + page.cover + ')' }">
                        <span class="hover-name">{{ page.title }}</span>
                    </span>
                    <i class="hover-icon fa fa-eye"></i>
                </router-link>
            </div>
        </article>
      


</template>

<script>
    export default {
        props: ['page'],
        methods: {
            showSpinner() {
                return helper.showSpinner();
            }
        }
    }
</script>
