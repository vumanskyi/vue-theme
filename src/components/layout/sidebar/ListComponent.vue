<template>
    <ul class="sidebar-list">
        <li v-for="list in sidebar" v-if="list.active"  >
            <div v-if="list.children" @click="activeItem" >
                <a :href="list.link">
                    <IconComponent v-if="list.icon" :item="list.icon"/>
                    {{list.name}}
                </a>
                <ChildrenIListComponent :isActive.sync="isActive" v-if="list.children" :list="list.children"/>
            </div>
            <div v-else>
                <a :href="list.link">
                    <IconComponent v-if="list.icon" :item="list.icon"/>
                    {{list.name}}
                </a>
            </div>
        </li>
    </ul>
</template>

<script>
    import IconComponent from './IconComponent';
    import ChildrenIListComponent from './ChildrenIListComponent';

    export default {
        name: "Lists",
        data () {
            return {
                isActive: false
            };
        },
        computed: {
            sidebar() {
                return this.$store.getters.getSidebarList;
            }
        },
        components: {
            IconComponent,
            ChildrenIListComponent
        },
        methods: {
            activeItem() {
                this.isActive = !this.isActive;
                console.log(this.isActive);
            }
        }
    }
</script>

<style scoped>

</style>