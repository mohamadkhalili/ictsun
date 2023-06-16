<template>
    <div>
        <div class="circle-bg">
            <div class="circle-color fixed">
                <div class="gradient-circle"></div>
                <div class="gradient-circle two"></div>
            </div>
        </div>
        <Navbar ref="navbar" />
        <PageHeader title="افزودن مقاله" />
        <div class="TAR DRTL container py-4">
            <public-file-input v-model="mainImage" class="py-3" key="image" placeholder="تصویر را انتخاب کنید."
                title="تصویر اصلی" />
            <public-input v-model="title" class="py-3" key="title" placeholder="عنوان را وارد کنید." title="عنوان اصلی" />
            <public-input v-model="briefDescription" class="py-3" key="description"
                placeholder="خلاصه توضیحات را وارد کنید." title="خلاصه توضیحات" />
            <public-input v-model="metaTitle" class="py-3" key="titleMeta" placeholder="عنوان متا را وارد کنید."
                title="عنوان اصلی متا" />
            <public-input v-model="metaDescription" class="py-3" key="descriptionMeta"
                placeholder="خلاصه توضیحات متا را وارد کنید." title="خلاصه توضیحات متا" />
            <public-select v-model="category" :initValues="initValues" title="دسته بندی مورد نظر را انتخاب کنید." />
            <public-input v-model="instagramLink" class="py-3" key="instagramLink"
                placeholder="لینک instagram را وراد کنید." title="لینک instagram" />
            <public-input v-model="tags" class="py-3" key="tags" placeholder="تگ ها را با (,) جدا کنید."
                title="تگ ها (با , جدا کنید.)" />
            <div class="py-3">
                <label style="font-size: 1rem;color: $primary;font-weight: 700;">متن</label>
                <CkeditorNuxt v-model="detailedDescription" />
            </div>
            <button type="button" @click="addBlog" class="btn primary btn-block btn-lg my-3">ارسال پست</button>
        </div>
        <Footer />
    </div>
</template>

<script>

export default {
    layout: "dark",
    middleware: "isAuthenticated",
    data() {
        return {
            initValues: [],
            mainImage: '',
            title: '',
            briefDescription: '',
            metaTitle: '',
            metaDescription: '',
            category: '',
            instagramLink: '',
            tags: '',
            detailedDescription: ''
        }
    },
    mounted() {
        this.$axios.get('/api/posts/categories/').then(req => {
            this.initValues = req.data.post_categories.map(item => { return { key: item.id, value: item.name_fa } })
        })
    },
    methods: {
        async addBlog() {
            const formData = new FormData()
            formData.append('file', this.mainImage[0])
            formData.append('title', this.title)
            formData.append('brief_description', this.briefDescription)
            formData.append('meta_title', this.metaTitle)
            formData.append('meta_description', this.metaDescription)
            formData.append('category', this.category)
            formData.append('instagram_link', this.instagramLink)
            formData.append('tags', this.tags.split(','))
            formData.append('detailed_description', this.detailedDescription)
            this.$axios.post('/api/posts/', formData)
        },

    },
}
</script>

<style>
.ck-content {
    height: 300px !important;
}
</style>