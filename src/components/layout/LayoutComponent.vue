<template>
    <div>
        <HeaderComponent/>
        <SidebarComponent/>
    </div>
</template>

<script>
    import HeaderComponent from './HeaderComponent';
    import SidebarComponent from './SidebarComponent';

    export default {
        name: "Layout",
        components: {SidebarComponent, HeaderComponent}
    }
</script>

<style scoped>

</style>