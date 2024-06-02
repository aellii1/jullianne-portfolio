document.addEventListener("DOMContentLoaded", function() {
    // Get the current URL
    var currentUrl = window.location.href;

    // Get all the navigation links
    var navLinks = document.querySelectorAll('.nav-link');

    // Loop through each navigation link
    navLinks.forEach(function(link) {
        // Check if the link's href matches the current URL
        if (link.href === currentUrl) {
            // Add the 'active' class to the parent list item
            link.parentNode.classList.add('active');
        } else {
            // Remove the 'active' class from the parent list item
            link.parentNode.classList.remove('active');
        }
    });

    // Get all the side-content links
    var sideContentLinks = document.querySelectorAll('.side-content-links');

    // Get all the sections
    var sections = document.querySelectorAll('.side-content-content section');

    // Function to handle click event on side-content links
    function handleLinkClick(event) {
        // Get the target section id from the link's href
        var targetSectionId = event.target.getAttribute('href').substring(1);

        // Hide all sections
        sections.forEach(section => {
            section.style.display = 'none';
        });

        // Show the target section
        var targetSection = document.getElementById(targetSectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }

        // Remove 'active' class from all links
        sideContentLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked link
        event.target.classList.add('active');

        // Prevent the default link behavior
        event.preventDefault();
    }

    // Attach click event listener to each side-content link
    sideContentLinks.forEach(link => {
        link.addEventListener('click', handleLinkClick);
    });

    // Initially, hide all sections except the "Family" section
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    var defaultSectionId = 'dreamjob';
    var defaultSection = document.getElementById(defaultSectionId);
    if (defaultSection) {
        defaultSection.style.display = 'block';
    }
    sideContentLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === defaultSectionId) {
            link.classList.add('active');
        }
    });

    // Get all the gallery links
    var galleryLinks = document.querySelectorAll('.gal-links');

    // Function to handle click event on gallery links
    function handleGalleryLinkClick(event) {
        // Remove 'active' class from all gallery links
        galleryLinks.forEach(link => {
            link.classList.remove('active');
        });

        // Add 'active' class to the clicked gallery link
        event.target.classList.add('active');

        // Show the corresponding section
        var targetSectionId = event.target.getAttribute('href').substring(1);
        showSection(targetSectionId);

        // Prevent the default link behavior
        event.preventDefault();
    }

    // Attach click event listener to each gallery link
    galleryLinks.forEach(link => {
        link.addEventListener('click', handleGalleryLinkClick);
    });

    // Function to show the section based on ID
    function showSection(sectionId) {
        var sections = document.querySelectorAll('.gal-section');
        sections.forEach(section => {
            section.style.display = 'none';
        });
        var targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    // Set default section to 'myphotos'
    var defaultSectionId = 'myphotos';
    var defaultLink = document.querySelector('.gal-links[href="#' + defaultSectionId + '"]');
    if (defaultLink) {
        defaultLink.classList.add('active');
        showSection(defaultSectionId);
    }
});