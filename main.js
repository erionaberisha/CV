function showAlert() {
    alert("Contact section clicked!");
}


function toggleSection(sectionId) {
    const section = document.querySelector(`.section[data-section="${sectionId}"]`);
    section.classList.toggle('show');
}


