$(function() {

  var html = $('#tmpl').html();
  var data = {
        name: "Roman Turchyniak",
        targetTitle: "Мои цели:",
        targets:[
          "Развитие экспертизы",
          "Найти работу ...",
          "Принимать участие в интересных больших проектах"
        ],
        tel: "+380 (97) 708 90 60",
        email: "elf295@gmail.com",
        fblink: "https://www.facebook.com/ForveX",
        linkedinlink: "https://www.linkedin.com/in/roman-turchiniak-6b332b102",
        expectTitle: 'Ожидания:',
        expectContent: 'Надеюсь на серьезную нагрузку, интересные задачи и хороший пинок =)'
      }

      var content=tmpl(html, data);

      $('.templation').append(content);

});
