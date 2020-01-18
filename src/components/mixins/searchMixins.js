export default {
    computed: {
        filterProducts:function () {
            return this.item_sale.filter((item)=>{
                return item.name.match(this.search);
            });
        }
    }
}
