

/**
 * Define Global Variables
 * 
*/
const navMenu = document.querySelector('#navbar__list');
const navSections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// create the nav bar
function buildNav() {
    const fragment = document.createDocumentFragment();

    navSections.forEach((navSection) => {
        const liTag = document.createElement('li');
        const aTag = document.createElement('a');
        aTag.innerText = navSection.getAttribute('data-nav');
        aTag.setAttribute('class', 'menu__link');

        // scroll to anchor ID using scroll to event
        aTag.addEventListener("click", () => {
            navSection.scrollIntoView({behavior: "smooth"});
            });
        liTag.appendChild(aTag);
        fragment.appendChild(liTag);
    });
    navMenu.appendChild(fragment);
};

function getVisibleSectionIndex() {
    let minor = window.innerHeight;
    visibleSectionIndex = -1;

    navSections.forEach((navSection, index) => {
        let offset = navSection.getBoundingClientRect();
        if(Math.abs(offset.top) < minor){
            minor = Math.abs(offset.top);
            visibleSectionIndex = index;
        }
    });
    return visibleSectionIndex;
}

function setActiveSection(){
    visibleSectionIndex = getVisibleSectionIndex();

    if(visibleSectionIndex != -1){
        // create a list from navigation menu
        let navATagList = document.querySelectorAll('.menu__link');

        // Loop through sections
        for (let i = 0; i < navSections.length; i++) {

            if (i == visibleSectionIndex){
                navSections[i].classList.add('your-active-class');
                navATagList[i].classList.add('your-active-class');
            }
            
            else{
                navSections[i].classList.remove('your-active-class');
                navATagList[i].classList.remove('your-active-class');
            }
        }; 
    };
}

// create navigation menu bar
buildNav();

// Set sections as active .
document.addEventListener('scroll', setActiveSection);