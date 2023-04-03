// A $( document ).ready() block.
$(document).ready(function () {
    $('.carousel').carousel({
        interval: 2000
    })

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    })

    $(".li-hover").hover(function(){
        $('.dropdown-menu',this).addClass("show")
    })
    $(".li-hover").mouseleave(function(){
        $('.dropdown-menu',this).removeClass("show")
    })
    $(".dropdown-item").hover(function(){
        $('.txt-sub',this).addClass("texto-sub")
    })
    $(".dropdown-item").mouseleave(function(){
        $('.txt-sub',this).removeClass("texto-sub")
    })

    $('select').change(function() {
        let valor = $(this).val()
        if(valor === '1'){
            $(".list-venta").removeClass("d-none")
            $(".list-compra").addClass("d-none")
            $(".list-devolucion").addClass("d-none")
        }
        else if(valor === '2'){
            $(".list-compra").removeClass("d-none")
            $(".list-venta").addClass("d-none")
            $(".list-devolucion").addClass("d-none")
        }
        else {
            $(".list-compra").addClass("d-none")
            $(".list-venta").addClass("d-none")
            $(".list-devolucion").removeClass("d-none")
        }
    })

})






