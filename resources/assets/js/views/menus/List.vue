<template>
    <div>
        <div class="row page-titles">
            <div class="col-md-6 col-8 align-self-center">
                <h3 class="text-themecolor m-b-0 m-t-0">{{ trans('menu.menus') }}</h3>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <router-link to="/home">{{ trans('general.home') }}</router-link>
                    </li>
                    <li class="breadcrumb-item active">{{ trans('menu.menus') }}</li>
                </ol>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-12 col-lg-12 col-md-12">
                                <div class="row">
                                    <div class="col-12 col-sm-4 col-md-4">
                                        <h4 class="card-title">{{ trans('menu.add_new_menu') }}</h4>
                                        <menu-form @completed="getMenus"></menu-form>

                                    </div>
                                    <div class="col-12 col-sm-8 col-md-8">
                                        <h4 class="card-title">{{ trans('menu.menu_list') }}</h4>
                                        <h6 class="card-subtitle" v-if="menus">
                                            {{ trans('general.total_result_found',{'count' : menus.total}) }}</h6>
                                        <h6 class="card-subtitle" v-else>{{ trans('general.no_result_found') }}</h6>
                                        <div class="table" v-if="menus.total">
                                            <table class="table">
                                                <thead>
                                                <tr>
                                                    <th>{{ trans('menu.name') }}</th>
                                                    <th>{{ trans('menu.slug') }}</th>
                                                    <th>{{ trans('menu.parent') }}</th>
                                                    <th class="table-option">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr v-for="menu in menus.data">
                                                    <td v-text="menu.name"></td>
                                                    <td v-text="menu.slug"></td>
                                                    <td v-text="menu.parent_id"></td>
                                                    <td class="table-option">
                                                        <div class="btn-group">
                                                            <button class="btn btn-danger btn-sm" :key="menu.id"
                                                                    v-confirm="{ok: confirmDelete(menu)}"
                                                                    v-tooltip="trans('menu.delete_menu')">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <pagination-record
                                                :page-length.sync="filterRoleForm.page_length"
                                                :records="menus"
                                                @updateRecords="getMenus"
                                                @change.native="getMenus">
                                        </pagination-record>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import menuForm from './Form'

    export default {
        components: {menuForm},
        data() {
            return {
                menus: {
                    total: 0,
                    data: []
                },
                name:'',
                filterRoleForm: {
                    page_length: helper.getConfig('page_length')
                }
            };
        },
        mounted() {
            if (!helper.hasPermission('access-configuration')) {
                helper.notAccessibleMsg();
                this.$router.push('/home');
            }
            this.getMenus();
        },
        methods: {
            getMenus(page) {
                if (typeof page !== 'number') {
                    page = 1;
                }
                let url = helper.getFilterURL(this.filterRoleForm);
                helper.showSpinner();
                axios.get('/api/menu?page=' + page + url)
                    .then(response => response.data)
                    .then(response => {
                        this.menus = response;
                        helper.hideSpinner();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                        helper.hideSpinner();
                    });
            },

            getMenuName(id){

                axios.get('/api/menu/' + id)
                    .then(response => response.data)
                    .then(response => {

                       return response.name;
                       
                    })
                    .catch(error => {

                         return 'Error'; 
                    });

            },
            confirmDelete(menu) {
                return dialog => this.deleteRole(menu);
            },
            deleteRole(menu) {
                axios.delete('/api/menu/' + menu.id)
                    .then(response => response.data)
                    .then(response => {
                        toastr.success(response.message);
                        this.getMenus();
                    })
                    .catch(error => {
                        helper.showDataErrorMsg(error);
                    });
            }
        }
    }
</script>
