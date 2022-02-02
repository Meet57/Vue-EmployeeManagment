<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MotaData</a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link
                                v-bind:to="'/addteam/' + this.$route.params.id"
                                class="nav-link"
                                >Add Team Members</router-link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-4">
            <div class="row">
                <div class="col-auto">
                    <div class="h2">Team Members</div>
                </div>
                <hr />
            </div>
            <div v-if="teamData.length == 0">No data</div>
            <table v-else class="table">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Team</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="member in teamData" :key="member.id">
                        <th>{{ member.id % 1000 }}</th>
                        <td>{{ member.name }}</td>
                        <td>{{ member.number }}</td>
                        <td>
                            <button
                                v-on:click="deleteMember({ id: member.id, leader: member.leader })"
                                class="btn btn-outline-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
        };
    },
    created() {
        this.$store.commit("teamData", this.id);
    },
    methods: {
        deleteMember(id) {
            this.$store.dispatch("deleteMember", id);
            this.$store.commit("teamData", this.id);
        },
    },
    computed: {
        teamData() {
            return this.$store.getters.teamData;
        },
    },
};
</script>

<style></style>
