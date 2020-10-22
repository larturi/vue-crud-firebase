<template>
  <div>
      <h1>Agregar Tarea</h1>

      <form class="form-inline" @submit.prevent="agregarTarea(nombre)">
        <div class="input-group mb-2 mr-2 sm-2">
            <div class="input-group-prepend">
                <div class="input-group-text">Nombre</div>
            </div>
            <input class="form-control" v-model="nombre" type="text">         
        </div>
        <button class="btn btn-primary mb-2" type="submit">Agregar</button>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Agregar',
    data() {
        return {
            nombre: ''
        }
    },
    methods: {
        ...mapActions(['agregarTarea'])
    }
}
</script>

