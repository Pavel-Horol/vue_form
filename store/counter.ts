export const useCounterStore = defineStore('couter', {
    state: () => ({
        count: 0
    }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        }
    }
})