let products = [
  {
    id: 1,
    img: "img1.avif",
    title: "Head1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 3999,
    off: 20,
  },
  {
    id: 2,
    img: "img2.jpg",
    title: "Headphone",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 4500,
    off: 80,
  },
  {
    id: 3,
    img: "img3.jpg",
    title: "Gaming",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 250000,
    off: 11,
  },
  {
    id: 4,
    img: "img4.avif",
    title: "Bluetooth",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 1500,
    off: 60,
  },
  {
    id: 5,
    img: "img4.avif",
    title: "handfree",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, autem.",
    price: 1000,
    off: 30,
  },
];



const cartItems = JSON.parse(localStorage.getItem("data")) || [];

const cartTbody = document.getElementById('cart');


function renderCartItems() {

  cartTbody.innerHTML = '';

 
  cartItems.forEach((cartItem, index) => {
    const product = products.find(product => product.id == cartItem.id);

    if (product) {
      const row = document.createElement('tr');
      const discountPrice = (product.price * (product.off / 100)) / 100;
      const totalPrice = (product.price - discountPrice) * cartItem.quantity; 
      row.innerHTML = `
        <td>${index + 1}</td>
        <td><img src="images/${product.img}" alt="" class="img" width="100px"></td>
        <td class="title">${product.title}</td>
        <td><input type="number" value="${cartItem.quantity}" min="1" onchange="updateQuantity(${index}, this.value)"></td>
        <td>Rs <span>${totalPrice.toFixed(2)}</span></td> 
        <td><button onclick="removeItem(${index})">Remove</button></td>
      `;
      cartTbody.appendChild(row);
    }
  });
}


function updateQuantity(index, newQuantity) {
 
  cartItems[index].quantity = parseInt(newQuantity);

  
  localStorage.setItem('data', JSON.stringify(cartItems));


  renderCartItems();
}


function removeItem(index) {
  
  cartItems.splice(index, 1);

  
  localStorage.setItem('data', JSON.stringify(cartItems));

  renderCartItems();
  alert("Item removed successfully")

  window.location.reload()
}


renderCartItems();
document.getElementById('quantity').innerHTML = `(${cartItems.length})`
