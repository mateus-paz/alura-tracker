<template>
  <div class="notificacoes">
    <article 
      class="message" 
      :class="contexto[notificacao.tipo]"
      v-for="notificacao in notificacoes" 
      :key="notificacao.id">

      <div class="message-header">{{ notificacao.titulo }}</div>

      <div class="message-body">{{ notificacao.texto }}</div>
    
    </article>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue';
import {TipoNotificacao} from '@/interfaces/INotificacao'

export default defineComponent({
  name: 'NotificacaoItem',
  data(){
    return {
      contexto: {
        [TipoNotificacao.SUCESSO]: 'is-success',
        [TipoNotificacao.ATENCAO]: 'is-warning',
        [TipoNotificacao.FALHA]: 'is-danger',
      }
    }
  },
  setup() {
    const store = useStore()
    return {
      notificacoes: computed(() => store.state.notificacoes)
    }
  }
})

</script>

<style scoped>
.notificacoes {
  position: absolute;
  right: 0;
  width: 25rem;
  padding: 0.5rem;
  z-index: 999;
}
</style>