function alertFeedback() {
  
  var question = "Was this alert due to an actual issue?";
  
  var answers = [
    "Yes, and it required human intervention",
    "Yes, and it resolved itself",
    "No, it was a false positive and required human intervention",
    "No, it was a false positive and resolved itself",
  ];
  
  var form = FormApp.create('Alert Feedback Form');
  var ss = SpreadsheetApp.create('Alert Feedback Form Responses');
    
  form.addTextItem()
    .setTitle("Alert identifier")
    .setRequired(true)
    .setHelpText("This identifier allows us to gather metadata about the alert itself so you don't have to provide it");
    
  form.addTextItem()
    .setTitle("Responder Email Address")
    .setRequired(true)
    .setHelpText("Please tell us your email address so we know who is providing this feedback");
    
  form.setDescription("Welcome to the Alert Feedback Form. With your help we will track which alerts are useful and which are broken, flapping or in need of attention.")
    .setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  form.addMultipleChoiceItem()
    .setTitle(question)
    .setChoiceValues(answers)
    .setRequired(true);
    
  form.addParagraphTextItem()
    .setTitle("Any comments on this alert?");
    
  form.addScaleItem()
    .setTitle("Rate this alert")
    .setBounds(1, 5)
    .setLabels("Should be removed", "Saved our SLOs");
    
}
