<template>
    <nav aria-label="breadcrumb" class="breadcrumbs">
        <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <!--<li class="breadcrumb-item"><a href="#">Library</a></li>-->
            <li class="breadcrumb-item active" aria-current="page">Data</li>
        </ol>
    </nav>
</template>

<script>
    export default {
        name: "BreadcrumbsComponent"
    }
</script>

<style lang="scss">
    .breadcrumbs {
        width: 100%;
        li {
            a {
                color: #30a5ff;
            }
            &.active {
                color: #2f2f2f;
            }
        }
    }
</style>