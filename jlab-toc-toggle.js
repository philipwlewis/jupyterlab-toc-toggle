    var code_toggle_added = false;
    $(function() { 
    if ( code_toggle_added == false) {
        $(".CodeMirror pre").each(function(){
            var $pre = $(this);
            $("<button style='float:right;'></button>").click(function(){
                $pre.toggle();
                if ($(this).text() === 'show code') { $(this).text('hide code'); }
                else { $(this).text('show code'); }
            }).insertBefore( $pre.parent() ).click();
       }); 
     } 
    code_toggle_added = true;
    $('#toggle_code').hide();
    });
    
    var indices = [];

    function addIndex() {
      // jQuery will give all the HNs in document order
      jQuery('h1,h2,h3,h4,h5,h6').each(function(i,e) {
          var hIndex = parseInt(this.nodeName.substring(1)) - 1;

          // just found a levelUp event
          if (indices.length - 1 > hIndex) {
            indices= indices.slice(0, hIndex + 1 );
          }

          // just found a levelDown event
          if (indices[hIndex] == undefined) {
             indices[hIndex] = 0;
          }

          // count + 1 at current level
          indices[hIndex]++;

          // display the full position in the hierarchy
          jQuery(this).prepend(indices.join(".")+"&nbsp;&nbsp;");

      });
    }

    jQuery(document).ready(function() {
      addIndex();
    });
