<template>
    <header>
        <nav class="navbar navbar-custom fixed-top" role="navigation">
            <div class="container-fluid">
                <div class="navbar-header">
                    <!--<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#sidebar-collapse" aria-expanded="true"><span class="sr-only">Toggle navigation</span>-->
                        <!--<span class="icon-bar"></span>-->
                        <!--<span class="icon-bar"></span>-->
                        <!--<span class="icon-bar"></span>-->
                    <!--</button>-->
                    <a class="navbar-brand" href="#"><span v-if="init">{{init}}</span>{{name}}</a>
                </div>
            </div><!-- /.container-fluid -->
        </nav>
    </header>
</template>

<script>
    export default {
        name: "HeaderComponent",
        computed: {
            init() {
                return this.$store.getters.getInit;
            },
            name() {
                return this.$store.getters.getTitle;
            }
        }
    }
</script>

<style scoped>

</style>