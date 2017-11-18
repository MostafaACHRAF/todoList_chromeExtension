/*global chrome*/
/*global storage */
import $ from 'jquery';

$(function() {

    $(".addBtn").click(function(event) {

        var task = $(".createTaskInput").val();
        var tasks;
        var key;

        chrome.storage.sync.get("tasks", function (data) {
            if (data.tasks === undefined) {
                tasks = [];
            } else {
                tasks = data.tasks;
            }

            chrome.storage.sync.get("i", function(data) {
                if (data.i !== undefined) {
                    if (task !== "") {
                        key = "task" + data.i;
                    }
                } else {
                    chrome.storage.sync.set({"i" : 0});
                    key = "task0";
                }

                tasks.push({[key] : task});
                chrome.storage.sync.set({"tasks" : tasks});
                chrome.storage.sync.set({"i" : tasks.length + 1});
            });

        });
    });
});



