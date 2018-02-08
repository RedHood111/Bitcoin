var attr = document.querySelector('.cardNumber');
document.addEventListener('click', function(e){
    var _this=e.target;
    if (_this.matches('.p2')||_this.matches('.p6')) {
        attr.setAttribute('placeholder', 'Номер карты получателя')
    }
    if (_this.matches('.p1') || _this.matches('.p3') || _this.matches('.p4') || _this.matches('.p5') || _this.matches('.p7') || _this.matches('.p8') || _this.matches('.p9')) {
         attr.setAttribute('placeholder', 'Номер кошелька')
    }
})