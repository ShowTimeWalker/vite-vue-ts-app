import { defineStore } from 'pinia'

export default defineStore({
    id: 'uiStore',
    state: () => ({
        activeTab: 'home' as string,
        isModalOpen: false as boolean,
        isLoading: false as boolean,
        panelKey: ['Resource'],
        optionKey: ['Coupon'],
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
        updatePanelKey(key: string) {
            this.panelKey.splice(0, 1, key)
        }
    },
})
