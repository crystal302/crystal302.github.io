var a_idx = 0;
jQuery(document).ready(function($) {
  $("body").click(function(e) {
    var a = new Array("你好","欢迎","不要再点了啦","你再点？","都说了别点了","这不是没有东西嘛","都说了没东西啦！","...","前方高能","3","2","1","迎接下一个任期","继续颐使气指","笑话改变主角不变","还是小熊维尼","监狱大门常打开","豪迈熙来等你","恶政隐就有了问题","你会来到这里","不管原因都是犯人","请不用客气","爬山拔河在一起","我们欢迎你","清华毕业初中生","缔造错字传奇","不用换肩扛麦十里","维尼留下回忆","陌生熟悉都是犯人","请不用拘礼","第几次来没关系","有太多话题","秦城欢迎你","维尼修宪称帝","梁家河的粪坑充满着沼气","秦城欢迎你","在西湖畔通商宽衣","在黄土地刷新成绩","监狱大门常打开","犯人来自各地","别看今天你闹的欢","帐都记在那里","天大地大都是狱友","请不用客气","谈笑风生不可以","名单上有你","秦城欢迎你","开红色法拉利","让我们都加油去不强自息","秦城欢迎你","有梦想谁都能登基","有勇气就没有任期","秦城欢迎你","维尼修宪称帝","梁家河的粪坑充满着沼气","秦城欢迎你","在西湖畔通商宽衣","在黄土地刷新成绩","秦城欢迎你","开红色法拉利","让我们都加油去不强自息","秦城欢迎你","有梦想谁都能登基","有勇气就没有任期","监狱大门常打开","豪迈熙来等你","恶政隐就有了问题","你会来到这里","不管原因都是犯人","请不用客气","每天游泳一千米","我们欢迎你","秦城欢迎你","维尼修宪称帝","梁家河的粪坑充满着沼气","秦城欢迎你","在大会旁通商宽衣","在黄土地刷新成绩","轻关易道","通商宽衣","金科律玉","颐使气指","中国人民","非常气愤","生产总值","岿然不动","国家主席","烈火焚身","忠于宪法","付出生命","冰棒外交","满脸喷粪","一国两制","身陷绝境","一带一路","风平浪静","香港局势","坡涛汹涌","脱贫攻坚","一派胡言","合作之道","sometimes naive","萨格尔王","敲击键盘","疯狂宇宙","掀翻池塘","都得应验的","监狱大门常打开","犯人来自各地","别看今天你闹的欢","帐都记在那里","天大地大都是狱友","请不用客气","谈笑风生不可以","名单上有你","秦城欢迎你","维尼倒车第一","让我们都加油去不强自息","秦城欢迎你","有梦想谁都能登基","有勇气就没有任期","秦城欢迎你","维尼修宪称帝","梁家河的粪坑充满着沼气","秦城欢迎你","在大会旁通商宽衣","在黄土地扛起麦子","秦城欢迎你","开红色法拉利","让我们都加油去不强自息","秦城欢迎你","有梦想谁都能登基","有勇气就没有任期","秦城欢迎你","有梦想谁都能登基","有勇气就没有任期","秦城欢迎你","有梦想谁都能登基","有勇气就没有任期");
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