<template>

<div class="body">
  <div id="login">
        <h3 class="text-center text-white pt-5">{{getConfig('company_name')}}</h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" @submit.prevent="submit"
                          @keydown="loginForm.errors.clear($event.target.name)">
                            <h3 class="text-center text-info">Ingresar</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">{{trans('auth.email')}}</label><br>
                                <input type="text" name="username" :placeholder="trans('auth.email')" v-model="loginForm.email" id="username" class="form-control">
                                <show-error :form-name="loginForm" prop-name="email"></show-error>
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">{{trans('auth.password')}}</label><br>
                                <input type="password" name="password" :placeholder="trans('auth.password')" v-model="loginForm.password" id="password" class="form-control">
                                <show-error :form-name="loginForm" prop-name="password"></show-error>
                            </div>
                            <div class="form-group">
                                 <button-spinner
                                        :btn-text="trans('auth.sign_in')"
                                        :class="'btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light'"
                                        :is-loading="isLoading"
                                        :disabled="isLoading">
                                </button-spinner>
                            </div>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    </div>  
</div>

</template>

<script>
    import buttonSpinner from '../../components/ButtonSpinner';

    export default {
        data() {
            return {
                loginForm: new Form({
                    email: '',
                    password: ''
                }),
                isLoading: false
            }
        },
        components: {
            buttonSpinner
        },
        computed: {
            getBackground() {
                if (helper.getConfig('background')) {
                    return '/' + helper.getConfig('background');
                }

                return '/uploads/config/background/background.jpg'
            }
        },
        methods: {
            submit() {
                this.isLoading = true;
                this.loginForm.post('/api/auth/login')
                    .then(response => {
                        localStorage.setItem('auth_token', response.token);
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('auth_token');
                        this.$store.dispatch('setAuthStatus');
                        this.$store.dispatch('setLastActivity');
                        if (helper.getConfig('two_factor_security') && response.two_factor_code) {
                            this.$store.dispatch('setTwoFactorCode', response.two_factor_code);
                            this.$router.push('/auth/security');
                        } else {
                            this.$store.dispatch('resetTwoFactorCode');
                            this.$router.push('/home');
                        }
                    })
                    .catch(error => {
                        helper.showErrorMsg(error);
                        this.isLoading = false;
                    });
            },
            getConfig(config) {
                return helper.getConfig(config);
            }
        }
    }
</script>
