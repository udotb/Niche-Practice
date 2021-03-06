$(document).ready(function() {
    $(function() {
            $(".preloader").fadeOut(), $("#side-menu").metisMenu()
        }), $(".open-close").click(function() {
            $("body").toggleClass("show-sidebar").toggleClass("hide-sidebar"), $(".sidebar-head .open-close i").toggleClass("ti-menu")
        }), $(".right-side-toggle").click(function() {
            $(".right-sidebar").slideDown(50), $(".right-sidebar").toggleClass("shw-rside"), $(".fxhdr").click(function() {
                $("body").toggleClass("fix-header")
            }), $(".fxsdr").click(function() {
                $("body").toggleClass("fix-sidebar")
            }), $("body").hasClass("fix-header") ? $(".fxhdr").attr("checked", !0) : $(".fxhdr").attr("checked", !1)
        }), $(function() {
            $(window).bind("load resize", function() {
                topOffset = 60, width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width, width < 768 ? ($("div.navbar-collapse").addClass("collapse"), topOffset = 100) : $("div.navbar-collapse").removeClass("collapse"), height = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1, height -= topOffset, height < 1 && (height = 1), height > topOffset && $("#page-wrapper").css("min-height", height + "px")
            });
            var e = window.location,
                i = $("ul.nav a").filter(function() {
                    return this.href == e || 0 == e.href.indexOf(this.href)
                }).addClass("active").parent().parent().addClass("in").parent();
            i.is("li") && i.addClass("active")
        }), $(function() {
            $(window).bind("load resize", function() {
                width = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width, width < 1170 ? ($("body").addClass("content-wrapper"), $(".sidebar-nav, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible")) : $("body").removeClass("content-wrapper")
            })
        }),
        function(e, i, t) {
            var s = '[data-perform="panel-collapse"]';
            e(s).each(function() {
                var i = e(this),
                    t = i.closest(".panel"),
                    s = t.find(".panel-wrapper"),
                    l = {
                        toggle: !1
                    };
                s.length || (s = t.children(".panel-heading").nextAll().wrapAll("<div/>").parent().addClass("panel-wrapper"), l = {}), s.collapse(l).on("hide.bs.collapse", function() {
                    i.children("i").removeClass("ti-minus").addClass("ti-plus")
                }).on("show.bs.collapse", function() {
                    i.children("i").removeClass("ti-plus").addClass("ti-minus")
                })
            }), e(t).on("click", s, function(i) {
                i.preventDefault();
                var t = e(this).closest(".panel"),
                    s = t.find(".panel-wrapper");
                s.collapse("toggle")
            })
        }(jQuery, window, document),
        function(e, i, t) {
            var s = '[data-perform="panel-dismiss"]';
            e(t).on("click", s, function(i) {
                function t() {
                    var i = s.parent();
                    s.remove(), i.filter(function() {
                        var i = e(this);
                        return i.is('[class*="col-"]') && 0 === i.children("*").length
                    }).remove()
                }
                i.preventDefault();
                var s = e(this).closest(".panel");
                t()
            })
        }(jQuery, window, document), $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        }), $(function() {
            $('[data-toggle="popover"]').popover()
        }), $(".list-task li label").click(function() {
            $(this).toggleClass("task-done")
        }), $(".settings_box a").click(function() {
            $("ul.theme_color").toggleClass("theme_block")
        })
}), $(".collapseble").click(function() {
    $(".collapseblebox").fadeToggle(350)
}), $(".slimscrollright").slimScroll({
    height: "100%",
    position: "right",
    size: "5px",
    color: "#dcdcdc"
}), $(".slimscrollsidebar").slimScroll({
    height: "100%",
    position: "right",
    size: "6px",
    color: "rgba(0,0,0,0.3)"
}), $(".chat-list").slimScroll({
    height: "100%",
    position: "right",
    size: "0px",
    color: "#dcdcdc"
}), $("body").trigger("resize"), $(".visited li a").click(function(e) {
    $(".visited li").removeClass("active");
    var i = $(this).parent();
    i.hasClass("active") || i.addClass("active"), e.preventDefault()
}), 

$("#to-recover").click(function() {
    $("#loginform").slideUp(), $("#recoverform").fadeIn()
}), 
$("#backToLogin").click(function() {
    $("#recoverform").fadeOut(), $("#loginform").slideDown()
}), 

$(".navbar-toggle").click(function() {
    $(".navbar-toggle i").toggleClass("ti-menu"), $(".navbar-toggle i").addClass("ti-close")
});