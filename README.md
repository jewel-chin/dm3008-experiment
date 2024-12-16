# Experimental Survey

This survey was created as an experiment to explore the concept of instant gratification. The goal was to investigate how users react to delayed responses, testing their patience and observing how frustration manifests in their typing behavior and tone.

In this experimental survey, users answer a series of questions while experiencing progressively slower loading times. They will encounter fake response savers and will be prompted to retry multiple times. Between each page, the UI loader becomes laggier, especially if the page is clicked repeatedly. Error pop-ups also appear in a laggy manner. The intensity of the lag is sporadic but increases as the user continues to click on the page.

Additionally, a debounce function is implemented to reset the loading timer whenever the page is clicked. This may cause the user to become stuck on a loading page, further amplifying the sense of delay.

This survey was developed using **HTML, CSS, and Javascript**, and all user responses are automatically saved into a Google Sheet via **Sheet Monkey**, a service that allows form data to be submitted directly to a spreadsheet.

This experiment was designed to generate visuals, which can be found in another [repository](https://github.com/jewel-chin/emotional-visualisation). This survey can be accessed [here](https://jewel-chin.github.io/survey-experiment/).
