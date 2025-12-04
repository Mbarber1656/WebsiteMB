
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.Project_button').forEach(function (element) {
        element.addEventListener('click', function () {
            const url = this.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});