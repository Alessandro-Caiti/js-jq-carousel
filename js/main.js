$(document).ready(function() {

    // Invoco le funzioni per cambiare slide
    $('.next').click(nextSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva
    $('.prev').click(prevSlide);        // Al click richiamo la funzione per aggiornare l'immagine visualizzando la successiva

    // bonus

    $(".slider-nav i").click(function() {
        $(".slider-nav i").removeClass("active"); //rimuovo active su ogni pallino
        $(this).addClass("active"); //rendo active l'elemento selezionato (this) dal clic
        var posizione = $(this).index() //luca dice meglio così che sotto
        // var posizione = parseInt($(".slider-nav i").index(this)); //assegno la posizione (index) del valore selezionato dal click (this) ad una variabile
        $(".images img.active").removeClass("active"); //rimuovo active da ogni immagine
        $(".images img").eq(posizione).addClass("active"); //assegno active all'immagine corrispondente all'index tramite metoto eq
    })



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
    // var count = 0;
    // var clockSlideShow = setInterval(function() {
    //     if (count < 8) {
    //         nextSlide();
    //         count++;
    //     } else {
    //         clearInterval(clockSlideShow);
    //     }
    // }, 3000);
    //

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

    // correzzioni

    var autoPlay = setInterval(nextSlide, 3000);
    stopAutoPlay();

    // play e pausa
    $(".stop").click(function() {
        console.log("cliccato stop");
        clearInterval(autoPlay);
    });

    $(".play").click(function() {
        console.log("cliccato play");
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, 3000);
    });

    // ok mouse enter e mouse leave

    $(".images").mouseenter(function() {
        console.log("pausa");
        clearInterval(autoPlay);
    });

    $(".images").mouseleave(function() {
        console.log("play");
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, 3000);
        stopAutoPlay();
    });

    // stop dopo tot tempo come funzione per riutilizzarlo

    function stopAutoPlay() {
        var stop = setTimeout(function() {
            clearInterval(autoPlay);
        }, 24000);
    }


    // getsione da tastiera, aggiunta a lezione

    // $(document).keydown(function(event) {
    //     switch (event.which) {
    //         case 37:
    //             prevSlide()
    //             break;
    //         case 39:
    //             nextSlide()
    //             break;
    //         default:
    //             console.log("tasto errato");
    //     }
    // });
    // meglio questa versione
    $(document).keydown(function(event) {
        switch (event.key) {  //qui va bene anche evet.code
            case "ArrowLeft":
                prevSlide()
                break;
            case "ArrowRight":
                nextSlide()
                break;
            default:
                console.log("tasto errato");
        }
    });

});
