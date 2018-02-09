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
var hidden = document.querySelector('.hidden'),
    showRest = document.querySelector('.showRest'),
    flagShow = true;
showRest.addEventListener('mousemove', function(e){
        if (flagShow) {
            hidden.style.display='flex';
            flagShow = false;
            showRest.style.transform='scaleY(-1) translateY(17px)'}
    else {
        hidden.style.display='none';
        flagShow = true;
         showRest.style.transform='none'
    }
        
  })