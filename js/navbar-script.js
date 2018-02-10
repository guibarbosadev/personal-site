$(document).ready(function(){
	topMax = 150;
  topMin =  0;
  var actives,me,objetivos,habilidades,portfolio;
  $(document).scroll(function(){
    $('.section').each(function(){		
    	if($(this).offset().top-$(window).scrollTop()<=topMax && $(this).offset().top-$(window).scrollTop()>=topMin ){
            var item = $(this);
            var index = $('.section').index(item);
            console.log("Index: " + index);
            switch (index) 
            {
                case 0:
                    actives = document.getElementsByClassName('active');
                    actives[0].classList.remove("active");
                    me = document.getElementById('sidemenu_me');
                    me.classList.add("active");
                    break;
                case 1:
                    actives = document.getElementsByClassName('active');
                    actives[0].classList.remove("active");
                    objetivos = document.getElementById('sidemenu_objetivos');
                    objetivos.classList.add("active");
                    break;
                case 2:
                    actives = document.getElementsByClassName('active');
                    actives[0].classList.remove("active");
                    habilidades = document.getElementById('sidemenu_habilidades');
                    habilidades.classList.add("active");
                    break;
                case 3:
                    actives = document.getElementsByClassName('active');
                    actives[0].classList.remove("active");
                    portfolio = document.getElementById('sidemenu_portfolio');
                    portfolio.classList.add("active");
                    break;
            }
      }else{

      }
  	});
  });  
});