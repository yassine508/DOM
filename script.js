function calcul() {
    let items = document.querySelectorAll(".card-body");
    let total = 0;
    for (let item of items) {
        let prix = parseFloat(item.querySelector(".unit-price").textContent.replace("$", ""));
        let qte = parseInt(item.querySelector(".quantity").textContent);
        total += prix * qte;
    }
    
    let prix_total = document.querySelector(".total");
    if (prix_total) {
        prix_total.textContent = total + "$";
    }
}
let plus = document.querySelectorAll(".fa-plus-circle");
let minus = document.querySelectorAll(".fa-minus-circle");

for (let i of plus) {
    i.addEventListener("click", function () {
        let qte_el = this.parentElement.querySelector('.quantity'); 
        let qte = parseInt(qte_el.textContent);
        qte++;
        qte_el.textContent = qte;
        calcul(); 
    });
}

for (let i of minus) {
    i.addEventListener("click", function () {
        let qte_el = this.parentElement.querySelector('.quantity'); 
        let qte = parseInt(qte_el.textContent);
        if (qte > 0) { 
            qte--;
            qte_el.textContent = qte;
            calcul(); 
        }
    });
}
var deleteButtons = document.querySelectorAll('.fa-trash-alt');

for (var button of deleteButtons) {
  button.addEventListener('click', function() {
    var item = this.parentElement.parentElement;
    item.remove(); 
    calcul();
  });
}
var heartButtons = document.querySelectorAll('.fa-heart');

for (var button of heartButtons) {
  button.addEventListener('click', function() {
    this.classList.toggle('love');
  });
}
calcul()
