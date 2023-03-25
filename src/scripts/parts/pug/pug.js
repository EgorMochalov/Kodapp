export const pug = () => {
    document.querySelectorAll(".pug-button").forEach((e1) => {
        e1.addEventListener('click', function () {
            if (!e1.querySelector(".active")) {
                document.querySelectorAll(".pug-button").forEach((e2) => {
                    e2.querySelector(".experience__item").classList.remove("active");
                })
                e1.querySelector(".experience__item").classList.add("active");
                document.querySelectorAll(".pug-content").forEach((e3) => {
                    if (e3.getAttribute('data-id') == e1.getAttribute('data-id')) {
                        e3.classList.add("pug-content-visible")
                    }
                    else {
                        e3.classList.remove("pug-content-visible")
                    }
                })
            }
        })
    })
}