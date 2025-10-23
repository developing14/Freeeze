// 
// Trang chu
// 

// Ham gui du lieu tim kiem
async function search() {
    
    const searchContent = document.getElementById('searchContent').value
    if ( searchContent.length <= 0) return 0
    console.log(searchContent);
    
    form.submit()

}

// Nhan enter de submit
const searchBtn = document.getElementById('searchBtn')
if (searchBtn) {
    searchBtn.addEventListener("click", (e)=> {
        e.preventDefault()
        search()
    })
}

// 
// Dang ky
// 

let SignupForm = document.getElementById('SignupForm')
SignupForm = new FormData(SignupForm)
SignupFormContent = SignupForm.entries()

const SignupSubmitBtn = document.getElementById('SignupSubmitBtn')

if (SignupSubmitBtn){
    SignupSubmitBtn.addEventListener('click', (e) => {
        e.preventDefault()
        for(value of SignupFormContent)   {
            console.log('key: ',value[0], 'value:', value[1]);            
        }
    })
}

function ValidateSignupForm(){
    return 1
}

// 
// San pham
// 

function addCart (code, number){
    if (typeof localStorage[code] === 'undefined') window.localStorage.setItem(code, number)
    else if (window.localStorage[code].value + number > 100) window.localStorage.setItem(code, 100)
}


