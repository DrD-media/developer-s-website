document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme = document.body.className;
    if (currentTheme === 'light-theme') {
        document.body.className = 'dark-theme';
    } else {
        document.body.className = 'light-theme';
    }
});

/*document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme2 = document.body.header-container.className;
    if (currentTheme2 === 'light-theme') {
        document.body.header-container.className = 'dark-theme';
    } else {
        document.body.header-container.className = 'light-theme';
    }
});*/

/*document.getElementById('themeToggle').addEventListener('click', function() {
    const currentTheme2 = document.header-container.className;
    if (currentTheme2 === 'light-theme') {
        document.header-container.className = 'dark-theme';
    } else {
        document.header-container.className = 'light-theme';
    }
});*/