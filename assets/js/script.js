document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('.ver-input');

    inputs[0].focus();

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            if (value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    inputs[0].focus();
                    inputs[0].select();
                }
            }
        });

        input.addEventListener('focus', (e) => {
            e.target.select();
        });
    });
});

document.getElementById('profileImage').addEventListener('change', function (event) {
    const reader = new FileReader();
    reader.onload = function () {
        const output = document.getElementById('profilePreview');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
});