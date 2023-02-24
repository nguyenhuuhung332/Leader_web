
//Navbar
$(".counter").counterUp({delay:10, time: 1000});
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbars').addClass("scroll_nav");
        }
        else{
            $('.navbars').removeClass("scroll_nav");
        }
    });
    //
    $('.menu-btn').click(function(){
        $('.navbars .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    
});

//tittle home_
var typed = new Typed(".typing",{
    strings: ["LeaDers.","You want to find a suitable job?"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});
//messenger form
var inputElement = document.querySelector('#first-name');
inputElement.onblur = function(e){
    if(e.target.value){
        inputElement.parentElement.classList.remove('messenger-dg');
        inputElement.parentElement.querySelector('.form-messenger').innerText ='';
    }
    else{
        inputElement.parentElement.classList.add('messenger-dg');
        inputElement.parentElement.querySelector('.form-messenger').innerText = 'Please! input full name';
    }
}
var emailElement = document.querySelector('#form-email');
emailElement.oninput = function(){
    emailElement.parentElement.classList.remove('messenger-dg');
    emailElement.parentElement.querySelector('..form-messenger').innerText = '';
}
emailElement.onblur = function(e){
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(e.target.value.match(regex)){
        emailElement.parentElement.classList.remove('messenger-dg');
        emailElement.parentElement.querySelector('.form-messenger').innerText = '';
    }else{
        emailElement.parentElement.classList.add('messenger-dg');
        emailElement.parentElement.querySelector('.form-messenger').innerText = 'Please! input your email';
    }
}
var enquiryElement = document.querySelector('#form-enquiry');
enquiryElement.onblur = function(e){
    if(e.target.value){
        enquiryElement.parentElement.classList.remove('messenger-dg');
        enquiryElement.parentElement.querySelector('.form-messenger').innerText ='';
    }
    else{
        enquiryElement.parentElement.classList.add('messenger-dg');
        enquiryElement.parentElement.querySelector('.form-messenger').innerText = 'Please! input Enquiry';
    }
}
var formElement = document.querySelector('#info-form')
formElement.onsubmit = function(e){
    e.preventDefault();
}

formElement.querySelector('.form-submit').onclick = function(e){
    var inputElements = formElement.querySelectorAll('.form-control')
    var formInfo = {}
    for(i= 0; i<inputElements.length; ++i){
            if(!inputElements[i].value){
                inputElements[i].parentElement.classList.add('messenger-dg')
                inputElements[i].parentElement.querySelector('.form-messenger').innerText = 'Please! input here'
            }
        formInfo[inputElements[i].getAttribute('id')] = inputElements[i].value;
    }
    console.log(formInfo)
}
//icon back on top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}