const agreeCheckbox = document.getElementById('agreeCheckbox');
const agreeButton = document.getElementById('agreeButton');
const communityLink = document.querySelector('.community-link-button');

function updateAgreementState() {
    const isAgreed = agreeCheckbox.checked;

    agreeButton.disabled = !isAgreed;
    communityLink.classList.toggle('is-disabled', !isAgreed);
    communityLink.setAttribute('aria-disabled', String(!isAgreed));
    communityLink.tabIndex = isAgreed ? 0 : -1;
}

agreeCheckbox.addEventListener('change', updateAgreementState);

communityLink.addEventListener('click', (event) => {
    if (!agreeCheckbox.checked) {
        event.preventDefault();
    }
});

agreeButton.addEventListener('click', () => {
    // Redirect ke komun wa
    window.location.href = 'https://chat.whatsapp.com/EfYZjiJ8qS13JfYLCZWBOA';
});

updateAgreementState();
