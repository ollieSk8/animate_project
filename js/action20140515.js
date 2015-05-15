(function(){
        var project={
          startFn:function(){
            var content_bg=$('.content-bg');
            var start_class=['star1','star2','star3'];
            var start_left=[];//200
            var start_top=[];//445

            for(var i=0;i<200;i++){
              start_left.push(i*10);
            }
           
            for(var i=0;i<40;i++){
              start_top.push(i*10);
            }

            function creatStart(){
              for(var i=0;i<30;i++){
                var className=start_class[Math.round(Math.random(0,1)*2)];

                var oLeft=start_left[Math.round(Math.random(0,1)*200)];
                var oTop=start_top[Math.round(Math.random(0,1)*40)];
                if(oTop&&oLeft&&className==undefined){
                  continue
                }else{
                  var start=$('<span class="'+className+' animated flash" style="left:'+oLeft+'px;top:'+oTop+'px;"></span>');
                }
                content_bg.append(start);

              }
            }
            creatStart();
            setInterval(function(){
              content_bg.find('span').remove();
              creatStart();
            },5000);
          },
          scrollFn:function(){
              var animated_dom=$('[data-animate]');

              $(window).on('scroll',function(){
                var scrollTop=$(window).scrollTop();
                if(scrollTop>300){
                  animated_dom.each(function(index,item){
                     var className=$(item).attr('data-animate');
                     $(item).removeClass('animated '+className);
                  });
                }else{
                  animated_dom.each(function(index,item){
                     var className=$(item).attr('data-animate');
                     $(item).addClass('animated '+className);
                  });
                }
              });
          },
        }
        $(function(){
           project.startFn();
           project.scrollFn();
        });
      })();