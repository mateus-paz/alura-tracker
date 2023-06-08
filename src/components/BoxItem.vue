<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BoxItem',
    data () {
        return {
            estilos: {
                // também poderia ser 'background-color'
                backgroundColor: '#faf0ca'
            }
        }
    }
})
</script>
