const reviewList = {
  template: `
    <div class="review-container" v-if="Array.isArray(reviews)">
      <h3>Reviews:</h3>
      <ul>
        <li v-for="(review, index) in reviews" :key="index">
          {{ review.name }} gave this {{ review.rating }} stars
          <br/>
          "{{ review.review }}"
          <br/>
        </li>
      </ul>
    </div>
  `,
  props: {
    reviews: {
      type: Array,
      required: true,
      default: () => []  // ensures prop is always an array :contentReference[oaicite:1]{index=1}
    }
  },
  setup(props) {
    // Directly using props.reviews keeps it reactive and avoids potential issues :contentReference[oaicite:2]{index=2}
    return {
      reviews: props.reviews
    }
  }
};
