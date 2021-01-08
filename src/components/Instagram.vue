<template>
  <span @click="twitterLink(url, {title})">
    <icon name="brands/instagram" color= white :scale="scale"></icon>
  </span>
</template>

<script>
  import objectToGetParams from '../utils/objectToGetParams';
  import 'vue-awesome/icons/brands/instagram';
  import Icon from 'vue-awesome/components/Icon';
  export default {
    name: 'Instagram',
    methods: {
      twitterLink(url, { title }) {
        window.open(
          'https://www.instagram.com/share' +
            objectToGetParams({
              url: url,
              text: title
            }),
          '__blank'
        );
      }
    },
    components: {
      Icon
    },
    props: {
      url: {
        required: true,
        type: String
      },
      title: {
        required: false,
        type: String
      },
      scale: {
        required: false,
        type: String
      }
    }
  };
</script>