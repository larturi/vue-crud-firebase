<template>
    <div>
        <h1 class="mt-3 text-center">Tareas</h1>
        
        <router-link to='/agregar'>
            <button class="btn btn-primary btn-block">Agregar</button>
        </router-link>

        <ul class="list-group mt-4">
            <li class="list-group-item" v-for="tarea in tareas" :key="tarea.id">
                {{ tarea.nombre }} - {{ tarea.id }}

                <div class="float-right">
                    <router-link :to="{ name: 'Editar', params: {id: tarea.id} }">
                        <button class="btn btn-warning btn-sm ml-2">Editar</button>
                    </router-link>

                    <button class="btn btn-danger btn-sm ml-2" @click="setEliminarTarea(tarea.id)">Eliminar</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    name: 'Inicio',
    created() {
        this.getTareas()
    },
    methods: {
        ...mapActions(['getTareas', 'setEliminarTarea'])
    },
    computed: {
        ...mapState(['tareas'])
    },
}
</script>