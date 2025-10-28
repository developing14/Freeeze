// Trang chu

async function sendData(form) {
    const content = document.getElementById('searchContent').value
    
    if (content.length > 0) {
        form.submit()
        console.log('Du lieu da duoc gui di: ', content);
    }

}

const searchBtn = document.getElementById('searchBtn')
if (searchBtn) {
    searchBtn.addEventListener("click", (e)=> {
        e.preventDefault()
        const searchForm = document.getElementById('searchForm')
        sendData(searchForm)
    })
}


// Dang ky

const SignupForm = document.getElementById('SignupForm')

if (SignupForm){
    SignupForm.addEventListener('submit', (e)=> {
            e.preventDefault()
    
            const email = SignupForm.email.value
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/        
            if (regex.test(email) == false) return alert('Email khong hop le')
    
            const psw = SignupForm.psw.value
            if (psw && psw.length < 0) return alert('Vui long nhap mat khau')
            if (psw && psw.length < 8) return alert('Mat khau dai it nhat 8 ki tu')
                
            const psw2 = SignupForm.psw2.value
            if (psw2 && psw2.length < 0) return alert('Vui long nhap lai mat khau')
            if ((psw2 !== psw2) && (psw2)) return alert('Nhap lai mat khau khong trung khop')
            
            return SignupForm.submit()
        }
    )
}

// Dang nhap

const SigninForm = document.getElementById('SigninForm')
if (SigninForm){
    SigninForm.addEventListener('submit', (e)=> {
            e.preventDefault()
    
            const email = SigninForm.email.value
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/        
            if (regex.test(email) == false) return alert('Email khong hop le')
    
            const psw = SigninForm.psw.value
            if (psw && psw.length < 0) return alert('Vui long nhap mat khau')
            if (psw && psw.length < 8) return alert('Mat khau dai it nhat 8 ki tu')
                
            return SigninForm.submit()
        })
}


// 
// San pham va don hang
// 

var itemList = {
    "sp001" : {
        "name": "Sữa Chua Vị Kiwi",
        "price": "21000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/kiwi.jpg"
        },
    "sp002" : {
        "name": "Sữa Chua Vị Xoài",
        "price": "22000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/mango.jpg"
        },
    "sp003" : {
        "name": "Sữa Chua Vị Dưa lưới",
        "price": "23000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/cantaloupe.jpg"
        },
    "sp004" : {
        "name": "Sữa Chua Vị Mâm Xôi",
        "price": "24000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/blackberry.jpg"
        },
    "sp005" : {
        "name": "Sữa Chua Vị Dâu tây",
        "price": "25000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/strawberry.jpg"
        },
    "sp006" : {
        "name": "Sữa Chua Vị Việt Quất",
        "price": "26000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/blueberry.jpg"
        },
    "sp007" : {
            "name": "Sữa Chua Vị Bưởi",
            "price": "27000",
            "photo" : "./lab1/TH_B1_Data/images/sanpham/grapes"
            },
    "sp008" : {
        "name": "Sữa Chua Vị Táo xanh",
        "price": "26000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/green-apple.jpg"
        },
    "sp009" : {
        "name": "Sữa Chua Vị Dứa",
        "price": "29000",
        "photo" : "./lab1/TH_B1_Data/images/sanpham/pineapple"
        },
}

function addCart(code) {
    const number = parseInt(document.getElementById(code).value)
    
    // Truong hop chua co trong gio hang
    if (!window.localStorage.getItem(code)) return window.localStorage.setItem(code, number)
    
    // Truong hop da co trong gio hang ...
    const current = parseInt(window.localStorage.getItem(code))
    const totalAmount =  current + number

    // ... so luong vuot 100
    if (totalAmount > 100) return window.localStorage.setItem(code, 100)

    // ... so luong khong vuot 100
    return window.localStorage.setItem(code, totalAmount)
}


const cartTable = document.getElementById('cartDetail')
function showcart(){
    if (cartTable){
        // Khoi tao du lieu don hang (currentCart)
        let currentCart = {}
        
        // duyet qua danh sach san pham (itemList), 
        // lay key cua moi san pham tra cuu tren he thong
        // Neu tim thay du lieu tren don hang, nhap du lieu vao currentCart
        for (item of Object.keys(itemList)){
            if (localStorage.getItem(item)) {
                currentCart[item] = itemList[item]
                currentCart[item].amount = localStorage.getItem(item)
            }
        }
    
        // Vong lap tao element tren html
        let preTax = 0
        for (item in currentCart){
            let name = document.createElement('td')
            let price = document.createElement('td')
            let photo = document.createElement('td')
            let amount = document.createElement('td')
            
            let tr = document.createElement('tr')
            tr.appendChild(name)
            tr.appendChild(price)
            tr.appendChild(photo)
            tr.appendChild(amount)
    
            tr.innerHTML = "<img src='"+ currentCart[item].photo+"'/>"
            console.log(tr);
            
            
        }
        
    }
}

showcart()

function removeCart(code){
    localStorage.removeItem(code)
    cartTable.getElementsByTagName('tbody')[0].innerHTML=''
    return showcart()
}
