<template>
    <div>
     <navHeader />
      <navBreak />
        <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop"  @click.stop="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{'cur':priceChecked == 'all'}" 
                @click="priceChecked = 'all'">All</a></dd>
                <!-- 通过index实现菜单切换 -->
                <dd v-for="(item,index) in priceFilter">
                  <a href="javascript:void(0)" @click="setprice(index)" :class="{'cur':priceChecked == index}">{{item.startPrice}} - {{item.endPrice}}</a>
                </dd>
              </dl>
            </div>
            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li>
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/1.jpg'" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">999</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/2.jpg'" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">1000</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/3.jpg'" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">500</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="pic">
                      <a href="#"><img v-lazy="'static/4.jpg'" alt=""></a>
                    </div>
                    <div class="main">
                      <div class="name">XX</div>
                      <div class="price">2499</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
    </div>
</template>

<script>
import navHeader from '../components/navheader.vue'
import navBreak from '../components/break.vue'
export default {
    data(){
        return {
            goodsList:[],
            priceFilter:[
                {
                    startPrice:'0.00',
                    endPrice:'500.00'
                },
                {
                    startPrice:'500.00',
                    endPrice:'1000.00'
                },
                {
                    startPrice:'1000.00',
                    endPrice:'2000.00'
                }
            ],
            priceChecked:'all',
            filterBy:false,
            overLayFlag:false
        }
    },
    components:{
      navHeader,
      navBreak
    },
    created(){
        this.$axios.get('/goods')
        .then(res=>{
            console.log(res.data)
            this.goodsList=res.result
        })
        .catch(error=>{
            console.log(error)
        })
    },
    methods:{
         showFilterPop(){
              this.filterBy=true;
              this.overLayFlag=true;
            },
        closePop(){
          this.filterBy=false;
          this.overLayFlag=false;
        }
    }
}
</script>

<style>

</style>
