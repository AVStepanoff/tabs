window.addEventListener('DOMContentLoaded', function() {

    'use strict';

    let tab = document.querySelectorAll('.title_header_tabs'),
        info = document.querySelector('.tabs_header'),
        content = document.querySelectorAll('.tabContent');

    function hideTabContent(a) {
        for (let i = a; i < content.length; i++) {
            content[i].classList.remove('show');
            content[i].classList.add('hide');
            tab[i].classList.remove('active');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if(content[b].classList.contains('hide')) {
            content[b].classList.remove('hide');
            content[b].classList.add('show');
            tab[b].classList.add('active');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('title_header_tabs')) {
            for(let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

});