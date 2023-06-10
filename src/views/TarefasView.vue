<template>
    <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <ItemTarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxItem v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </BoxItem>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import FormularioTarefa from "../components/FormularioTarefa.vue";
import ItemTarefa from "../components/TarefaItem.vue";
import ITarefa from "../interfaces/ITarefa";
import BoxItem from "../components/BoxItem.vue";

export default defineComponent({
    name: "TarefasView",
    components: {
        FormularioTarefa,
        ItemTarefa,
        BoxItem
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    }
});
</script>
  