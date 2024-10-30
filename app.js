// $('h1').addClass('big-title');



// $('button').html('<em> dont click me</em>')



// $('a').attr('href', 'https://www.google.com')

// $('h1').click(function(){
//     $('h1').css('color', 'purple')
// })

// document.querySelectorAll('button').forEach(button => {
//     button.addEventListener('click', function(){
//         document.querySelector('h1').style.color = 'red'
//     })
// });
$('#click').click(function(){
    $('h1').css('color', 'green')
})
$('input').keypress(function(k){
    $('h1').html(k.key)
})
$('h1').before('<button>New</button>')
// for(var i = 0; i <5; i++){
//     document.querySelectorAll('button')[i].addEventListener('click', function(){
//         document.querySelector('h1').style.color = 'red'
//     })
// }

