<template>
    <div class="form__group field">
        <select class="form-select " :aria-label="title" @change="$emit('input', $event.target.value)">
            <option class="form__field" selected>{{ title }}</option>
            <option class="form__field" v-for="(item, index) in initValues" :key="index" :value="item.key">{{ item.value }}
            </option>
        </select>
    </div>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            default: "یک مورد را انتخاب کنید."
        },
        initValues: {
            type: Array,
            default: []
        },
        value: {
            type: String,
            default: ''
        }
    },
}
</script>

<style scoped lang="scss">
$primary: rgba(var(--bs-primary-rgb));
$secondary: rgba(var(--bs-secondary-rgb));
$white: #fff;
$gray: #9b9b9b;

.form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;
}

.form-select {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    font-size: 1.3rem;
    color: $white;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown~.form__label {
        font-size: 1.3rem;
        cursor: text;
        top: 20px;
    }
}

.form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: $gray;
}

.form-select:focus {
    ~.form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: $primary;
        font-weight: 700;
    }

    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
}

/* reset input */
.form-select {

    &:required,
    &:invalid {
        box-shadow: none;
    }
}

.form__field {}
</style>