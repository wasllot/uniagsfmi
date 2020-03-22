<template>
    <div class="col-md-4">
                <router-link @click.native="showSpinner"  :to="`/team/${team.slug}/details`">

                <div class="item zoom text-center">
                    
                    <img class="img-fluid" :class="[team.cover !== 'uploads/images/cover-default.png' ? 'cover-img' : '']"  :src="team.cover" alt="Image">

                    <router-link @click.native="showSpinner" :to="`/team/${team.slug}/details`" class="btn btn-arrow">

                       {{ team.title }}
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>

                    </router-link>

                </div>



        </router-link>
    </div>
</template>

<script>
    export default {
        props: ['team'],
        methods: {
            limitWords(str) {
                return helper.limitWords(str, 35);
            },
            showSpinner() {
                return helper.showSpinner();
            }
        }
    }
</script>
