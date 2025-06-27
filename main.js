const { createApp, ref } = Vue;

createApp({
  setup() {
    const product = ref('Boots');
    const image = ref('./assets/images/socks_green.jpg');
    const link = ref('https://www.camt.cmu.ac.th/');
    const inStock = ref(false); // keep this boolean
    const inventory = ref(100);
    const details = ref(['50% cotton', '20% wool', '30% polyester']);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
      { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg' }
    ]);
    const sizes = ref(['S', 'M', 'L']);
    const cart = ref(0);

    function addToCart() {
      cart.value += 1;
    }

    function updateImage(variantImage) {
      image.value = variantImage;
    }

    function toggleInStock() {
      inStock.value = !inStock.value; // flip the boolean :contentReference[oaicite:1]{index=1}
    }

    return {
      product,
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
    };
  }
}).mount('#app');
