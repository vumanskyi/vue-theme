<template>
    <div  class="col-sm-9 col-lg-10">
        <div class="row">
            <BreadcrumbsComponent/>
            <div class="col-md-12">
                <h1 class="page-title">Dashboard</h1>
            </div>
        </div>
        <div>
            <canvas id="planet-chart"></canvas>
        </div>
    </div>
</template>

<script>
    import BreadcrumbsComponent from './../BreadcrumbsComponent';
    import charts from './../charts/BuildChart';

    export default {
        name: "ContentComponent",
        mounted() {
            charts.lineChart('planet-chart');
        },
        components: {
            BreadcrumbsComponent
        }
    }
</script>

<style scoped>

</style>