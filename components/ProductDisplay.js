const productDisplay={
    template:`
    <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                <a :href="link"> <img
                    :src="image"
                    alt="product image"
                    :class="{ outOfStockImg: !inStock || inventory === 0 }"
                    />
                 </a>
                </div>
            </div>
            <div class="product-info">
                <h1>{{title}}</h1>
                <p v-if="inStock && inventory > 0">In stock</p>
                <p v-else-if="inStock && inventory <= 10">Almost out of stock</p>
                <p v-else>Out of stock</p>
                <p>shipping:{{shipping}}</p>
                <ul>
                    <li v-for="detail in details">{{detail}}</li>
                </ul>
                <div
                    v-for="(variant,index) in variants"
                    :key="variant.id"
                    @mouseover="updateVariant(index)"
                    class="color-circle"
                    :style="{ backgroundColor: variant.color }"
                    >
                </div>

                <span v-for="size in sizes">{{size}} ,</span>
                <div>
                    <button class="button" disabled="!inStock" @click="addToCart"
                    :class="{disabledButton:!inStock}">Add to Cart</button>
                </div>

                 <button class="button" @click="toggleInStock">
                    {{ inStock ? ' In Stock' : ' Out of Stock' }}
                </button>
            </div>
        `,

    
    props:{
        premium:Boolean
    },
    setup(props){
    const shipping=computed(()=>{
        if (props.premium){
            return 'Free'
        }else{
            return 30
        }
    })
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
      updateVariant,
      shipping
    };
  }
}
