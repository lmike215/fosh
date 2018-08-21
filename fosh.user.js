// ==UserScript==
// @name         Find On Sci-Hub
// @namespace    http://github.com/lmike215/fosh
// @version      0.1
// @description  Adds the ability to view content content using the Sci-Hub service.
// @author       You
// @match        *.nejm.org/*
// @match        *.jwatch.org/*
// @match        *.springer.com/*
// @match        *.sciencedirect.com/*
// @match        *.asahq.org/*
// @match        *.ncbi.nlm.nih.gov/pubmed/*
// @match        *.tandfonline.com/*
// @match        scholar.google.com/*
// @match        *.ingentaconnect.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    if (location.host == 'scholar.google.com')
    {

        var res = Array.from(document.querySelectorAll('#gs_res_ccl_mid .gs_ri .gs_fl'));

        for (var i=0;i<res.length;i++)
        {
            if (typeof res[i].parentElement.childNodes[0].getElementsByTagName('a')[0] == 'undefined')
            {
                var a = document.createElement('a');
                var text = document.createTextNode('Unavailable on Sci-Hub :-(');
                a.appendChild(text);
            }
            else
            {
                var source = res[i].parentElement.childNodes[0].getElementsByTagName('a')[0].href;
                var shadow = document.createElement('a');
                shadow.href = source;

                if (shadow.hostname == 'books.google.com')
                {
                    var a = document.createElement('a');
                    var text = document.createTextNode('Unavailable on Sci-Hub :-(');
                    a.appendChild(text);
                }
                else
                {
                    var a = document.createElement('a');
                    var text = document.createTextNode('Find on Sci-Hub!');
                    a.appendChild(text);
                    a.href = shadow.origin.replace(/^https/, 'http') + '.sci-hub.tw' + shadow.pathname + shadow.search;
                }
            }

            res[i].insertBefore(a, res[i].firstChild);
        }
    }
    else
    {
        var link = location.origin.replace(/^https/, 'http') + '.sci-hub.tw' + location.pathname + location.search;
        var find = document.createElement('div');
        find.innerHTML = '<a id="fosh" href="' + link + '">Find on Sci-Hub!</p>';
        document.body.insertBefore(find, document.body.firstChild);

        GM_addStyle('\
                #fosh {\
                    position: relative;\
                    top: 0;\
                    left: 0;\
                    z-index: 9999;\
                    display: block;\
                    text-align: center;\
                    width: 100%;\
                    background-color: rgba(204,204,204,0.8);\
                    padding: 10px 0;\
                    color: #333;\
                    font-size: 16px;\
                    font-family: sans-serif;\
                    font-style: bold;\
                    line-height: 30px;\
                    height: 50px;\
                }\
                #fosh:hover {\
                    background-color: #ddd;\
                }\
            ');
    }
})();