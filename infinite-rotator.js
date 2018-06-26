$(window).load(function () { //start after HTML, images have loaded

   

    var InfiniteRotator =
            {

                init: function ()
                {
                    //initial fade-in time (in milliseconds)
                    var initialFadeIn = 1000;

                    //interval between items (in milliseconds)
                    var itemInterval = 5000;

                    //cross-fade time (in milliseconds)
                    var fadeTime = 2500;

                    //count number of items
                    var numberOfItems = $('.banner2').length;

                    //set current item
                    var currentItem = 0;

                    //show first item
                    $('.banner2').eq(currentItem).fadeIn(initialFadeIn);

                    //next fuction
                    function getNext() {

                        if (currentItem === numberOfItems - 1) {
                            currentItem = 0;
                        } else {
                            currentItem++;
                        }
                        $('.banner2').eq(currentItem).fadeIn(initialFadeIn);
                    }

                    //prevours function
                    function getPrev() {
                        if (currentItem === 0) {
                            currentItem = numberOfItems - 1;
                        } else {

                            currentItem--;
                        }
                        $('.banner2').eq(currentItem).fadeIn(initialFadeIn);
                    }
                    //loop through the items
                    var infiniteLoop = setInterval(function () {
                        $('.banner2').eq(currentItem).fadeOut(fadeTime);

                        if (currentItem === numberOfItems - 1) {
                            currentItem = 0;
                        } else {
                            currentItem++;
                        }
                        $('.banner2').eq(currentItem).fadeIn(fadeTime);

                    }, itemInterval);


                }
            };

    InfiniteRotator.init();

});
