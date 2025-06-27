const { createApp, ref, computed } = Vue;
 
const app=createApp({
 setup(){
  const cart=ref([])

  const premium = ref(false)

    function updateCart(){
      cart.value.push(cart.value.length) 

    }

    function removeCart(){
      cart.value.splice(-1)
    }
 
return {
  cart,
  premium,
  updateCart,
  removeCart
  
}
 }
})
 
app.component('product-display' , productDisplay)
app.component('product-details',productDetails)
app.mount('#app');
