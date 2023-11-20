import { defineStore } from 'pinia'

export default defineStore({
    id: 'preferenceStore',
    state: () => ({
        theme: 'light' as 'light' | 'dark', // Example theme values
        language: 'en' as string, // Example language values
        // Add other preference fields here
    }),
    actions: {
        setTheme(theme: 'light' | 'dark') {
            this.theme = theme
        },
        setLanguage(language: string) {
            this.language = language
        },
        // Add other actions to manage preferences
    },
})
