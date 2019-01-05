<template>
    <div class="container-fluid">
        <div class="row">
            <HeaderComponent/>
            <SidebarComponent/>
            <ContentComponent/>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from './HeaderComponent';
    import SidebarComponent from './SidebarComponent';
    import ContentComponent from './ContentComponent';

    export default {
        name: "Layout",
        components: {SidebarComponent, HeaderComponent, ContentComponent}
    }
</script>

<style scoped>

</style>