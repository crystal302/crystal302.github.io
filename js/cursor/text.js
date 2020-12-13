var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("颐使气指","疯狂宇宙","金科律玉","修宪称帝","小熊维尼","豪迈万丈","东山再起","满脸喷粪","十里山路","龟然不动");
    var $i = $("<span/>").text(a[a_idx]);
    var x = e.pageX,
    y = e.pageY;
    $i.css({
      "z-index": 99999,
      "top": y - 48,
      "left": x - a[a_idx].length * 8,
      "position": "absolute",
      "color": "#ff7a45"
    });
    $("body").append($i);
    $i.animate({
      "top": y - 180,
      "opacity": 0
    }, 1500, function() {
      $i.remove();
    });
    a_idx = (a_idx + 1) % a.length;
  });
});
