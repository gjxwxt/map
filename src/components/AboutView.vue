<!--
 * @Author: yangyouwang yangyouwang
 * @Date: 2022-09-19 15:22:36
 * @LastEditors: yangyouwang yangyouwang
 * @LastEditTime: 2022-09-30 13:35:37
 * @FilePath: \avue\src\components\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
 <template>
  <div>
    <virtualList
      style="height: 360px; overflow-y: auto; width: 500px"
      :data-key="'ids'"
      :data-sources="items"
      :data-component="itemComponent" 
      :keeps = 50
      :estimate-size = 50
    >
    </virtualList>
  </div>
</template>
   
  <script>
import virtualList from "vue-virtual-scroll-list";
import Items from "./Items";
export default {
  name: "HelloWorld",
  components: { virtualList },
  props: {
    msg: String,
  },
  data() {
    return {
      itemComponent: Items,
      items: [],
    };
  },
  methods: {
    dataSource() {
      for (let i = 0; i < 9999; i++) {
        this.items.push({
          ids: i,
          name: "模拟字段" + i,
        });
      }
    },
  },
  created() {
    this.dataSource();
  },
};
</script>
<style scoped>
</style>
   
   