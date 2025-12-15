var $ = jQuery;

if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark")
} else {
    document.documentElement.classList.remove("dark")
}

const loaderSVG = {
    "default": `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;height: 100%;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
  <g transform="rotate(0 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(30 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(60 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(90 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(120 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(150 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(180 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(210 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(240 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(270 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(300 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
    </rect>
  </g><g transform="rotate(330 50 50)">
    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="{fillcolor}">
      <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
    </rect>
  </g>
</svg>`,

    "bounce": `<span class="step1-loading spinner text-white/80">
<span class="bounce1"></span>
<span class="bounce2"></span>
<span class="bounce3"></span>`,

    "sthe": `<svg class="show-more__loading w-6 h-6 animate-spin animate-reverse">
	<use href="#refresh"></use>
</svg>`
};

jQuery.fn.showLoader = function(theme = "default", fill_color = "#ffffff") {
    this.data("loader-text", this.html());
    this.prop("disabled", true);
	var html = loaderSVG[theme];
	html = html.replaceAll("{fillcolor}", fill_color);
    this.html(html);
    return this;
};

jQuery.fn.hideLoader = function(new_html = "", stay_disabled = false) {
    this.html(new_html ? new_html : this.data("loader-text"));
    if (!stay_disabled) {
        this.prop("disabled", false);
    }
    this.data("loader-text", "");
    return this;
};


function showNotification(title = "", text = "", type = "success",duration = 4000){
    let notice = $(".notification");
	let types = ["danger" , "warning" , "success"];
    let noticeType = types.find(t => t === type) ;
	noticeType = noticeType ? `notification--${noticeType}` : "notification--success";

    if (!notice.hasClass("notification--show")) {

		$(".notification__title").text(title)
        $(".notification__text").text(text);

	    notice.addClass(`notification--show ${noticeType}`);

	    setTimeout(function () {
	        notice.removeClass(["notification--show" , `${noticeType}`]);
        }, duration);
    }
}