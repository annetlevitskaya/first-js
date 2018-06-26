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
            //links
                
                var tabId = currentLink.getAttribute('data-id');
                var activeTab = document.querySelector('.tub-info.active');
                if(activeLink) {
                    activeTab.classList.remove('active');
                };

                var currentTab = document.querySelector(`.tub-info[data-id="${tabId}"]`);
                currentTab.classList.add('active');
            }
        });
    }
    var bottomNext = document.querySelector('.next');
        bottomNext.addEventListener('click', function (){
            var activeLink = document.querySelector('.active.countriest_list');
            console.log(activeLink);
        });
}
document.addEventListener("DOMContentLoaded", ready);