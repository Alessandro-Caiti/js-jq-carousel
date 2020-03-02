$(document).ready(function() {

    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.prev').click(prevSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva


    // Definisco le funzioni nextImage e prevImage
    function nextSlide() {
        if ( $('.images img.active').hasClass('last') ) {

            $('.images img.active').removeClass('active');
            $('.images img.first').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.first').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prossimaImg = $('.images img.active').next();

            imgAttiva.removeClass('active');
            prossimaImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').next();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    function prevSlide() {
        if ( $('.images img.active').hasClass('first') ) {

            $('.images img.active').removeClass('active');
            $('.images img.last').addClass('active');

            // Pallini
            $('.slider-nav i.active').removeClass('active');
            $('.slider-nav i.last').addClass('active');

        } else {
            var imgAttiva = $('.images img.active'); // Rimuovo l'active
            var prevImg = $('.images img.active').prev();

            imgAttiva.removeClass('active');
            prevImg.addClass('active');

            // Pallini
            var pallinoAttivo = $('.slider-nav i.active'); // Rimuovo l'active
            var prossimaPallino = $('.slider-nav i.active').prev();

            pallinoAttivo.removeClass('active');
            prossimaPallino.addClass('active');
        }
    }

    // Data una variabile contatore, fermo lo slide show dopo tot giri
    var count = 0;
    var clockSlideShow = setInterval(function() {
        if (count < 8) {
            nextSlide();
            count++;
        } else {
            clearInterval(clockSlideShow);
        }
    }, 3000);


    // Ipotesi mouse enter e mouse leave ma ci devo lavorare

    // function mySlideShow() {
    //     var count = 0;
    //     var clockSlideShow = setInterval(function() {
    //         if (count < 8) {
    //             nextSlide();
    //             count++;
    //         } else {
    //             clearInterval(clockSlideShow);
    //         }
    //     }, 3000);
    // }
    //
    // setTimeout(mySlideShow, 1000);
    // $(".images").mouseenter(clearInterval(mySlideShow)); /* non ho bene capito come fermarlo */
    // $(".images").mouseleave(mySlideShow);


});
