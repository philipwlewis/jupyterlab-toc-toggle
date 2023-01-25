jQuery(document).ready(function() {

      $('figcaption').each(function(){
        let w = $(this).attr('width');
        let id = $(this).attr('id');
        $(this).attr('width','');
        $(this).attr('id','');
        var $outputarea = $(this).closest('.jp-OutputArea-child').prev();
        $outputarea.find("img").width(w).attr('id',id).wrap('<fig></fig>').after($(this));
    })
    });
