
const overlay = document.querySelector('.overlay');
const modalsContainerListener = document.querySelector('.modals-container');

const listitemcourse = document.querySelector('#open-courses-modal')
const listitemlock = document.querySelector('#open-lock-modal')
const listitemaddcat = document.querySelector('#open-addcat-modal')
const listitemdelcat = document.querySelector('#open-delcat-modal')

const coursesModalContent = document.querySelector('#coursesModal');
const lockModalContent = document.querySelector('#lockModal');
const addcatModalContent = document.querySelector('#addModal');
const delcatModalContent = document.querySelector('#deleteModal');

function handleClick(event) {
    if (listitemcourse.contains(event.target)) {
        coursesModalContent.style.display = 'block';
        overlay.style.display = 'block';
    } else if (listitemlock.contains(event.target)) {
        lockModalContent.style.display = 'block';
        overlay.style.display = 'block';
    } else if (listitemaddcat.contains(event.target)) {
        addcatModalContent.style.display = 'block';
        overlay.style.display = 'block';
    } else if (listitemdelcat.contains(event.target)) {
        delcatModalContent.style.display = 'block';
        overlay.style.display = 'block';
    }
}

function closeCoursesModal() {
    coursesModalContent.style.display = 'none';
    lockModalContent.style.display = 'none';
    addcatModalContent.style.display = 'none';
    delcatModalContent.style.display = 'none';
    overlay.style.display = 'none';
}

modalsContainerListener.addEventListener('click', handleClick);
overlay.addEventListener('click', closeCoursesModal);
