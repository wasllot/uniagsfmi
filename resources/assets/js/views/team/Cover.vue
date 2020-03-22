<template>
    <div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{{ trans('team.teams') }}</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/home">{{ trans('general.home') }}</router-link>
                    </li>
                    <li class="breadcrumb-item">
                        <router-link to="/team">{{ trans('team.teams') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ trans('team.cover') }}</li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <team-sidebar :statistics="statistics"></team-sidebar>
                            <div class="col-10 col-lg-10 col-md-10">
                                <h4 class="card-title">{{ trans('team.cover') }}</h4>
                                <h6 class="card-subtitle">
                                    {{ team.title }}
                                </h6>
                                <upload-image
                                        id="cover"
                                        :upload-path="`/team/cover/${id}`"
                                        :remove-path="`/team/cover/remove/${id}`"
                                        :image-source="cover.team">
                                </upload-image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import teamSidebar from './TeamSidebar'
    import uploadImage from '../../components/UploadImage'

    export default {
        components: {teamSidebar, uploadImage},
        data() {
            return {
                id: '',
                slug: '',
                team: '',
                cover: {
                    team: ''
                },
                statistics: {
                    published: 0,
                    draft: 0
                }
            };
        },
        mounted() {
            if (!helper.hasPermission('access-page')) {
                helper.notAccessibleMsg();
                this.$router.push('/home');
            }
            this.slug = this.$route.params.slug;
            axios.post('/api/team/statistics')
                .then(response => response.data)
                .then(response => {
                    this.statistics.published = response.published;
                    this.statistics.draft = response.draft;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });
            helper.showSpinner();
            axios.get('/api/team/' + this.slug)
                .then(response => response.data)
                .then(response => {
                    this.id = response.team.id;
                    this.team = response.team;
                    if (response.team.cover !== 'uploads/images/cover-default.png') {
                        this.cover.team = response.team.cover;
                    }
                    helper.hideSpinner();
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                    this.$router.push('/team');
                    helper.hideSpinner();
                })
        }
    }
</script>
