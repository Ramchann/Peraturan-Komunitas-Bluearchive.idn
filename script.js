const agreeCheckbox = document.getElementById('agreeCheckbox');
const agreeButton = document.getElementById('agreeButton');

agreeCheckbox.addEventListener('change', () => {
    agreeButton.disabled = !agreeCheckbox.checked;
});

agreeButton.addEventListener('click', () => {
    // Redirect ke komun wa
    window.location.href = 'https://chat.whatsapp.com/GVZCNwllCCz9dSWv9jnfL4?mode=wwt';
});
