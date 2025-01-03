<script setup>
    const person = reactive({
        firstName: 'Pasha',
        lastName: 'Khorol'
    })
</script>

<template>
    <ul>
        <li class="list-item" v-for="(value, key) of person">
            {{ key }} - {{ value }}
        </li>
    </ul>
</template>

<style>

</style>