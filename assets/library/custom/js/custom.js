$(document).ready(function(){
    
    // Preloader Part
    // $(window).load(function(){ 
    //     jQuery("#preloader").delay(100).fadeOut("slow");
    //     jQuery("#load").delay(100).fadeOut("slow");
    // });

    //jQuery to collapse the navbar on scroll
    // $(window).scroll(function(){
    //     if ($(".navbar").offset().top > 50) {
    //         $(".fixed-top").addClass("top-nav-collapse");
    //     } else {
    //         $(".fixed-top").removeClass("top-nav-collapse");
    //     }
    // });
    
    // Div fadeIn Part
    wow = new WOW({}).init();

    $('.carousel').carousel({
        interval: false,
    });
    
});

// var baseUrl = "http://localhost/stem/stem-files-one/ci/escapegame/";

// Loading Animation
// function showLoading(){
//     $('#loading-part').css('display', 'block');
// }
// function hideLoading(){
//     $('#loading-part').css('display', 'none');
// }

// var hintCount = 1;
// function showHint(){
//     $(".hint-content .game-hint-"+hintCount).css('visibility','visible').slideDown("slow");	
// 	hintCount++;
// 	var duration = $('#time_value').val();
//     reduceScore(duration);
//     var check_hint = $(".hint-content .game-hint-"+hintCount).val();
// 	if (check_hint == undefined) {
// 		$('.hint-btn').attr('disabled','disabled');	
// 	}
// };


// $('#user_answer').on('focus', function(){
//     $(".answer-error").html("");    
// });

// function checkAnswer(){
//     var answer = $('#user_answer').val();
//     var code = $('#team_code').val();
//     var slag = $('#team_slag').val();
//     var duration = $('#time_value').val();
//     if(answer != '' && code != ''){
//         var postData = {
//             'answer':answer,
//             'code':code,
//             'slag':slag,
//             'duration':duration
//         }
//         $.ajax({
//             url : baseUrl+'teambuilding-answer/'+slag+'/'+code,
//             type : 'POST',
//             data : postData,
//             beforeSend: function(){
//                 showLoading();
//             },
//             complete: function(){
//                 hideLoading();
//             },
//             success : function(data) {
//                 // console.log(data);
//                 data = $.trim(data);
//                 data = $.parseJSON(data);
//                 // console.log(data);
//                 if(data['answer'] == true || data['answer'] == false){
//                     if(data['answer'] == false && data['next'] == ''){
//                         $(".answer-error").html(data['message']);
//                     }else if(data['answer'] == true && data['next'] != ''){
//                         window.location.href = baseUrl+"teambuilding-question/"+slag+"/"+data['next'];                        
//                     }else if(data['answer'] == true && data['next'] == ''){
//                         window.location.href = baseUrl+"teambuilding-result/"+slag;
//                     }else{
//                         $(".answer-error").html("Server error occured, refresh the page.");    
//                     }
//                 }else{
//                     $(".answer-error").html("Server error occured, refresh the page.");
//                 }
//             }
//         });
//     }else{
//         $(".answer-error").html("Please fill answer field!");
//     }    
// }

// function reduceScore(duration){
//     var postData = {
//         'duration':duration
//     }
//     $.ajax({
//         url : baseUrl+'teambuilding-score/reduce',
//         type : 'POST',
//         data : postData,
//         beforeSend: function(){
//             showLoading();
//         },
//         complete: function(){
//             hideLoading();
//         },
//         success : function(data) {
//             // console.log(data);
//             data = $.trim(data);
//             data = $.parseJSON(data);
//             // console.log(data);
//             if(data['answer'] == true && data['score']){
//                 $('#head_score').html("Score: "+data['score']);
//             }
//             // if(data['answer'] == true && data['score'] <= 0){
//             //     $('#head_score').html('Score: 0');
//             // }
//             //     if(data['answer'] == false && data['next'] == ''){
//             //         $(".answer-error").html(data['message']);
//             //     }else if(data['answer'] == true && data['next'] != ''){
//             //         window.location.href = baseUrl+"teambuilding-question/"+slag+"/"+data['next'];                        
//             //     }else if(data['answer'] == true && data['next'] == ''){
//             //         window.location.href = baseUrl+"teambuilding-result/"+slag;
//             //     }else{
//             //         $(".answer-error").html("Server error occured, refresh the page.");    
//             //     }
//             // }else{
//             //     $(".answer-error").html("Server error occured, refresh the page.");
//             // }
//         }
//     });
// }

// function storeTime(duration){
//     var postData = {
//         'duration':duration
//     }
//     $.ajax({
//         url : baseUrl+'teambuilding-time/reduce',
//         type : 'POST',
//         data : postData,
//         // beforeSend: function(){
//         //     showLoading();
//         // },
//         // complete: function(){
//         //     hideLoading();
//         // },
//         success : function(data) {
//             // console.log(data);
//             data = $.trim(data);
//             data = $.parseJSON(data);
//             // console.log(data);
//             // if(data['answer'] == true && data['score']){
//             //     $('#head_score').html("Score: "+data['score']);
//             // }
//             // if(data['answer'] == true && data['score'] <= 0){
//             //     $('#head_score').html('Score: 0');
//             // }
//             //     if(data['answer'] == false && data['next'] == ''){
//             //         $(".answer-error").html(data['message']);
//             //     }else if(data['answer'] == true && data['next'] != ''){
//             //         window.location.href = baseUrl+"teambuilding-question/"+slag+"/"+data['next'];                        
//             //     }else if(data['answer'] == true && data['next'] == ''){
//             //         window.location.href = baseUrl+"teambuilding-result/"+slag;
//             //     }else{
//             //         $(".answer-error").html("Server error occured, refresh the page.");    
//             //     }
//             // }else{
//             //     $(".answer-error").html("Server error occured, refresh the page.");
//             // }
//         }
//     });
// }

