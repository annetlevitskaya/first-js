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
            setTabByDataId(nextDataId)
        }
    });

    var previousButton = document.querySelector('.previous');

    previousButton.addEventListener('click', function (){
        var activeLink = document.querySelector('.active.countries__item');
        var activeLinkDataId = activeLink.getAttribute('data-id');

        if (activeLinkDataId > 1) {
            var prevDataId = parseInt(activeLinkDataId, 10) - 1;
            setTabByDataId(prevDataId);
        }
    });
}

function setTabByDataId(dataId) {
    var activeLink = document.querySelector('.active.countries__item');
    var activeInfo = document.querySelector('.tab-info.active');

    var nextLink = document.querySelector(
        `.countries__item[data-id="${dataId}"]`
    );
    var nextInfo = document.querySelector(
        `.tab-info[data-id="${dataId}"]`
    );
    
    activeLink.classList.remove('active');
    activeInfo.classList.remove('active');

    nextLink.classList.add('active');
    nextInfo.classList.add('active');
}

document.addEventListener("DOMContentLoaded", ready);