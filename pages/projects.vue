<template>
    <h1 class="text-3xl my-8">Projects</h1>
    <p class="text-lg mb-8">Here are some of my projects on Github.</p>

    <section class="grid grid-cols-2 gap-10">
        <div v-for="project in data?.viewer.repositories.nodes" :key="project.id" class="p-8 border-4 my-4 rounded-lg hover:bg-gray-50"></div>
    </section>
</template>

<script setup>
const query = gql`
{
  viewer {
    repositories(first: 8, orderBy: {field: CREATED_AT, direction: DESC}) {
      totalCount
      nodes {
        id
        name
        createdAt
        description
        url
        forks {
          totalCount
        }
        watchers {
          totalCount
        }
        stargazers{
          totalCount
        }
      }
    }
  }
}
`

const { data, error } = await useAsyncQuery(query)

console.log('graphQL query:', data)
console.log('error with graphql api call?:', error)
</script>