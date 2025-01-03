<script setup>
import { ref, computed, watch } from 'vue'

const placeholder = ref('some placeholder')
const list = ref([])
const inpV = ref('')
const isActive = ref(false)  // Теперь правильно создаем реактивную переменную

function handleEnter () {
    if (inpV.value !== '') {
        list.value.push(inpV.value)
        inpV.value = ''
    }
}

function toUpper(item) {
    return item.toUpperCase()
}

const cL = computed(() => {
    console.log('computed')
    return list.value.length ** 2 ** 2 ** 2 
})

// Следим за list и обновляем isActive реактивно
watch(list, () => {
    isActive.value = list.value.length > 1
})
</script>

<template>
    <div>
        <h1 :style="{color: inpV.length < 5 ? 'red' : 'blue',
            fontSize: inpV.length < 3 ? '2rem' : '4rem'
        }">Input your task</h1>
        <input 
            type="text" 
            v-model="inpV"  
            :placeholder="placeholder"
            @keypress.enter="handleEnter"
        >
        <div v-for="(item, idx) in list" :key="idx">
            {{ idx + 1 }}. {{ toUpper(item) }}
        </div>
        <hr />
        <li :class="{'cool-class': isActive}">
            <strong>{{cL}}</strong>
        </li>
    </div>
</template>

<style>
    .cool-class {
        color: green;
        background: #000;
        
    }
</style>
