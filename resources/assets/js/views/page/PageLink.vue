<template>

     <div class="col-md-6 col-lg-4 col-12">

            <figure class="snip1543">
              <img :src="'/'+page.cover" :alt="page.title"/>
              <figcaption>
                
                <p> {{ page.title }}</p>

              </figcaption>
               <router-link @click.native="showSpinner" :to="`${page.slug}`">
                           
                </router-link>
            </figure>
    </div>

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
