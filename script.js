const agreeCheckbox = document.getElementById('agreeCheckbox');
const agreeButton = document.getElementById('agreeButton');

agreeCheckbox.addEventListener('change', () => {
    agreeButton.disabled = !agreeCheckbox.checked;
});

agreeButton.addEventListener('click', () => {
    // Redirect ke komun wa
    window.location.href = 'https://chat.whatsapp.com/FroJPIBOk6rA3TpuLRqsQq';
});
