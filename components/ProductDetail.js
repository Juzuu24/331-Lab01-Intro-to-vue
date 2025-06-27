const productDetails = {
  name: 'ProductDetails',
  template: /*html*/ `
    <ul>
      <li v-for="(detail, index) in details" :key="index">{{detail}}</li>
    </ul>
  `,
  props: {
    details: {
      type: Array,
      required: true,
    }
  }
};
 
