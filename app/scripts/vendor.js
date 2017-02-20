// (function() {
//   var a = function(a, b) {
//     return function() {
//       return a.apply(b, arguments)
//     }
//   };
//   window.Cover = function() {
//     function b(b) {
//       this.name = b, this.getScreenWidth = a(this.getScreenWidth, this), this.stopVideos = a(this.stopVideos, this), this.pauseSliders = a(this.pauseSliders, this), this.addSlider = a(this.addSlider, this), this.disable = a(this.disable, this), this.animeOut = a(this.animeOut, this), this.killTweens = a(this.killTweens, this), this.onTitleBtTimeout = a(this.onTitleBtTimeout, this), this.callTitleBtTimeout = a(this.callTitleBtTimeout, this), this.animeIn = a(this.animeIn, this), this.doAnime = a(this.doAnime, this), this.start = a(this.start, this), this.animElementOutAlpha = a(this.animElementOutAlpha, this), this.animElementOut = a(this.animElementOut, this), this.animElementAlpha = a(this.animElementAlpha, this), this.animElementSection2 = a(this.animElementSection2, this), this.animElementSection4 = a(this.animElementSection4, this), this.animElementAlphaShadowsFlash = a(this.animElementAlphaShadowsFlash, this), this.animElementAlphaShadows = a(this.animElementAlphaShadows, this), this.animElementAlphaShadows2 = a(this.animElementAlphaShadows2, this), this.animElementHome = a(this.animElementHome, this), this.animElementOutHome = a(this.animElementOutHome, this), this.animElement = a(this.animElement, this), this.getElement = a(this.getElement, this), this.resize = a(this.resize, this), this.addZero = a(this.addZero, this), this.setData = a(this.setData, this), this.render = a(this.render, this), this.startRender = a(this.startRender, this), this.stopRender = a(this.stopRender, this), this.doGoSection = a(this.doGoSection, this), this.animeLoader = a(this.animeLoader, this), this.scrollTouchStart = a(this.scrollTouchStart, this), this.scrollTouchMove = a(this.scrollTouchMove, this), this.doWheelEvent = a(this.doWheelEvent, this), this.init = a(this.init, this)
//     }
//
//     return b.prototype.init = function() {
//       var a;
//       return this.animInDone = !1, this.objTween = {
//         i: 0,
//         j: 0
//       }, this.doRender = !0, this.mainDiv = "#cover", this.type = "section_1", this.section = "", this.elements = {}, this.speedAnimation = .5, this.opened = !1, a = this, this.renderTimeout = 0, this.nextIndexSlideShow = 1, this.rotationLoader = 0, this.golbalScale = 1, this.animEnded = !1, this.signal.resize.add(function(a) {
//         return function() {
//           return a.resize()
//         }
//       }(this)), $("section#qui-sommes-nous").get(0).addEventListener("touchstart", function(a) {
//         return function(b) {
//           return a.scrollTouchStart(b)
//         }
//       }(this), !1), $("section#qui-sommes-nous").get(0).addEventListener("touchmove", function(a) {
//         return function(b) {
//           return a.scrollTouchMove(b)
//         }
//       }(this), !1), $("section#nos-expertises").get(0).addEventListener("touchstart", function(a) {
//         return function(b) {
//           return a.scrollTouchStart(b)
//         }
//       }(this), !1), $("section#nos-expertises").get(0).addEventListener("touchmove", function(a) {
//         return function(b) {
//           return a.scrollTouchMove(b)
//         }
//       }(this), !1), $("section#nos-references").get(0).addEventListener("touchstart", function(a) {
//         return function(b) {
//           return a.scrollTouchStart(b)
//         }
//       }(this), !1), $("section#nos-references").get(0).addEventListener("touchmove", function(a) {
//         return function(b) {
//           return a.scrollTouchMove(b)
//         }
//       }(this), !1), $("section").each(function(b, c) {
//         $(c).find(".cross-bt, .back-bt").click(function() {
//           return a.signal.href.dispatch($(c).attr("id"))
//         })
//       }), this.signal.goProject.add(function(b) {
//         return function(c, d) {
//           return b.section = c, b.project = d, b.stopRender(), b.opened = !0, $(".references-project-content").html(""), $("section").css({display: "none"}), $("section#" + b.section).css({
//             display: "block",
//             opacity: 1
//           }), TweenLite.set($(".references-project-content"), {opacity: 0}), TweenLite.to(b.mainDiv, 1.2, {
//             delay: 0,
//             left: -b.screenW,
//             ease: Expo.easeInOut
//           }), TweenLite.to("div#section", 1.2, {
//             delay: 0,
//             left: 0,
//             ease: Expo.easeInOut
//           }), a.ajaxLoaded = !1, $("div.references-project-loader").css({display: "block"}), a.animeLoader(), TweenLite.to($(".references-projects"), .5, {
//             opacity: 0,
//             ease: Expo.easeOut,
//             onComplete: function() {
//               return $(".references-projects").css({display: "none"}), $(".references-project").css(css{
//                 display: "block",
//                 opacity: 0
//               }), TweenLite.to($(".references-project"), .5, {
//                 opacity: 1, ease: Expo.easeOut, onComplete: function() {
//                   return $.ajax({
//                     dataType: "html",
//                     url: "php/project.php",
//                     type: "POST",
//                     data: {name: a.project, lang: window.lang},
//                     success: function(b) {
//                       $("div.references-project-loader").css({display: "none"}), a.ajaxLoaded = !0, a.nextIndexSlideShow = 0, b = b.split("__link__").join($("#title-bt-link").html()), $(".references-project-content").html(b), $(".references-project").scrollTop(0);
//                       var c = "";
//                       return c += '<span class="project-nav-left"></span>', c += '<span class="project-nav-right"></span>', c += '<span class="project-nav-close cross-bt"></span>', $(".references-project-content nav.project-nav").html(c), $(".project-tv").append('<div class="project-tv-screen"></div>'), $(".project-tv-right").append('<div class="project-tv-screen"></div>'), $("nav.project-nav span.project-nav-close").click(function() {
//                         return a.signal.href.dispatch("nos-references/content")
//                       }), $(".project-slide-show>span").each(function(a) {
//                         return $(this).html('<img src="' + $(this).attr("data-src") + '"/>'), 0 !== a ? TweenLite.set($(this), {opacity: 0}) : void 0
//                       }), $("div.project-slide-show-nav span.project-nav-left").click(function() {
//                         return a.nextIndexSlideShow--, a.nextIndexSlideShow < 0 && (a.nextIndexSlideShow = $(".project-slide-show>span").length - 1), $(".project-slide-show>span").each(function(b) {
//                           return b === a.nextIndexSlideShow ? (TweenLite.set($(this), {opacity: 0}), $(this).css({"z-index": 5}), TweenLite.to($(this), .7, {
//                               opacity: 1,
//                               ease: Expo.easeInOut
//                             })) : 0 !== $(this).css("opacity") ? (TweenLite.to($(this), .7, {
//                                 delay: .1,
//                                 opacity: 0,
//                                 ease: Expo.easeInOut
//                               }), $(this).css({"z-index": 4})) : $(this).css({"z-index": 3})
//                         })
//                       }), $("div.project-slide-show-nav span.project-nav-right").click(function() {
//                         return a.nextIndexSlideShow++, a.nextIndexSlideShow >= $(".project-slide-show>span").length && (a.nextIndexSlideShow = 0), $(".project-slide-show>span").each(function(b) {
//                           return b === a.nextIndexSlideShow ? (TweenLite.set($(this), {opacity: 0}), $(this).css({"z-index": 5}), TweenLite.to($(this), .7, {
//                               opacity: 1,
//                               ease: Expo.easeInOut
//                             })) : 0 !== $(this).css("opacity") ? (TweenLite.to($(this), .7, {
//                                 delay: .1,
//                                 opacity: 0,
//                                 ease: Expo.easeInOut
//                               }), $(this).css({"z-index": 4})) : $(this).css({"z-index": 3})
//                         })
//                       }), $("nav.project-nav span.project-nav-left").click(function() {
//                         var b, c, d, e, f, g;
//                         for (d = 0, c = 0, g = a.data.data.projectsHash, e = 0, f = g.length; f > e; e++) {
//                           if (b = g[e], b === a.project) {
//                             c = d;
//                             break
//                           }
//                           d++
//                         }
//                         return c--, 0 > c && (c = a.data.data.projectsHash.length - 1), TweenLite.to($(".references-project-content"), .7, {
//                           opacity: 0,
//                           ease: Expo.easeInOut,
//                           onComplete: function() {
//                             return a.signal.href.dispatch("nos-references/" + a.data.data.projectsHash[c])
//                           }
//                         })
//                       }), $("nav.project-nav span.project-nav-right").click(function() {
//                         var b, c, d, e, f, g;
//                         for (d = 0, c = 0, g = a.data.data.projectsHash, e = 0, f = g.length; f > e; e++) {
//                           if (b = g[e], b === a.project) {
//                             c = d;
//                             break
//                           }
//                           d++
//                         }
//                         return c++, c >= a.data.data.projectsHash.length && (c = 0), TweenLite.to($(".references-project-content"), .7, {
//                           opacity: 0,
//                           ease: Expo.easeInOut,
//                           onComplete: function() {
//                             return a.signal.href.dispatch("nos-references/" + a.data.data.projectsHash[c])
//                           }
//                         })
//                       }), $(".references-project-content img").load(function() {
//                         return TweenLite.set($(this), {opacity: 0}), TweenLite.to($(this), 1.2, {
//                           opacity: 1,
//                           ease: Expo.easeInOut
//                         }), a.resize()
//                       }), a.resize(), TweenLite.to($(".references-project-content"), .7, {
//                         delay: 0,
//                         opacity: 1,
//                         ease: Expo.easeInOut
//                       })
//                     }
//                   })
//                 }
//               })
//             }
//           })
//         }
//       }(this)), this.signal.goSection.add(function(a) {
//         return function(b) {
//           return a.section = b, "block" === $(".references-projects").css("display") ? a.doGoSection(a.section) : 0 !== $(a.mainDiv).css("left") && 0 === $(".references-project").css("opacity") ? a.doGoSection(a.section) : TweenLite.to($(".references-project"), .5, {
//                 opacity: 0,
//                 ease: Expo.easeOut,
//                 onComplete: function() {
//                   return $(".references-project").css({display: "none"}), $(".references-projects").css({
//                     display: "block",
//                     opacity: 0
//                   }), TweenLite.to($(".references-projects"), .5, {
//                     opacity: 1,
//                     ease: Expo.easeOut,
//                     onComplete: function() {
//                       return a.doGoSection(a.section)
//                     }
//                   })
//                 }
//               })
//         }
//       }(this)), this.signal.doCover.add(function(a) {
//         return function(b) {
//           var c;
//           return a.type = b, c = $(a.mainDiv).position(), 0 !== c.left ? (a.screenW = a.getScreenWidth(), a.opened = !1, TweenLite.to(a.mainDiv, 1.2, {
//               delay: 0,
//               left: 0,
//               ease: Expo.easeInOut,
//               onComplete: a.doAnime
//             }), TweenLite.to($(".references-project"), .5, {
//               opacity: 0,
//               ease: Expo.easeOut
//             }), TweenLite.to("div#section", 1.2, {delay: 0, left: a.screenW, ease: Expo.easeInOut})) : a.doAnime()
//         }
//       }(this)), this.signal.loadDataComplete.add(function(b) {
//         return function() {
//           var c, d, e, f, g, h, i, j, k, l, m, n;
//           for (d = '<div style="position:absolute;width: 100%;height: 100%;top: 0px;left: 0px;">', g = ["0_b", "0", "1", "2", "3", "4"], f = i = 0, m = g.length; m > i; f = i += 1)for (n = b.data.data["section_" + g[f]].elements, j = 0, l = n.length; l > j; j++)e = n[j], b.elements[e.name] = new PIXI.Sprite(new PIXI.Texture.fromFrame(e.img)), b.elements[e.name].img = e.img, b.elements[e.name].name = e.name, b.elements[e.name].x = e.x, b.elements[e.name].y = e.y, b.elements[e.name].visible = !1, b.stage.addChild(b.elements[e.name]), "0" === g[f] && (b.elements[e.name].anchor.x = .5, b.elements[e.name].anchor.y = .5, b.elements[e.name].x = parseInt(e.x) + parseInt(b.elements[e.name].width >> 1), b.elements[e.name].y = parseInt(e.y) + parseInt(b.elements[e.name].height >> 1)), "0_b" === g[f] && (d += '<div class="over-home" data-name="' + e.name + '" style="position:absolute; width:' + b.elements[e.name].width + "px; height:" + b.elements[e.name].height + "px; top:" + b.elements[e.name].y + "px; left:" + b.elements[e.name].x + 'px; "></div>'), "4" === g[f] && "s4_3" === e.name && (b.elements.s4_3.anchor.x = .0649350649350649, b.elements.s4_3.anchor.y = 1);
//           for (d += "</div>", $("div.cover-content>div:nth-child(1)").append(d), a = b, $("div.cover-content>div:nth-child(1)>div>div.over-home").hover(function() {
//             var b;
//             return b = $(this).attr("data-name"), TweenLite.set(a.elements[b], {alpha: 1}), TweenLite.set(a.elements[b.split("_").join("")], {alpha: 0})
//           }, function() {
//             var b;
//             return b = $(this).attr("data-name"), TweenLite.to(a.elements[b], .75, {
//               alpha: 0,
//               ease: Power2.easeIn
//             }), TweenLite.to(a.elements[b.split("_").join("")], .75, {alpha: 1, ease: Power2.easeIn})
//           }), c = [], e = k = 1; 41 >= k; e = k += 1)h = PIXI.Texture.fromFrame("logo_home00" + b.addZero(e) + ".png"), c.push(h);
//           return b.logo = new PIXI.MovieClip(c), b.logo.loop = !1, b.logo.animationSpeed = 1, b.logo.anchor.x = .5, b.logo.anchor.y = .5, b.logo.position.x = 657, b.logo.position.y = 340, b.stage.addChild(b.logo)
//         }
//       }(this)), this.stage = new PIXI.Stage(16777215, null, !0, !0), this.renderer = PIXI.autoDetectRenderer(1320, 800, null, !0, !0), this.containerOver = new PIXI.DisplayObjectContainer, this.stage.addChild(this.containerOver), this.renderer.view.style.left = "0px", this.renderer.view.style.top = "0px", $(".cover-container").get(0).appendChild(this.renderer.view), this.data.is_mobile() && ($(".cover-container").get(0).addEventListener("touchstart", function(a) {
//         return function(b) {
//           var c;
//           return c = b.changedTouches[0], a.startCoverY = c.pageY
//         }
//       }(this), !1), $(".cover-container").get(0).addEventListener("touchend", function(a) {
//         return function(b) {
//           var c, d;
//           return d = b.changedTouches[0], c = d.pageY - a.startCoverY, Math.abs(c) > 100 ? a.doWheelEvent(c) : void 0
//         }
//       }(this), !1)), $(".cover-container").bind("mousewheel DOMMouseScroll", function(a) {
//         return function(b) {
//           var c;
//           return c = parseInt(b.originalEvent.wheelDelta || -b.originalEvent.detail), a.doWheelEvent(c)
//         }
//       }(this)), this.start()
//     }, b.prototype.doWheelEvent = function(a) {
//       if (this.animEnded === !0) {
//         if (this.animEnded = !1, "section_0" === this.type)return 0 > a ? void this.signal.href.dispatch("qui-sommes-nous") : void this.signal.href.dispatch("contactez-nous");
//         if ("section_1" === this.type)return 0 > a ? void this.signal.href.dispatch("nos-expertises") : void this.signal.href.dispatch("");
//         if ("section_2" === this.type)return 0 > a ? void this.signal.href.dispatch("nos-references") : void this.signal.href.dispatch("qui-sommes-nous");
//         if ("section_3" === this.type)return 0 > a ? void this.signal.href.dispatch("contactez-nous") : void this.signal.href.dispatch("nos-expertises");
//         "section_4" === this.type && this.signal.href.dispatch(0 > a ? "" : "nos-references")
//       }
//     }, b.prototype.scrollTouchMove = function(a) {
//       var b;
//       return b = a.changedTouches[0], "nos-expertises" === this.section || "nos-references" === this.section || "qui-sommes-nous" === this.section ? (Math.abs(this.startX - a.changedTouches[0].pageX) > 5 && a.preventDefault(), TweenLite.set($("section"), {scrollTop: this.startCY - (b.pageY - this.startY)})) : void 0
//     }, b.prototype.scrollTouchStart = function(a) {
//       var b;
//       return b = a.changedTouches[0], this.startX = b.pageX, "qui-sommes-nous" === this.section && (this.startCY = $("section#qui-sommes-nous").scrollTop()), "nos-expertises" === this.section && (this.startCY = $("section#nos-expertises").scrollTop()), "nos-references" === this.section && (this.startCY = $("section#nos-references").scrollTop()), this.startY = b.pageY
//     }, b.prototype.animeLoader = function() {
//       return TweenLite.to($(".references-project-loader"), .35, {
//         scale: 1,
//         ease: Expo.easeInOut,
//         onComplete: function(a) {
//           return function() {
//             return TweenLite.to($(".references-project-loader"), .35, {
//               scale: .5,
//               ease: Expo.easeInOut,
//               onComplete: function() {
//                 return a.ajaxLoaded ? void 0 : a.animeLoader()
//               }
//             })
//           }
//         }(this)
//       })
//     }, b.prototype.doGoSection = function(a) {
//       return this.section = a, this.resize(), this.stopRender(), $(".references-projects").css({
//         display: "block",
//         opacity: 1
//       }), $(".references-project").css({display: "none"}), this.opened = !0, this.screenW = this.getScreenWidth(), TweenLite.to(this.mainDiv, 1.2, {
//         delay: 0,
//         left: -this.screenW,
//         ease: Expo.easeInOut
//       }), TweenLite.to("div#section", 1.2, {
//         delay: 0,
//         left: 0,
//         ease: Expo.easeInOut
//       }), $("section").css({display: "none"}), this.addSlider(a), $("section#" + this.section).css({
//         display: "block",
//         opacity: 1
//       })
//     }, b.prototype.stopRender = function() {
//       return this.doRender = !1, cancelAnimationFrame(this.requestID)
//     }, b.prototype.startRender = function() {
//       return this.doRender = !0, this.render()
//     }, b.prototype.render = function() {
//       return this.doRender ? (this.renderer.render(this.stage), this.requestID = requestAnimFrame(this.render)) : void 0
//     }, b.prototype.setSignal = function(a) {
//       this.signal = a
//     }, b.prototype.setData = function(a) {
//       this.data = a
//     }, b.prototype.addZero = function(a) {
//       return 10 > a ? "0" + a : a
//     }, b.prototype.resize = function() {
//       var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o = 700;
//       if (this.screenW = this.getScreenWidth(), this.screenH = $(window).height(), i = $(".title-bt-link>div.title-bt-link-out>span").width() + 4, TweenLite.set($(".title-bt-link>div.title-bt-link-out"), {width: i}), TweenLite.set($(".title-bt-link"), {
//           width: i + 22,
//           marginLeft: .5 * -(i + 22)
//         }), TweenLite.set($(".title-bt-link>div.title-bt-link-over"), {width: i + 2}), $(".home-left").css({height: this.screenH}), $(".home-right").css({height: this.screenH}), this.enabled) {
//         h = this, c = this.screenW / 1320, d = this.screenH / 800, TweenLite.set($(".content-section"), {transformOrigin: "left top"}), TweenLite.set($(".cover-container"), {transformOrigin: "left top"}), a = c > d ? c : d, "section_0" !== this.type && a > 1 && (a = 1), a > 1 && (a = 1), TweenLite.set($(".title-bt"), {top: Math.min(this.screenH / a - 100, 670)}), this.golbalScale = a, TweenLite.set($(".cover-container"), {scale: a}), this.data.is_mobile() ? TweenLite.set($(".cover-container"), {
//             top: 0,
//             left: 0 + (this.screenW - 1320 * a) >> 1
//           }) : TweenLite.set($(".cover-container"), {
//             top: 0,
//             left: 160 + (this.screenW - 1320 * a) >> 1
//           }), a = this.screenH / 800, k = 440 * a, l = Math.max(880, this.screenW - k), n = Math.max(80, (this.screenW - k - ($("div.c2").width() + $("div.c1").width() + 40)) / 2), TweenLite.set($(".bg-section"), {
//           width: k,
//           height: this.screenH,
//           left: this.screenW - k
//         }), TweenLite.set($(".slider"), {
//           width: k,
//           height: this.screenH
//         }), TweenLite.set($("section"), {
//           overflowY: "hidden",
//           height: this.screenH
//         }), TweenLite.set($(".content-section"), {
//           width: l,
//           height: 800,
//           top: "50%",
//           marginTop: -400
//         }), TweenLite.set($(".content-section div.title"), {width: l}), TweenLite.set($("div.c2"), {
//           left: 380 + n,
//           top: 0,
//           position: "absolute",
//           marginBottom: 0
//         }), TweenLite.set($("div.c1"), {
//           left: n,
//           position: "absolute"
//         }), e = !0, this.data.is_mobile() && this.screenW < 450 ? TweenLite.set($(".contact-card"), {
//             scale: 1.5,
//             left: "52%",
//             top: 400
//           }) : TweenLite.set($(".contact-card"), {
//             scale: 1,
//             left: "50%",
//             top: 358
//           }), this.screenW < 880 ? (l = 440, TweenLite.set($("section"), {
//             overflowY: "scroll",
//             height: this.screenH
//           }), k = 0, TweenLite.set($(".content-section"), {
//             width: l,
//             height: "auto",
//             top: 0,
//             marginTop: 90
//           }), TweenLite.set($(".content-section div.title"), {width: l}), TweenLite.set($("div.c2"), {
//             left: 80,
//             top: "auto",
//             position: "relative",
//             marginBottom: 50
//           }), TweenLite.set($("div.c1"), {position: "relative"}), m = Math.max(-108, this.screenW - l >> 1), TweenLite.set($(".content-section"), {marginLeft: m}), e = !1) : this.screenW < 1280 && (k = 0), "contactez-nous" === this.section && (this.screenW >= 1200 ? (l = Math.max(440, this.screenW - $(".slider").width()), m = (-l - $(".slider").width()) / 2) : (l = Math.max(440, this.screenW), m = -l / 2), TweenLite.set($("section"), {
//           overflow: "hidden",
//           height: this.screenH,
//           width: this.screenW
//         }), TweenLite.set($(".content-section"), {
//           width: l,
//           height: 800,
//           top: "50%",
//           left: "50%",
//           marginTop: -270
//         }), TweenLite.set($(".content-section div.title"), {width: l}), TweenLite.set($("div.c2"), {
//           left: 460,
//           top: 0,
//           position: "absolute",
//           marginBottom: 0
//         }), TweenLite.set($("div.c1"), {position: "absolute"}), e = !0, this.screenW < 880 && TweenLite.set($(".content-section"), {
//           height: "auto",
//           top: 0,
//           marginTop: 50
//         })), j = 880, this.data.is_mobile() && (b = 800, $("section").css({left: 0}), $("ul.main-nav").css({top: 94})), b = (this.screenW - k) / j, a = b, d = a, f = 0, a > 1 ? (f = this.screenW - k - j >> 1, d = 1) : b > c && (f = this.screenW - k - j * a >> 1), e && TweenLite.set($(".content-section"), {
//           transformOrigin: "0px 0px",
//           scale: 1,
//           marginLeft: "contactez-nous" === this.section ? m : f
//         }), this.opened ? (TweenLite.set(this.mainDiv, {left: -this.screenW}), TweenLite.set("div#section", {left: 0})) : (TweenLite.set(this.mainDiv, {left: 0}), TweenLite.set("div#section", {left: this.screenW})), TweenLite.set($("section"), {width: this.screenW}), TweenLite.set($("nav.project-nav"), {width: this.screenW - 10}), a = 1, g = 0, $(".project-screen, .project-tv, .project-tv-right, .project-img-left").each(function() {
//           var b, c, d, e;
//           return a = (h.screenW - 440) / 880, a = Math.max(.35, a), a = Math.min(1, a), b = $(this).height() * a, e = $(this).parent().find(">span.project-text"), c = e.height() + 25, e.css({"margin-top": 25}), e.attr("data-margintop") && (d = parseInt(e.attr("data-margintop")), c = d + e.height() + 0, .35 !== a && e.css({marginTop: d + "px"})), i = $(this).width() - parseFloat($(this).css("marginLeft")), h.screenW > o ? (b = Math.max(b, c), TweenLite.set($(this).parent(), {height: b}), TweenLite.set($(this), {top: 0}), TweenLite.set(e, {
//               left: 880 * a,
//               top: 0,
//               width: 340
//             })) : (TweenLite.set($(this).parent(), {height: b + c}), TweenLite.set(e, {
//               left: 0,
//               top: 0,
//               width: h.screenW - 90
//             }), TweenLite.set($(this), {top: c})), g += b, TweenLite.set($(this), {
//             transformOrigin: "left top",
//             scale: a
//           })
//         }), $(".project-img-right, .project-tv-right, .project-screen-right").each(function() {
//           var b, c, d, e;
//           return a = (h.screenW - 440) / 880, a = Math.max(.35, a), a = Math.min(1, a), b = $(this).height() * a, e = $(this).parent().find(">span.project-text"), c = e.height() + 25, e.css({"margin-top": 25}), e.attr("data-margintop") && (d = parseInt(e.attr("data-margintop")), c = d + e.height() + 80, .35 !== a && e.css({marginTop: d + "px"})), b = Math.max(b, c), g += b, i = $(this).width() - parseFloat($(this).css("marginLeft")), h.screenW > o ? (TweenLite.set($(this).parent(), {height: b}), TweenLite.set($(this), {
//               position: "absolute",
//               top: 0,
//               left: 440
//             }), TweenLite.set(e, {
//               left: 0,
//               top: 0,
//               width: 340
//             })) : (TweenLite.set($(this).parent(), {height: b + c}), TweenLite.set($(this), {
//               position: "absolute",
//               left: 0,
//               top: c
//             }), TweenLite.set(e, {top: 0, width: h.screenW - 90})), TweenLite.set($(this), {
//             transformOrigin: "left top",
//             scale: a
//           })
//         }), $(".project-img-full").each(function() {
//           var b;
//           return a = h.screenW / 1320, a = Math.max(.35, a), a = Math.min(1, a), b = $(this).find("img").height() * a, g += b, TweenLite.set($(this).parent(), {height: b}), TweenLite.set($(this).parent(), {marginTop: "0px"}), TweenLite.set($(this).find("img"), {
//             transformOrigin: "left top",
//             scale: a
//           })
//         }), $(".project-slide-show").each(function() {
//           var b;
//           return a = h.screenW / 1320, a = Math.min(1, a), b = 880 * a, g += b, TweenLite.set($(this).parent(), {marginTop: "0px"}), TweenLite.set($(this), {
//             height: b,
//             width: h.screenW
//           }), TweenLite.set($(this).find("img"), {transformOrigin: "left top", scale: a})
//         }), $(".project-container").css(this.screenW > 1320 ? {
//             position: "relative",
//             left: this.screenW - 1320 >> 1,
//             width: 1320
//           } : {position: "relative", left: 0, width: 1320});
//         var p = $(".project-container");
//         return p.length && ($(".references-project-content").css({
//           height: p.height() + p.offset().top,
//           overflowY: h.screenW < o ? "hidden" : "visible"
//         }), $(".project-content").css({height: p.height() + p.offset().top})), $(".references-project").css({height: this.screenH})
//       }
//     }, b.prototype.getElement = function(a) {
//       var b, c, d, e, f, g, h, i;
//       for (d = ["0", "1", "2", "3", "4", "0_b"], c = e = 0, h = d.length; h > e; c = e += 1)for (i = this.data.data["section_" + d[c]].elements, f = 0, g = i.length; g > f; f++)if (b = i[f], b.name === a)return b
//     }, b.prototype.animElement = function(a, b, c, d, e) {
//       var f;
//       return f = this.getElement(a), element = this.elements[a], element.visible = !0, element.alpha = 1, e && (element.x = parseInt(element.x) + (element.width - 1.5 * element.width) / 2, element.scale.x = element.scale.y = 1.5), TweenLite.set(element, {y: -parseInt(element.height)}), TweenLite.to(element, d * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         y: f.y,
//         ease: c
//       })
//     }, b.prototype.animElementOutHome = function(a, b) {
//       var c;
//       return c = this.elements[a + "_"], a = this.elements[a], TweenLite.to(a.scale, .5 * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         x: 0,
//         y: 0,
//         ease: Back.easeIn
//       }), TweenLite.to(c, .5 * this.speedAnimation, {delay: b * this.speedAnimation, alpha: 0, ease: Back.easeIn})
//     }, b.prototype.animElementHome = function(a, b) {
//       var c, d;
//       return d = a, a = this.elements[a], a.visible = !0, TweenLite.set(a, {
//         alpha: 0,
//         rotation: 2 * Math.random() - 1
//       }), TweenLite.set(a.scale, {
//         x: 0,
//         y: 0
//       }), TweenLite.to(a, .5 * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         rotation: 0,
//         alpha: 1
//       }), c = 1, TweenLite.to(a.scale, .5 * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         x: c,
//         y: c,
//         ease: Back.easeOut
//       }), a = this.elements[d + "_"], a ? (a.visible = !0, a.alpha = 0) : void 0
//     }, b.prototype.animElementAlphaShadows2 = function(a) {
//       return TweenLite.to(a, .1, {
//         alpha: .5 * Math.random() + .5, onComplete: function(b) {
//           return function() {
//             return b.animElementAlphaShadows2(a)
//           }
//         }(this)
//       })
//     }, b.prototype.animElementAlphaShadows = function(a, b, c, d) {
//       var e, f, g;
//       return f = a, g = b, a = this.elements[a], b = this.elements[b], e = Math.random(), d = d || 0, TweenLite.to(b, .1, {
//         delay: c * this.speedAnimation,
//         alpha: .2 * e + .8
//       }), TweenLite.to(a, .1, {
//         delay: c * this.speedAnimation, alpha: .7 * e + .3, onComplete: function(a) {
//           return function() {
//             return a.animElementAlphaShadows(f, g, d % 20 === 0 ? 3 : 0, d + 1)
//           }
//         }(this)
//       })
//     }, b.prototype.animElementAlphaShadowsFlash = function(a, b, c) {
//       var d, e, f;
//       return e = a, f = b, a = this.elements[a], b = this.elements[b], d = Math.random(), TweenLite.to(b, .1, {
//         delay: c * this.speedAnimation,
//         alpha: 1
//       }), TweenLite.to(a, .1, {
//         delay: c * this.speedAnimation, alpha: .4, onComplete: function(c) {
//           return function() {
//             return TweenLite.to(b, .1, {delay: 0, alpha: .6}), TweenLite.to(a, .1, {
//               delay: 0,
//               alpha: 0,
//               onComplete: function() {
//                 return c.animElementAlphaShadowsFlash(e, f, 5 * Math.random())
//               }
//             })
//           }
//         }(this)
//       })
//     }, b.prototype.animElementSection4 = function(a, b) {
//       var c;
//       return c = a, a = this.elements[a], TweenLite.to(a, 1, {
//         delay: b * this.speedAnimation,
//         ease: Power1.easeInOut,
//         rotation: .6 * Math.random() - .3,
//         onComplete: function(a) {
//           return function() {
//             return a.animElementSection4(c, .2 * Math.random())
//           }
//         }(this)
//       })
//     }, b.prototype.animElementSection2 = function(a, b, c) {
//       var d, e, f, g, h, i;
//       return h = a, i = b, e = this.getElement(a), a = this.elements[a], "null" !== i && (f = this.getElement(b), b = this.elements[b]), g = Math.random(), d = 0, "s2_shadows_2" === i && (d = -20), "null" !== i && TweenLite.to(b.position, 2, {
//         delay: c * this.speedAnimation,
//         ease: Power1.easeInOut,
//         y: parseInt(f.y) - 5,
//         x: parseInt(f.x) + d
//       }), TweenLite.to(a.position, 2, {
//         delay: c * this.speedAnimation,
//         ease: Power1.easeInOut,
//         y: parseInt(e.y) + 20,
//         onComplete: function(c) {
//           return function() {
//             return "null" !== i && TweenLite.to(b.position, 2, {
//               delay: 0,
//               ease: Power1.easeInOut,
//               y: f.y,
//               x: parseInt(f.x)
//             }), TweenLite.to(a.position, 2, {
//               delay: 0, ease: Power1.easeInOut, y: e.y, onComplete: function() {
//                 return c.animElementSection2(h, i, 0)
//               }
//             })
//           }
//         }(this)
//       })
//     }, b.prototype.animElementAlpha = function(a, b, c) {
//       return a = this.elements[a], a.visible = !0, TweenLite.set(a, {alpha: 0}), TweenLite.to(a, c * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         alpha: 1
//       })
//     }, b.prototype.animElementOut = function(a, b, c, d) {
//       return a = this.elements[a], TweenLite.to(a, d * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         alpha: 0,
//         y: 800,
//         ease: c
//       })
//     }, b.prototype.animElementOutAlpha = function(a, b, c) {
//       return a = this.elements[a], TweenLite.to(a, c * this.speedAnimation, {
//         delay: b * this.speedAnimation,
//         alpha: 0,
//         ease: Expo.easeOut
//       })
//     }, b.prototype.start = function() {
//       this.enabled = !0, TweenLite.set($(this.mainDiv), {opacity: 1, display: "block"}), this.resize();
//       var a = this;
//       return window.setTimeout(function() {
//         a.resize()
//       }, 200), this.render()
//     }, b.prototype.doAnime = function() {
//       return clearTimeout(this.renderTimeout), this.stopRender(), this.startRender(), this.type !== this.oldType ? this.animInDone ? this.animeOut() : this.animeIn() : void 0
//     }, b.prototype.animeIn = function() {
//       this.resize(), this.pauseSliders(), this.stopVideos();
//       var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o;
//       for (this.resize(), h = ["0", "1", "2", "3", "4", "0_b"], d = j = 0, n = h.length; n > j; d = j += 1)for (o = this.data.data["section_" + h[d]].elements, k = 0, m = o.length; m > k; k++)c = o[k], this.elements[c.name].visible = !1;
//       switch (this.animEnded = !1, this.animInDone = !0, this.oldType = this.type, f = "#56c2df", this.logo.visible = !1, g = 1, a = 2, this.type) {
//         case"section_0":
//           for ($("div.cover-content>div:nth-child(1)>div>div.over-home").css({display: "block"}), f = "#f7f9e5", c = l = 1; 64 >= l; c = l += 1)this.animElementHome(c, c / 25);
//           TweenLite.to($("div.cover-bg"), 2 * this.speedAnimation, {opacity: 0}), TweenLite.to($(".arrow_box"), 2 * this.speedAnimation, {borderRightColor: "#eeeeee"}), this.logo.animationSpeed = .5, this.logo.gotoAndPlay(0), this.logo.visible = !0, a = 2;
//           break;
//         case"section_1":
//           g = 2, f = "#56c2df", this.animElement("s1_element_1", 0, Bounce.easeOut, .8), this.animElement("s1_element_2", .1, Bounce.easeOut, .8), this.animElement("s1_element_3", .3, Bounce.easeOut, .8), this.animElement("s1_ordi", 1.2, Expo.easeOut, .2), this.animElement("s1_ampoule", 1.3, Expo.easeOut, .2), this.animElement("s1_puzzle", 1.4, Expo.easeOut, .2), this.animElement("s1_screen_light", 1.4, Expo.easeOut, 0), this.animElementAlpha("s1_back", 1.3, .8), this.animElementAlpha("s1_shadows", .9, 2), this.animElementAlphaShadows("s1_screen_light", "s1_shadows", 2), TweenLite.to($("div.cover-bg"), 2 * this.speedAnimation, {opacity: 1}), TweenLite.to($(".arrow_box"), 2 * this.speedAnimation, {borderRightColor: "#5DBADA"});
//           break;
//         case"section_2":
//           g = 3, f = "#fb3669", this.animElement("s2_1", 0, Back.easeOut, 1.1), this.animElement("s2_2", .2, Back.easeOut, 1.1), this.animElement("s2_3", .4, Back.easeOut, 1.1), this.animElement("s2_4", .6, Back.easeOut, 1.1), this.animElementAlpha("s2_back", 1.6, 1.8), this.animElementAlpha("s2_shadows_1", 2, 2), this.animElementAlpha("s2_shadows_2", 2, 2), this.animElementSection2("s2_1", "null", 1), this.animElementSection2("s2_2", "s2_shadows_1", 2), this.animElementSection2("s2_3", "s2_shadows_2", 3), this.animElementSection2("s2_4", "null", 4), TweenLite.to($("div.cover-bg"), 2 * this.speedAnimation, {opacity: 1}), TweenLite.to($(".arrow_box"), 2 * this.speedAnimation, {borderRightColor: "#FB3669"});
//           break;
//         case"section_3":
//           g = 4, f = "#9dcb2e", this.animElement("s3_1", 0, Expo.easeOut, .8), this.animElement("s3_2", .2, Expo.easeOut, .8), this.animElement("s3_3", .4, Expo.easeOut, .8), this.animElement("s3_4", .6, Expo.easeOut, .8), this.animElement("s3_lights", .6, Expo.easeOut, 0), this.animElementAlpha("s3_shadows", 1.4, 2), this.animElementAlpha("s3_back", 1.6, 1.8), this.animElementAlphaShadowsFlash("s3_lights", "s3_shadows", 2), TweenLite.to($("div.cover-bg"), 2 * this.speedAnimation, {opacity: 1}), TweenLite.to($(".arrow_box"), 2 * this.speedAnimation, {borderRightColor: "#8BAF1C"}), b = this.elements.s3_lights, b.alpha = 0;
//           break;
//         case"section_4":
//           g = 5, f = "#f8cb19", this.animElement("s4_1", 0, Back.easeOut, .8), this.animElement("s4_2", .2, Expo.easeOut, .8), this.data.is_mobile() || this.animElement("s4_3", .4, Expo.easeOut, .8), this.animElement("s4_4", .6, Expo.easeOut, .8), this.animElement("s4_5", .8, Expo.easeOut, .8, this.data.is_mobile()), this.animElementSection4("s4_3", 1.2), this.animElementAlpha("s4_shadows", 1.4, 2), this.animElementAlpha("s4_back", 1.6, 1.8), TweenLite.to($("div.cover-bg"), 2 * this.speedAnimation, {opacity: 1}), TweenLite.to($(".arrow_box"), 2 * this.speedAnimation, {borderRightColor: "#F8CB19"})
//       }
//       return TweenLite.to($("#cover"), 2, {
//         backgroundColor: f, ease: Expo.easeOut, onStart: function(a) {
//           return function() {
//             return a.animEnded = !0
//           }
//         }(this)
//       }), TweenLite.set($(".cover-content>.title"), {display: "none"}), TweenLite.set($(".cover-content>.title:nth-child(" + g + ")"), {display: "block"}), i = $(".cover-content>.title:nth-child(" + g + ")>div.title-bt>span").width() + 35 + 1 + 3, e = 400 - i >> 1, $(".cover-content>.title:nth-child(" + g + ")>div.title-bt>span").css({width: i - 35}), $(".cover-content>.title:nth-child(" + g + ")>div.title-bt").css({
//         width: i - 2,
//         "margin-left": -Math.round(i / 2)
//       }), $(".cover-content>.title:nth-child(" + g + ")>div.title-bt>div.title-bt-over").css({
//         width: i,
//         left: -1
//       }), this.titleButton = $(".cover-content>.title:nth-child(" + g + ")>div.title-bt"), TweenLite.set($(".cover-content"), {opacity: 0}), this.callTitleBtTimeout(), TweenLite.to($(".cover-content"), 2 * this.speedAnimation, {
//         delay: a * this.speedAnimation,
//         opacity: 1,
//         ease: Expo.easeOut
//       })
//     }, b.prototype.callTitleBtTimeout = function() {
//       var a = this;
//       this.titleBtTimeout = window.setTimeout(function() {
//         a.onTitleBtTimeout()
//       }, 4e3)
//     }, b.prototype.onTitleBtTimeout = function() {
//       var a = this;
//       a.titleButton.addClass("hovered"), this.titleBtTimeout = window.setTimeout(function() {
//         a.titleButton.removeClass("hovered"), a.callTitleBtTimeout()
//       }, 400)
//     }, b.prototype.addSlider = function(a) {
//       var b = $("section#" + a), c = b.data("slider"), d = $(".slider img", b).length > 1;
//       return this.sliders || (this.sliders = []), !c && d ? (c = $(".slider", "section#" + a).royalSlider({
//           loop: !0,
//           slidesSpacing: 0,
//           imageScalePadding: 0,
//           imageScaleMode: "fill",
//           autoPlay: {enabled: !0, pauseOnHover: !1, stopAtAction: !1}
//         }).data("royalSlider"), b.data("slider", c), this.sliders.push(c)) : d && c.startAutoPlay(), !0
//     }, b.prototype.pauseSliders = function() {
//       return this.sliders && $(this.sliders).each(function(a, b) {
//         b.stopAutoPlay()
//       }), !0
//     }, b.prototype.stopVideos = function() {
//       var a = "";
//       return $(".project-tv iframe.video-yt").each(function(b, c) {
//         a = $(c).attr("src").replace("autoplay=1", "autoplay=0"), $(c).attr("src", a)
//       }), !0
//     }, b.prototype.killTweens = function() {
//       var a, b, c, d, e, f;
//       for (TweenLite.killTweensOf($(".cover-content")), c = ["0", "1", "2", "3", "4", "0_b"], f = [], b = d = 0, e = c.length; e > d; b = d += 1)f.push(function() {
//         var d, e, f, g;
//         for (f = this.data.data["section_" + c[b]].elements, g = [], d = 0, e = f.length; e > d; d++)a = f[d], TweenLite.killTweensOf(this.elements[a.name]), TweenLite.killTweensOf(this.elements[a.name].position), g.push(TweenLite.killTweensOf($(this.elements[a.name])));
//         return g
//       }.call(this));
//       return f
//     }, b.prototype.animeOut = function() {
//       var a, b, c;
//       switch (this.pauseSliders(), this.stopVideos(), this.killTweens(), clearTimeout(this.renderTimeout), this.stopRender(), this.startRender(), this.oldType) {
//         case"section_0":
//           for ($("div.cover-content>div:nth-child(1)>div>div.over-home").css({display: "none"}), b = c = 1; 64 >= c; b = c += 1)this.animElementOutHome(b, b / 55);
//           this.objTween.j = this.logo.currentFrame, TweenLite.to(this.objTween, .5, {
//             delay: .8,
//             j: 0,
//             onUpdate: function(a) {
//               return function() {
//                 return a.logo.gotoAndStop(Math.round(a.objTween.j))
//               }
//             }(this)
//           });
//           break;
//         case"section_1":
//           this.animElementOut("s1_element_1", 0, Expo.easeIn, .8), this.animElementOut("s1_element_2", .2, Expo.easeIn, .8), this.animElementOut("s1_element_3", .4, Expo.easeIn, .8), this.animElementOutAlpha("s1_puzzle", 0, .4), this.animElementOutAlpha("s1_ampoule", .1, .4), this.animElementOutAlpha("s1_ordi", .2, .4), this.animElementOutAlpha("s1_screen_light", .2, .4), this.animElementOutAlpha("s1_back", .4, .8), this.animElementOutAlpha("s1_shadows", 0, 2);
//           break;
//         case"section_2":
//           this.animElementOut("s2_1", 0, Expo.easeIn, .8), this.animElementOut("s2_3", .2, Expo.easeIn, .8), this.animElementOut("s2_4", .4, Expo.easeIn, .8), this.animElementOut("s2_2", .6, Expo.easeIn, .8), this.animElementOutAlpha("s2_back", .6, 1.8), this.animElementOutAlpha("s2_shadows_1", 0, 2), this.animElementOutAlpha("s2_shadows_2", 0, 2);
//           break;
//         case"section_3":
//           a = this.elements.s3_lights, a.alpha = 0, this.animElementOut("s3_4", 0, Expo.easeIn, .8), this.animElementOut("s3_3", .2, Expo.easeIn, .8), this.animElementOut("s3_2", .4, Expo.easeIn, .8), this.animElementOut("s3_1", .6, Expo.easeIn, .8), this.animElementOutAlpha("s3_back", .6, 1.8), this.animElementOutAlpha("s3_shadows", 0, .4);
//           break;
//         case"section_4":
//           this.animElementOut("s4_1", 0, Expo.easeIn, .8), this.animElementOut("s4_4", 0, Expo.easeIn, .8), this.animElementOut("s4_3", .2, Expo.easeIn, .8), this.animElementOut("s4_2", .4, Expo.easeIn, .8), this.animElementOut("s4_5", .6, Expo.easeIn, .8), this.animElementOutAlpha("s4_back", .6, 1.8), this.animElementOutAlpha("s4_shadows", 0, .4)
//       }
//       return TweenLite.to(this.objTween, 1.4, {
//         i: 1, onComplete: function(a) {
//           return function() {
//             return a.animeIn()
//           }
//         }(this)
//       }), this.titleBtTimeout && window.clearTimeout(this.titleBtTimeout), TweenLite.to($(".cover-content"), .8, {
//         delay: 0,
//         opacity: 0,
//         ease: Expo.easeOut
//       })
//     }, b.prototype.disable = function() {
//       return this.enabled ? TweenLite.to($(this.mainDiv), .8, {
//           delay: 0,
//           opacity: 0,
//           ease: Expo.easeIn,
//           onComplete: function(a) {
//             return function() {
//               return a.enabled = !1, $(a.mainDiv).css({display: "none"})
//             }
//           }(this)
//         }) : (this.enabled = !1, $(this.mainDiv).css({display: "none"}))
//     }, b.prototype.getScreenWidth = function() {
//       var a = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
//       return this.data.is_mobile() ? a : a - 80
//     }, b
//   }()
// }).call(this), function() {
//   var a = function(a, b) {
//     return function() {
//       return a.apply(b, arguments)
//     }
//   };
//   window.Data = function() {
//     function b(b) {
//       this.signal = b, this.loadLang = a(this.loadLang, this), this.loadProjects = a(this.loadProjects, this), this.showLoader = a(this.showLoader, this), this.hideLoader = a(this.hideLoader, this), this.loadPixiAssets = a(this.loadPixiAssets, this), this.loadImgs = a(this.loadImgs, this), this.animLoader = a(this.animLoader, this), this.startLoad = a(this.startLoad, this)
//     }
//
//     var c;
//     return c = function() {
//       return incLoadAnim++
//     }, b.prototype.startLoad = function() {
//       return $("#loaderTxt").html("0%"), TweenLite.set($("#loaderImg"), {
//         display: "block",
//         scale: .5,
//         transformOrigin: "50% 50%"
//       }), this.animLoader(), this.loadLang()
//     }, b.prototype.animLoader = function() {
//       return TweenLite.to($("#loaderImg"), .35, {
//         scale: 1, ease: Expo.easeInOut, onComplete: function(a) {
//           return function() {
//             return TweenLite.to($("#loaderImg"), .35, {
//               scale: .5, ease: Expo.easeInOut, onComplete: function() {
//                 return a.animLoader()
//               }
//             })
//           }
//         }(this)
//       })
//     }, b.prototype.preLoadImg = function(a, b) {
//       return this.preloadImgs[a] = b.addImage("img/" + a)
//     }, b.prototype.loadImgs = function() {
//       return this.loadPixiAssets()
//     }, b.prototype.loadPixiAssets = function(a, b) {
//       var c, d, e, f, g, h, i, j, k;
//       for (c = [], g = ["0", "0_b", "1", "2", "3", "4"], e = h = 0, j = g.length; j > h; e = h += 1)for (this.data["section_" + g[e]].elements.reverse(), d = i = 0, k = this.data["section_" + g[e]].elements.length; k > i; d = i += 1)a = this.data["section_" + g[e]].elements[d], f = a.img.split("/"), f = f[f.length - 1], f = f.split(".")[0], this.data["section_" + g[e]].elements[d].name = f;
//       return c.push("img/logo.json"), c.push("img/section_0.json"), c.push("img/section_0_b.json"), c.push("img/section_1.json"), c.push("img/section_2.json"), c.push("img/section_3.json"), c.push("img/section_4.json"), b = new PIXI.AssetLoader(c), b.addEventListener("onProgress", function() {
//         return function(a) {
//           var b;
//           return b = 1 - a.content.loadCount / a.content.assetURLs.length, $("#loaderTxt").html(Math.round(1 * b * 100) + "%")
//         }
//       }(this)), b.onComplete = function(a) {
//         return function() {
//           return a.hideLoader(), setTimeout(function() {
//             return a.signal.loadDataComplete.dispatch()
//           }, 1e3)
//         }
//       }(this), b.load()
//     }, b.prototype.hideLoader = function() {
//       return TweenLite.to($("#loader"), 1, {
//         opacity: 0, ease: Expo.easeInOut, onComplete: function() {
//           return function() {
//             return $("#loader").css({display: "none"}), TweenLite.killTweensOf($("#loaderImg"))
//           }
//         }(this)
//       })
//     }, b.prototype.showLoader = function() {
//       return $("#loader").css({display: "block"}), TweenLite.to($("#loader"), 1, {
//         opacity: 1,
//         ease: Expo.easeInOut,
//         onComplete: function() {
//           return function() {
//           }
//         }(this)
//       })
//     }, b.prototype.is_mobile = function() {
//       return navigator.userAgent.match(/(android|iphone|ipad|blackberry|symbian|symbianos|symbos|netfront|model-orange|javaplatform|iemobile|windows phone|samsung|htc|opera mobile|opera mobi|opera mini|presto|huawei|blazer|bolt|doris|fennec|gobrowser|iris|maemo browser|mib|cldc|minimo|semc-browser|skyfire|teashark|teleca|uzard|uzardweb|meego|nokia|bb10|playbook)/gi) ? screen.width >= 480 && screen.height >= 800 || screen.width >= 800 && screen.height >= 480 || navigator.userAgent.match(/ipad/gi) ? !0 : !0 : !1
//     }, b.prototype.is_IOS = function() {
//       return navigator.userAgent.match(/(iphone|ipad)/gi) ? !0 : !1
//     }, b.prototype.loadProjects = function() {
//       return $.get(window.server + "projects/projects.html", function(a) {
//         return function(b) {
//           var c;
//           return b = $(b), c = [], b.find(".reference").each(function() {
//             return c.push($(this).attr("data-hash"))
//           }), a.data.projectsHash = c, a.loadImgs()
//         }
//       }(this))
//     }, b.prototype.loadLang = function() {
//       return $.getJSON(window.server + "data/data.json", function(a) {
//         return function(b) {
//           return a.data = b, a.loadProjects()
//         }
//       }(this))
//     }, b
//   }()
// }.call(this), function() {
//   var a = function(a, b) {
//     return function() {
//       return a.apply(b, arguments)
//     }
//   };
//   window.Dispatcher = function() {
//     function b() {
//       this.addNewSignal = a(this.addNewSignal, this), this.init = a(this.init, this)
//     }
//
//     return b.prototype.objDispatch = {
//       goIntro: new signals.Signal,
//       goQuiSommesNous: new signals.Signal,
//       goSection: new signals.Signal,
//       goNavigation: new signals.Signal,
//       goProject: new signals.Signal,
//       showOverAll: new signals.Signal,
//       hideOverAll: new signals.Signal,
//       disableSection: new signals.Signal,
//       href: new signals.Signal,
//       loadDataComplete: new signals.Signal,
//       resize: new signals.Signal,
//       hideLoader: new signals.Signal,
//       hideLoaderHouse: new signals.Signal,
//       hideLoaderHouse2: new signals.Signal,
//       showLoader: new signals.Signal,
//       showLoaderSimple: new signals.Signal,
//       showLoaderHouse: new signals.Signal,
//       roomLoaded: new signals.Signal,
//       loadProgress: new signals.Signal,
//       doCover: new signals.Signal
//     }, b.prototype.init = function() {
//       return window.addEventListener("resize", function(a) {
//         return function() {
//           return a.objDispatch.resize.dispatch()
//         }
//       }(this)), null
//     }, b.prototype.addNewSignal = function(a) {
//       return this.objDispatch[a] = new signals.Signal
//     }, b
//   }()
// }.call(this), function() {
//   var a = function(a, b) {
//     return function() {
//       return a.apply(b, arguments)
//     }
//   };
//   window.Navigation = function() {
//     function b(b) {
//       this.name = b, this.disable = a(this.disable, this), this.start = a(this.start, this), this.resize = a(this.resize, this), this.clickNav = a(this.clickNav, this), this.closeNav = a(this.closeNav, this), this.openNav = a(this.openNav, this), this.init = a(this.init, this)
//     }
//
//     return b.prototype.init = function() {
//       var a, b;
//       return this.navOpen = !1, this.signal.resize.add(function(a) {
//         return function() {
//           return a.resize()
//         }
//       }(this)), this.signal.disableSection.add(function(a) {
//         return function() {
//           return a.disable()
//         }
//       }(this)), this.signal.goNavigation.add(function(a) {
//         return function() {
//           return a.start()
//         }
//       }(this)), this.signal.loadDataComplete.add(function(a) {
//         return function() {
//           return a.start()
//         }
//       }(this)), this.click_event = "click", this.data.is_mobile() && (TweenLite.set($("div.nav-lang-selector"), {
//         bottom: 15,
//         paddingTop: 12
//       }), TweenLite.set($("div.nav-social"), {bottom: 55}), TweenLite.set($("div.nav-lang"), {bottom: 11})), this.data.is_mobile() && (this.click_event = this.data.is_IOS() ? "click" : "touchend", TweenLite.to($("#wrapper>nav"), .05, {
//         width: 80,
//         height: 80,
//         ease: Expo.easeInOut
//       }), $(".nav-lang, .nav-lang-selector, .nav-social").css({display: "none"}), $("#wrapper>nav>div.logo_2").css({display: "none"})), b = this, $("nav li.qui-sommes-nous").on(this.click_event, function(a) {
//         return function() {
//           return a.closeNav(), a.signal.href.dispatch("qui-sommes-nous")
//         }
//       }(this)), $("nav li.nos-expertises").on(this.click_event, function(a) {
//         return function() {
//           return a.closeNav(), a.signal.href.dispatch("nos-expertises")
//         }
//       }(this)), $("nav li.nos-references").on(this.click_event, function(a) {
//         return function() {
//           return a.closeNav(), a.signal.href.dispatch("nos-references")
//         }
//       }(this)), $("nav li.contactez-nous").on(this.click_event, function(a) {
//         return function() {
//           return a.closeNav(), a.signal.href.dispatch("contactez-nous")
//         }
//       }(this)), $("nav div.logo_2").on(this.click_event, function(a) {
//         return function() {
//           return a.closeNav(), a.signal.href.dispatch("")
//         }
//       }(this)), this.data.is_mobile() && $("nav div.logo").on(this.click_event, function(a) {
//         return function() {
//           return a.openNav()
//         }
//       }(this)), $("div.cover-content>div.qui-sommes-nous>div.title-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("qui-sommes-nous/content")
//         }
//       }(this)), $("div.cover-content>div.nos-expertises>div.title-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("nos-expertises/content")
//         }
//       }(this)), $("div.cover-content>div.contactez-nous>div.title-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("contactez-nous/content")
//         }
//       }(this)), $("section#qui-sommes-nous div.back-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("qui-sommes-nous")
//         }
//       }(this)), $("section#nos-expertises div.back-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("nos-expertises")
//         }
//       }(this)), $("section#contactez-nous div.back-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("contactez-nous")
//         }
//       }(this)), $("div.cover-content>div.nos-references>div.title-bt").on(this.click_event, function(a) {
//         return function() {
//           return a.signal.href.dispatch("nos-references/content")
//         }
//       }(this)), b = this, $(".nav-lang-fr.enabled, .nav-lang-selector>div>.lang-fr.enabled").click(function() {
//         return document.location.href = ".#" + Davis.location.current()
//       }), $(".nav-lang-en.enabled, .nav-lang-selector>div>.lang-en.enabled").click(function() {
//         return document.location.href = "en#" + Davis.location.current()
//       }), $(".postcard-submit").click(function() {
//         var a, b, c, d, e;
//         return $("span.postcard-text-label").css({
//           color: "#3D3D3D",
//           "font-family": "font_0"
//         }), $("span.postcard-email-label").css({
//           color: "#3D3D3D",
//           "font-family": "font_0"
//         }), e = $(".postcard-text").val().trim(), b = $(".postcard-email").val().trim(), c = $(".postcard-mail>div").html().trim(), a = !1, "" === e && (a = !0, $("span.postcard-text-label").css({
//           color: "#F00",
//           "font-family": "font_1"
//         })), "" === b && (a = !0, $("span.postcard-email-label").css({
//           color: "#F00",
//           "font-family": "font_1"
//         })), d = new RegExp("^[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*@[a-z0-9]+([_|.|-]{1}[a-z0-9]+)*[.]{1}[a-z]{2,6}$", "i"), d.test(b) || (a = !0, $("span.postcard-email-label").css({
//           color: "#F00",
//           "font-family": "font_1"
//         })), a ? void 0 : ($.ajax({
//             dataType: "json",
//             url: "php/mail.php",
//             type: "POST",
//             data: {text: e, mail: b, mail_to: c},
//             success: function(a) {
//               return "-1" === a["return"] ? alert(a.message) : $(".postcard-sent").css({display: "block"})
//             }
//           }), TweenLite.to($("div.postcard"), .5, {
//             left: "200%", ease: Back.easeIn, onComplete: function() {
//               return $("div.postcard").css({display: "none"}), $(".postcard-text").val("")
//             }
//           }))
//       }), $(".references-filter").click(function() {
//         function a() {
//           $(".reference").each(function() {
//             b && b !== $(this).attr("data-filter") ? $(this).removeClass("active") : $(this).addClass("active")
//           }), TweenMax.staggerFromTo(".reference.active .reference-content", .3, {
//             left: "100%",
//             ease: Expo.easeOut
//           }, {left: "0", ease: Expo.easeOut}, .03)
//         }
//
//         if (!$(this).hasClass("active")) {
//           $(this).addClass("active").siblings().removeClass("active");
//           var b = $(this).attr("data-filter");
//           TweenMax.staggerTo(".reference.active .reference-content", .3, {left: "-100%", ease: Expo.easeOut}, .02, a)
//         }
//         return !1
//       }), $(".reference").click(function() {
//         return b.signal.href.dispatch("nos-references/" + $(this).attr("data-hash"))
//       }), $(".reference").hover(function() {
//         return TweenLite.to($(this).find("img.reference-bg"), .5, {scale: 1.1, ease: Expo.easeOut})
//       }, function() {
//         return TweenLite.to($(this).find("img.reference-bg"), .5, {scale: 1, ease: Expo.easeOut})
//       }), this.data.is_mobile() || $("#wrapper>nav").hover(function(a) {
//         return function() {
//           return a.openNav()
//         }
//       }(this), function(a) {
//         return function() {
//           return a.closeNav()
//         }
//       }(this)), this.selectedFace = 1, $("div.scroll-title").on(this.click_event, function(a) {
//         return function() {
//           return a.closeNav(), a.signal.href.dispatch("qui-sommes-nous")
//         }
//       }(this)), $("div.scroll-title").hover(function() {
//         return TweenLite.to($(this).find(".title2"), .3, {
//           marginTop: 0,
//           ease: Expo.easeOut
//         }), TweenLite.to($("div.cover-content div.scroll-title"), .3, {marginTop: 275, ease: Expo.easeOut})
//       }, function() {
//         return TweenLite.to($(this).find(".title2"), .3, {
//           marginTop: 10,
//           ease: Expo.easeOut
//         }), TweenLite.to($("div.cover-content div.scroll-title"), .3, {marginTop: 265, ease: Expo.easeOut})
//       }), $("div.face").each(function() {
//         return TweenLite.set($(this).find(".face-face>span:nth-child(2)"), {opacity: 0}), $(this).click(function() {
//           return $(".postcard-sent").css({display: "none"}), "none" === $("div.postcard").css("display") && ($("div.postcard").css({
//             display: "block",
//             left: "50%",
//             top: "100%"
//           }), TweenLite.to($("div.postcard"), .5, {
//             top: "200px",
//             ease: Back.easeOut
//           })), $("div.postcard-phone>div").html($(this).find(">span.face-number").html()), $("div.postcard-mail>div").html($(this).find(">span.face-mail").html()), $("span.postcard-name").html($(this).find(">span.face-name").html()), $("span.postcard-job").html($(this).find(">span.face-job").html()), $("div.face").each(function() {
//             return $(this).hasClass("selected") ? (TweenLite.to($(this).find(".face-face>span:nth-child(2)"), .3, {
//                 opacity: 0,
//                 ease: Expo.easeOut
//               }), TweenLite.to($(this).find(".face-face>span:nth-child(1)"), .3, {
//                 opacity: 1,
//                 ease: Expo.easeOut
//               }), $(this).removeClass("selected")) : void 0
//           }), $(this).addClass("selected")
//         }), $(this).hover(function(a) {
//           return function() {
//             return TweenLite.to($(a).find(".face-face>span:nth-child(2)"), .3, {
//               opacity: 1,
//               ease: Expo.easeOut
//             }), TweenLite.to($(a).find(".face-face>span:nth-child(1)"), .3, {opacity: 0, ease: Expo.easeOut})
//           }
//         }(this), function(a) {
//           return function() {
//             return $(a).hasClass("selected") ? void 0 : (TweenLite.to($(a).find(".face-face>span:nth-child(2)"), .3, {
//                 opacity: 0,
//                 ease: Expo.easeOut
//               }), TweenLite.to($(a).find(".face-face>span:nth-child(1)"), .3, {opacity: 1, ease: Expo.easeOut}))
//           }
//         }(this))
//       }), a = $("div.face:nth-child(1)"), a.addClass("selected"), TweenLite.to(a.find(".face-face>span:nth-child(2)"), .3, {
//         opacity: 1,
//         ease: Expo.easeOut
//       }), TweenLite.to(a.find(".face-face>span:nth-child(1)"), .3, {
//         opacity: 0,
//         ease: Expo.easeOut
//       }), $("div.postcard-phone>div").html(a.find(">span.face-number").html()), $("div.postcard-mail>div").html(a.find(">span.face-mail").html()), $("span.postcard-name").html(a.find(">span.face-name").html()), $("span.postcard-job").html(a.find(">span.face-job").html()), !0
//     }, b.prototype.openNav = function() {
//       return this.navOpen = !0, $("#wrapper>nav>div.logo_2").css({display: "block"}), TweenLite.to($("#wrapper>nav"), .5, {
//         width: 300,
//         height: "100%",
//         ease: Expo.easeOut
//       }), TweenLite.to($("#wrapper>nav>div.logo_2"), .5, {
//         opacity: 1,
//         ease: Expo.easeOut
//       }), TweenLite.to($("#wrapper>nav>div.logo"), .5, {
//         opacity: 0,
//         ease: Expo.easeOut
//       }), TweenLite.to($("#wrapper>nav>div.nav-lang-selector"), .5, {
//         width: 270,
//         ease: Expo.easeOut,
//         onComplete: function() {
//           return $(".nav-lang, .nav-lang-selector, .nav-social").css({display: "block"})
//         }
//       }), $("ul.main-nav>li>p").each(function(a) {
//         return TweenLite.killTweensOf($(this)), TweenLite.set($(this), {opacity: 0}), TweenLite.to($(this), .5, {
//           delay: a / 10,
//           opacity: 1,
//           ease: Expo.easeOut
//         })
//       })
//     }, b.prototype.closeNav = function() {
//       var a;
//       if (this.data.is_mobile())return this.navOpen = !1, TweenLite.to($("#wrapper>nav"), .5, {
//         width: 80,
//         height: 80,
//         ease: Expo.easeInOut
//       }), TweenLite.to($("#wrapper>nav>div.logo_2"), .5, {
//         opacity: 0, ease: Expo.easeInOut, onComplete: function() {
//           return function() {
//             return $("#wrapper>nav>div.logo_2").css({display: "none"})
//           }
//         }(this)
//       }), TweenLite.to($("#wrapper>nav>div.logo"), .5, {
//         opacity: 1,
//         ease: Expo.easeInOut
//       }), TweenLite.to($("#wrapper>nav>div.nav-lang-selector"), .5, {
//         width: 50,
//         ease: Expo.easeInOut
//       }), a = $("ul.main-nav>li>p").length, $("ul.main-nav>li>p").each(function(b) {
//         return TweenLite.to($(this), .5, {delay: (a - b) / 10, opacity: 0, ease: Expo.easeOut})
//       }), $(".nav-lang, .nav-lang-selector, .nav-social").css({display: "none"});
//       if (this.navOpen !== !1)return this.navOpen = !1, TweenLite.to($("#wrapper>nav"), .5, {
//         width: 80,
//         ease: Expo.easeInOut
//       }), TweenLite.to($("#wrapper>nav>div.logo_2"), .5, {
//         opacity: 0,
//         ease: Expo.easeInOut
//       }), TweenLite.to($("#wrapper>nav>div.logo"), .5, {
//         opacity: 1,
//         ease: Expo.easeInOut
//       }), TweenLite.to($("#wrapper>nav>div.nav-lang-selector"), .5, {
//         width: 50,
//         ease: Expo.easeInOut
//       }), a = $("ul.main-nav>li>p").length, $("ul.main-nav>li>p").each(function(b) {
//         return TweenLite.to($(this), .5, {delay: (a - b) / 10, opacity: 0, ease: Expo.easeOut})
//       })
//     }, b.prototype.clickNav = function(a) {
//       return this.currentContent = a, this.signal.href.dispatch(a)
//     }, b.prototype.setSignal = function(a) {
//       this.signal = a
//     }, b.prototype.setData = function(a) {
//       this.data = a
//     }, b.prototype.resize = function() {
//       return this.screenW = $(window).width(), this.screenH = $(window).height()
//     }, b.prototype.start = function() {
//       return this.enabled = !0, $(this.mainDiv).css({display: "block"}), $("#wrapper").css({display: "block"}), this.enabled ? this.resize() : void 0
//     }, b.prototype.disable = function() {
//     }, b
//   }()
// }.call(this), function() {
//   var a = function(a, b) {
//     return function() {
//       return a.apply(b, arguments)
//     }
//   };
//   window.Router = function() {
//     function b() {
//       this.resetScroll = a(this.resetScroll, this), this.isOnCover = a(this.isOnCover, this), this.href = a(this.href, this), this.goSection = a(this.goSection, this), this.setData = a(this.setData, this), this.navBehavior = a(this.navBehavior, this), this.init = a(this.init, this), this.setSignal = a(this.setSignal, this), this.decNav = 0
//     }
//
//     return b.prototype.setSignal = function(a) {
//       this.signal = a
//     }, b.prototype.init = function() {
//       var a;
//       return a = this, this.signal.href.add(function(a) {
//         return function(b) {
//           return a.href(b)
//         }
//       }(this)), Davis.extend(Davis.hashRouting({forceHashRouting: !0})), this.router = Davis(function() {
//         return this.logger.info = function() {
//         }, this.configure(function() {
//           return this.raiseErrors = !0, this.generateRequestOnPageLoad = !0
//         }), this.get("/", function() {
//           return a.signal.doCover.dispatch("section_0"), a.navBehavior(""), a.isOnCover(!0), TweenLite.to($(".arrow_box"), .7, {
//             top: "-20px",
//             opacity: 0,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/qui-sommes-nous", function() {
//           return a.signal.doCover.dispatch("section_1"), a.navBehavior("qui-sommes-nous"), a.isOnCover(!0), TweenLite.to($(".arrow_box"), .7, {
//             top: 150 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/nos-expertises", function() {
//           return a.signal.doCover.dispatch("section_2"), a.navBehavior("nos-expertises"), a.isOnCover(!0), TweenLite.to($(".arrow_box"), .7, {
//             top: 220 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/nos-references", function() {
//           return a.signal.doCover.dispatch("section_3"), a.navBehavior("nos-references"), a.isOnCover(!0), TweenLite.to($(".arrow_box"), .7, {
//             top: 290 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/contactez-nous", function() {
//           return a.signal.doCover.dispatch("section_4"), a.navBehavior("contactez-nous"), a.isOnCover(!0), TweenLite.to($(".arrow_box"), .7, {
//             top: 360 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/qui-sommes-nous/content", function() {
//           return a.signal.goSection.dispatch("qui-sommes-nous"), a.navBehavior("qui-sommes-nous"), a.isOnCover(!1), TweenLite.to($(".arrow_box"), .7, {
//             top: 150 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/nos-expertises/content", function() {
//           return a.signal.goSection.dispatch("nos-expertises"), a.navBehavior("nos-expertises"), a.isOnCover(!1), TweenLite.to($(".arrow_box"), .7, {
//             top: 220 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           })
//         }), this.get("/contactez-nous/content", function() {
//           return a.signal.goSection.dispatch("contactez-nous"), a.navBehavior("contactez-nous"), a.isOnCover(!1), $("div.postcard").css({
//             display: "block",
//             left: "50%"
//           }), TweenLite.to($(".arrow_box"), .7, {top: 360 - a.decNav, opacity: 1, ease: Expo.easeInOut})
//         }), this.get("/nos-references/:id", function(b) {
//           return a.navBehavior("nos-references"), a.isOnCover(!1), TweenLite.to($(".arrow_box"), .7, {
//             top: 290 - a.decNav,
//             opacity: 1,
//             ease: Expo.easeInOut
//           }), "content" === b.params.id ? a.signal.goSection.dispatch("nos-references") : a.signal.goProject.dispatch("nos-references", b.params.id)
//         })
//       }), this.router.bind("runRoute", function() {
//       })
//     }, b.prototype.navBehavior = function(a) {
//       return $("nav li").each(function() {
//         return $(this).hasClass("selected") ? $(this).removeClass("selected") : void 0
//       }), "" !== a ? ($("nav li." + a).addClass("selected"), document.title = "PUPPETS / " + a.toUpperCase().split("-").join(" ")) : document.title = "PUPPETS "
//     }, b.prototype.setData = function(a) {
//       this.data = a, this.decNav = this.data.is_mobile() ? 53 : 0
//     }, b.prototype.goSection = function(a) {
//       var b;
//       return b = this, b.signal.disableSection.dispatch(), b.signal[a].dispatch()
//     }, b.prototype.href = function(a) {
//       return this.resetScroll(), Davis.location.assign(new Davis.Request("/" + a))
//     }, b.prototype.isOnCover = function(a) {
//       return this.onCover = "undefined" != typeof a ? a : this.onCover, this.onCover
//     }, b.prototype.resetScroll = function() {
//       return TweenLite.to($("html, body, section, #cover, .cover-container"), .5, {scrollTop: 0}), !0
//     }, b
//   }()
// }.call(this), function() {
//   window.Utils = function() {
//     function a() {
//     }
//
//     return a.GroundShader = {
//       uniforms: {
//         fogDensity: {type: "f", value: .003},
//         fogColor: {type: "v3", value: new THREE.Vector3(.50588235, .51372549, .46666667)},
//         texture_Mix: {type: "t", value: 1, texture: null},
//         texture_Ground: {type: "t", value: 4, texture: null},
//         texture_AO: {type: "t", value: 5, texture: null},
//         uvScale: {type: "v2", value: new THREE.Vector2(4, 4)}
//       },
//       fragmentShader: ["uniform sampler2D texture_Mix;", "uniform sampler2D texture_Ground;", "uniform sampler2D texture_AO;", "uniform float fogDensity;", "uniform vec3 fogColor;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "void main() {", "vec4 diffuseColor = texture2D( texture_Ground, vUv );", "vec4 diffuseShadow = vec4(.0, .0, .0, 1);", "vec4 diffuseAO = texture2D( texture_AO, sUv*1.0 );", "vec4 diffuseMix = texture2D( texture_Mix, sUv*1.0 );", "vec4 color = vec4(0.8784313725490196, 0.8784313725490196, 0.8784313725490196, 1);", "color = mix(", "diffuseColor,", "color,", "1.0-diffuseMix.r", ");", "color = mix(", "diffuseShadow,", "color,", ".01+0.99*diffuseAO.r", ");", "gl_FragColor = color;", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "const float LOG2 = 0.2;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}"].join("\n"),
//       vertexShader: ["uniform vec2 uvScale;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "void main( void ) {", "vUv = uvScale * uv;", "sUv = uv;", "vPosition = position;", "gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);", "}"].join("\n")
//     }, a.makeGroundMaterial = function(b, c, d, e, f) {
//       var g;
//       return g = {
//         fogDensity: {type: "f", value: .004},
//         fogColor: {type: "v3", value: new THREE.Vector3(.8784313725490196, .8784313725490196, .8784313725490196)},
//         texture_AO: {type: "t", value: b},
//         texture_Mix: {type: "t", value: c},
//         texture_Ground: {type: "t", value: d},
//         uvScale: {type: "v2", value: e}
//       }, g.texture_Ground.value.wrapS = g.texture_Ground.value.wrapT = THREE.RepeatWrapping, f.material = new THREE.ShaderMaterial({
//         uniforms: g,
//         vertexShader: a.GroundShader.vertexShader,
//         fragmentShader: a.GroundShader.fragmentShader
//       })
//     }, a.RGBShader = {
//       uniforms: {
//         fogDensity: {type: "f", value: .003},
//         fogColor: {type: "v3", value: new THREE.Vector3(.50588235, .51372549, .46666667)},
//         texture_G: {type: "t", value: 1, texture: null},
//         texture_B: {type: "t", value: 2, texture: null},
//         texture_R: {type: "t", value: 4, texture: null},
//         texture_Default: {type: "t", value: 5, texture: null},
//         uvScale: {type: "v2", value: new THREE.Vector2(4, 4)}
//       },
//       fragmentShader: ["uniform sampler2D texture_color;", "uniform sampler2D texture_Default;", "uniform sampler2D texture_G;", "uniform sampler2D texture_bake;", "uniform sampler2D texture_B;", "uniform sampler2D texture_R;", "uniform float fogDensity;", "uniform vec3 fogColor;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "void main() {", "vec4 diffuseColor = texture2D( texture_color, sUv );", "vec4 diffuseShadow = vec4(.0, .0, .0, 1);", "vec4 diffuseBake = texture2D( texture_bake, sUv*1.0 );", "vec4 diffuseG = texture2D( texture_G, vUv*1.0 );", "vec4 diffuseB = texture2D( texture_B, vUv*1.0 );", "vec4 diffuseR = texture2D( texture_R, vUv*1.0 );", "vec4 diffuseDefault = texture2D( texture_Default, vUv*1.0 );", "vec4 color = diffuseDefault;", "color = mix(", "diffuseR,", "color,", "1.0-diffuseColor.r", ");", "color = mix(", "diffuseG,", "color,", "1.0-diffuseColor.g", ");", "color = mix(", "diffuseB,", "color,", "1.0-diffuseColor.b", ");", "color = mix(", "diffuseShadow,", "color,", ".01+0.99*diffuseBake.r", ");", "gl_FragColor = color;", "float depth = gl_FragCoord.z / gl_FragCoord.w;", "const float LOG2 = 0.2;", "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );", "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );", "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );", "}"].join("\n"),
//       vertexShader: ["uniform vec2 uvScale;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "void main( void ) {", "vUv = uvScale * uv;", "sUv = uv;", "vPosition = position;", "gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);", "}"].join("\n")
//     }, a.makeRGBMaterial = function(b, c, d, e, f, g, h, i) {
//       var j;
//       return j = {
//         fogDensity: {type: "f", value: 5e-4},
//         fogColor: {type: "v3", value: new THREE.Vector3(.5058823529411764, .5137254901960784, .4666666666666667)},
//         texture_Default: {type: "t", value: b},
//         texture_G: {type: "t", value: d},
//         texture_R: {type: "t", value: c},
//         texture_B: {type: "t", value: e},
//         texture_color: {type: "t", value: g},
//         uvScale: {type: "v2", value: h},
//         texture_bake: {type: "t", value: f}
//       }, j.texture_B.value.wrapS = j.texture_B.value.wrapT = THREE.RepeatWrapping, j.texture_R.value.wrapS = j.texture_R.value.wrapT = THREE.RepeatWrapping, j.texture_G.value.wrapS = j.texture_G.value.wrapT = THREE.RepeatWrapping, j.texture_Default.value.wrapS = j.texture_Default.value.wrapT = THREE.RepeatWrapping, i.material = new THREE.ShaderMaterial({
//         uniforms: j,
//         vertexShader: a.RGBShader.vertexShader,
//         fragmentShader: a.RGBShader.fragmentShader
//       })
//     }, a.AOShader = {
//       uniforms: {
//         fogDensity: {type: "f", value: .003},
//         fogColor: {type: "v3", value: new THREE.Vector3(.50588235, .51372549, .46666667)},
//         specularDirection: {type: "v3", value: new THREE.Vector3(-15, 10, 22)},
//         texture_DEFAULT: {type: "t", value: null},
//         texture_AO: {type: "t", value: 2, texture: null},
//         uvScale: {type: "v2", value: new THREE.Vector2(4, 4)},
//         texture_SPEC: {type: "t", value: null}
//       },
//       fragmentShader: ["uniform sampler2D texture_DEFAULT;", "uniform sampler2D texture_AO;", "uniform sampler2D texture_SPEC;", "uniform vec3 specularDirection;", "uniform float fogDensity;", "uniform vec3 fogColor;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "varying vec3 vNormal;", "void main() {", "vec4 diffuseShadow = vec4(.0, .0, .0, 1);", "vec4 diffuseAO = texture2D( texture_AO, sUv*1.0 );", "vec4 diffuseDefault = texture2D( texture_DEFAULT, vUv );", "vec4 specularAmount = texture2D( texture_SPEC, vUv );", "vec4 specularColor  = vec4(1.0,1.0,1.0, 1.0);", "float c = 0.035;", "float p = 30.0;", "float mixAmountSpecular = pow(c * dot(normalize(vNormal), specularDirection), p) * (specularAmount.r * 0.5);", "vec4 color = diffuseDefault;", "color = mix(color, specularColor, mixAmountSpecular);", "gl_FragColor = color;", "}"].join("\n"),
//       vertexShader: ["uniform vec2 uvScale;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "varying vec3 vNormal;", "void main( void ) {", "vUv = uvScale * uv;", "vNormal = normal;", "sUv = uv;", "vPosition = position;", "gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);", "}"].join("\n")
//     }, a.makeAOMaterial = function(b, c, d, e, f) {
//       var g;
//       return g = {
//         fogDensity: {type: "f", value: 5e-4},
//         fogColor: {type: "v3", value: new THREE.Vector3(.5058823529411764, .5137254901960784, .4666666666666667)},
//         specularDirection: {type: "v3", value: new THREE.Vector3(-15, 10, 22)},
//         texture_DEFAULT: {type: "t", value: b},
//         texture_AO: {type: "t", value: c},
//         texture_SPEC: {type: "t", value: d},
//         uvScale: {type: "v2", value: e}
//       }, g.texture_DEFAULT.value.wrapS = g.texture_DEFAULT.value.wrapT = THREE.RepeatWrapping, g.texture_SPEC.value.wrapS = g.texture_SPEC.value.wrapT = THREE.RepeatWrapping, f.material = new THREE.ShaderMaterial({
//         uniforms: g,
//         vertexShader: a.AOShader.vertexShader,
//         fragmentShader: a.AOShader.fragmentShader
//       })
//     }, a.NoFogShader = {
//       uniforms: {
//         texture_Default: {type: "t", value: 5, texture: null},
//         uvScale: {type: "v2", value: new THREE.Vector2(1, 1)}
//       },
//       fragmentShader: ["uniform sampler2D texture_Default;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "void main() {", "vec4 diffuseDefault = texture2D( texture_Default, vUv*1.0 );", "vec4 color = diffuseDefault;", "gl_FragColor = color;", "}"].join("\n"),
//       vertexShader: ["uniform vec2 uvScale;", "varying vec2 vUv;", "varying vec2 sUv;", "varying vec3 vPosition;", "void main( void ) {", "vUv = uvScale * uv;", "sUv = uv;", "vPosition = position;", "gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1);", "}"].join("\n")
//     }, a.makeNoFogMaterial = function(b, c, d) {
//       var e;
//       return e = {
//         texture_Default: {type: "t", value: b},
//         uvScale: {type: "v2", value: c}
//       }, e.texture_Default.value.wrapS = e.texture_Default.value.wrapT = THREE.RepeatWrapping, d.material = new THREE.ShaderMaterial({
//         uniforms: e,
//         vertexShader: a.NoFogShader.vertexShader,
//         fragmentShader: a.NoFogShader.fragmentShader
//       })
//     }, a
//   }()
// }.call(this), function() {
//   console.log("______ _   _____________ _____ _____ _____ "), console.log("| ___ \\ | | | ___ \\ ___ \\  ___|_   _/  ___|"), console.log("| |_/ / | | | |_/ / |_/ / |__   | | \\ `--. "), console.log("|  __/| | | |  __/|  __/|  __|  | |  `--. \\"), console.log("| |   | |_| | |   | |   | |___  | | /\\__/ /"), console.log("\\_|    \\___/\\_|   \\_|   \\____/  \\_/ \\____/ "), console.log = function() {
//   }, console.info = function() {
//   }, console.warn = function() {
//   }
// }.call(this), function() {
//   var a, b, c, d, e;
//   window.server = "", c = new Dispatcher, c.init(), b = new Data(c.objDispatch), d = new Navigation("Navigation"), d.setSignal(c.objDispatch), d.setData(b), d.init(), a = new Cover("Cover"), a.setSignal(c.objDispatch), a.setData(b), a.init(), e = new Router, e.setSignal(c.objDispatch), e.setData(b), c.objDispatch.loadDataComplete.add(function() {
//     return e.init()
//   }), window.texturePath = "high/", $(window).load(function() {
//     return b.startLoad()
//   }), $(document).ready(function() {
//   }), $(document).on("touchmove", function(a) {
//     return e.isOnCover() ? a.preventDefault() : void 0
//   }), setTimeout(function() {
//     return window.scrollTo(0, 1)
//   }), document.body.focus(), window.addEventListener("orientationchange", function() {
//     return window.scrollTo(0, 0)
//   })
// }.call(this);
