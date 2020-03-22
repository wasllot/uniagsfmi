<template>

    <div class="col-md-4">

        <router-link @click.native="showSpinner" class="card" :to="`${page.slug}`">
            <div class="card-img"
                 :class="[page.cover !== 'uploads/images/cover-default.png' ? 'cover-img' : '']">
                <img class="card-img-top img-responsive" :src="page.cover" :alt="page.title">
            </div>
            <div class="card-body">
                <h3 class="card-title page-title list-title">{{ page.title }}</h3>
                <h5 class="card-text list-text" v-html="limitWords(page.stripped_body)"></h5>
                <p class="card-text">
                    <small class="text-muted card-caps">
                         {{ page.created_at }}
                    </small>
                </p>
            </div>
        </router-link>
          
    </div>

</template>

<script>
    export default {
        props: ['page'],
        methods: {
            showSpinner() {
                return helper.showSpinner();
            },
             limitWords(str) {
                return helper.limitWords(str, 35);
            },
        }
    }
</script>
