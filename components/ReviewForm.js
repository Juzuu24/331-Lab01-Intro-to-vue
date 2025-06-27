const { reactive, toRefs } = Vue;
 // <-- Add this line at the top

const reviewForm = {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">

      <label for="review">Review:</label>
      <textarea id="review" v-model="review"></textarea>

      <label for="rating">Rating:</label>
      <select id="rating" v-model="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <label>Would you recommend this product?</label>
      <input type="radio" id="recYes" value="Yes" v-model="recommend" />
      <label for="recYes">Yes</label>
      <input type="radio" id="recNo" value="No" v-model="recommend" />
      <label for="recNo">No</label>

      <input class="button" type="submit" value="Submit">
    </form>
  `,
  setup(props, { emit }) {
    const form = reactive({
      name: '',
      review: '',
      rating: null,
      recommend: null
    });

    function onSubmit() {
      if (
        form.name === '' ||
        form.review === '' ||
        form.rating === null ||
        form.recommend === null
      ) {
        alert('Review is incomplete. Please fill out every field.');
        return;
      }

      const productReview = {
        name: form.name,
        review: form.review,
        rating: form.rating,
        recommend: form.recommend
      };
      emit('review-submitted', productReview);

      // Reset form fields
      form.name = '';
      form.review = '';
      form.rating = null;
      form.recommend = null;
    }

    return {
      ...toRefs(form),
      onSubmit
    };
  }
};
