(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('start', x, this);
                    k['call'](this);
                };
                w['bind']('start', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"borderRadius":0,"shadow":false,"gap":10,"definitions": [{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_A2F56940_AB13_AB5E_41C2_B285B804E7C9","id":"panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_camera"},{"displayPlaybackBar":true,"surfaceSelectionEnabled":false,"zoomEnabled":true,"viewerArea":"this.MainViewer","class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","aaEnabled":true,"touchControlMode":"drag_rotation","id":"MainViewerPanoramaPlayer"},{"borderRadius":0,"playbackBarProgressBorderRadius":0,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","playbackBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipBorderRadius":3,"toolTipShadowSpread":0,"subtitlesHorizontalAlign":"center","toolTipShadowOpacity":1,"playbackBarHeight":10,"playbackBarProgressBorderColor":"#000000","id":"MainViewer","playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"width":"100%","paddingRight":0,"progressBackgroundColorRatios":[0],"paddingLeft":0,"subtitlesTextShadowHorizontalLength":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesFontColor":"#FFFFFF","subtitlesVerticalAlign":"bottom","toolTipShadowVerticalLength":0,"toolTipFontSize":"1.11vmin","playbackBarHeadBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressOpacity":1,"progressRight":0,"toolTipBorderColor":"#767676","playbackBarHeadWidth":6,"progressBarBorderColor":"#000000","transitionMode":"blending","progressBarBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"toolTipHorizontalAlign":"center","height":"100%","progressBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"playbackBarBottom":5,"subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"toolTipFontStyle":"normal","playbackBarProgressBorderSize":0,"subtitlesTop":0,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","progressBackgroundOpacity":1,"subtitlesPaddingBottom":5,"toolTipPaddingLeft":6,"subtitlesBottom":50,"displayTooltipInTouchScreens":true,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadHeight":15,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","progressBackgroundColor":["#FFFFFF"],"toolTipFontWeight":"normal","progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"progressBottom":0,"class":"ViewerArea","minHeight":50,"playbackBarHeadShadowBlurRadius":3,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"subtitlesPaddingRight":5,"borderSize":0,"toolTipPaddingRight":6,"minWidth":100,"progressHeight":10,"subtitlesOpacity":1,"subtitlesBorderSize":0,"progressBorderSize":0,"toolTipShadowHorizontalLength":0,"subtitlesFontFamily":"Arial","toolTipTextShadowBlurRadius":3,"progressBarBorderSize":0,"paddingTop":0,"propagateClick":false,"toolTipTextShadowOpacity":0,"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"paddingBottom":0,"toolTipFontColor":"#606060","progressBarBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","transitionDuration":500,"progressBorderRadius":0,"subtitlesFontWeight":"normal","toolTipPaddingBottom":4,"playbackBarProgressOpacity":1,"playbackBarHeadShadow":true,"playbackBarHeadShadowOpacity":0.7,"playbackBarProgressBackgroundColorDirection":"vertical","progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"surfaceReticleColor":"#FFFFFF","surfaceReticleOpacity":0.6,"subtitlesTextDecoration":"none","toolTipShadowColor":"#333333","subtitlesTextShadowOpacity":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarOpacity":1,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderSize":1,"surfaceReticleSelectionOpacity":1,"toolTipDisplayTime":600,"toolTipPaddingTop":4,"subtitlesShadow":false,"subtitlesEnabled":true,"playbackBarBackgroundColorDirection":"vertical","toolTipOpacity":1,"subtitlesGap":0,"displayTooltipInSurfaceSelection":true,"vrPointerColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipShadowBlurRadius":3,"shadow":false,"data":{"name":"Main Viewer"}},{"hfovMin":"120%","thumbnailUrl":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_A44F4022_AB12_58DD_41E3_CB63F57F4672"],"label":trans('panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1.label'),"id":"panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1","hfovMax":130,"class":"Panorama","data":{"label":"AP 01 EDITED  (5)"},"pitch":0,"adjacentPanoramas":[{"distance":7.35,"yaw":-3.11,"select":"this.overlay_A44F4022_AB12_58DD_41E3_CB63F57F4672.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274","data":{"overlayID":"overlay_A44F4022_AB12_58DD_41E3_CB63F57F4672"},"class":"AdjacentPanorama","backwardYaw":-6.29}],"hfov":360},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_A5454DD6_AB32_6B62_41E0_B214FE1FFDE5","id":"panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_camera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_A2F54940_AB13_AB5E_41E3_349E7DD12DFE","id":"panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_camera"},{"class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_camera","media":"this.panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_camera","media":"this.panorama_A18922E7_AB12_5923_41DA_C33D39D415EA","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_camera","media":"this.panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_camera","media":"this.panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_camera","media":"this.panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","end":"this.trigger('tourEnded')"}],"id":"mainPlayList"},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_A2F6C940_AB13_AB5E_41D6_840B8C9330B5","id":"panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_camera"},{"hoverFactor":0,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","initialSequence":"this.sequence_A2FA8940_AB13_AB5E_41B9_D904EFC34550","id":"panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1_camera"},{"hfovMin":"120%","thumbnailUrl":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A18922E7_AB12_5923_41DA_C33D39D415EA_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_A5F09D3D_AB1E_AB26_41CA_A0BCD2176D5C","this.overlay_BBB66C1E_AB32_A8E2_41DE_79129F86EC6E"],"label":trans('panorama_A18922E7_AB12_5923_41DA_C33D39D415EA.label'),"id":"panorama_A18922E7_AB12_5923_41DA_C33D39D415EA","hfovMax":130,"class":"Panorama","data":{"label":"AP 01 EDITED  (1)"},"pitch":0,"adjacentPanoramas":[{"distance":1.04,"yaw":177,"select":"this.overlay_A5F09D3D_AB1E_AB26_41CA_A0BCD2176D5C.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F","data":{"overlayID":"overlay_A5F09D3D_AB1E_AB26_41CA_A0BCD2176D5C"},"class":"AdjacentPanorama","backwardYaw":-16.72},{"distance":1.86,"yaw":1.39,"select":"this.overlay_BBB66C1E_AB32_A8E2_41DE_79129F86EC6E.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F","data":{"overlayID":"overlay_BBB66C1E_AB32_A8E2_41DE_79129F86EC6E"},"class":"AdjacentPanorama","backwardYaw":-152.31}],"hfov":360},{"hfovMin":"120%","thumbnailUrl":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_A5F5CA98_AB11_A9EE_41D4_3A158F41F7F4","this.overlay_A4966D1E_AB12_68E2_41CC_B5C46842C3DC"],"label":trans('panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274.label'),"id":"panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274","hfovMax":130,"class":"Panorama","data":{"label":"AP 01 EDITED  (3)"},"pitch":0,"adjacentPanoramas":[{"distance":2.4,"yaw":-178.6,"select":"this.overlay_A5F5CA98_AB11_A9EE_41D4_3A158F41F7F4.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F","data":{"overlayID":"overlay_A5F5CA98_AB11_A9EE_41D4_3A158F41F7F4"},"class":"AdjacentPanorama","backwardYaw":-12.26},{"distance":2.43,"yaw":-6.29,"select":"this.overlay_A4966D1E_AB12_68E2_41CC_B5C46842C3DC.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A2D97DF5_AB13_AB26_41B6_5909B84E23A1","data":{"overlayID":"overlay_A4966D1E_AB12_68E2_41CC_B5C46842C3DC"},"class":"AdjacentPanorama","backwardYaw":-3.11}],"hfov":360},{"hfovMin":"120%","thumbnailUrl":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_A4835C75_AB3E_E926_41C7_E2BDBAB90638","this.overlay_BB070BE7_AB3E_6F22_41C1_3B56C36E15F6"],"label":trans('panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F.label'),"id":"panorama_A5F4C2F9_AB32_792E_41B8_FA0FF11B824F","hfovMax":130,"class":"Panorama","data":{"label":"AP 08"},"pitch":0,"adjacentPanoramas":[{"distance":1.67,"yaw":-152.31,"select":"this.overlay_A4835C75_AB3E_E926_41C7_E2BDBAB90638.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A18922E7_AB12_5923_41DA_C33D39D415EA","data":{"overlayID":"overlay_A4835C75_AB3E_E926_41C7_E2BDBAB90638"},"class":"AdjacentPanorama","backwardYaw":1.39},{"distance":2.09,"yaw":-12.26,"select":"this.overlay_BB070BE7_AB3E_6F22_41C1_3B56C36E15F6.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A2D90963_AB12_6B22_41E3_3E33F44E8274","data":{"overlayID":"overlay_BB070BE7_AB3E_6F22_41C1_3B56C36E15F6"},"class":"AdjacentPanorama","backwardYaw":-178.6}],"hfov":360},{"hfovMin":"120%","thumbnailUrl":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_t.jpg","partial":false,"frames":[{"cube":{"levels":[{"width":15360,"rowCount":5,"url":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_0/{face}/0/{row}_{column}.jpg","tags":"ondemand","height":2560,"colCount":30,"class":"TiledImageResourceLevel"},{"width":9216,"rowCount":3,"url":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_0/{face}/1/{row}_{column}.jpg","tags":"ondemand","height":1536,"colCount":18,"class":"TiledImageResourceLevel"},{"width":6144,"rowCount":2,"url":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_0/{face}/2/{row}_{column}.jpg","tags":"ondemand","height":1024,"colCount":12,"class":"TiledImageResourceLevel"},{"width":3072,"rowCount":1,"url":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_0/{face}/3/{row}_{column}.jpg","tags":["ondemand","preload"],"height":512,"colCount":6,"class":"TiledImageResourceLevel"},{"width":12288,"rowCount":1,"url":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_0/{face}/vr2gen/0.jpg","tags":"mobilevr2gen","height":2048,"colCount":6,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F_t.jpg","class":"CubicPanoramaFrame"}],"vfov":180,"overlays":["this.overlay_A65E7DD3_AB1F_AB62_41BB_23FB5CE68B75"],"label":trans('panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F.label'),"id":"panorama_A2DCBFE7_AB12_6722_41E4_809E43876B1F","hfovMax":130,"class":"Panorama","data":{"label":"AP 01 EDITED  (2)"},"pitch":0,"adjacentPanoramas":[{"distance":1.94,"yaw":-16.72,"select":"this.overlay_A65E7DD3_AB1F_AB62_41BB_23FB5CE68B75.get('areas').forEach(function(a){ a.trigger('click') })","panorama":"this.panorama_A18922E7_AB12_5923_41DA_C33D39D415EA","data":{"overlayID":"overlay_A65E7DD3_AB1F_AB62_41BB_23FB5CE68B75"},"class":"AdjacentPanorama","backwardYaw":177}],"hfov":360},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_A2F56940_AB13_AB5E_41C2_B285B804E7C9"},{"areas":["this.HotspotPanoramaOverlayArea_A447F025_AB12_5926_41E2_9BA80A1FE81C"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Image"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA29022D_AB31_B927_41DE_1D57C3D108D8","distance":50,"yaw":-3.11,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":3.78,"data":{"label":"Image"},"verticalAlign":"middle","hfov":6.39,"pitch":-13.01,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_A44F4022_AB12_58DD_41E3_CB63F57F4672"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_A5454DD6_AB32_6B62_41E0_B214FE1FFDE5"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_A2F54940_AB13_AB5E_41E3_349E7DD12DFE"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_A2F6C940_AB13_AB5E_41D6_840B8C9330B5"},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"easing":"linear","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","restartMovementOnUserInteraction":false,"id":"sequence_A2FA8940_AB13_AB5E_41B9_D904EFC34550"},{"areas":["this.HotspotPanoramaOverlayArea_A5F40D42_AB1E_AB62_41D4_2DAB4A05F814"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA2A422D_AB31_B927_41E3_1831E07DB847","distance":100,"yaw":177,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7,"data":{"label":"Arrow 08a"},"verticalAlign":"middle","hfov":10.5,"pitch":-58.54,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_A5F09D3D_AB1E_AB26_41CA_A0BCD2176D5C"},{"areas":["this.HotspotPanoramaOverlayArea_BB87CC3B_AB32_A922_41DF_AFF2DF342BCE"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA29A22D_AB31_B927_41E4_5DA38C424529","distance":100,"yaw":1.39,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7,"data":{"label":"Arrow 08a"},"verticalAlign":"middle","hfov":10.5,"pitch":-42.35,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_BBB66C1E_AB32_A8E2_41DE_79129F86EC6E"},{"areas":["this.HotspotPanoramaOverlayArea_A4198ACC_AB11_A965_41CB_B93FE9824148"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA29E22D_AB31_B927_41D8_527C88F223DE","distance":100,"yaw":-178.6,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7,"data":{"label":"Arrow 08a"},"verticalAlign":"middle","hfov":10.5,"pitch":-35.32,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_A5F5CA98_AB11_A9EE_41D4_3A158F41F7F4"},{"areas":["this.HotspotPanoramaOverlayArea_A4940D28_AB12_6B2E_41E2_1EF2E454D76D"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA29C22D_AB31_B927_41E0_85FECA0627DC","distance":100,"yaw":-6.29,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7,"data":{"label":"Arrow 08a"},"verticalAlign":"middle","hfov":10.5,"pitch":-34.95,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_A4966D1E_AB12_68E2_41CC_B5C46842C3DC"},{"areas":["this.HotspotPanoramaOverlayArea_A498AC7F_AB3E_E922_41D1_C9398831996B"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA29422D_AB31_B927_41D6_0800F7A5194F","distance":100,"yaw":-152.31,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7,"data":{"label":"Arrow 08a"},"roll":25.47,"verticalAlign":"middle","hfov":10.5,"pitch":-45.53,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_A4835C75_AB3E_E926_41C7_E2BDBAB90638"},{"areas":["this.HotspotPanoramaOverlayArea_BB1ACBE9_AB3E_6F2E_41C7_CB2ACA7327BD"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA28922D_AB31_B927_41C7_FA94CC83F60A","distance":100,"yaw":-12.26,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":6.02,"data":{"label":"Arrow 08a"},"roll":-6.8,"verticalAlign":"middle","hfov":9.32,"pitch":-39.11,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_BB070BE7_AB3E_6F22_41C1_3B56C36E15F6"},{"areas":["this.HotspotPanoramaOverlayArea_A6D52EEC_AB1F_A925_41DB_520219F2BFC5"],"maps":[],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"Arrow 08a"},"useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_BA2A022D_AB31_B927_41D0_384AA9BD0CFB","distance":100,"yaw":-16.72,"horizontalAlign":"center","class":"HotspotPanoramaOverlayImage","vfov":7,"data":{"label":"Arrow 08a"},"roll":-15.49,"verticalAlign":"middle","hfov":10.5,"pitch":-41.25,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_A65E7DD3_AB1F_AB62_41BB_23FB5CE68B75"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_A447F025_AB12_5926_41E2_9BA80A1FE81C"},{"rowCount":3,"frameDuration":41,"frameCount":9,"colCount":3,"class":"AnimatedImageResource","levels":[{"height":300,"width":300,"class":"ImageResourceLevel","url":"media/res_BB4B49D8_AB3E_6B6D_41E1_2364FD023A37_0.png"}],"id":"AnimatedImageResource_BA29022D_AB31_B927_41DE_1D57C3D108D8"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_A5F40D42_AB1E_AB62_41D4_2DAB4A05F814"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA2A422D_AB31_B927_41E3_1831E07DB847"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 4)","id":"HotspotPanoramaOverlayArea_BB87CC3B_AB32_A922_41DF_AFF2DF342BCE"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA29A22D_AB31_B927_41E4_5DA38C424529"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 4)","id":"HotspotPanoramaOverlayArea_A4198ACC_AB11_A965_41CB_B93FE9824148"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA29E22D_AB31_B927_41D8_527C88F223DE"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 3)","id":"HotspotPanoramaOverlayArea_A4940D28_AB12_6B2E_41E2_1EF2E454D76D"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA29C22D_AB31_B927_41E0_85FECA0627DC"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_A498AC7F_AB3E_E922_41D1_C9398831996B"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA29422D_AB31_B927_41D6_0800F7A5194F"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 2)","id":"HotspotPanoramaOverlayArea_BB1ACBE9_AB3E_6F2E_41C7_CB2ACA7327BD"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA28922D_AB31_B927_41C7_FA94CC83F60A"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_A6D52EEC_AB1F_A925_41DB_520219F2BFC5"},{"rowCount":7,"frameDuration":41,"frameCount":32,"colCount":5,"class":"AnimatedImageResource","levels":[{"height":560,"width":600,"class":"ImageResourceLevel","url":"media/res_BB4889D7_AB3E_6B63_41D0_4FF5C5C6AB97_0.png"}],"id":"AnimatedImageResource_BA2A022D_AB31_B927_41D0_384AA9BD0CFB"}],"width":"100%","mediaActivationMode":"window","overflow":"hidden","paddingTop":0,"propagateClick":false,"backgroundOpacity":1,"scrollBarMargin":2,"defaultVRPointer":"laser","paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"scripts":{"translate":TDV.Tour.Script.translate,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initQuiz":TDV.Tour.Script.initQuiz,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"cloneCamera":TDV.Tour.Script.cloneCamera,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"playAudioList":TDV.Tour.Script.playAudioList,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"openLink":TDV.Tour.Script.openLink,"clone":TDV.Tour.Script.clone,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getKey":TDV.Tour.Script.getKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"downloadFile":TDV.Tour.Script.downloadFile,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"existsKey":TDV.Tour.Script.existsKey,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"shareSocial":TDV.Tour.Script.shareSocial,"unregisterKey":TDV.Tour.Script.unregisterKey,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlays":TDV.Tour.Script.getOverlays,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"isPanorama":TDV.Tour.Script.isPanorama,"getMainViewer":TDV.Tour.Script.getMainViewer,"showWindow":TDV.Tour.Script.showWindow,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"init":TDV.Tour.Script.init,"historyGoBack":TDV.Tour.Script.historyGoBack,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizStart":TDV.Tour.Script.quizStart,"mixObject":TDV.Tour.Script.mixObject,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setMapLocation":TDV.Tour.Script.setMapLocation,"resumePlayers":TDV.Tour.Script.resumePlayers,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"historyGoForward":TDV.Tour.Script.historyGoForward,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizFinish":TDV.Tour.Script.quizFinish,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPixels":TDV.Tour.Script.getPixels,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setLocale":TDV.Tour.Script.setLocale,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setValue":TDV.Tour.Script.setValue,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"initAnalytics":TDV.Tour.Script.initAnalytics,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowScore":TDV.Tour.Script.quizShowScore,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay},"paddingRight":0,"paddingLeft":0,"horizontalAlign":"left","vrPolyfillScale":0.75,"verticalAlign":"top","contentOpaque":false,"scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"children":["this.MainViewer"],"toolTipHorizontalAlign":"center","height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","scrollBarVisible":"rollOver","scrollBarWidth":10,"mobileMipmappingEnabled":false,"scrollBarColor":"#000000","downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.init()","class":"Player","minHeight":20,"data":{"defaultLocale":"en","name":"Player510","textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt"}},"backgroundColorDirection":"vertical","minWidth":20,"backgroundColorRatios":[0],"borderSize":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.2.3.js.map
//Generated with v2021.2.3, Mon Dec 9 2024