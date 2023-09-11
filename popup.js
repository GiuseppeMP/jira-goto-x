document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('submit');

    document.getElementById('info').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            chrome.tabs.getSelected(null, function(tab) {
                const infoDisplay = document.getElementById('info');
                var jira_template = "http://jiracielo.atlassian.net/browse/ARDS-" + infoDisplay.value;
                chrome.tabs.create({ url: jira_template });
            });
        }
    });
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            const infoDisplay = document.getElementById('info');
            var jira_template = "http://jiracielo.atlassian.net/browse/ARDS-" + infoDisplay.value;
            chrome.tabs.create({ url: jira_template });
        });
    }, false);
}, false);
