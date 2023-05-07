let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");



form.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("submit clicked");
  formValidation();
});

let formValidation = () => {
  if(input.value === ""){
    msg.innerHTML = "Post cant be empty";
   console.log("Failure");
   //alert("Post cant be empty");
  }
  else{
    console.log("Success");
    msg.innerHTML = "";
    acceptData();
    
  }
};

// accept and store data

let data = {};
 
let acceptData = () => {

  data["text"] = input.value;
  console.log(data);
  createPosts();
};

///creation part
let createPosts = () => {
posts.innerHTML += `<div>
<p>${data.text}</p>
<span class="option">
  <i onClick="editPost(this)" class="fas fa-edit  "></i>
  <i onClick="deletePost(this)" class="fas fa-trash-alt "></i>
</span>
</div>`;
input.value = ""; //update part
};

//deleted part
let deletePost = (e) => {
  e.parentElement.parentElement.remove();
};


//update part
let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML; 
  e.parentElement.parentElement.remove();
};