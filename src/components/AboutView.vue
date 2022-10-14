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
    <!-- 动态颜色：把颜色作为单独的变量，再用动态style实现颜色的动态化 -->
    <div :style="declareBgcolor" class="bg1">test</div>
    <div :style="{ '--bgcolor':bgcolor,'fontSize':'20px' }" class="bg1">test</div>
    <input type="text" v-model="bgcolor" placeholder="请输入颜色">
    <div class="block">
      
  </div>
  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="#">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <el-date-picker
        v-model="value1"
        type="date"
        value-format="yyy-MM-dd"
        placeholder="选择日期"
        :picker-options="pickerOptions[scope.row.id]"
        @focus="change(scope.row.id,scope.row.date)"
        >
      </el-date-picker>
        </template>
      </el-table-column>
    </el-table>
  </template>
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
      bgcolor: 'red',
      itemComponent: Items,
      items: [],
      pickerOptions:{},
      value1:'',
      tableData: [{
            id:1,
            date: '2022-10-15',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            id:2,
            date:'2022-10-16',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            id:3,
            date: '2022-10-17',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            id:4,
            date: '2022-10-18',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    };
  },
  computed:{
    declareBgcolor (){
      return `--bgcolor:${this.bgcolor}`
    }
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
    change(id,date){
      if(this.pickerOptions.id) return
      const disabledDate=function(time){
        return  new Date(date).getTime() + 8.64e7 > time.getTime()
      }
      this.$set(this.pickerOptions,id, {'disabledDate':disabledDate});
    }
  },
  created() {
    this.dataSource();
  },
};
</script>
<style scoped>
.bg1{
  background-color: var(--bgcolor);
}
</style>
   
   