<template>
    <div id="sidebar" class="col-sm-3 col-lg-2">

        <ProfileComponent/>
        <SearchComponent/>
    </div>
</template>

<script>
    import ProfileComponent from './sidebar/ProfileComponent';
    import SearchComponent from './sidebar/SearchComponent';

    export default {
        name: "SidebarComponent",
        components: {
            ProfileComponent,
            SearchComponent
        }
    }
</script>

<style scoped>

</style>