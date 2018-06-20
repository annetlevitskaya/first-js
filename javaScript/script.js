function ready() {
    var links = document.querySelectorAll('.countriest_list');
    
    for (i = 0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener('click', function(e){
            e.preventDefault();

            var currentLink = e.target;

            if(!currentLink.classList.contains('active')) {

                var activeLink = document.querySelector('.countriest_list.active');
                if (activeLink) {
                    activeLink.classList.remove('active');
                };

                currentLink.classList.add('active');
            }
        });
    }
}
document.addEventListener("DOMContentLoaded", ready);