<script>

import Button from "../form/button.vue"
import { useUserListStore } from '../../../store/user.js'
import { mapActions } from 'pinia'
export default {
    props: {
        item: {
            id: String,
            username: String,
            email: String,
            password: String
        }
    },
    components: {
        Button
    },
    methods: {
        onClickDelete(id) {
            this.deleteUser(id);
        },
        onClickEdit(id) {
            this.getUser(id);
        },
        ...mapActions(useUserListStore, ['deleteUser', 'getUser']),
    },
}
</script>

<template>
    <div class="card">
        <div class="id">{{ item.id }}</div>
        <div class="title">{{ item.username }}</div>
        <div class="email">{{ item.email }}</div>
        <div class="password">{{ item.password }}</div>

        <Button @click="onClickEdit(item.id)">Edit</Button>
        <Button @click="deleteUser(item.id)">Apagar</Button>
    </div>
</template>