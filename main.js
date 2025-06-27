const { createApp, ref, computed } = Vue;
 
const app=createApp({
 setup(){
  const cart=ref([])
  const reviews=ref([]);
  const premium = ref(false)

    function updateCart(){
      cart.value.push(cart.value.length) 

    }

    function removeCart(){
      cart.value.splice(-1)
    }

    function addReview(review){
      reviews.value.push(review)
    }
 
return {
  cart,
  premium,
  updateCart,
  removeCart,
  addReview
  
}
 }
})
 
app.component('product-display' , productDisplay)
app.component('product-details',productDetails)
app.component('review-list',reviewList)
app.component('review-form',reviewForm)
app.mount('#app');
