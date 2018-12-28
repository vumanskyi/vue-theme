<template>
    <div class="profile-sidebar">
        <div class="profile-icon float-left">
            <img v-if="profile_image" :src="profile_image" alt="img">
        </div>
        <div class="profile-title">
            <h3>{{username}}</h3>
            <div>
                <span :class="status"> {{status}}</span>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "ProfileComponent",
        computed: {
            status() {
                return this.$store.getters.getProfileStatus;
            },
            username() {
                return this.$store.getters.getUserName;
            },
            profile_image() {
                return this.$store.getters.getProfileImage;
            }
        }
    }
</script>

<style scoped>

</style>