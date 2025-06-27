const productDisplay = {
  template: /*html*/ `
    <div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <a :href="productLink" target="_blank">{{ product }}</a>
          <img
            :src="image"
            :alt="product"
            :class="{ 'outOfStockImg': !inStock }"
          >
        </div>
      </div>

      <div class="product-info">
        <h1>{{ product }}</h1>
        <p v-if="onSale" class="sale-message">{{ saleMessage }}</p>
        <p v-if="inStock && inventory > 10">In Stock</p>
        <p v-else-if="inStock && inventory <= 10 && inventory > 0">Almost out of Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping: {{ shipping }}</p>
        <p>{{ description }}</p>

        <product-details :details="details"></product-details>

        <div v-for="(variant, index) in variants"
             :key="variant.id"
             @mouseover="updateVariant(index)"
             class="color-circle"
             :style="{ backgroundColor: variant.color }">
        </div>

        <button @click="toggleStock" class="button">
          {{ inStock ? 'Set Out of Stock' : 'Set In Stock' }}
        </button>

        <div class="size-container">
          Sizes:
          <span v-for="size in sizes" :key="size" class="size-pill">
            {{ size }}
          </span>
        </div>

        <button class="button"
                :disabled="!inStock"
                @click="addToCart"
                :class="{ disabledButton: !inStock }">
          Add To Cart
        </button>
        <button class="button" @click="removeFromCart">
          Remove From Cart
        </button>
        
        <!-- Reviews section with guard -->
        <div v-if="Array.isArray(reviews)">
          <review-list v-if="reviews.length" :reviews="reviews"></review-list>
          <review-form @review-submitted="addReview"></review-form>
        </div>

      </div>
    </div>
  `,
  props: {
    premium: Boolean
  },
  setup(props, { emit }) {
    const reviews = ref([]); // initialize reviews

    const shipping = computed(() => props.premium ? 'Free' : '$2.99');
    const product = ref('Boots');
    const brand = ref('SE 331');
    const description = ref('These boots are for winter');
    const productLink = ref('https://www.camt.cmu.ac.th');
    const inventory = ref(100);
    const onSale = ref(true);
    const details = ref([
      '50% cotton',
      '30% wool',
      '20% polyester'
    ]);
    const variants = ref([
      { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
    ]);
    const selectedVariant = ref(0);
    const image = computed(() => variants.value[selectedVariant.value].image);
    const sizes = ref(['S', 'M', 'L']);
    const inStock = computed(() => variants.value[selectedVariant.value].quantity > 0);
    const saleMessage = computed(() => `${brand.value} ${product.value} is on sale`);

    function addToCart() {
      emit('add-to-cart', variants.value[selectedVariant.value].id);
    }
    function removeFromCart() {
      emit('remove-from-cart', variants.value[selectedVariant.value].id);
    }
    function toggleStock() {
      variants.value[selectedVariant.value].quantity = inStock.value ? 0 : 50;
    }
    function updateVariant(index) {
      selectedVariant.value = index;
    }

    function addReview(review) {
      reviews.value.push(review);
    }

    return {
      shipping,
      product,
      brand,
      description,
      productLink,
      inventory,
      onSale,
      details,
      variants,
      selectedVariant,
      image,
      sizes,
      inStock,
      saleMessage,
      addToCart,
      removeFromCart,
      toggleStock,
      updateVariant,
      reviews,
      addReview
    };
  }
};
