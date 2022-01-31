import Lead from './components/Lead.vue'
import AddLead from './components/AddLead.vue'
import AddTeam from './components/AddTeam.vue'
import Team from './components/Team.vue'

export default [
    {path : '/', component: Lead},
    {path : '/addlead', component: AddLead},
    {path : '/team/:id', component: Team},
    {path : '/addteam/:id', component: AddTeam}
]