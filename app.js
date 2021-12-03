// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box-ext');
//   });
// });

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box-ext');
  })
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box-ext');
  });
});