{/* <div class="preview-card">
      <h2>Profile Preview</h2>
      <div class="profile-info">
        <p><strong>Name:</strong> <span id="nameDisplay">Not provided</span></p>
        <p>
          <strong>Job Title:</strong> <span id="jobDisplay">Not provided</span>
        </p>
        <p><strong>Age:</strong> <span id="ageDisplay">Not provided</span></p>
        <p><strong>Bio:</strong> <span id="bioDisplay">Not provided</span></p>
      </div>
    </div> */}


let name = document.getElementById("nameInput");
let job = document.getElementById("jobInput");
let age = document.getElementById("ageInput");
let bio = document.getElementById("bioInput");

let nameD = document.getElementById("nameDisplay");
let jobD = document.getElementById("jobDisplay");
let ageD = document.getElementById("ageDisplay");
let bioD = document.getElementById("bioDisplay");

name.addEventListener('input',function(){
    nameD.innerHTML = this.value || "Not Provided";
})

job.addEventListener('input',function(){
    jobD.innerHTML = this.value || "Not Provided";
})


age.addEventListener('input',function(){
    ageD.innerHTML = this.value || "Not Provided";
})

bio.addEventListener('input',function(){
    bioD.innerHTML = this.value || "Not Provided";
})