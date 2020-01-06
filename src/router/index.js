import Vue from 'vue'
import Router from 'vue-router'
import Cashout from "@/components/admin/Cashout";
import TimeTable from "@/components/admin/TimeTable";
import EditLog from "@/components/admin/EditLog";
import TableRecord from "@/components/admin/TableRecord";
import ItemSale from "@/components/admin/ItemSale";
import TimeClockToday from "@/components/admin/TimeClockToday";
import DBM from "@/components/admin/DBM";
import Paye from "@/components/admin/Paye";
import Employee from "@/components/admin/employee/Employee";
import SupplierPay from "@/components/admin/company/SupplierPay";
import Company from "@/components/admin/company/Company";
import ProductRestaurant from "@/components/admin/product/ProductRestaurant";


import NoFound from "@/components/NoFound";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/cashout',
      name: 'Cashout',
      component: Cashout
    },
    {
      path: '/table_record',
      name: 'TableRecord',
      component: TableRecord
    },
    {
      path: '/time_table',
      name: 'TimeTable',
      component: TimeTable
    },
    {
      path: '/edit_log',
      name: 'EditLog',
      component: EditLog
    },
    {
      path: '/item_sale',
      name: 'ItemSale',
      component: ItemSale
    },
    {
      path: '/dbm',
      name: 'DBM',
      component: TimeClockToday
    },
    {
      path: '/dbm',
      name: 'dbm',
      component: DBM
    },
    {
      path: '/paye',
      name: 'Paye',
      component: Paye
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/supplier_pay',
      name: 'SupplierPay',
      component: SupplierPay
    },
    {
      path: '/company',
      name: 'Company',
      component: Company
    },
    {
      path: '/product',
      name: 'ProductRestaurant',
      component: ProductRestaurant
    },
    {
      path: '*',
      name: '',
      component: NoFound
    }

  ],
  mode: 'history'
})
