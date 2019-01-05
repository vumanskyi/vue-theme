<template>
    <div id="sidebar" class="col-sm-3 col-lg-2 sidebar">

        <ProfileComponent/>
        <SearchComponent/>
        <ListComponent/>
    </div>
</template>

<script>
    import ProfileComponent from './sidebar/ProfileComponent';
    import SearchComponent from './sidebar/SearchComponent';
    import ListComponent from './sidebar/ListComponent';

    export default {
        name: "SidebarComponent",
        components: {
            ProfileComponent,
            SearchComponent,
            ListComponent
        }
    }
</script>

<style scoped>

</style>