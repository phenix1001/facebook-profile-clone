const fileUploadInput = document.getElementById('file-upload');
const profilePicture = document.getElementById('profile-picture');

fileUploadInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const imageURL = URL.createObjectURL(file);
        profilePicture.setAttribute('src', imageURL);
    }
});
