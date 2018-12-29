<template>
    <ul class="sidebar-list">
        <li v-for="list in sidebar" v-if="list.active">
            <IconComponent v-if="list.icon" :item="list.icon"/>
            <a :href="list.link">{{list.name}}</a>

            <!--<ul v-if="list.children" class="hide">-->
                <!--<li></li>-->
            <!--</ul>-->
        </li>
    </ul>
</template>

<script>
    import IconComponent from './IconComponent';

    export default {
        name: "Lists",
        computed: {
            sidebar() {
                return this.$store.getters.getSidebarList;
            }
        },
        components: {
            IconComponent
        }
    }
</script>

<style scoped>

</style>