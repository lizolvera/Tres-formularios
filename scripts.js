document.addEventListener('DOMContentLoaded', () => {
    const formControls = document.querySelectorAll('.form-control');

    formControls.forEach(input => {
        input.addEventListener('blur', (event) => {
            if (!event.target.value) {
                event.target.classList.add('is-invalid');
            } else {
                event.target.classList.remove('is-invalid');
            }
        });
    });
});
