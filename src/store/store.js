import Vue from "vue";
import Vuex from "vuex";
import firebase from "../firebaseInit";
Vue.use(Vuex);

export const store = new Vuex.Store({
    // strict: true,
    state: {
        Leader: [],
        Team:[]
    },
    //Get data
    getters: {
        leaderData(state) {
            return state.Leader;
        },
        teamData(state){
            return state.Team;
        }
    },
    //Define functions
    mutations: {
        addLeader(state, payload) {
            var id = Date.now();
            payload.id = id;
            firebase
                .collection("Leader")
                .doc(id.toString())
                .set(payload)
                .then(() => {
                    console.log("Leader Added");
                });
        },
        addTeam(state,payload){
            var id = Date.now()
            var leader = payload.leader
            payload.id = id
            firebase
                .collection("Leader")
                .doc(leader)
                .collection("Team")
                .doc(id.toString())
                .set(payload)
                .then(() => {
                    console.log("Member Added");
                });
        },
        leaderData(state) {
            let leader = []
            firebase
                .collection("Leader")
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        leader.push(doc.data());
                    });
                });
            state.Leader = leader
        },
        teamData(state,payload){
            let team = []
            firebase
                .collection("Leader")
                .doc(payload)
                .collection('Team').get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                        team.push(doc.data());
                    });
                });
            state.Team = team
        },
        
    },
    //function caller
    actions: {
        // reducePrice(context, payload)
        addLeader(context, payload) {
            context.commit("addLeader", payload);
        },
        addTeam(context,payload){
            context.commit("addTeam",payload)
            console.log(payload);
        }
    },
});
