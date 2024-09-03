
window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

//Integration to EMAILJS
function SendMail() {

    var params = {
       from_name : document.getElementById("fullName").value,
       email_id : document.getElementById("email_id").value,
       message : document.getElementById("message").value
    }

    emailjs.send('service_tyakoqv', 'template_nh16ncj', params).then(function(res) {
        //alert("Email has been sent successfully" + res.status);
        window.location.href = "thanks.html";
    }

)

}




