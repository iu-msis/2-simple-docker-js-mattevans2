var app = new Vue ({
  el: '#userprofile',
  data: {
    userName: '',
    userEmail: '',
    userImgLarge: '',
    userImgThumb:'',
    userDOB: '',
    userAge: '',
    userCountry: ''
  },
  created() {
    this.fetchuser();
    console.log('this vue app has been created!');
  },
  methods: {
    fetchuser: function () {
      fetch('https://randomuser.me/api')
      .then(response => response.json())
      .then(data => {
        var userData = data.results[0];
        this.userName = userData.name.first + " " + userData.name.last;
        this.userEmail = userData.email;
        this.userImgLarge = userData.picture.large;
        this.userImgThumb = userData.picture.thumbnail;
        this.userDOB = userData.dob.date.slice(0,10);
        this.userAge = userData.dob.age;
        this.userCountry = userData.location.country;
      })

    }
  }
})
