!function(e){angular.module("custom.controllers",[]);var o=function(e,o,t){e({method:"GET",url:"auth/refresh"}).success(function(n,r,a,s){localStorage.setItem("_u",JSON.stringify(n)),setTimeout(function(){$scope.refreshToken(e,o,t)},18e5),o()}).error(function(){t()})};app.controller("LoginController",["$controller","$scope","$http","$location","$rootScope","$window","$state","$translate","Notification","ReportService","UploadService",function(e,t,n,r,a,s,i,c,l,p,u){function d(e,o,t,n){"undefined"!=typeof Storage&&(localStorage.setItem("_u",JSON.stringify(e)),a.session=JSON.parse(localStorage._u)),i.go("home")}function m(e,o,t,n){var r=401==o?c.instant("Login.view.invalidPassword"):e;l.error(r)}t.$http=n,app.registerEventsCronapi(t,c),a.http=n,a.Notification=l,a.UploadService=u,a.getReport=function(e,o){p.openReport(e,o)},t.autoLogin=function(){localStorage.getItem("_u")&&JSON.parse(localStorage.getItem("_u")).token&&o(n,function(){i.go("home")},function(){localStorage.removeItem("_u")})},t.autoLogin(),t.message={},t.renderRecaptcha=function(){window.grecaptcha.render("loginRecaptcha"),window.grecaptcha.reset()},t.login=function(e,o,r){if(t.message.error=void 0,$("form").children("*[class=g-recaptcha]").length&&(t.captcha_token=window.grecaptcha.getResponse(),""!=!t.captcha_token))return void window.grecaptcha.execute(function(e){}).then(function(e){angular.element($('form[ng-submit="login()"]')[0]).scope().login()},function(){l.error("Error on recaptcha")});var e={username:e||t.username.value,password:o||t.password.value,recaptchaToken:t.captcha_token?t.captcha_token:void 0},a={"Content-Type":"application/x-www-form-urlencoded"};r&&(a["X-AUTH-TOKEN"]=r),n({method:"POST",url:"auth",data:$.param(e),headers:a}).success(d).error(m)};try{var f=e("AfterLoginController",{$scope:t});app.copyContext(f,this,"AfterLoginController")}catch(e){}try{t.blockly.events.afterLoginRender&&t.blockly.events.afterLoginRender()}catch(e){}}]),app.controller("HomeController",["$controller","$scope","$http","$rootScope","$state","$translate","Notification","ReportService","UploadService",function(e,t,n,r,a,s,i,c,l){t.$http=n,app.registerEventsCronapi(t,s),r.http=n,r.Notification=i,r.UploadService=l,r.getReport=function(e,o){c.openReport(e,o)},t.message={},t.selecionado={valor:1},r.session=void 0!=localStorage.getItem("_u")?JSON.parse(localStorage.getItem("_u")):null,r.session?(r.myTheme="",r.session.user&&(r.myTheme=r.session.user.theme),t.$watch("myTheme",function(e){void 0!==e&&""!==e&&$("#themeSytleSheet").attr("href","plugins/cronapp-framework-js/css/themes/"+e+".min.css")}),localStorage.getItem("_u")&&JSON.parse(localStorage.getItem("_u")).token&&o(n,function(){},function(){localStorage.removeItem("_u"),a.go("login")})):t.ignoreAuth||(localStorage.removeItem("_u"),window.location.href=""),r.logout=function(){function e(){r.session={},"undefined"!=typeof Storage&&localStorage.removeItem("_u"),window.location.href=""}n({method:"GET",url:"logout",headers:{"Content-Type":"application/json"}}).success(e).error(e)},t.changePassword=function(){function e(e,o,n,r){i.info(s.instant("Home.view.passwordChanged")),t()}function o(e,o,t,n){var r=o>=401?s.instant("Home.view.InvalidPassword"):e;i.error(r)}function t(){oldPassword.value="",newPassword.value="",newPasswordConfirmation.value="",$("#modalPassword").modal("hide")}if(function(){return""!==oldPassword.value&&""!==newPassword.value&&""!==newPasswordConfirmation.value||(""===newPasswordConfirmation.value&&i.error(s.instant("Home.view.ConfirmationPasswordCanNotBeEmpty")),""===newPassword.value&&i.error(s.instant("Home.view.NewPasswordCanNotBeEmpty")),""===oldPassword.value&&i.error(s.instant("Home.view.PreviousPasswordCanNotBeEmpty")),!1)}()){var r={oldPassword:oldPassword.value,newPassword:newPassword.value,newPasswordConfirmation:newPasswordConfirmation.value};n({method:"POST",url:"changePassword",data:$.param(r),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(e).error(o)}};var p=function(){var e=$(this);e.closest(".sub-menu").length>0&&e.closest(".navbar-nav").collapse("hide")};t.$on("$viewContentLoaded",function(){var e=$(".navbar-nav");e.off("click","a",p),e.on("click","a",p)}),t.themes=["material","cerulean","cosmo","cyborg","darkly","flatly","journal","lumen","paper","readable","sandstone","simplex","slate","spacelab","superhero","united","yeti"],t.changeTheme=function(e){function o(o,t,n,a){r.session.theme=e,r.session.user.theme=e,localStorage.setItem("_u",JSON.stringify(r.session))}function t(e,o,t,n){var r=e;i.error(r)}if(void 0!==e){$("body").append('<div id="transition" />'),$("#transition").css({"background-color":"#FFF",zIndex:1e5,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px",overflow:"hidden",display:"block"}),$("#transition").fadeIn(800,function(){$("#themeSytleSheet").attr("href","plugins/cronapp-framework-js/css/themes/"+e+".min.css"),r.myTheme=e,$("#transition").fadeOut(1e3,function(){$("#transition").remove()})});var a={theme:e};n({method:"POST",url:"changeTheme",data:$.param(a),headers:{"Content-Type":"application/x-www-form-urlencoded"}}).success(o).error(t)}};try{var u=e("AfterHomeController",{$scope:t});app.copyContext(u,this,"AfterHomeController")}catch(e){}try{t.blockly.events.afterHomeRender&&t.blockly.events.afterHomeRender()}catch(e){}}]),app.controller("PublicController",["$controller","$scope",function(e,o){o.ignoreAuth=!0,angular.extend(this,e("HomeController",{$scope:o}))}]),app.controller("SocialController",["$controller","$scope","$location",function(e,o,t){o.checkSocial=!0,angular.extend(this,e("LoginController",{$scope:o}));var n=t.search(),r={};for(var a in n)n.hasOwnProperty(a)&&(r[a]=n[a]);o.login("#OAUTH#","#OAUTH#",r._ctk)}])}(app),window.safeApply=function(e){var o=this.$root.$$phase;"$apply"==o||"$digest"==o?e&&"function"==typeof e&&e():this.$apply(e)};