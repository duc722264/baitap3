const $ = document.querySelector.bind(document)

const $$ = document.querySelectorAll.bind(document)

$('.icon-menu').onmouseup = function() {
    $('.menu').style.transform = 'rotate(-90deg)'
    $('.container').style.transform = 'rotate(-20deg)'
    $('.subnav').style.left = '1%'
}

$('.icon-close').onmouseup = function() {
    $('.menu').style.transform = 'rotate(0)'
    $('.container').style.transform = 'rotate(0)'
    $('.subnav').style.left = '-24%'

}