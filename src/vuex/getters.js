export default {
    getTitle(state) {
        return state.title;
    },
    getInit(state) {
        return state.init;
    },
    getUserName(state) {
        return state.username;
    },
    getProfileStatus(state) {
        let status = state.status;
        console.log(status);
        if (!status) {
            return 'offline';
        }

        status = status == 'active' || status == 1 ? 'online' : 'offline';
        return status;
    },
    getProfileImage(state) {
        return state.profile_image;
    }
}