function showContent(contentId) {
    // Hide all content sections
    document.querySelectorAll('.content').forEach(content => {
        content.classList.add('hidden');
    });

    // Show the selected content section
    document.getElementById(contentId).classList.remove('hidden');
}
