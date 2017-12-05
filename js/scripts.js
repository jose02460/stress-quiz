$(function(){
  $("#stressForm").submit(fuction(event){
    var negativeAffected =[];
    var highStress =[];
    var methods =[];
    $("input:checkbox[name=negativeAffected]:checked").each(function(){
      var item = $(this).val();
      negativeAffected.push(item);
    });
    $("input:checkbox[name=highStress]:checked").each(function(){
      var item = $(this).val();
      highStress.push(item);
    });
    $("input:checkbox[name=methods]:checked").each(function(){
      var item = $(this).val();
      methods.push(item);
    });
  });
});
