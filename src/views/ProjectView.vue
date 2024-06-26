<template>
    <div class="container">
      <div class="row">
          <h2>Projects</h2>
      </div>
      <div class="row gap-2 justify-content-center" v-if="projects?.length">
          <Card v-for="project in projects" :key="project.id">
              <template #cardheader>
                  <img :src="project.image" :alt="project.name" loading="lazy" class="img-fluid">
              </template>
              <template #cardbody>
                  <h5 class="card-title">{{ project.name }}
                  </h5>
                  <p class="lead">{{ project.description }}</p>
                  <p class="shadow"> {{ project.gitHub }}</p>
                  <p class="shadow"> {{ project.vercel }}</p>
              </template>
          </Card>
      </div>
      <div v-else class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
          </div>
      </div>
  </div>
  </template>

<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    },
    computed: {
        project () {
            return this.$store.state.portfolio
        }
    }
}
</script>