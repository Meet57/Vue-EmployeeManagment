<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light container">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MotaData</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link v-bind:to="'/team/'+ this.$route.params.id"  class="nav-link">Our Leader</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-4">
            <div class="row">
                <div class="col-auto">
                    <div class="h2">Add Team Member</div>
                </div>
                <hr />
            </div>
            <div class="row">
                <form action="" class="col-6">
                    <div class="mb-3">
                        <p for="leadername" class="form-label text-start">Member Name</p>
                        <input type="text" v-model="profile.name" class="form-control" id="leadername" placeholder="Meet Patel" />
                    </div>
                    <div class="mb-3">
                        <p for="leadernumber" class="form-label text-start">Mobile Number</p>
                        <input type="text" v-model="profile.number" class="form-control" id="leadername" placeholder="+91-6353X-XXXXX" />
                    </div>
                    <button type="submit" v-on:click.prevent="submit" class="btn btn-outline-success">Add Leader</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            profile: {
                name: "",
                number: "",
            },
            id: this.$route.params.id
        };
    },
    methods: {
        submit() {
            this.$store.dispatch('addTeam',{name:this.profile.name,number:this.profile.number,leader:this.id})
            this.profile = {name:"",number:""}
        },
    },
};
</script>

<style></style>
