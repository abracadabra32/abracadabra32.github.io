document.querySelectorAll('.thumbnail a').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        lightbox.style.display = 'block';
        lightboxImg.src = item.href;
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});
