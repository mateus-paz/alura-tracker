<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label">
          Nome do Projeto
        </label>
        <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto" />
      </div>
      <div class="field">
        <button class="button" type="submit">
          Salvar
        </button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useStore } from '@/store';
import {ALTERA_PROJETO, ADICIONA_PROJETO, NOTIFICAR} from '@/store/tipo-mudacoes';
import { TipoNotificacao } from '@/interfaces/INotificacao';

export default defineComponent({
  name: 'FormularioView',
  props: {
    id: {
      type: String
    }
  },
  mounted (){
    if(this.id){
      const projeto = this.store.state.projetos.find(proj => proj.id == this.id)
      this.nomeDoProjeto = projeto?.nome || ''
    }
  },
  data() {
    return {
      nomeDoProjeto: ''
    }
  },
  methods: {
    salvar() {

      if(this.id){
        this.store.commit(ALTERA_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto
        })
      }else{
        this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
      }

      this.nomeDoProjeto = ''
      this.store.commit(NOTIFICAR, {
        titulo:'Novo projeto salvo!',
        texto:'Seu projeto já está disponivel para uso! ',
        tipo: TipoNotificacao.SUCESSO
      })
      this.$router.push('/projetos')
    }
  },
  setup () {
    const store = useStore()
    return {
      store,
    }
  }
})
</script>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>