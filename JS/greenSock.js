TweenMax.to('#arrow', 13 ,  {
 
    delay: 1,
    opacity: 1,
    ease: Expo.easeInOut

})

TweenMax.to(' h1', 13, {

    
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('header h2', 13, {

    
    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('#navigation', 1, {

    opacity:1,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation', 1, {

    delay: 0.8,
    y: -65,
    ease: Expo.easeIn

})

/*liens qui apparaisse l'un apres l autre */

TweenMax.from('#navigation a:nth-child(1)', 3, {
    delay:2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(2)', 3.5, {
    delay:2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(3)', 4, {
    delay:2.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
})

TweenMax.from('#navigation a:nth-child(4)', 4.5, {
    delay:2.5,
    opacity: 0,
    ease: Expo.easeInOut
})

/*animation pour mobile*/

TweenMax.to('.titreAbout',15, {

    opacity: 1,
    ease: Expo.easeInOut
})

TweenMax.to('.sousTitreAbout',15, {

    opacity: 1,
    ease: Expo.easeInOut
})