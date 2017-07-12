

$("#modal-iframe").iziModal({
    // top: 50,
    headerColor: '#000',
    title: 'iziModal with iframe',
    // subtitle: 'Video example using the Vimeo embed.',
    icon: 'icon-settings_system_daydream',
    overlayClose: true,
    iframe : true,
    iframeURL: 'https://player.vimeo.com/video/22439234?autoplay=1',
    fullscreen: true,
    openFullscreen: false,
    borderBottom: false,
    group: 'grupo1',
    onFullscreen: function(modal){
        console.log(modal.isFullscreen);
    }
});

$(document).on('click', '.trigger-iframe', function (event) {
    event.preventDefault();
    $("#modal-iframe").iziModal('open', event);
});




$("#modal-alert").iziModal({
    title: "Your message has been sent successfully",
    icon: 'icon-check',
    headerColor: '#00af66',
    width: 600,
    timeout: 10000,
    timeoutProgressbar: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown',
    bottom: 0,
    loop: true,
    pauseOnHover: true
});
$(document).on('click', '.trigger-alert', function (event) {
    event.preventDefault();
    $('#modal-alert').iziModal('open');
});

$("#modal-alert2").iziModal({
    title: "Attention",
    subtitle: 'you are being disconnected..',
    icon: 'icon-power_settings_new',
    headerColor: '#BD5B5B',
    width: 600,
    timeout: 5000,
    timeoutProgressbar: true,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutDown',
    pauseOnHover: true
});
$(document).on('click', '.trigger-alert2', function (event) {
    event.preventDefault();
    $('#modal-alert2').iziModal('open');
});



$("#modal-default").iziModal({
    // top: 50,
    // bottom: 50,
    width: '60%',
    padding: 20,
    restoreDefaultContent: true,
    group: 'grupo1',
    loop: true,
    fullscreen: false,
    onResize: function(modal){
        console.log(modal.modalHeight);
    }
});
    

var URL_TO_LOAD = 'https://api.github.com/repos/dolce/izimodal';

$("#modal-default").on('click', '.btn-fetch', function(event) {
    event.preventDefault();

    $("#modal-default").iziModal('startLoading');

    fetch(URL_TO_LOAD, {
        method: 'get' // opcional
    }).then(function(response) {
        response.json().then(function(result){
        
            console.log("FullName: "+result.full_name);
            console.log("URL: "+result.html_url);
            console.log("Forks: "+result.forks);
            console.log("Stars: "+ result.stargazers_count);

            $("#modal-default .iziModal-content").html(
                "<li><b>Repository</b>: "+result.full_name+
                "</li><b><li>URL</b>: <a href='"+result.html_url+"' target='blank'> "+result.html_url+
                "</a></li><b><li>Forks</b>: "+result.forks+
                "</li><b><li>Stars</b>: "+ result.stargazers_count+
                "</li><b><li>Watchers</b>: "+ result.watchers_count+"</li>");

            $("#modal-default").iziModal('stopLoading');
        });

    }).catch(function(err) {
        $("#modal-default").iziModal('stopLoading');
        console.error(err);
        $("#modal-default .iziModal-content").html(err);
    });
});


$("#modal-default").on('click', '.btn-ajax', function(event) {
    event.preventDefault();
    
    $("#modal-default").iziModal('startLoading');

    $.get(URL_TO_LOAD, function(result) {

        console.log("FullName: "+result.full_name);
        console.log("URL: "+result.html_url);
        console.log("Forks: "+result.forks);
        console.log("Stars: "+ result.stargazers_count);

        $("#modal-default .iziModal-content").html(
            "<li><b>Repository</b>: "+result.full_name+
            "</li><b><li>URL</b>: <a href='"+result.html_url+"' target='blank'> "+result.html_url+
            "</a></li><b><li>Forks</b>: "+result.forks+
            "</li><b><li>Stars</b>: "+ result.stargazers_count+
            "</li><b><li>Watchers</b>: "+ result.watchers_count+"</li>");

        $("#modal-default").iziModal('stopLoading');

    }).fail(function(err) {
        $("#modal-default").iziModal('stopLoading');
        console.error(err);
        $("#modal-default .iziModal-content").html(err.responseJSON.message);
    });


});
$(document).on('click', '.trigger-default', function (event) {
    event.preventDefault();
    $('#modal-default').iziModal('open');
});








$("#modal-custom").iziModal({
    overlayClose: false,
    width: 600,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInDown',
    transitionOut: 'bounceOutDown',
    navigateCaption: true,
    navigateArrows: 'closeScreenEdge',
    onOpened: function() {
        //console.log('onOpened');
    },
    onClosed: function() {
        //console.log('onClosed');  
    }
});
$(document).on('click', '.trigger-custom', function (event) {
    event.preventDefault();
    $('#modal-custom').iziModal('open');
});


$("#modal-welcome").iziModal({
    title: "Welcome to the IZIMODAL",
    icon: 'icon-star',
    headerColor: '#00af66',
    width: 600,
    timeout: 10000,
    timeoutProgressbar: true,
    transitionIn: 'fadeInUp',
    transitionOut: 'fadeOutDown',
    bottom: 0,
    history: false,
    autoOpen: true,
    onClosed: function(){
        $("html").removeClass('iziModal-isOverflow');
    }
});



$("#modal-large").iziModal({
    title: "Welcome to the iziModalWelcome to the iziModalWelcome to the iziModalWelcome to the iziModalWelcome to the iziModal",
    // subtitle: "Simple, complete and lightweight modal plugin with jquery.",
    icon: 'icon-chat',
    // overlayColor: 'rgba(255, 255, 255, 0.4)',
    // headerColor: '#334c7b',
    iconColor: 'white',
    // fullscreen: true,
    width: 700,
    padding: 20,
    // rtl: true,
    bodyOverflow: true,
    // closeButton: false,
    top: 50,
    bottom: 50,
    onClosed: function(modal){
        console.info(modal)
        //modal.destroy();
    },
    onOpening: function(modal){
        modal.startLoading();
    },
    onOpened: function(modal){
        modal.stopLoading();
    }
});

$(document).on('click', '.trigger-large', function (event) {
    event.preventDefault();
    $('#modal-large').iziModal('open');
});


$(document).on('fullscreen', '#modal-default', function (e, modal) {
    console.log('Fullscreen: '+modal.isFullscreen);
});

$(document).on('opening', '#modal-default', function (e) {
    //console.dir(e);
});
$(document).on('opened', '#modal-default', function (e) {
    //console.dir(e);
});
$(document).on('closing', '#modal-default', function (e) {
    //console.dir(e);
});
$(document).on('closed', '#modal-default', function (e) {
    //console.dir(e);
});


$("#modal-custom").on('click', 'header a', function(event) {
    event.preventDefault();
    var $this = $(this);
    var index = $this.index();
    $this.addClass('active').siblings('a').removeClass('active');
    
    var $sections = $this.closest('div').find('.sections');
    var $currentSection = $this.closest("div").find("section").eq(index);
    //var $nextSection = $this.closest("div").find("section").eq(index).siblings('section');

    $sections.css('height', $currentSection.innerHeight());

    function changeHeight(){
        $this.closest("div").find("section").eq(index).fadeIn().siblings('section').fadeOut(100);
    }

    if( $currentSection.innerHeight() > $sections.innerHeight() ){
        changeHeight();
    } else {
        setTimeout(function() {
            changeHeight();
        }, 150);
    }

    if( $this.index() === 0 ){
        $("#modal-custom .iziModal-content .icon-close").css('background', '#ddd');
    } else {
        $("#modal-custom .iziModal-content .icon-close").attr('style', '');
    }
});

$("#modal-custom").on('click', '.submit', function(event) {
    event.preventDefault();

    var fx = "wobble",  //wobble shake
        $modal = $(this).closest('.iziModal');

    if( !$modal.hasClass(fx) ){
        $modal.addClass(fx);
        setTimeout(function(){
            $modal.removeClass(fx);
        }, 1500);
    }
});

$(document).on('iziModal-group-change', function (e, modals) {
    //console.info(modals);
});
