window.onscroll = function () {
	let getPosition = (el) => {
		var rect = el.getBoundingClientRect();
		return  rect.top + window.scrollY
	};

    /// benefit slider
    let isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        let benefitInner = document.querySelector('.l-benefit-inner');
        let benefitSlider = document.querySelector('.l-benefit-slider');
        let benefitContainer = document.querySelector('.l-benefit-container');
        let benefitInnerPosition = getPosition(benefitInner);

        if (benefitInnerPosition < window.scrollY + window.innerHeight) {
            let offset = window.scrollY - benefitInnerPosition;
            // [-300, ...]
            if (offset > -300) {
                benefitSlider.style.transform = `translateY(${offset + 300}px)`;
                benefitContainer.style.transform = `translateX(${-offset - 300}px)`;
            }
        }
    }


    /// feature phone

    let phone = document.querySelector('.l-feature-phone');
    let phonePosition = getPosition(phone) + (phone.clientHeight / 2);

    let row1 = document.querySelector('#row-1');
    let row2 = document.querySelector('#row-2');
    let row3 = document.querySelector('#row-3');
    let row4 = document.querySelector('#row-4');

    let screen1 = document.querySelector('#screen-1');
    let screen2 = document.querySelector('#screen-2');
    let screen3 = document.querySelector('#screen-3');
    let screen4 = document.querySelector('#screen-4');

    let row1Position = getPosition(row1);
    let row2Position = getPosition(row2);
    let row3Position = getPosition(row3);
    let row4Position = getPosition(row4);

    // If the phone is inside row 4
    if (phonePosition > row4Position) {
        screen4.style.opacity = 1;
        return;
    }

    // If the phone is inside row 3
    if (phonePosition > row3Position) {
        screen3.style.opacity = 1;
        screen4.style.opacity = 0;
        return;
    }

    // If the phone is inside row 2
    if (phonePosition > row2Position) {
        screen2.style.opacity = 1;
        screen3.style.opacity = 0;
        screen4.style.opacity = 0;
        return;
    }

    // If the phone is inside row 1
    if (phonePosition > row1Position) {
        screen1.style.opacity = 1;
        screen2.style.opacity = 0;
        screen3.style.opacity = 0;
        screen4.style.opacity = 0;
        return;
    }

};

// qna on press event
let qna1 = document.querySelector('#qna-1');
let qna2 = document.querySelector('#qna-2');
let qna3 = document.querySelector('#qna-3');

qna1.addEventListener('click', function() {
    qna1.classList.toggle('active');
    qna2.classList.remove('active');
    qna3.classList.remove('active');
});
qna2.addEventListener('click', function() {
    qna1.classList.remove('active');
    qna2.classList.toggle('active');
    qna3.classList.remove('active');
});
qna3.addEventListener('click', function() {
    qna1.classList.remove('active');
    qna2.classList.remove('active');
    qna3.classList.toggle('active');
});


// Hamburger menu
let hamburger = document.querySelector('.l-header-hamburger');
let menu = document.querySelector('.l-hamburger-menu');

hamburger.addEventListener('click', function() {
    menu.classList.toggle('active');

    if (document.body.style.overflow !== 'hidden') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
});


// Close popup
function popupToggle() {
    let popup = document.querySelector('.l-popup');
    popup.classList.toggle('active');
}
