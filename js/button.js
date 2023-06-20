$(function(){
    var cur = 2;
    var cur1 = 2;
    $('#moveRight').on('click', function(){
      var score=cur;
      cur= cur+1;
      console.log('score1 '+score);

      if(score > 3){
        const button = document.getElementById('btn-next');
        button.removeAttribute('disabled','');
      }
    });
    $('#moveLeft').on('click', function(){
      var score1=cur1;
      cur1 = cur1+1;
      console.log('score2 '+score1);
      if(score1>3){
        const button = document.getElementById('btn-next');
        button.removeAttribute('disabled','');
      }
    });
    });