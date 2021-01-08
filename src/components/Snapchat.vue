<template>
  <span @click="snapchatLink(url, {title})">
    <icon name="brands/snapchat-square" color= white :scale="scale"></icon>
  </span>
</template>

<script>
  import objectToGetParams from '../utils/objectToGetParams';
  import 'vue-awesome/icons/brands/snapchat-square';
  import Icon from 'vue-awesome/components/Icon';
  export default {
    name: 'Snapchat',
    methods: {
      snapchatLink(url, { title }) {
        window.open(
          'https://snapchat.com/' +
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