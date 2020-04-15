document.addEventListener('keydown', function (event) {
    if (event.keyCode === 17 && event.target.nodeName === 'SELECT') {
        const form = event.target.form;
        const index = Array.prototype.indexOf.call(form, event.target);
        form.elements[index + 1].focus();
        event.preventDefault();
    }
});