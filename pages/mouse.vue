<script setup lang="ts">
    import { useMouse, useTitle } from '@vueuse/core' 
    const {x, y} = useMouse()
    const isDark = usePreferredDark()
    const title = useTitle("Hello")
</script>

<template>
    <div>
        pos: {{ x }}, {{ y }}
        isDark: {{ isDark }}
        title: {{ title }}
    </div>
</template>