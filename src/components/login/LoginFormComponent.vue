<template>
    <div class="login_page_background_green login_page_form d-flex justify-content-start align-items-center flex-column">
      
      <div class="login_page_logo_content">
        <h1>
            FINANCE APP
        </h1>
      </div>

      <form method="post" 
            @submit.prevent="log()">
        
        <input type="email"
               v-model="userLogin.email" 
               autocomplete="email"
               class="login_page_input_green mt-5 mb-1" 
               placeholder="E MAIL"
        >
        <!-- :class="{'is-invalid': $v.userLogin.email.$error }" -->

        <strong class="text-danger mt-3" 
                v-if="!$v.userLogin.email.required">
                Esse campo é Obrigatório
        </strong>
        <strong class="text-danger mt-3" 
                v-if="!$v.userLogin.email.email">
                Digite um email válido
        </strong>
        
        <input type="password" 
               v-model="userLogin.password" 
               autocomplete="current-password"
               class="login_page_input_green mt-2 mb-1" 
               placeholder="PASSWORD"
        >

        <strong class="text-danger mt-3" 
                v-if="!$v.userLogin.password.required">
                Esse campo é Obrigatório
        </strong>
        <strong class="text-danger mt-3" 
                v-if="!$v.userLogin.password.minLength">
                O minimo são 6 caracteres
        </strong>
        
        <button class="btn btn-block login_page_button mt-3"
                :disabled="$v.userLogin.$invalid"
                @click="log()"
        >
          LOGAR
        </button>
      </form>
      
      <div class="d-flex justify-content-between w-100 p-2 login_page_form_helpers">
          <h3 @click="teste()">
              Cadastar
          </h3> 
          <h3>
              Esqueci a Senha
          </h3> 
      </div>

      <div v-show="['success','error'].includes(status)" 
           class="login_page_menssage_error mt-3">
        <h3>
          {{ Message }}
        </h3>
      </div>
    
    </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import { AjaxCenter } from '@/mixins/AjaxCenter'
export default {
    name: 'login-form-component',
    mixins: [AjaxCenter],
    props: {
        status: {required: true, type: String, default: 'init'}
    },
    created() {
        this.$v.userLogin.$touch() 
    },
    computed: {
        Message: function () {
            if(this.status === 'success') {
               return 'Login realizado com sucesso !!!'
            } else {
               return 'Usuário ou Senha Inválidos.'
            }
        }
    },
    data: () => ({
      userLogin: {
        email: '',
        password: '',
      }
    }),
    validations: {
        userLogin: {
            email: {
                required,
                email
            },
            password: {
                required,
                minLength: minLength(6)
            }
        }
    },
    methods: {
        log() {
            this.$emit('login', this.userLogin)
        },
        async teste() {
            let data = await this.requestGet('categories/')
            if(data?.status === 200) {
              console.info("data ", data.data)
            } else {
              console.info("Não Autorizado", data.data.Mensagem)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
  
  .login_page_title {
    color: white;
    font-size: 0em;
    font-family: 'Roboto', sans-serif;
  }

  .login_page_logo_content {
    box-shadow: 0px 4px 7px 1px #0808085c;
    border-radius: 0% 0% 100% 100%;
    background-color: #ffffff;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    color: #76b852;
    font-size: 1.2em;
    top: -2px;
    padding: 1em 2em;
  }
  
  .login_page {
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: white;
  }

  .login_page_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 30vh;
  }

  .login_page_form {
    padding: 2em;
    position: fixed;
    bottom: 0px;
    border-radius: 10% 10% 0% 0%;
    width: 100vw;
    height: 70vh;
  }

  .login_page_background_purple {
     background: #6441A5;  /* fallback for old browsers */
     background: -webkit-linear-gradient(to top, #2a0845, #6441A5);  /* Chrome 10-25, Safari 5.1-6 */
     background: linear-gradient(to top, #2a0845, #6441A5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .login_page_background_green {
    background: #76b852;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #8DC26F, #76b852);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #8DC26F, #76b852); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }

  .login_page_background_grey {
    background:whitesmoke;  /* fallback for old browsers */
  }

  .login_page_input_purple {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border-radius: 40px;
    display: block;
    width: 100%;
    height: calc(2em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: purple;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid purple;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus {
      -webkit-box-shadow: inset -1px 0px 6px 1px rgba(245,128,245,1);
      -moz-box-shadow: inset -1px 0px 6px 1px rgba(245,128,245,1);
      box-shadow: inset -1px 0px 6px 1px rgba(245,128,245,1);
      border: 1px solid purple;
      outline: 0;
    }
    &::placeholder{
      color: rgb(143, 142, 143);
    }
  }

  .login_page_input_green {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    border-radius: 40px;
    display: block;
    width: 100%;
    height: calc(2em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: rgb(89, 212, 7);
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgb(89, 212, 7);
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus {
      -webkit-box-shadow: inset -1px 0px 6px 1px rgb(89, 212, 7,1);
      -moz-box-shadow: inset -1px 0px 6px 1px rgb(89, 212, 7,1);
      box-shadow: inset -1px 0px 6px 1px rgb(89, 212, 7,1);
      border: 1px solid rgb(80, 194, 5);
      outline: 0;
    }
    &::placeholder{
      color: rgb(143, 142, 143);
    }
  }

  .login_page_button {
    border-radius: 25px;
    background-color:#6B1B6B;
    color: white;
    font-weight: bold;
    height: calc(2em + .75rem + 2px);
    padding: .375rem .75rem;
    font-family: 'Roboto', sans-serif;
    transition: background-color .15s ease-in-out;
    &:active{
      background-color: #551555;
    }
    &:hover{
      color: white;
    }
  }
  
  .login_page_form_helpers {
    color: white;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1.3em;
    &h3:active{
      color: yellow;
    }
  }

  .login_page_menssage_error {
    color: rgb(89, 212, 7);
    background-color: white;
    padding: 0.5em;
    border-radius: 20px;
    font-weight: bold;
    text-transform: uppercase;
    h3 {
      margin: 0px;
      font-size: .9em;
    }
  }
</style>