var $ul = $('ul');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $name = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $name.html(grain.name);
  $img.attr('src', 'images/' + grain.img);
  $p.html(grain.desc);
  $li.append($name, $img, $p);
  $ul.append($li);
});
