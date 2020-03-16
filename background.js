chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostPrefix: 'courses.zju.edu.cn'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
});

chrome.webRequest.onBeforeRequest.addListener(
    function(details){
        chrome.storage.sync.set({url:details.url});
        },
    {urls:["http://courses.zju.edu.cn:8060/api/uploads/reference/document/*"]}
);