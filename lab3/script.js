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

        const searchContent = document.getElementById('searchContent').value
        if (searchContent.length > 0) location.href = 'timkiem.html'       
        
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
    let number = parseInt(document.getElementById(code).value)
    // Xu li truong hop so luong vuot 100
    if (number > 100) number = 100
    
    // Truong hop chua co trong gio hang
    if (!window.localStorage.getItem(code)) return window.localStorage.setItem(code, number)
    
    // Truong hop da co trong gio hang ...
    const current = parseInt(window.localStorage.getItem(code))
    let totalAmount =  current + number

    // Xu li truong hop so luong vuot 100
    if (totalAmount > 100) totalAmount = 100

    return window.localStorage.setItem(code, totalAmount)
}


function showcart(){
    // Khoi tao du lieu don hang (currentCart)
    let currentCart = {}
    
    // duyet qua danh sach san pham (itemList), 
    // lay key cua moi san pham tra cuu tren he thong
    // Neu tim thay du lieu tren don hang, nhap du lieu vao currentCart
    for (item of Object.keys(itemList)){
        if (localStorage.getItem(item)) {
            currentCart[item] = itemList[item]
            currentCart[item].amount = localStorage.getItem(item)
            currentCart[item].code = item
        }
    }
    
    // Vong lap tao element tren html
    let priceSum = 0
    for (item in currentCart){

        let name = document.createElement('td')
        name.textContent = currentCart[item].name
        
        let amount = document.createElement('td')
        amount.textContent = currentCart[item].amount

        let price = document.createElement('td')
        price.textContent = currentCart[item].price

        let photo = document.createElement('td')
        photo.innerHTML = "<img src='"+ currentCart[item].photo+"'/>"
        
        let total = document.createElement('td')
        total.innerHTML = currentCart[item].amount * currentCart[item].price
        priceSum+= (currentCart[item].amount * currentCart[item].price)
        
        let btn = document.createElement('button')
        btn.className='cancelCartBtn'
        btn.id = currentCart[item].code
        btn.innerHTML = "<i class=\"fa fa-trash\"></i>"

        let btnSlot = document.createElement('td')
        btnSlot.appendChild(btn)

        let currentRow = document.createElement('tr')
        currentRow.appendChild(name)
        currentRow.appendChild(amount)
        currentRow.appendChild(price)
        currentRow.appendChild(photo)
        currentRow.appendChild(total)
        currentRow.appendChild(btnSlot)

        const tbody = document.getElementsByTagName('tbody')[0]
        tbody.appendChild(currentRow)        
        

    }
    // Hien thi thong tin Tfoot
    const sum = document.getElementById('Sumary')
    sum.textContent = "Tổng thành tiền (A) = " + priceSum

    // Tinh chiet khau
    let discount = 0

    const today = new Date()
    const hour = today.getHours()
    const min = today.getMinutes()
    const day = today.getDay()
    
    const totalMin = hour * 60 + min
    if ((day >=1) && (day<=3) && ((totalMin >= 420 && totalMin <=660) || (totalMin >=780 && totalMin <= 1020))) discount = 0.1
    else discount = 0    
    

    const discountCell = document.getElementById('discount')
    discountCell.textContent = "Chiết khấu (B) = " + discount
    
    let tax = 0.1 * (priceSum - discount)
    const taxCell = document.getElementById('tax')
    taxCell.textContent = "Thuế (C) = " + tax

    const final = document.getElementById("total")
    final.textContent = "Tổng đơn hàng (A - B + C) = " + (priceSum - discount + tax)

}

const cartTable = document.getElementById('cartTable')
if (cartTable) showcart()

const removeCartBtns = document.getElementsByClassName('cancelCartBtn')
if (removeCartBtns){
    for (btn of removeCartBtns){
        btn.addEventListener('click', ()=>{
            const code = btn.id
            if (code && localStorage.getItem(code)){
                localStorage.removeItem(code)
                cartTable.getElementsByTagName('tbody')[0].innerHTML=''
                location.reload()
            }
            
        })        
    }
}


