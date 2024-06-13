document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            
            const category = this.getAttribute('data-category');
            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            tabPanes.forEach(pane => {
                if (pane.getAttribute('data-category') === category) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });
});


