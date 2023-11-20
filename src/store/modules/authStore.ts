import { defineStore } from 'pinia'

export default defineStore({
    id: 'authStore',
    state: () => ({
        user: null as null | User,
        isLoggedIn: false as boolean,
        authToken: null as null | string,
    }),
    actions: {
        loginUser(user: User, authToken: string) {
            this.user = user
            this.isLoggedIn = true
            this.authToken = authToken
        },
        logoutUser() {
            this.user = null
            this.isLoggedIn = false
            this.authToken = null
        },
    },
})

interface User {
    name: string
    email: string
    // Add other user-related fields here
}
