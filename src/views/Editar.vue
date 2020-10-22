<template>
  <div>
      <h1 class="mt-4">Editar</h1>
      <p>{{ tarea.id }} - {{ tarea.nombre }}</p>

      <form class="form-inline" @submit.prevent="editarTarea(tarea)">
        <div class="input-group mb-2 mr-2 sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">Nombre</div>
            </div>
            <input class="form-control" v-model="tarea.nombre" type="text">         
        </div>
        <button class="btn btn-primary mb-2" type="submit">Editar</button>
      </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Editar',
    data() {
        return {
            id: this.$route.params.id
        }
    },
    created() {
        this.getTarea(this.id)
    },
    methods: {
        ...mapActions(['getTarea', 'editarTarea'])
    },
    computed: {
        ...mapState(['tarea'])
    },
}
</script>
