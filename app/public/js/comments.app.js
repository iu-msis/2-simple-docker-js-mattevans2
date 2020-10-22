var app = new Vue({
  el: '#vueApp',
  data: {
    commentList: [],
    newComment: {
      commentText: ""
    }
  },

  created() {
    this.fetchComments();
  },

  methods: {
    createComment( evt ) {
// evt.preventDefault(); // Redundant w/ Vue's submit.prevent
// TODO: Validate the data!
fetch('api/Comments/create.php', {
method:'POST',
body: JSON.stringify(this.newComment),
headers: {
"Content-Type": "application/json; charset=utf-8"
}
})
.then( response => response.json() )
.then( json => {
console.log("Returned from post:", json);
// TODO: test a result was returned!
// this.psList.push(json[0]);
this.commentList=json;
//this.newmemberForm = this.newmemberData();
});
console.log("Creating (POSTing)...!");
console.log(this.newcommentList);
},
    fetchComments(){
    fetch('api/comments/')
    .then( response => response.json() )
    .then( json => {this.commentList = json;}
    );
    }
  }
  })
