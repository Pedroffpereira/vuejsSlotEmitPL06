<script>
import { useUserListStore } from '../../../store/user.js'
import { mapState } from 'pinia'
import  userCard  from './userCard.vue'
export default {
    computed: {
        ...mapState(useUserListStore, ['users']),
    },
    components: {
        userCard
    }

}
</script>
<template>
    <div>
        <userCard v-for="user in users" :item="user" />  
    </div>
</template>