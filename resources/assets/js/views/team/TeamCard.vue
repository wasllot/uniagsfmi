<template>
    <router-link @click.native="showSpinner" class="card" :to="`${team.category.slug}/${team.slug}`">
        <div class="card-img"
             :class="[team.cover !== 'uploads/images/cover-default.png' ? 'cover-img' : '']">
            <img class="card-img-top img-responsive" :src="team.cover" :alt="team.title">
        </div>
        <div class="card-body">
            <h3 class="card-title team-title list-title">{{ team.title }}</h3>
            <h5 class="card-text list-text" v-html="limitWords(team.stripped_body)"></h5>
            <p class="card-text">
                <small class="text-muted card-caps">
                    {{ team.category.name }} / {{ team.created_at }}
                </small>
            </p>
        </div>
    </router-link>
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
