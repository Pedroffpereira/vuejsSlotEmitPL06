import { defineStore } from "pinia";

export const useUserListStore = defineStore("UserList", {
    state: () => ({
        users: [],
        user: {
            id: "",
            username: "",
            email: "",
            password: ""
        }
    }),
    getters: {
        getUsers: (state) => state.users,
        getUserGet: (state) => state.user
    },
    actions: {
        addUser(user) {
            this.users.push(user)
        },
        getUser(id) {

            this.user = this.users.find((user) => user.id === id);
        },
        deleteUser(id) {
            this.users = this.users.filter((user) => user.id !== id)
        },
        editUsers(id, user) {
            this.deleteUser(id);
            this.addUser(user)
        }
    }
})