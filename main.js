$(function() {
    $('#contact').click(function() {
      $('#contactForm').fadeToggle();
    })
    $(document).mouseup(function (e) {
      var container = $("#contactForm");
  
      if (!container.is(e.target)
          && container.has(e.target).length === 0)
      {
          container.fadeOut();
      }
    });
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight)
  }
