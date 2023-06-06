// dropdown
const book_btn = document.querySelector('.book')
const dropdown = document.querySelector('.dropdown')
let dropdownState = false
book_btn.removeChild(dropdown)
// dropdown.classList.add('hidden')
book_btn.addEventListener('click', () => {
    dropdownState = !dropdownState
    if (dropdownState) {
        book_btn.appendChild(dropdown)
        // dropdown.classList.remove('hidden')
    }
    else {
        book_btn.removeChild(dropdown)
        // dropdown.classList.add('hidden')
    }

})