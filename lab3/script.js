// Trang chu


async function sendData(form) {
    const content = document.getElementById('searchContent').value
    
    if (content.length > 0) {
        form.submit()
        console.log('Du lieu da duoc gui di', form.value);
    }

}

const searchBtn = document.getElementById('searchBtn')
if (searchBtn) {
    searchBtn.addEventListener("click", (e)=> {
        const searchForm = document.getElementById('searchForm')
        sendData(searchForm)
    })
}

const searchInput = document.getElementById('searchContent')

searchInput.addEventListener('click', (e)=> {
        if (e.code == 32) console.log('test');
    }
)



// Dang ky

const form = document.getElementById('SignupForm')

function ValidateForm(form){

    if (form){
        console.log('test');        
    }

}

ValidateForm(form)

