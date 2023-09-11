document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            const infoDisplay = document.getElementById('info');
            var jira_template = "http://jiracielo.atlassian.net/browse/ARDS-" + infoDisplay.value;
            chrome.tabs.create({ url: jira_template });
        });
    }, false);
}, false);
