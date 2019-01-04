<template>
    <div class="parent">
        <IconComponent  :item="plus"/>
        <ul v-bind:class="(isActive ? 'active' : 'hide')">
            <li v-for="item in list">
                <a :href="list.link">
                    <IconComponent v-if="item.icon" :item="item.icon"/>
                    {{item.name}}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    import IconComponent from './IconComponent';

    export default {
        name: "ChildrenIListComponent",
        props: ["list", "isActive"],
        components: {IconComponent},
        data: function () {
           return {
               plus: 'rt-icon float-right fa fa-plus'
           }
        },
        watch: {
            isActive(active) {
                this.plus = (active == undefined || active == false) ?
                    'rt-icon float-right fa fa-plus' :
                    'rt-icon float-right fa fa-minus';
            }
        }
    }
</script>

<style scoped>

</style>