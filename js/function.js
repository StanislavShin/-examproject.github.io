$(document).ready(function() {
    $('a[href^="#"]').bind("click", function(e){
        e.preventDefault();

        var distanceScroll = $(this);
        $('html, body').stop().animate({ scrollTop: $(distanceScroll.attr("href")).offset().top}, 1000);
        
       });
       return false;
});

$(document).ready(function() {
    $('.interior_link').on('click', function(e){
        e.preventDefault();
        var $this = $(this),
            item = $this.closest('.interior_menu_item'),
            container = $this.closest('.tabs'),
            contentItems = container.find('.content_item'),
            active = contentItems.filter('.active'),
            href = $this.attr('href'),
            reqItem = contentItems.filter('.content_item-' + href),
            duration = 200;
            
        item.addClass('active').siblings().removeClass('active');
            
        active.stop(true).fadeOut(duration, function(){
            reqItem.stop(true).fadeIn(duration).addClass('active').siblings().removeClass('active');
            });
        });
});

$(document).ready(function(){
    $('.select_list').children().on('click', function(){ 
        var $this = $(this)
        $this.stop(true, true).fadeTo(500, 1).siblings().fadeTo(500, 0.2);
        
    });
});
$(document).ready(function(){
    $(".menu_burger").click(function(){
        $(this).closest("body").toggleClass("active");
   });
});