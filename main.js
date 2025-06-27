const { createApp, ref,computed } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const brand=ref('SE 331')
    const link = ref('https://www.camt.cmu.ac.th/');
    const inventory = ref(100);
    const details = ref(['50% cotton', '20% wool', '30% polyester']);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg',quantity:50, onSale: true },
      { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg',quantity:0 ,onSale:false}
    ]);
    const selectedVariant=ref(0)
    const sizes = ref(['S', 'M', 'L']);
    const cart = ref(0);

    function addToCart() {
      cart.value += 1;
    }

  const title = computed(() => {
  const current = variants.value[selectedVariant.value];
  return current.onSale
    ? `${brand.value} ${product.value} — On Sale! 🛍️`
    : `${brand.value} ${product.value}`;
});


    function updateImage(variantImage) {
      image.value = variantImage;
    }

    function toggleInStock() {
      inStock.value = !inStock.value; // flip the boolean :contentReference[oaicite:1]{index=1}
    }

    function updateVariant(index){
      selectedVariant.value=index;
    }

    const image=computed(()=>{
      return variants.value[selectedVariant.value].image
    })

     const inStock=computed(()=>{
      return variants.value[selectedVariant.value].quantity>0
    })

   

    return {
      title,
      image,
      link,
      inStock,
      inventory,
      details,
      variants,
      sizes,
      cart,
      addToCart,
      updateImage,
      toggleInStock,
      updateVariant
    };
  }
}).mount('#app');
