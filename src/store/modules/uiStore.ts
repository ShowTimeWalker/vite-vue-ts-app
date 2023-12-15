import { defineStore } from 'pinia'

export default defineStore({
    id: 'uiStore',
    state: () => ({
        panelKeys: [] as string[],
        pageKeys: [] as string[],
        isModalOpen: false as boolean,
        isLoading: false as boolean
    }),
    actions: {
    },
    getters: {
    }
})
