import requestMethods from '@/utils/RequestsMethods'
export const AjaxCenter = {
    data: () => ({
    }),
    methods: {
        // método padrão para GET
        requestGet(url, data=null) {
            return requestMethods.requestGet(url, data)
        },

        // método padrão para POST
        requestPost(url, data) {
            return requestMethods.requestPost(url, data)
        },

        // método padrão para PUT
        requestPut(url, data) {
            return requestMethods.requestPut(url, data)
        },

        // método padrão para DELETE
        requestDelete(url, data) {
            return requestMethods.requestDelete(url, data)
        },

        // método padrão para requisição de Arquivos
        requestFile(url, data) {
            return requestMethods.requestFile(url, data)
        },
    }
}