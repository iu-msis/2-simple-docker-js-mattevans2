waitingApp = new Vue({
  el: '#randomUserId',
  data: {
    users: [{
      firstName: '',
      lastname: '',
      userID: '',
    }]
  },
  methods:{
    fetchuser(){
      fetch('api/users/')
      .then(response => response.json())
      .then(json => {
        this.users=json;
        console.log(this.users);
      });
    },
    created(){
      this.fetchUser();
    }
  }
});
