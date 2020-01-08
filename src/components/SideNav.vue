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
          <mdb-side-nav-cat name="Dashboards" icon="tachometer-alt">
            <mdb-side-nav-item to="/" @click.native="toggle=false">Version 1</mdb-side-nav-item>
            <mdb-side-nav-item to="/dashboards/v-2" @click.native="toggle=false">Version 2</mdb-side-nav-item>
            <mdb-side-nav-item to="/dashboards/v-3" @click.native="toggle=false">Version 3</mdb-side-nav-item>
            <mdb-side-nav-item to="/dashboards/v-4" @click.native="toggle=false">Version 4</mdb-side-nav-item>
            <mdb-side-nav-item to="/dashboards/v-5" @click.native="toggle=false">Version 5</mdb-side-nav-item>
            <mdb-side-nav-item to="/dashboards/v-6" @click.native="toggle=false">Version 6</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Pages" icon="image">
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/login">Login</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/register">Register</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/pricing">Pricing</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/about">About us</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/single">Single post</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/post">Post listing</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" target="_blank" to="/pages/landing">Landing Page</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/pages/customers">Customers</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/pages/invoice">Invoice</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/pages/page">Page Creator</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/pages/support">Support</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/pages/chat">Chat</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Profile" icon="user">
            <mdb-side-nav-item @click.native="toggle=false" to="/profiles/basic-1">Basic 1</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/profiles/basic-2">Basic 2</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/profiles/extended">Extended</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="CSS" fab icon="css3">
            <mdb-side-nav-item @click.native="toggle=false" to="/css/grid">Grid system</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/media">Media object</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/utilities">Utilities / helpers</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/code">Code</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/icons">Icons</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/images">Images</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/typo">Typography</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/colors">Colors</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/hover">Hover effects</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/masks">Masks</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/shadows">Shadows</mdb-side-nav-item>
            <mdb-side-nav-item @click.native="toggle=false" to="/css/skins">Skins</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Components" icon="th">
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/buttons">Buttons</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/cards">Cards</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/panels">Panels</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/list">List group</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/pagination">Pagination</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/progress">Progress bars</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/tabs">Tabs & pills</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/tags">Tags, labels & badges</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/collapse">Collapse</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/datepicker">Date picker</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/timepicker">Time picker</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/tooltips">Tooltips</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/popovers">Popovers</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/components/stepper">Stepper</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Forms" far icon="check-square">
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/forms/basic">Basic</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/forms/extended">Extended</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Tables" icon="table">
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/tables/basic">Basic</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/tables/extended">Extended</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/tables/datatables">DataTables</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-cat name="Maps" icon="map">
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/maps/googlemaps">Google Maps</mdb-side-nav-item>
            <mdb-side-nav-item class="ripple-parent" @click.native="wave, toggle=false" to="/maps/fullscreen">Full screen map</mdb-side-nav-item>
          </mdb-side-nav-cat>
          <mdb-side-nav-item header @click.native="toggle=false" icon="bolt" to="/modals/modals">Modals</mdb-side-nav-item>
          <mdb-side-nav-item header @click.native="toggle=false" icon="chart-pie" to="/charts/charts">Charts</mdb-side-nav-item>
          <mdb-side-nav-item header @click.native="toggle=false" far icon="calendar-check" to="/calendar/calendar">Calendar</mdb-side-nav-item>
          <mdb-side-nav-item header @click.native="toggle=false" icon="th-large" to="/sections/sections">Sections</mdb-side-nav-item>
        </mdb-side-nav-nav>
      </li>
    </mdb-side-nav>
  </div>
</template>

<script>
  import { mdbContainer, mdbSideNav, mdbSideNavNav, mdbSideNavCat, mdbSideNavItem, mdbIcon, waves } from 'mdbvue'

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
      mdbContainer,
      mdbSideNav,
      mdbSideNavNav,
      mdbSideNavCat,
      mdbSideNavItem,
      mdbIcon,
      waves
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
    mixins: [ waves ]
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
