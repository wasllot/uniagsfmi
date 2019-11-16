<template>


<div class="contact-form" v-bind:class="{ 'contact-form-active': contactFormActive }">
		<div class="contact-btn-container">
			<button class="contact-btn" v-on:click="toggleContactForm">Contáctanos</button>
		</div>
		<div class="contact-head">
			<div class="contact-close-btn-container">
				<button class="contact-close-btn" v-on:click="closeContactForm">&times;</button>
			</div>
		</div>

		<div class="contact-body">
			<div class="row">
				  <div class="col-md-12 ">
		                    <span class="anchor" id="formContact"></span>
		                    <!-- form user info -->
		                    <div class="card card-outline-secondary">
		                        <div class="card-header">
		                            <h3 class="mb-0">Contacto</h3>
		                            <br>
		                            <span>{{message_status}}</span>
		                        </div>
		                        <div class="card-body">
		                            <form  @submit.prevent="submit" class="form" >
		                                <fieldset>
		                                    <label for="name2" class="mb-0">Nombre</label>
		                                    <div class="row mb-1">
		                                        <div class="col-lg-12">
		                                            <input type="text" class="form-control" id="fullname" v-model="form.title" required="">
		                                        </div>
		                                    </div>
		                                    <label for="email2" class="mb-0">Correo</label>
		                                    <div class="row mb-1">
		                                        <div class="col-lg-12">
		                                            <input type="text" id="email" placeholder="correo" v-model="form.email" class="form-control"  required="">
		                                        </div>
		                                    </div>
		                                    <label for="message2" class="mb-0">Mensaje</label>
		                                    <div class="row mb-1">
		                                        <div class="col-lg-12">
		                                            <textarea rows="6" id="message" placeholder="¿En qué podemos ayudarte?" v-model="form.message" class="form-control" required=""></textarea>
		                                        </div>
		                                    </div>
		                                    <button class="btn btn-default mx-1" v-on:click="closeContactForm">Cerrar</button>
		                                    <button type="submit" class="btn btn-secondary btn-lg float-right">Enviar</button>
		                                </fieldset>
		                            </form>
		                        </div>
		                    </div>
		                    <!-- /form user info -->

		                </div>
			</div>

		</div>
</div>
</template>

<script>
    export default {
       data: function() {
		return {
			contactFullName: '',
			contactEmail: '',
			contactMessage: '',
			contactFormActive: false,
			message_status: '',
			form: new Form({
				email: '',
				title: '',
				message: ''
			}),
		}
		},
		methods: {
			openContactForm: function() {
				this.contactFormActive = true;
			},
			closeContactForm: function() {
				this.contactFormActive = false;
			},
			toggleContactForm: function() {
				if (this.contactFormActive === false) {
					this.openContactForm();
				} else {
					this.closeContactForm();
				}
			},
			submit: function() {
				var message = '';
				this.message_status = '';
				
				if (this.form.title != '') {
					message += 'Hola ' + this.form.title + '!\n\n';
				}
				
				if (this.form.email == '') {
					this.message_status = 'El correo es obligatorio';
					
					return false;
				}
				
				if (this.form.message == '') {
					this.message_status = 'El mensaje es obligatorio';
					
					return false;
				}

			    this.form.post('/api/sendMail')
                .then(response => {
                    toastr.success(response.action);
                    this.closeContactForm();
                })
                .catch(error => {
                    helper.showErrorMsg(error);
                });


				
				// message += 'Tu correo es: ' + this.contactEmail + '!\n\n';
				// message += 'Tu mensaje es: "' + this.contactMessage + '"!\n';
				// message += 'Gracias por habernos contactado, estaremos al tanto!\n\n';
				
				// this.message_status = message;
				
				// Clear the form after sending
				// this.contactFullName = '';
				// this.contactEmail    = '';
				// this.contactMessage  = '';
				
				
			}
		}
    }
</script>

<style>
    :root {
	--color: #ffffff;
	--font-size: 16px;
	--font-family: Montserrat, sans-serif;
	--background-color: #2f2f2f;
	--padding: 15px;
	--bounce: cubic-bezier(0.2, 0.9, 0.5, 2);
	--size-s: 480px;
	--size-m: 568px;
	--size-l: 992px;
	
	--contact-form-background-color: var(--background-color);
	--contact-form-width: 100%;
	--contact-form-transition: left 200ms ease-out;
	--contact-form-size-m-width: 480px;
	
	--contact-form-active-size-m-left: var(--contact-form-size-m-width);
	
	--contact-btn-container-width: 140px;
	--contact-btn-container-height: 40px;
	--contact-btn-container-transition: height 300ms var(--bounce);
	--contact-btn-container-hover-height: 60px;
	
	--contact-btn-color: var(--color);
	--contact-btn-background-color: var(--background-color);
	
	--contact-close-btn-container-width: 48px;
	--contact-close-btn-container-height: 48px;
	
	--contact-close-btn-color: var(--color);
	--contact-close-btn-font-size: 40px;
	--contact-close-btn-transition: transform 300ms var(--bounce);
	
	--contact-body-padding: var(--padding);
	
	--form-control-padding-bottom: var(--padding);
	
	--floating-label-input-padding: 8px;
	--floating-label-input-background-color: #ffffff;
	
	--floating-label-input-label-color: #808080;
	--floating-label-input-label-transition: font-size 150ms ease-out,
		top 150ms ease-out;
	--floating-label-input-label-top: 20px;
	--floating-label-input-label-left: var(--floating-label-input-padding);
	--floating-label-input-label-focused-top: calc(
		var(--floating-label-input-label-top) - 0.8em
	);
}

.contact-form {
	font-family: var(--font-family);
	font-size: var(--font-size);
	background-color: #fff;
	width: var(--contact-form-width);
	height: 100%;
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 100%;
	transition: var(--contact-form-transition);
	z-index:99999999;
}

.contact-form-active {
	left: 0;
}

.contact-btn-container {
	width: var(--contact-btn-container-width);
	height: var(--contact-btn-container-height);
	position: absolute;
	top: calc(50% - calc(var(--contact-btn-container-width) / 2));
	transform-origin: top left;
	transform: rotate(90deg) scale(-1) translate(-100%, -100%);
	transition: var(--contact-btn-container-transition);
}

.contact-btn-container:hover {
	height: var(--contact-btn-container-hover-height);
}

.contact-btn {
	color: var(--contact-btn-color);
	font-family: inherit;
	font-weight: bold;
	text-decoration: none;
	background-color: #4CAF50;
	width: 100%;
	height: 100%;
	border: none;
	padding: 0;
	margin: 0;
	outline: none;
	cursor: pointer;
}

.contact-head {
	display: flex;
	justify-content: flex-end;
}

.contact-close-btn-container {
	text-align: center;
	width: var(--contact-close-btn-container-width);
	height: var(--contact-close-btn-container-height);
	align-self: flex-end;
}

.contact-close-btn {
	color: var(--contact-close-btn-color);
	font-size: var(--contact-close-btn-font-size);
	font-weight: bold;
	text-decoration: none;
	background-color: transparent;
	width: 100%;
	height: 100%;
	border: 0;
	padding: 0;
	margin: 0;
	outline: none;
	cursor: pointer;
	transition: var(--contact-close-btn-transition);
}

.contact-close-btn:hover {
	transform: scale(1.5);
}

.contact-body {
	padding: var(--contact-body-padding);
}

.form-control {
	padding-bottom: var(--form-control-padding-bottom);
}

.form-control:last-child {
	padding-bottom: 0;
}

.floating-label-input {
	background-color: var(--floating-label-input-background-color);
	padding: var(--floating-label-input-padding);
	position: relative;
}

.floating-label-input input[type="text"],
.floating-label-input input[type="email"],
.floating-label-input textarea {
	font-family: inherit;
	font-size: inherit;
	width: 100%;
	border: 0;
	padding: 0;
	margin: 0;
	outline: 0;
	padding-top: var(--floating-label-input-label-top);
	vertical-align: top;
	resize: none;
}

.floating-label-input label {
	color: var(--floating-label-input-label-color);
	position: absolute;
	top: calc(var(--floating-label-input-label-top) + 8px);
	left: var(--floating-label-input-label-left);
	transition: var(--floating-label-input-label-transition);
}

.floating-label-input input[type="text"]::placeholder,
.floating-label-input input[type="email"]::placeholder,
.floating-label-input textarea::placeholder {
	color: transparent;
}

.floating-label-input input[type="text"]:focus + label,
.floating-label-input input[type="email"]:focus + label,
.floating-label-input textarea:focus + label,
.floating-label-input input[type="text"]:not(:placeholder-shown) + label,
.floating-label-input input[type="email"]:not(:placeholder-shown) + label,
.floating-label-input textarea:not(:placeholder-shown) + label {
	font-size: 0.8em;
	top: var(--floating-label-input-label-focused-top);
}



.text-right {
	text-align: right;
}

.btn {
	padding: var(--btn-padding);
	margin: 0;
	border: 0;
	outline: none;
	transition: var(--btn-transition);
}

.btn:hover {
	transform: scale(1.15);
}

:root {
	/* btn */
	--btn-padding: 10px;
	--btn-transition: background-color 300ms ease-out,
		transform 300ms var(--bounce);
	/* btn-default */
	--btn-default-color: var(--color);
	--btn-default-background-color: #4f4f4f;
	--btn-default-hover-background-color: #5f5f5f;
	--btn-default-active-background-color: #3f3f3f;
	/* .btn-primary */
	--btn-primary-color: var(--color);
	--btn-primary-background-color: #0d61c1;
	--btn-primary-hover-background-color: #1e72d2;
	--btn-primary-active-background-color: #0c50b0;
}

.btn-default {
	color: var(--btn-default-color);
	background-color: var(--btn-default-background-color);
}

.btn-default:hover {
	background-color: var(--btn-default-hover-background-color);
}

.btn-default:active {
	background-color: var(--btn-default-active-background-color);
}

.btn-primary {
	color: var(--btn-default-color);
	background-color: var(--btn-primary-background-color);
}

.btn-primary:hover {
	background-color: var(--btn-primary-hover-background-color);
}

.btn-primary:active {
	background-color: var(--btn-primary-active-background-color);
}



@media screen and (min-width: 520px) {
	.contact-form {
		width: var(--contact-form-size-m-width);
	}

	.contact-form-active {
		left: calc(100% - var(--contact-form-active-size-m-left));
	}
}


.filler-1 {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.filler-2 {
	font-family: var(--font-family);
	text-align: center;
	padding: 0;
	margin: 0;
}

</style>