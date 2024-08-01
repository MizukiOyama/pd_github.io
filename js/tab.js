document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    let currentTab = 0;

    function showTab(index) {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        tabButtons[index].classList.add('active');
        tabContents[index].classList.add('active');
    }

    tabButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentTab = index;
            showTab(index);
        });
    });

    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            // Scroll down
            currentTab = (currentTab + 1) % tabContents.length;
        } else {
            // Scroll up
            currentTab = (currentTab - 1 + tabContents.length) % tabContents.length;
        }
        showTab(currentTab);
    });

    // Update the active tab immediately after the change in currentTab
    function scrollHandler() {
        setTimeout(() => showTab(currentTab), 0);
    }

    window.addEventListener('scroll', scrollHandler);

    showTab(currentTab);
});
