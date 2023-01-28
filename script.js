const titles = document.querySelectorAll('.title');
titles.forEach(title => {
    title.addEventListener('click', () => {
        title.classList.toggle('active');
    })
})