export const popups = () => {
    const popupNav = document.querySelector(".popupNav-container");
    document.querySelector(".popupNav-content__exit").addEventListener('click', function () {
        popupNav.classList.remove("popupNav-container-visible")
    })
    document.querySelector(".header__button").addEventListener('click', function () {
        popupNav.classList.add("popupNav-container-visible")
    })

    const popup = document.querySelector(".popupApplication-container");
    document.querySelector(".popupApplication-content__exit").addEventListener('click', function () {
        popup.classList.remove("popupApplication-container-visible")
    })
    document.querySelectorAll(".btn-submit").forEach(e => {
        e.addEventListener('click', function () {
            popup.classList.add("popupApplication-container-visible")
        })
    })
}