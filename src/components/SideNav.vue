<template>
  <div class="white-skin">
    <mdb-side-nav :OpenedFromOutside.sync="toggle" mask="strong" logo="https://mdbootstrap.com/img/Marketing/other/logo/logo-mdb-vue-small.png" logoSn sideNavClass="sn-bg-4" ref="sideNav" fixed waves darkWaves>
      <li>
        <form class="search-form" role="search">
          <div class="form-group md-form mt-0 pt-1 ripple-parent" @click="wave">
            <input type="text" class="form-control" placeholder="Search">
          </div>
        </form>
      </li>
      <li>
        <mdb-side-nav-nav>
          <mdb-side-nav-cat name="Management" icon="tachometer-alt">
            <mdb-side-nav-item to="/" @click.native="toggle=false">Dashboard</mdb-side-nav-item>
            <mdb-side-nav-item to="/cashout" @click.native="toggle=false">Cashout</mdb-side-nav-item>
            <mdb-side-nav-item to="/dbm" @click.native="toggle=false">DBM</mdb-side-nav-item>
            <mdb-side-nav-item to="/time_table" @click.native="toggle=false">Time Table</mdb-side-nav-item>
            <mdb-side-nav-item to="/company" @click.native="toggle=false">Company</mdb-side-nav-item>
            <mdb-side-nav-item to="/supplier_pay" @click.native="toggle=false">Supplier Pay</mdb-side-nav-item>
            <mdb-side-nav-item to="/order_inventory" @click.native="toggle=false">Order Inventory</mdb-side-nav-item>
            <mdb-side-nav-item to="/analysis" @click.native="toggle=false">Analysis</mdb-side-nav-item>

          </mdb-side-nav-cat>

          <mdb-side-nav-cat name="Product" icon="map">
            <mdb-side-nav-item to="/product" @click.native="toggle=false">Product</mdb-side-nav-item>
            <mdb-side-nav-item to="/product_library" @click.native="toggle=false">Product Library</mdb-side-nav-item>


          </mdb-side-nav-cat>
<!--          <mdb-side-nav-item header @click.native="toggle=false" icon="bolt" to="/modals/modals">Modals</mdb-side-nav-item>-->
<!--          <mdb-side-nav-item header @click.native="toggle=false" icon="chart-pie" to="/charts/charts">Charts</mdb-side-nav-item>-->
<!--          <mdb-side-nav-item header @click.native="toggle=false" far icon="calendar-check" to="/calendar/calendar">Calendar</mdb-side-nav-item>-->
<!--          <mdb-side-nav-item header @click.native="toggle=false" icon="th-large" to="/sections/sections">Sections</mdb-side-nav-item>-->
        </mdb-side-nav-nav>
      </li>
    </mdb-side-nav>
  </div>
</template>

<script>
  import {  mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem } from 'mdbvue'

  export default {
    name: 'Dashboardv1',
    props: {
      waves: {
        type: Boolean,
        default: true
      },
      open: {
        type: Boolean
      }
    },
    components: {

      mdbSideNav,
      mdbSideNavNav,
      mdbSideNavCat,
      mdbSideNavItem,

    },
    data () {
      return {
        toggle: false,
        active: 0,
        elHeight: 0,
        windowHeight: 0
      }
    },
    methods: {
      afterEnter (el) {
        el.style.maxHeight = '1000px'
      },
      beforeLeave (el) {
        el.style.maxHeight = 0
      }
    },
    watch: {
      open (newVal) { // watch it
        this.toggle = true
      }
    },
    // mixins: [ waves ]
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side-nav .collapsible a {
    color: #424242;
  }

  .collapse-side-nav-item {
    overflow: hidden;
    max-height: 0;
    padding: 0;
    transition: max-height .3s;
  }
  .collapse-side-nav-item a {
    padding-left: 47px;
    line-height: 36px;
    background-color: rgba(0,0,0,.15);
  }

</style>

<style>
  .side-nav .collapsible a {
    font-size: 0.9rem !important;
  }
</style>
