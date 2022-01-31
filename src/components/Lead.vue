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
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <router-link to="addlead" class="nav-link">AddLead</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container mt-4">
            <div class="row">
                <div class="col-auto">
                    <div class="h2">Team Leaders</div>
                </div>
                <hr />
            </div>
            <div v-if="leaderData.length==0">No Data</div>
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
                    <tr v-for="lead in leaderData" :key="lead.id">
                        <th> {{lead.id}} </th>
                        <td> {{lead.name}} </td>
                        <td> {{lead.number}} </td>
                        <td>
                            <router-link class="btn btn-outline-primary" v-bind:to="'/team/'+lead.id">
                                Team
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    created(){
        this.$store.commit('leaderData')
    },
    computed:{
        leaderData(){
            return this.$store.getters.leaderData
        }
    }
};
</script>

<style></style>
