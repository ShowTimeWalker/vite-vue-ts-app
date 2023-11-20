import { defineStore } from 'pinia'

export default defineStore({
    id: 'dataStore',
    state: () => ({
        cachedData: {} as Record<string, any>,
        filteredData: [] as any[],
    }),
    actions: {
        cacheData(data: Record<string, any>) {
            this.cachedData = data
        },
        filterData(filter: string) {
            // Process and filter data here
            // Assign filtered data to this.filteredData
            this.filteredData = this.cachedData[filter]
        },
    },
})
