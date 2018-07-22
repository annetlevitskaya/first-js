function ready() {
    var links = document.querySelectorAll('.countries__item');
    
    for (i = 0; i < links.length; i++) {
        var link = links[i];

        link.addEventListener('click', function(e){
            e.preventDefault();

            var currentLink = e.target;

            if(!currentLink.classList.contains('active')) {

                var activeLink = document.querySelector('.countries__item.active');
                if (activeLink) {
                    activeLink.classList.remove('active');
                };

                currentLink.classList.add('active');
                //links
                
                var tabId = currentLink.getAttribute('data-id');
                var activeTab = document.querySelector('.tab-info.active');
                if(activeLink) {
                    activeTab.classList.remove('active');
                };

                var currentTab = document.querySelector(`.tab-info[data-id="${tabId}"]`);
                currentTab.classList.add('active');
            }
        });
    }

    var linksCount = links.length; 
    var nextButton = document.querySelector('.next');

    nextButton.addEventListener('click', function () {
        var activeLink = document.querySelector('.active.countries__item');
        var activeLinkDataId = activeLink.getAttribute('data-id');

        if (activeLinkDataId < linksCount) {
            var nextDataId = parseInt(activeLinkDataId, 10) + 1;

            var nextLink = document.querySelector(
                `.countries__item[data-id="${nextDataId}"]`
            );
            activeLink.classList.remove('active');
            nextLink.classList.add('active');

            var activeInfo = document.querySelector('.active.tab-info');
            var nextInfo = document.querySelector(
                `.tab-info[data-id="${nextDataId}"]`
            );
            activeInfo.classList.remove('active');
            nextInfo.classList.add('active');
        }
    });

    var previousButton = document.querySelector('.previous');

    previousButton.addEventListener('click', function (){
        var activeLink = document.querySelector('.active.countries__item');
        var activeLinkDataId = activeLink.getAttribute('data-id');

        if (activeLinkDataId > 1) {
            var previousDataId = parseInt(activeLinkDataId, 10) - 1;

            var previousLink = document.querySelector(
                `.countries__item[data-id="${previousDataId}"]`
            );
            activeLink.classList.remove('active');
            previousLink.classList.add('active');

            var activeInfo = document.querySelector('.tab-info.active');
            var previousInfo = document.querySelector(
                `.tab-info[data-id="${previousDataId}"]`
            );
            activeInfo.classList.remove('active');
            previousInfo.classList.add('active');
        }
    });

    //$('.slider-photo').slick();
}

document.addEventListener("DOMContentLoaded", ready);