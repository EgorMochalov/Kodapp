export const form = () => {
    const form = document.querySelector(".popupApplication__form");
    form.addEventListener('submit',function(e){
        const name = document.getElementById("name");
        const tel = document.getElementById("tel");
        const mail = document.getElementById("mail");
        const file = document.getElementById("file");
        const textarea = document.getElementById("textarea");
        fetch(window.GLOBAL_PARAMS.apiBaseURL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body:{
                name:name.value,
                text:textarea.value,
                tel:tel.value,
                mail:mail.value,
                file:file.value
            }
        })
    })
}