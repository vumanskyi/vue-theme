<template>
    <div  class="col-sm-9 col-lg-10 offset-lg-2">
        <router-view/>
    </div>
</template>

<script>
    import charts from './../charts/BuildChart';

    export default {
        name: "ContentComponent",
        mounted() {
            charts.lineChart('planet-chart');
        }
    }
</script>

<style scoped>

</style>