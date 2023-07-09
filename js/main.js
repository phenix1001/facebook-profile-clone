const fileUploadInput = document.getElementById('file-upload');
const profilePicture = document.getElementById('profile-picture');

fileUploadInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();

        reader.addEventListener('load', function () {
            profilePicture.setAttribute('src', reader.result);
        });

        reader.readAsDataURL(file); // أضفت هذا السطر لقراءة الملف كـ data URL
    }
});
