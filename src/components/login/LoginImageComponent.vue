<template>
    <div class="login_page_logo">
        <img width="80%" 
             class="mt-4 mb-2" 
             v-if="status === 'init'" 
             src="~@/assets/img/logo.gif"
        />

        <img width="80%" 
            class="mt-4 mb-2" 
            v-else-if="status === 'error'" 
            src="~@/assets/img/error.gif"
        />

        <img width="80%" 
            class="mt-4 mb-2" 
            v-else 
            src="~@/assets/img/success.gif"
        />
    </div>
</template>

<script>
export default {
    name: 'login-image-component',
    props: {
        status: {required: true, type: String, default: 'init'}
    }
}
</script>

<style lang="scss" scoped>
  .login_page_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 30vh;
  }
</style>