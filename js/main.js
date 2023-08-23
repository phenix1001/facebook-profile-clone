const fileUploadInput = document.getElementById('file-upload');
const profilePicture = document.getElementById('profile-picture');

fileUploadInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        profilePicture.setAttribute('src', imageURL);
    }
});

const form = document.getElementById('my-form');
const targetName = document.getElementById('name');
const targetTopName = document.getElementById('topname');
const targetBio = document.getElementById('bio');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const inputFirstName = document.getElementById('f-name-input').value;
    const inputSecondName = document.getElementById('s-name-input').value;
    if(inputFirstName === null || inputFirstName === '' || inputSecondName === null || inputSecondName === ''){
        targetName.innerHTML = 'Az Ossama';
        targetTopName.innerHTML = 'Az Ossama <span class="badge bg-danger rounded-circle"> 1 </span> <i class="fa fa-sort-down down"></i>';
    }
    else{
        targetName.innerHTML = `${inputFirstName} ${inputSecondName}`;
        targetTopName.innerHTML = `${inputFirstName} <span class="badge bg-danger rounded-circle"> 1 </span> <i class="fa fa-sort-down down"></i>`;
    }
    document.getElementById('f-name-input').value = "";
    
    const inputBio = document.getElementById('bio-input').value;
    if(inputBio === null || inputBio === ''){
        targetBio.innerHTML = '<p><i class="fa fa-laptop"></i>&ThinSpace; web design & development.</p>';
    }
    else{
        targetBio.innerHTML = `<p> ${inputBio} </p>`;
    }
    document.getElementById('input-bio').value = "";

    const instagramLink = document.getElementById('instagramLink');
    const instagramInput = document.getElementById('instagramInput').value;
    instagramLink.innerHTML = `<a id="instagramLink" href="https://instagram.com/${instagramInput}?igshid=ZDc4ODBmNjlmNQ==" target="_blank"><span class="fw-semibold">${instagramInput}</span></a>`;
});

const coverUpload = document.getElementById('cover-upload');
const coverPicture = document.getElementById('cover-picture');

coverUpload.addEventListener('change', function(event){
    const file = event.target.files[0];
    if(file){
        const coverUrl = URL.createObjectURL(file);
        coverPicture.setAttribute('src', coverUrl);
    }
});

const postsBtn = document.getElementById('postsBtn');
const reelsBtn = document.getElementById('reelsBtn');

const reelsSection = document.getElementById('reelsSection');
const postsSection = document.getElementById('postsSection');

reelsBtn.addEventListener('click', function(){
    reelsBtn.setAttribute('class', 'active-btn');
    postsBtn.removeAttribute('class'); postsBtn.setAttribute('class', 'btn');
    reelsSection.style.display = 'block';
    postsSection.style.display = 'none';

});

postsBtn.addEventListener('click', function(){
    postsBtn.setAttribute('class', 'active-btn');
    reelsBtn.removeAttribute('class'); reelsBtn.setAttribute('class', 'btn');
    reelsSection.style.display = 'none';
    postsSection.style.display = 'block';
});

var element = document.getElementById('main');

element.addEventListener('scroll', function(){
    var scrollPosition = element.scrollTop;

    var targetPosition = 372.5;

    if (scrollPosition >= targetPosition){
        const secNav = document.getElementById('secNav');
        const fDiv = document.getElementById('fDiv');
        secNav.style.position = 'fixed';
        secNav.style.top = '134px';
        
        fDiv.style.marginTop = '64px';
        reelsSection.style.marginTop = '64px';      
    }

    if (scrollPosition <= targetPosition){
        const secNav = document.getElementById('secNav');
        secNav.style.position = '';
        secNav.style.transform = '';
        reelsSection.style.marginTop = '';
        fDiv.style.marginTop = '';
    }
});

const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function(){
    window.history.back();
});

const refreshBtn = document.getElementById('refreshBtn');

refreshBtn.addEventListener('click', function(){
    location.reload();
});