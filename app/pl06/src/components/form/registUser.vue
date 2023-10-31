<script>
import inputLable from "./inputLable.vue"
import Button from "./button.vue"
import { useUserListStore } from '../../../store/user.js'
import { mapActions, mapState } from 'pinia'
import { v4 as uuidv4 } from "uuid";

export default {
    data() {
        return {

            id: this.user?.id || '',
            username: this.user?.username || '',
            email: this.user?.email || '',
            password: this.user?.password || '',
            error: Object
        }
    },
    watch: {
        user(){
            this.id= this.user.id;
            this.username= this.user.username;
            this.email= this.user.email;
            this.password= this.user.password;
        }
    },
    computed: {
        ...mapState(useUserListStore, ['user'])
    },
    components: {
        inputLable
    },
    methods: {
        reset() {
            this.id = "";
            this.username = "";
            this.password = "";
            this.email = "";
            return;
        },
        onsubmit() {

            if (this.error.username == '' || this.error.email == '' || this.error.password == '') {
                
                if (this.id == "") {
                    const user = {
                        id: uuidv4(),
                        username: this.username,
                        email: this.email,
                        password: this.password
                    };
                    this.addUser(user)
                } else {
                    const user = {
                        id: this.id,
                        username: this.username,
                        email: this.email,
                        password: this.password
                    };
                    this.editUsers(this.id, user)
                }
            }

            return;
        },
        ...mapActions(useUserListStore, ['addUser', 'editUsers'])
    },
}
</script>
<template>
    <form action="">
        <inputLable :dataProp="username" v-on:getData="(data) => {
            const usernameValidation = /^([^0-9]*)$/;
            if (!data.match(usernameValidation)) {
                this.error.username = 'Username invalid';
                this.email = '';
                return;
            }
            this.error.username = '';
            this.username = data;
        }">

            <template v-slot:default>
                Username
            </template>
            <template v-slot:error>
                {{ error.username }}
            </template>
        </inputLable>
        <inputLable :dataProp="email" v-on:getData="(data) => {
            const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!data.match(mailFormat)) {
                this.error.email = 'Email invalid'
                this.email = '';
                return;
            }
            this.error.email = '';
            this.email = data;
        }">
            <template v-slot:default>
                email
            </template>
            <template v-slot:error>
                {{ error.email }}
            </template>
        </inputLable>
        <inputLable :dataProp="password" v-on:getData="(data) => {
            this.password = data;
        }">
            <template v-slot:default>
                Password
            </template>
            <template v-slot:error>
                {{ error.password }}
            </template>
        </inputLable>
        <Button @click.prevent="reset">
            resert
        </Button>
        <Button @click.prevent="onsubmit">
            submit
        </Button>
    </form>
</template>