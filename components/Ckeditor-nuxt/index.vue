<template>
    <ckeditor :editor="editor" :value="value" :config="editorConfig" :tagName="tagName" :disabled="disabled"
        @input="event => $emit('input', event)" />
</template>
<script>
let ClassicEditor
let CKEditor
let axios

if (process.client) {
    ClassicEditor = require('~/plugins/ckeditor5-build-classic/build/ckeditor')
    CKEditor = require('@ckeditor/ckeditor5-vue2')


} else {
    CKEditor = { component: { template: '<div></div>' } }
}


export default {
    components: {
        ckeditor: CKEditor.component
    },
    props: {
        value: {
            type: String,
            required: false
        },
        tagName: {
            type: String,
            required: false,
            default: 'div'
        },
        disabled: {
            type: Boolean,
            required: false,
        },
        uploadUrl: {
            type: String,
            required: false
        },
        config: {
            type: Object,
            required: false,
            default: function () {
            }
        }
    },
    data() {
        return {
            editor: ClassicEditor,
            editorConfig: {
                extraPlugins: [this.uploadAdapterPlugin]
            } || {}
        }
    },
    mounted() {
        axios = this.$axios
    },
    methods: {
        uploadAdapterPlugin(editor) {
            editor.plugins.get('FileRepository').createUploadAdapter = loader => {
                return new MyCustomUploadAdapter(loader) // Replace with your custom upload adapter
            }
        }
    }
};

class MyCustomUploadAdapter {
    constructor(loader) {
        this.loader = loader
    }

    upload() {
        return this.loader.file.then(file => {
            return new Promise((resolve, reject) => {
                const formData = new FormData()
                formData.append('file', file)

                // Make a POST request to your server-side upload endpoint
                axios.post('/api/upload/', formData)
                    .then(response => {
                        // Get the uploaded file URL from the server response
                        const fileUrl = response.data
                        fileUrl[160] = 'http://192.168.114.152:8000' + fileUrl[160]
                        fileUrl.default = 'http://192.168.114.152:8000' + fileUrl.default
                        // Resolve the promise with the file URL
                        console.log(fileUrl);
                        resolve(fileUrl)
                    })
                    .catch(error => {
                        // Handle upload errors
                        reject(error)
                    })
            })
        })
    }
}
</script>
<style scoped>
.ck-editor {
    height: 100% !important;
    min-height: 100% !important;
}

.ck-editor__main {
    height: 100% !important;
    min-height: 100% !important;

}

.ck-editor__main * {
    height: 100% !important;
    min-height: 100% !important;

}
</style>