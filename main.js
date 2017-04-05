(function($){

  //init
  $('.button-collapse').sideNav();

  //setup
  $('.modal').modal({opacity: .8});

})(jQuery); 

/*
  I deleted nested jQuery function as it is not necessary.
  It is ok to leve it in self-executing anonymous function (we are not cluttering global JS environment)
  and in this case we will not have conflicts with other frameworks which use $ sign
*/