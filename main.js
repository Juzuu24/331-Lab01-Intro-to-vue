const { createApp, ref, computed } = Vue;
 
const app=createApp({
 setup(){
  const cart=ref([])

  const premium = ref(false)

    function updateCart(id){
      cart.value.push(cart.value.length) 

    }
 
return {
  cart,
  premium,
  updateCart
}
 }
})
 
app.component('product-display' , productDisplay)
app.component('product-details',productDetails)
app.mount('#app');
