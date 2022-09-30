<template functional>
  <!--显示数据源-->
  <div style="height: 50px;">{{ props.index }}---{{ props.source.name }}</div>
</template>
     
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Items",
};
</script>