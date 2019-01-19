<template>
    <div>
        <div class="row">
            <BreadcrumbsComponent/>
            <div class="col-md-12">
                <h1 class="page-title">Dashboard</h1>
            </div>
        </div>

        <div class="panel panel-container">
            <div class="row">
                <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-teal panel-widget border-right">
                        <div class="row no-padding">
                            <div class="col-md-12 text-center">
                                <i class="fa fa-xl fa-shopping-cart color-blue"></i>
                                <div class="large">240</div>
                                <div class="text-muted">New Orders</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-blue panel-widget border-right">
                        <div class="row no-padding">
                            <div class="col-md-12 text-center">
                                <i class="fa fa-xl fa-comments color-orange"></i>
                                <div class="large">52</div>
                                <div class="text-muted">Comments</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-orange panel-widget border-right">
                        <div class="row no-padding">
                            <div class="col-md-12 text-center">
                                <i class="fa fa-xl fa-users color-teal"></i>
                                <div class="large">28</div>
                                <div class="text-muted">Users</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-6 col-md-3 col-lg-3 no-padding">
                    <div class="panel panel-red panel-widget ">
                        <div class="row no-padding">
                            <div class="col-md-12 text-center">
                                <i class="fa fa-xl fa-search color-red"></i>
                                <div class="large">25.2k</div>
                                <div class="text-muted">Search statistics</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!--/.row-->
        </div>

        <div class="mt-50">
            <h3>Static traffic overview</h3>
            <canvas id="planet-chart"></canvas>
        </div>
    </div>
</template>

<script>
    import BreadcrumbsComponent from '@/components/BreadcrumbsComponent';

    export default {
        name: "home",
        components: {
            BreadcrumbsComponent
        }
    }
</script>

<style scoped>

</style>