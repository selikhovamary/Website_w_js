var navbar=document.querySelector(".headerItems"),navbarUl=document.querySelector(".headerNavbar"),sectionPic=document.querySelectorAll(".photoCategories .section__pic"),burgerButton=document.querySelector(".burger"),burgerMenu=document.querySelector(".burgerMenu");for(window.addEventListener("scroll",function(){10<=pageYOffset?(navbar.classList.add("bg","border","fixed"),navbarUl.classList.remove("border")):navbar.classList.contains("bg")&&(navbar.classList.remove("bg","border","fixed"),navbarUl.classList.add("border"))}),i=0;i<sectionPic.length;i++)sectionPic[i].addEventListener("mouseover",function(){this.querySelector(".gallery__pic").classList.add("opacityImg");var e=this.querySelector(".categoryLink");e.classList.remove("hidden"),e.classList.remove("opacity")}),sectionPic[i].addEventListener("mouseout",function(){this.querySelector(".gallery__pic").classList.remove("opacityImg");var e=this.querySelector(".categoryLink");e.classList.add("opacity"),e.addEventListener("transitionend",function(){e.classList.contains("opacity")&&e.classList.add("hidden")})});!function(){var s=document.querySelector(".back_to_top");window.addEventListener("scroll",function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;t<e&&s.classList.add("back_to_top-show"),e<t&&s.classList.remove("back_to_top-show")}),s.addEventListener("click",function e(){0<window.pageYOffset&&(window.scrollBy(0,-80),setTimeout(e,0))})}(),burgerButton.addEventListener("click",function(){burgerMenu.classList.toggle("hidden"),setTimeout(function(){burgerMenu.classList.toggle("opacity")},100)}),$(document).ready(function(){var e=$(".owl-carousel");e.owlCarousel({items:4.5,loop:!0,margin:10,autoplay:!0,autoplayTimeout:2e3,autoplayHoverPause:!0,responsiveClass:!0,responsive:{0:{items:2.5},320:{items:3.5},765:{items:4.5}}}),$(".play").on("click",function(){e.trigger("play.owl.autoplay",[1e3])}),$(".stop").on("click",function(){e.trigger("stop.owl.autoplay")})});var msg,sendMsg=document.querySelector("#sendMsg"),firstName=document.querySelector("#name"),mobileTel=document.querySelector("#tel");function clearInputs(){var e=document.querySelectorAll("input");for(i=0;i<e.length;i++)e[i].value=""}function checkInputs(){var e=document.querySelectorAll("input");for(i=0;i<e.length;i++)e[i].value||e[i].classList.add("empty")}function deleteError(){var e=document.querySelectorAll("input");for(i=0;i<e.length;i++)e[i].classList.contains("empty")&&e[i].classList.remove("empty")}sendMsg.addEventListener("click",function(){(deleteError(),firstName.value&&mobileTel.value)?(msg="Name: "+firstName.value+" ; Tel: "+mobileTel.value,fetch("https://api.telegram.org/bot892587873:AAFw-auKXmBAvQ0x77e-hty-BvS-faOHS0Y/sendMessage?chat_id=214831481&text="+msg),clearInputs(),sendMsg.classList.add("success"),sendMsg.innerHTML="&#10004;",setTimeout(function(){sendMsg.classList.contains("success")&&(sendMsg.classList.remove("success"),sendMsg.innerHTML="Send")},2e3)):checkInputs()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsibmF2YmFyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2YmFyVWwiLCJzZWN0aW9uUGljIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1cmdlckJ1dHRvbiIsImJ1cmdlck1lbnUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicGFnZVlPZmZzZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJjb250YWlucyIsImkiLCJsZW5ndGgiLCJ0aGlzIiwibGluayIsImdvVG9wQnRuIiwic2Nyb2xsZWQiLCJjb29yZHMiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGllbnRIZWlnaHQiLCJiYWNrVG9Ub3AiLCJzY3JvbGxCeSIsInNldFRpbWVvdXQiLCJ0b2dnbGUiLCIkIiwicmVhZHkiLCJvd2wiLCJvd2xDYXJvdXNlbCIsIml0ZW1zIiwibG9vcCIsIm1hcmdpbiIsImF1dG9wbGF5IiwiYXV0b3BsYXlUaW1lb3V0IiwiYXV0b3BsYXlIb3ZlclBhdXNlIiwicmVzcG9uc2l2ZUNsYXNzIiwicmVzcG9uc2l2ZSIsIjAiLCIzMjAiLCI3NjUiLCJvbiIsInRyaWdnZXIiLCJtc2ciLCJzZW5kTXNnIiwiZmlyc3ROYW1lIiwibW9iaWxlVGVsIiwiY2xlYXJJbnB1dHMiLCJpbnB1dHMiLCJ2YWx1ZSIsImNoZWNrSW5wdXRzIiwiZGVsZXRlRXJyb3IiLCJmZXRjaCIsImlubmVySFRNTCJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsT0FBU0MsU0FBU0MsY0FBYyxnQkFDaENDLFNBQVdGLFNBQVNDLGNBQWMsaUJBQ2xDRSxXQUFhSCxTQUFTSSxpQkFBaUIsa0NBQ3ZDQyxhQUFlTCxTQUFTQyxjQUFjLFdBQ3RDSyxXQUFhTixTQUFTQyxjQUFjLGVBYXhDLElBWEFNLE9BQU9DLGlCQUFpQixTQUFVLFdBQ2IsSUFBZkMsYUFDRlYsT0FBT1csVUFBVUMsSUFBSSxLQUFNLFNBQVUsU0FDckNULFNBQVNRLFVBQVVFLE9BQU8sV0FDakJi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SCxRQUFRbkMsVUFBVUMsSUFBSSxXQUN0QmtDLFFBQVFTLFVBQVksV0FDcEI3QixXQUFXLFdBQ0hvQixRQUFRbkMsVUFBVUcsU0FBUyxhQUMzQmdDLFFBQVFuQyxVQUFVRSxPQUFPLFdBQ3pCaUMsUUFBUVMsVUFBWSxTQUV6QixNQUVISCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG5hdmJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJJdGVtcycpXHJcbnZhciBuYXZiYXJVbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJOYXZiYXInKTtcclxudmFyIHNlY3Rpb25QaWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGhvdG9DYXRlZ29yaWVzIC5zZWN0aW9uX19waWMnKVxyXG52YXIgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpXHJcbnZhciBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlck1lbnUnKVxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuICBpZiAocGFnZVlPZmZzZXQgPj0gMTApIHtcclxuICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCdiZycsICdib3JkZXInLCAnZml4ZWQnKTtcclxuICAgIG5hdmJhclVsLmNsYXNzTGlzdC5yZW1vdmUoJ2JvcmRlcicpXHJcbiAgfSBlbHNlIGlmIChuYXZiYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdiZycpKSB7XHJcbiAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnYmcnLCAnYm9yZGVyJywgJ2ZpeGVkJyk7XHJcbiAgICBuYXZiYXJVbC5jbGFzc0xpc3QuYWRkKCdib3JkZXInKVxyXG5cclxuICB9XHJcbn0pXHJcblxyXG5mb3IgKGkgPSAwOyBpIDwgc2VjdGlvblBpYy5sZW5ndGg7IGkrKykge1xyXG4gIHNlY3Rpb25QaWNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBpYyA9IHRoaXMucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3BpYycpXHJcbiAgICBwaWMuY2xhc3NMaXN0LmFkZCgnb3BhY2l0eUltZycpXHJcbiAgICB2YXIgbGluayA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5TGluaycpO1xyXG4gICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgIGxpbmsuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eScpO1xyXG5cclxuICB9KTtcclxuICBzZWN0aW9uUGljW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHBpYyA9IHRoaXMucXVlcnlTZWxlY3RvcignLmdhbGxlcnlfX3BpYycpXHJcbiAgICBwaWMuY2xhc3NMaXN0LnJlbW92ZSgnb3BhY2l0eUltZycpXHJcbiAgICB2YXIgbGluayA9IHRoaXMucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5TGluaycpO1xyXG4gICAgbGluay5jbGFzc0xpc3QuYWRkKCdvcGFjaXR5Jyk7XHJcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIGlmIChsaW5rLmNsYXNzTGlzdC5jb250YWlucygnb3BhY2l0eScpKSB7XHJcbiAgICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9KVxyXG59XHJcbi8vIHRvIHRvcCBidXR0b25cclxuKGZ1bmN0aW9uICgpIHtcclxuICBmdW5jdGlvbiB0cmFja1Njcm9sbCgpIHtcclxuICAgIHZhciBzY3JvbGxlZCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHZhciBjb29yZHMgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG5cclxuICAgIGlmIChzY3JvbGxlZCA+IGNvb3Jkcykge1xyXG4gICAgICBnb1RvcEJ0bi5jbGFzc0xpc3QuYWRkKCdiYWNrX3RvX3RvcC1zaG93Jyk7XHJcbiAgICB9XHJcbiAgICBpZiAoc2Nyb2xsZWQgPCBjb29yZHMpIHtcclxuICAgICAgZ29Ub3BCdG4uY2xhc3NMaXN0LnJlbW92ZSgnYmFja190b190b3Atc2hvdycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gYmFja1RvVG9wKCkge1xyXG4gICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDApIHtcclxuICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIC04MCk7XHJcbiAgICAgIHNldFRpbWVvdXQoYmFja1RvVG9wLCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBnb1RvcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrX3RvX3RvcCcpO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdHJhY2tTY3JvbGwpO1xyXG4gIGdvVG9wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYmFja1RvVG9wKTtcclxufSkoKTtcclxuLy9oYW1iXHJcbmJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAvLyB2YXIgc3BhbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idXJnZXIgPiBzcGFuJyk7XHJcbiAgLy8gc3Bhbi5mb3JFYWNoLmNsYXNzTGlzdC50b2dnbGUoJ2hhbWJNZW51JylcclxuICAvLyBjb25zb2xlLmxvZyhzcGFuKVxyXG4gIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxuICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgIGJ1cmdlck1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BhY2l0eScpXHJcbiAgfSwgMTAwKTtcclxufSlcclxuXHJcbi8vIG93bC1jYXJvdXNlbFxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xyXG4gIHZhciBvd2wgPSAkKCcub3dsLWNhcm91c2VsJyk7XHJcbiAgb3dsLm93bENhcm91c2VsKHtcclxuICAgIGl0ZW1zOiA0LjUsXHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlUaW1lb3V0OiAyMDAwLFxyXG4gICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIDA6IHtcclxuICAgICAgaXRlbXM6IDIuNSxcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgaXRlbXM6IDMuNSxcclxuICAgIH0sXHJcbiAgICA3NjU6IHtcclxuICAgICAgaXRlbXM6IDQuNVxyXG4gICAgfVxyXG4gIH1cclxuICB9KTtcclxuICAkKCcucGxheScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgIG93bC50cmlnZ2VyKCdwbGF5Lm93bC5hdXRvcGxheScsIFsxMDAwXSlcclxuICB9KVxyXG4gICQoJy5zdG9wJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG4gICAgb3dsLnRyaWdnZXIoJ3N0b3Aub3dsLmF1dG9wbGF5JylcclxuICB9KVxyXG59KTtcclxudmFyIHNlbmRNc2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VuZE1zZycpO1xyXG52YXIgZmlyc3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKTtcclxudmFyIG1vYmlsZVRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwnKTtcclxudmFyIG1zZztcclxuXHJcbnNlbmRNc2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBkZWxldGVFcnJvcigpXHJcbiAgICBpZiAoZmlyc3ROYW1lLnZhbHVlICYmIG1vYmlsZVRlbC52YWx1ZSkge1xyXG4gICAgICAgIG1zZyA9ICdOYW1lOiAnICsgZmlyc3ROYW1lLnZhbHVlICsgJyAnICsgJzsgVGVsOiAnICsgbW9iaWxlVGVsLnZhbHVlO1xyXG4gICAgICAgIHZhciBib3RMaW5rID0gJ2h0dHBzOi8vYXBpLnRlbGVncmFtLm9yZy9ib3Q4OTI1ODc4NzM6QUFGdy1hdUtYbUJBdlEweDc3ZS1odHktQnZTLWZhT0hTMFkvc2VuZE1lc3NhZ2U/Y2hhdF9pZD0yMTQ4MzE0ODEmdGV4dD0nICsgbXNnO1xyXG4gICAgICAgIGZldGNoKGJvdExpbmspO1xyXG4gICAgICAgIGNsZWFySW5wdXRzKCk7XHJcbiAgICAgICAgc2VuZE1zZy5jbGFzc0xpc3QuYWRkKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgc2VuZE1zZy5pbm5lckhUTUwgPSAnJiMxMDAwNDsnO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKHNlbmRNc2cuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdWNjZXNzJykpe1xyXG4gICAgICAgICAgICAgICAgc2VuZE1zZy5jbGFzc0xpc3QucmVtb3ZlKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgICAgICAgICBzZW5kTXNnLmlubmVySFRNTCA9ICdTZW5kJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDIwMDApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoZWNrSW5wdXRzKClcclxuICAgIH1cclxufSlcclxuXHJcbmZ1bmN0aW9uIGNsZWFySW5wdXRzKCkge1xyXG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaW5wdXRzW2ldLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrSW5wdXRzKCkge1xyXG4gICAgdmFyIGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JylcclxuICAgIGZvciAoaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoIWlucHV0c1tpXS52YWx1ZSkge1xyXG4gICAgICAgICAgICBpbnB1dHNbaV0uY2xhc3NMaXN0LmFkZCgnZW1wdHknKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZGVsZXRlRXJyb3IoKXtcclxuICAgIHZhciBpbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0c1tpXS5jbGFzc0xpc3QuY29udGFpbnMoJ2VtcHR5JykpIHtcclxuICAgICAgICAgICAgaW5wdXRzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2VtcHR5Jyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19
