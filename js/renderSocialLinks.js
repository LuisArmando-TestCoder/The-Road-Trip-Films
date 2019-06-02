(function() {
    const socialLinks = document.querySelectorAll('.social-links');

    function renderSocialLinks(array) {
        [... socialLinks].forEach((socialLink) => {
            array.forEach((obj) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                const i = document.createElement('i');
                i.className = obj.fontClass;
                a.href = obj.href;
                a.target = '_blank';
                li.title = obj.social;
                a.appendChild(i);
                li.appendChild(a);
                socialLink.appendChild(li);
            });
        });
    }

    quicker().fetchJSON('data/socialLinks.json', renderSocialLinks);
}());


// <li><a href="#"><i class="fab fa-instagram"></i></a></li>
// <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
// <li><a href="#"><i class="fab fa-youtube"></i></a></li>