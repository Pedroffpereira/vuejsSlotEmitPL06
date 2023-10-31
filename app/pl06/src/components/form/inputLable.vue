<script>
export default {
    data() {
        return {
            data: this.dataProp
        }
    },
    props: {
        dataProp: "",
    },
    watch: {
        dataProp() {
            this.data = this.dataProp
        }
    }
}
</script>
<template>
    <div>
        <label for="">
            <slot></slot>
        </label>
        <input type="text" @input="$emit('getData', data)" v-model="data">
        <small class="error">
            <slot name="error"></slot>
        </small>
    </div>
</template>
<style scoped>
div{
    margin: 10px;
}
.error {
    color: red;
}

label {
    color: grey;
}

input {
    width: 100%;
    border-radius: 0px;
}
</style>