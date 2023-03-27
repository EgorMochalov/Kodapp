export const form = () => {
    const form = document.querySelector(".popupApplication__form");
    const name = document.querySelector('.popupApplication__form-input[type="text"]');
    const tel = document.querySelector('.popupApplication__form-input[type="tel"]');
    const mail = document.querySelector('.popupApplication__form-input[type="email"]');
    const file = document.querySelector('.popupApplication__form input[type="file"]');
    const textarea = document.querySelector('.popupApplication__form-area');
    const check = document.querySelector(".popupApplication__form-submits input[type='checkbox']")
    const label = document.querySelector(".popupApplication__form-inputs__file");

    $('.popupApplication__form-input[type="tel"]').inputmask("+7 (999) 999-9999")

    const res = document.querySelector(".popupResult");
    const res_button = document.querySelector(".popupResult__button");
    const res__text = document.querySelector(".popupResult__text");
    if(res_button) {
        res_button.addEventListener('click', function () {
            res.classList.remove("popupResult__visible")
        })
    }

    if(file && label) {
        file.addEventListener('change',function(){
            if(file.value!=""){
                label.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"/></svg>Файл прикреплен'
            }
            else {
                label.innerHTML='<svg width="18" height="18"><use xlink:href="#i-paperClip"></use></svg>Прикрепите файл'
            }
        })
    }

    if(form && name && tel && mail && file && textarea && check){
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            if (check.checked) {
                check.classList.remove("check-false")
                const fromData = new FormData();
                fromData.append('name', name.value);
                fromData.append('tel', tel.value);
                fromData.append('mail', mail.value);
                fromData.append('file', file.value);
                fromData.append('text', textarea.value);
                fetch(window.GLOBAL_PARAMS.apiBaseURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    body: fromData
                }).then((res) => {
                    res__text.innerHTML = "Успешно"
                    res.classList.add("popupResult__visible")
                }).catch(() => {
                    res__text.innerHTML = "Ошибка"
                    res.classList.add("popupResult__visible")
                })
            }
            else {
                check.classList.add("check-false")
            }
        })
    }
}