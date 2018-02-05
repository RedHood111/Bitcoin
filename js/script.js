var attr = document.querySelector('.cardNumber');
document.addEventListener('click', function(e){
    var _this=e.target;
    var status = attr.getAttribute('placeholder');
    if (_this.matches('.changeForm')) {
        status=='Номер карты получателя' ? attr.setAttribute('placeholder', 'Номер кошелька') : attr.setAttribute('placeholder', 'Номер карты получателя')
    }
    
})