import { defineStore } from 'pinia'

export default defineStore({
    id: 'uiStore',
    state: () => ({
        activeTab: 'home' as string,
        isModalOpen: false as boolean,
        isLoading: false as boolean,
    }),
    actions: {
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        },
        setLoading(state: boolean) {
            this.isLoading = state
        },
    },
})
