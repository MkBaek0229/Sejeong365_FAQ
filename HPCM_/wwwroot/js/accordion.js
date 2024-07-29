// Main Accordion Functionality

function handleMainAccordionChange(checkbox) {
    document.querySelectorAll('.tree_box_01 .m_letree li a').forEach(function (link) {
        link.classList.remove('on');
    });

    if (checkbox.checked) {
        document.querySelectorAll('.main-accordion').forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });

        document.querySelectorAll('.accordion-title').forEach(function (label) {
            label.classList.remove('active');
        });

        document.querySelectorAll('.arrow').forEach(function (arrow) {
            arrow.classList.remove('fa-chevron-up');
            arrow.classList.add('fa-chevron-down');
        });

        checkbox.nextElementSibling.classList.add('active');
        checkbox.nextElementSibling.querySelector('.arrow').classList.remove('fa-chevron-down');
        checkbox.nextElementSibling.querySelector('.arrow').classList.add('fa-chevron-up');
    } else {
        checkbox.nextElementSibling.classList.remove('active');
        checkbox.nextElementSibling.querySelector('.arrow').classList.remove('fa-chevron-up');
        checkbox.nextElementSibling.querySelector('.arrow').classList.add('fa-chevron-down');
    }
}

// Sub Accordion Functionality
function handleSubAccordionChange(checkbox) {
    if (checkbox.checked) {
        document.querySelectorAll('.sub-accordion-checkbox').forEach(function (otherCheckbox) {
            if (otherCheckbox !== checkbox) {
                otherCheckbox.checked = false;
            }
        });

        document.querySelectorAll('.sub-accordion .accordion-title').forEach(function (label) {
            label.classList.remove('active');
        });

        document.querySelectorAll('.sub-accordion .arrow').forEach(function (arrow) {
            arrow.classList.remove('fa-chevron-up');
            arrow.classList.add('fa-chevron-down');
        });

        checkbox.nextElementSibling.classList.add('active');
        checkbox.nextElementSibling.querySelector('.arrow').classList.remove('fa-chevron-down');
        checkbox.nextElementSibling.querySelector('.arrow').classList.add('fa-chevron-up');
    } else {
        checkbox.nextElementSibling.classList.remove('active');
        checkbox.nextElementSibling.querySelector('.arrow').classList.remove('fa-chevron-up');
        checkbox.nextElementSibling.querySelector('.arrow').classList.add('fa-chevron-down');
    }
}

// Initialize Accordion Event Listeners
function initializeAccordions() {
    document.querySelectorAll('.main-accordion').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            handleMainAccordionChange(checkbox);
        });
    });

    document.querySelectorAll('.sub-accordion-checkbox').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            handleSubAccordionChange(checkbox);
        });
    });

    document.querySelectorAll('.accordion input[type="checkbox"]').forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            document.querySelectorAll('.accordion input[type="checkbox"]').forEach(function (otherCheckbox) {
                if (otherCheckbox !== checkbox) {
                    otherCheckbox.checked = false;
                }
            });

            document.querySelectorAll('.accordion-title').forEach(function (label) {
                label.classList.remove('active');
            });

            document.querySelectorAll('.arrow').forEach(function (arrow) {
                arrow.classList.remove('fa-chevron-up');
                arrow.classList.add('fa-chevron-down');
            });

            if (checkbox.checked) {
                checkbox.nextElementSibling.classList.add('active');
                checkbox.nextElementSibling.querySelector('.arrow').classList.remove('fa-chevron-down');
                checkbox.nextElementSibling.querySelector('.arrow').classList.add('fa-chevron-up');
            }
        });
    });
}

// Execute Initialization
document.addEventListener('DOMContentLoaded', initializeAccordions);
