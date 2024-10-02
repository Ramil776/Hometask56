
const filters = document.querySelectorAll('.filter');
const portfolioItems = document.querySelectorAll('.portfolio-item');


filters.forEach(filter => {
    filter.addEventListener('mouseover', () => {
        const filterValue = filter.getAttribute('data-filter');

     
        portfolioItems.forEach(item => {
            if (item.classList.contains(filterValue) || filterValue === 'all') {
                item.style.display = 'block'; 
            } else {
                item.style.display = 'none'; 
            }
        });
    });
});
