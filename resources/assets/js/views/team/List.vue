<template>
    <div class="container-fluid">
        <div class="row" v-for="items in splitted">
            <div class="col-12 m-b-20">
                <div v-if="items.length === 3" class="card-deck">
                    <team-card v-for="team in items" :team="team" :key="team.id"></team-card>
                </div>
                <div v-if="items.length === 2" class="card-deck">
                    <team-card v-for="team in items" :team="team" :key="team.id"></team-card>
                    <div class="card card-hidden"></div>
                </div>
                <div v-if="items.length === 1" class="card-deck">
                    
                    <ul class="masonry-list">

                        <team-card v-for="team in team" :team="team" :key="team.id"></team-card>
                        
                    </ul>
                    <div class="card card-hidden"></div>
                    <div class="card card-hidden"></div>
                </div>
            </div>
        </div>
        <pagination-record
                :page-length.sync="filterTeamForm.page_length"
                :records="teams"
                :show-page-length="false"
                @updateRecords="getTeams"
                @change.native="getTeams">
        </pagination-record>
    </div>
</template>

<script>
    import teamCard from './TeamCard'

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
                teams: {
                    total: 0,
                    data: []
                },
                splitted: [],
                filterTeamForm: {
                    page_length: 9
                }
            }
        },
        components: {
            teamCard
        },
        mounted() {
            this.getTeams();
        },
        methods: {
            getTeams(page) {
                if (typeof page !== 'number') {
                    page = 1;
                }
                let url = helper.getFilterURL(this.filterTeamForm);
                helper.showSpinner();
                axios.get('/api/teams?page=' + page + url)
                    .then(response => response.data)
                    .then(response => {
                        this.teams = response.teams;
                        this.splitted = this.chunk(response.teams.data, 3);
                        window.scrollTo(0, 0);
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
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
            getConfig(name) {
                return helper.getConfig(name);
            }
        },
        watch: {
            filterTeamForm: {
                handler(val) {
                    this.gets();
                },
                deep: true
            }
        }

    }
</script>