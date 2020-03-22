<template>
    <form @submit.prevent="storeMenu" @keydown="menuForm.errors.clear($event.target.name)">
        <div class="form-group">
            <label>{{ trans('menu.name') }}</label>
            <input class="form-control" type="text" value="" v-model="menuForm.name" name="name"
                   :placeholder="trans('menu.name')">
            <show-error :form-name="menuForm" prop-name="name"></show-error>
        </div>


        <div class="form-group">
            <label>{{ trans('menu.parent') }}</label>
            <select class="form-control custom-select" name="parent_id"
                    v-model="menuForm.parent_id">
                <option value="">{{ trans('menu.select_menu') }}</option>
                <option v-for="menu in menus" :value="menu.value">
                    {{ menu.text }}
                </option>
            </select>
            <show-error :form-name="menuForm" prop-name="parent_id"></show-error>
        </div>
        
        <button type="submit" class="btn btn-info waves-effect waves-light pull-right">
            <span>{{ trans('general.save') }}</span>
        </button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                menuForm: new Form({
                    'name': '',
                    'parent_id': 0
                }),
                menus: []
            };
        },
        mounted() {

            axios.get('/api/menus/pre-requisite')
                .then(response => response.data)
                .then(response => {
                    this.menus = response;
                })
                .catch(error => {
                    helper.showDataErrorMsg(error);
                });
        },
        methods: {
            storeMenu() {
                this.menuForm.post('/api/menu')
                    .then(response => {
                        toastr.success(response.message);
                        this.$emit('completed')
                    })
                    .catch(error => {
                        helper.showErrorMsg(error);
                    });
            }
        }
    }
</script>
