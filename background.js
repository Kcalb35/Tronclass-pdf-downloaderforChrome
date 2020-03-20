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
        console.log(details.url);
        chrome.storage.sync.set({url:details.url});
        },
    {urls:["https://courses.zju.edu.cn/api/uploads/reference/document/*"]}
);