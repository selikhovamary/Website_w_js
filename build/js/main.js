var navbar=document.querySelector(".headerItems"),navbarUl=document.querySelector(".headerNavbar"),sectionPic=document.querySelectorAll(".photoCategories .section__pic"),burgerButton=document.querySelector(".burger"),burgerMenu=document.querySelector(".burgerMenu");for(window.addEventListener("scroll",function(){10<=pageYOffset?(navbar.classList.add("bg","border","fixed"),navbarUl.classList.remove("border")):navbar.classList.contains("bg")&&(navbar.classList.remove("bg","border","fixed"),navbarUl.classList.add("border"))}),i=0;i<sectionPic.length;i++)sectionPic[i].addEventListener("mouseover",function(){this.querySelector(".gallery__pic").classList.add("opacityImg");var e=this.querySelector(".categoryLink");e.classList.remove("hidden"),e.classList.remove("opacity")}),sectionPic[i].addEventListener("mouseout",function(){this.querySelector(".gallery__pic").classList.remove("opacityImg");var e=this.querySelector(".categoryLink");e.classList.add("opacity"),e.addEventListener("transitionend",function(){e.classList.contains("opacity")&&e.classList.add("hidden")})});!function(){var s=document.querySelector(".back_to_top");window.addEventListener("scroll",function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;t<e&&s.classList.add("back_to_top-show"),e<t&&s.classList.remove("back_to_top-show")}),s.addEventListener("click",function e(){0<window.pageYOffset&&(window.scrollBy(0,-80),setTimeout(e,0))})}(),burgerButton.addEventListener("click",function(){burgerMenu.classList.toggle("hidden"),setTimeout(function(){burgerMenu.classList.toggle("opacity")},100)}),$(document).ready(function(){var e=$(".owl-carousel");e.owlCarousel({items:4.5,loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:2.5},320:{items:3.5},765:{items:4.5}}}),$(".play").on("click",function(){e.trigger("play.owl.autoplay",[1e3])}),$(".stop").on("click",function(){e.trigger("stop.owl.autoplay")})});var msg,sendMsg=document.querySelector("#sendMsg"),firstName=document.querySelector("#name"),mobileTel=document.querySelector("#tel");function clearInputs(){var e=document.querySelectorAll("input");for(i=0;i<e.length;i++)e[i].value=""}function checkInputs(){var e=document.querySelectorAll("input");for(i=0;i<e.length;i++)e[i].value||e[i].classList.add("empty")}function deleteError(){var e=document.querySelectorAll("input");for(i=0;i<e.length;i++)e[i].classList.contains("empty")&&e[i].classList.remove("empty")}sendMsg.addEventListener("click",function(){(deleteError(),firstName.value&&mobileTel.value)?(msg="Name: "+firstName.value+" ; Tel: "+mobileTel.value,fetch("https://api.telegram.org/bot892587873:AAFw-auKXmBAvQ0x77e-hty-BvS-faOHS0Y/sendMessage?chat_id=214831481&text="+msg),clearInputs(),sendMsg.classList.add("success"),sendMsg.innerHTML="&#10004;",setTimeout(function(){sendMsg.classList.contains("success")&&(sendMsg.classList.remove("success"),sendMsg.innerHTML="Send")},2e3)):checkInputs()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibmF2YmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2YmFyVWwiLCJzZWN0aW9uUGljIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1cmdlckJ1dHRvbiIsImJ1cmdlck1lbnUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsImkiLCJsZW5ndGgiLCJ0aGlzIiwibGluayIsImdvVG9wQnRuIiwic2Nyb2xsZWQiLCJjb29yZHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJiYWNrVG9Ub3AiLCJzY3JvbGxCeSIsInNldFRpbWVvdXQiLCJ0b2dnbGUiLCIkIiwicmVhZHkiLCJvd2wiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwicmVzcG9uc2l2ZUNsYXNzIiwicmVzcG9uc2l2ZSIsIjAiLCIzMjAiLCI3NjUiLCJvbiIsInRyaWdnZXIiLCJtc2ciLCJzZW5kTXNnIiwiZmlyc3ROYW1lIiwibW9iaWxlVGVsIiwiY2xlYXJJbnB1dHMiLCJpbnB1dHMiLCJ2YWx1ZSIsImNoZWNrSW5wdXRzIiwiZGVsZXRlRXJyb3IiLCJmZXRjaCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsT0FBU0MsU0FBU0MsY0FBYyxnQkFDaENDLFNBQVdGLFNBQVNDLGNBQWMsaUJBQ2xDRSxXQUFhSCxTQUFTSSxpQkFBaUIsa0NBQ3ZDQyxhQUFlTCxTQUFTQyxjQUFjLFdBQ3RDSyxXQUFhTixTQUFTQyxjQUFjLGVBYXhDLElBWEFNLE9BQU9DLGlCQUFpQixTQUFVLFdBQ2IsSUFBZkMsYUFDRlYsT0FBT1csVUFBVUMsSUFBSSxLQUFNLFNBQVUsU0FDckNULFNBQVNRLFVBQVVFLE9BQU8sV0FDakJi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LFFBQVFuQyxVQUFVQyxJQUFJLFdBQ3RCa0MsUUFBUVMsVUFBWSxXQUNwQjdCLFdBQVcsV0FDSG9CLFFBQVFuQyxVQUFVRyxTQUFTLGFBQzNCZ0MsUUFBUW5DLFVBQVVFLE9BQU8sV0FDekJpQyxRQUFRUyxVQUFZLFNBRXpCLE1BRUhIIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbmF2YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlckl0ZW1zJylcclxudmFyIG5hdmJhclVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlck5hdmJhcicpO1xyXG52YXIgc2VjdGlvblBpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5waG90b0NhdGVnb3JpZXMgLnNlY3Rpb25fX3BpYycpXHJcbnZhciBidXJnZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyJylcclxudmFyIGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyTWVudScpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4gIGlmIChwYWdlWU9mZnNldCA+PSAxMCkge1xyXG4gICAgbmF2YmFyLmNsYXNzTGlzdC5hZGQoJ2JnJywgJ2JvcmRlcicsICdmaXhlZCcpO1xyXG4gICAgbmF2YmFyVWwuY2xhc3NMaXN0LnJlbW92ZSgnYm9yZGVyJylcclxuICB9IGVsc2UgaWYgKG5hdmJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2JnJykpIHtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QucmVtb3ZlKCdiZycsICdib3JkZXInLCAnZml4ZWQnKTtcclxuICAgIG5hdmJhclVsLmNsYXNzTGlzdC5hZGQoJ2JvcmRlcicpXHJcblxyXG4gIH1cclxufSlcclxuXHJcbmZvciAoaSA9IDA7IGkgPCBzZWN0aW9uUGljLmxlbmd0aDsgaSsrKSB7XHJcbiAgc2VjdGlvblBpY1tpXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGljID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fcGljJylcclxuICAgIHBpYy5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5SW1nJylcclxuICAgIHZhciBsaW5rID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnlMaW5rJyk7XHJcbiAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5Jyk7XHJcblxyXG4gIH0pO1xyXG4gIHNlY3Rpb25QaWNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgcGljID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fcGljJylcclxuICAgIHBpYy5jbGFzc0xpc3QucmVtb3ZlKCdvcGFjaXR5SW1nJylcclxuICAgIHZhciBsaW5rID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnlMaW5rJyk7XHJcbiAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ29wYWNpdHknKTtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgaWYgKGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKCdvcGFjaXR5JykpIHtcclxuICAgICAgICBsaW5rLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuLy8gdG8gdG9wIGJ1dHRvblxyXG4oZnVuY3Rpb24gKCkge1xyXG4gIGZ1bmN0aW9uIHRyYWNrU2Nyb2xsKCkge1xyXG4gICAgdmFyIHNjcm9sbGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgdmFyIGNvb3JkcyA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcblxyXG4gICAgaWYgKHNjcm9sbGVkID4gY29vcmRzKSB7XHJcbiAgICAgIGdvVG9wQnRuLmNsYXNzTGlzdC5hZGQoJ2JhY2tfdG9fdG9wLXNob3cnKTtcclxuICAgIH1cclxuICAgIGlmIChzY3JvbGxlZCA8IGNvb3Jkcykge1xyXG4gICAgICBnb1RvcEJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdiYWNrX3RvX3RvcC1zaG93Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBiYWNrVG9Ub3AoKSB7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMCkge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsQnkoMCwgLTgwKTtcclxuICAgICAgc2V0VGltZW91dChiYWNrVG9Ub3AsIDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdmFyIGdvVG9wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tfdG9fdG9wJyk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0cmFja1Njcm9sbCk7XHJcbiAgZ29Ub3BCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBiYWNrVG9Ub3ApO1xyXG59KSgpO1xyXG4vL2hhbWJcclxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gIC8vIHZhciBzcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1cmdlciA+IHNwYW4nKTtcclxuICAvLyBzcGFuLmZvckVhY2guY2xhc3NMaXN0LnRvZ2dsZSgnaGFtYk1lbnUnKVxyXG4gIC8vIGNvbnNvbGUubG9nKHNwYW4pXHJcbiAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgYnVyZ2VyTWVudS5jbGFzc0xpc3QudG9nZ2xlKCdvcGFjaXR5JylcclxuICB9LCAxMDApO1xyXG59KVxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgb3dsID0gJCgnLm93bC1jYXJvdXNlbCcpO1xyXG4gICAgb3dsLm93bENhcm91c2VsKHtcclxuICAgICAgaXRlbXM6IDQuNSxcclxuICAgICAgbG9vcDogdHJ1ZSxcclxuICAgICAgbWFyZ2luOiAxMCxcclxuICAgICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICAgIGF1dG9wbGF5VGltZW91dDogMjAwMCxcclxuICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgICByZXNwb25zaXZlQ2xhc3M6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiB7XHJcbiAgICAgIDA6IHtcclxuICAgICAgICBpdGVtczogMi41LFxyXG4gICAgICB9LFxyXG4gICAgICAzMjA6IHtcclxuICAgICAgICBpdGVtczogMy41LFxyXG4gICAgICB9LFxyXG4gICAgICA3NjU6IHtcclxuICAgICAgICBpdGVtczogNC41XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnLnBsYXknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIG93bC50cmlnZ2VyKCdwbGF5Lm93bC5hdXRvcGxheScsIFsxMDAwXSlcclxuICAgIH0pXHJcbiAgICAkKCcuc3RvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgb3dsLnRyaWdnZXIoJ3N0b3Aub3dsLmF1dG9wbGF5JylcclxuICAgIH0pXHJcbiAgfSk7XHJcbnZhciBzZW5kTXNnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlbmRNc2cnKTtcclxudmFyIGZpcnN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbnZhciBtb2JpbGVUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsJyk7XHJcbnZhciBtc2c7XHJcblxyXG5zZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgZGVsZXRlRXJyb3IoKVxyXG4gICAgaWYgKGZpcnN0TmFtZS52YWx1ZSAmJiBtb2JpbGVUZWwudmFsdWUpIHtcclxuICAgICAgICBtc2cgPSAnTmFtZTogJyArIGZpcnN0TmFtZS52YWx1ZSArICcgJyArICc7IFRlbDogJyArIG1vYmlsZVRlbC52YWx1ZTtcclxuICAgICAgICB2YXIgYm90TGluayA9ICdodHRwczovL2FwaS50ZWxlZ3JhbS5vcmcvYm90ODkyNTg3ODczOkFBRnctYXVLWG1CQXZRMHg3N2UtaHR5LUJ2Uy1mYU9IUzBZL3NlbmRNZXNzYWdlP2NoYXRfaWQ9MjE0ODMxNDgxJnRleHQ9JyArIG1zZztcclxuICAgICAgICBmZXRjaChib3RMaW5rKTtcclxuICAgICAgICBjbGVhcklucHV0cygpO1xyXG4gICAgICAgIHNlbmRNc2cuY2xhc3NMaXN0LmFkZCgnc3VjY2VzcycpO1xyXG4gICAgICAgIHNlbmRNc2cuaW5uZXJIVE1MID0gJyYjMTAwMDQ7JztcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmIChzZW5kTXNnLmNsYXNzTGlzdC5jb250YWlucygnc3VjY2VzcycpKXtcclxuICAgICAgICAgICAgICAgIHNlbmRNc2cuY2xhc3NMaXN0LnJlbW92ZSgnc3VjY2VzcycpO1xyXG4gICAgICAgICAgICAgICAgc2VuZE1zZy5pbm5lckhUTUwgPSAnU2VuZCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAyMDAwKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaGVja0lucHV0cygpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBjbGVhcklucHV0cygpIHtcclxuICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlucHV0c1tpXS52YWx1ZSA9ICcnO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0lucHV0cygpIHtcclxuICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKCFpbnB1dHNbaV0udmFsdWUpIHtcclxuICAgICAgICAgICAgaW5wdXRzW2ldLmNsYXNzTGlzdC5hZGQoJ2VtcHR5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGRlbGV0ZUVycm9yKCl7XHJcbiAgICB2YXIgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKVxyXG4gICAgZm9yIChpID0gMDsgaSA8IGlucHV0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpbnB1dHNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdlbXB0eScpKSB7XHJcbiAgICAgICAgICAgIGlucHV0c1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdlbXB0eScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
