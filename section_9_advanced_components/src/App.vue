<template>
  <div>
    <the-header></the-header>
<!-- INFO   Below are examples of Dynamic components-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
<!-- INFO   One way of being dynamic to be able to create a "tab" view of which component to show on the screen-->
<!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>-->
<!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->

<!-- WARNING   Better way of the above is a dynamic component element, shown below-->
<!-- INFO   keep-alive element ensures that a component is not removed and re-added to the DOM in certain cases. Like in this app the above Manage Goals and Active Goals being tabs that can be switched back and forth. The Manage Goals input element can have data in it and switch away and back to it without the text being lost.-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>


<!--    <badge-list></badge-list>-->
<!--    <user-info-->
<!--      :full-name="activeUser.name"-->
<!--      :info-text="activeUser.description"-->
<!--      :role="activeUser.role"-->
<!--    ></user-info>-->
<!--    <course-goals v-slot:default="slotProps">-->
<!--        <h2>{{ slotProps.item }}</h2>-->
<!--  INFO:The CamelCase notation is needed cause the prop in CourseGoals has '-'-->

<!--        <p>{{slotProps.anotherProp }}</p>-->
<!--    </course-goals>-->
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals';
import ActiveGoals from './components/ActiveGoals';
import ManageGoals from './components/ManageGoals';
export default {
  // Registers a component Locally
  components:{
    'the-header': TheHeader,
    // 'badge-list': BadgeList,
    // 'user-info': UserInfo,
    // 'course-goals': CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods:{
    setSelectedComponent(cmp){
      this.selectedComponent = cmp;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
