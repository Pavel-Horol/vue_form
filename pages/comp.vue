<script>
    import { useCounter } from '~/composables/useCounter'; 
    const { count, increment, decrement } = useCounter()
</script>
<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>