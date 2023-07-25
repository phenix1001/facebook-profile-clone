const fileUploadInput = document.getElementById('file-upload');
const profilePicture = document.getElementById('profile-picture');

fileUploadInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        profilePicture.setAttribute('src', imageURL);
    }
});
// theme buttons
// function light() {
//     document.getElementById('main').style.backgroundColor = "var(--bs-light)";
//     document.getElementById('header').style.backgroundColor = "#333";
// }
function dark() {
    document.getElementById('main').style.backgroundColor = "#333";
}

/*
function edit() {
    name_q = prompt(String('Enter your name :'))
    var name1 = document.getElementById('name');
    var topname = document.getElementById('topname');
    if(name_q === null || name_q === '') {
        name1.innerHTML = 'Az Ossama';
        topname.innerHTML = `Az Ossama <span class="badge bg-danger rounded-circle"> 1 </span> <i class="fa fa-sort-down down"></i>`
    }
    else{
        name1.innerHTML = name_q;
        topname.innerHTML = `${name_q} <span class="badge bg-danger rounded-circle"> 1 </span> <i class="fa fa-sort-down down"></i>`
    }

    bio = prompt('Enter a short bio please :');
    var bio_a = document.getElementById('bio');

    if(bio === null || bio === '') {
        bio_a.innerHTML = '<p><i class="fa fa-laptop"></i>&ThinSpace; web design and development</p>';
    }
    else{
        bio_a.innerHTML = `<p>${bio}</p>`;
    }
}*/
const form = document.getElementById('my-form');
const targetName = document.getElementById('name');
const targetTopName = document.getElementById('topname');
const targetBio = document.getElementById('bio');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputName = document.getElementById('name-input').value;
    if(inputName === null || inputName === ''){
        targetName.innerHTML = 'Az Ossama';
        targetTopName.innerHTML = 'Az Ossama <span class="badge bg-danger rounded-circle"> 1 </span> <i class="fa fa-sort-down down"></i>';
    }
    else{
        targetName.innerHTML = inputName;
        targetTopName.innerHTML = `${inputName} <span class="badge bg-danger rounded-circle"> 1 </span> <i class="fa fa-sort-down down"></i>`;
    }
    document.getElementById('name-input').value = "";
    
    const inputBio = document.getElementById('bio-input').value;
    if(inputBio === null || inputBio === ''){
        targetBio.innerHTML = '<p><i class="fa fa-laptop"></i>&ThinSpace; web design & development.</p>';
    }
    else{
        targetBio.innerHTML = `<p> ${inputBio} </p>`;
    }
    document.getElementById('input-bio').value = "";
});


var getPfp = document.getElementById('profile-picture');
var getStory = document.getElementById('story');

if(getPfp.style.border = '3px solid var(--bs-light)'){
    function addStory(){
        getPfp.style.border = 'none';
        getPfp.style.outline = '3px solid var(--bs-primary)';
    };
};