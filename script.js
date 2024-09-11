
const submit= document.getElementById("button");
const getBtn= document.getElementById("getBtn");
const editBtn=document.getElementById("editBtn");
const saveBtn=document.getElementById("saveBtn");
let profile=document.getElementById("profile");
let proImage=document.getElementById("proImage");

profile.addEventListener("change",(e)=>{
    proImage.src=URL.createObjectURL(e.target.files[0]);
});


submit.addEventListener("click",(eve)=>{
    eve.preventDefault();
    getBtn.style.display="block";
    submit.style.display="none";

})

getBtn.addEventListener("click",(eve)=>{
    eve.preventDefault(); 
    getBtn.style.display="none";
    editBtn.style.display="block";
   
});

editBtn.addEventListener("click", (ele)=>{
    editBtn.style.display="none";
    saveBtn.style.display="block";
})



