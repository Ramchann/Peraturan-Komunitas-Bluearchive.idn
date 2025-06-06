const agreeCheckbox = document.getElementById('agreeCheckbox');
const agreeButton = document.getElementById('agreeButton');

agreeCheckbox.addEventListener('change', () => {
    agreeButton.disabled = !agreeCheckbox.checked;
});

agreeButton.addEventListener('click', () => {
    // Redirect ke grup wa
    window.location.href = 'https://chat.whatsapp.com/IqAKZ5JU0vzJg1MfD4PbZJ';
});
