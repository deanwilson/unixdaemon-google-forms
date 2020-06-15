function healthCheck() {
  
  // BEGIN: Most of the configuration data you will want to change is between these and the next comment
  
  var intro_text = "" +
    "At the end of each quarter we would like to take a few minutes " +
    "and review how people are feeling and how things have gone over the last " +
    "three months. This form should take less than 5 minutes to complete and is configured " +
    "to not collect names or email address. Hopefully this will allow you to be as " +
    "honest as possible in your answers. We will circulate the same form again at the end " +
    "of next quarter so we can compare and contrast to find both the areas our " +
    "improvements have had an impact on and to show us where things still need improvement." +
    "\n\n" +
    "Thank you for taking the time to complete this form.";
  
  var role_names = [
    'SRE',
    'Developer',
    'Architect'
  ].sort();
   
  var standard_questions = [
    "I know what is expected of me at work",
    "I have the materials and equipment I need to do my work",
    "At work, I have the opportunity to do what I do best every day",
    "In the last fourteen days, I received recognition or praise for doing good work",
    "My line manager, or someone at work, cares about me as a person",
    "There is someone at work who encourages my development",
    "At work, my opinions seem to count",
    "The mission/purpose of my program makes me feel my job is important",
    "My co-workers are committed to doing high-quality work",
    "I have a positive relationship with my co-workers",
    "In the last three months someone at work spoke to me about my progress",
    "In the last six months, I had opportunities at work to learn and grow",
    "It's ok to make mistakes in my role",
  ];
  
  var standard_answers = [
    "Strongly disagree",
    "Disagree",
    "Neutral",
    "Agree",
    "Strongly agree",
  ];

  // =====================================================
  // END: Configuration data ends here
  // =====================================================

  
  var date = new Date
  short_month = date.toLocaleString('default', { month: 'short' })
  year = date.getFullYear()

  var formatted_date = short_month + ' ' + year;
  
  var form = FormApp.create('Health Check ' + formatted_date);
  var ss = SpreadsheetApp.create('Health Check Form Responses ' + formatted_date);

  form.setDescription(intro_text)
    .setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId());

  // =====================================================
  // Add the questions  
  // =====================================================
  
  for (let index in standard_questions) {
    form.addMultipleChoiceItem()
      .setTitle(standard_questions[index])
      .setChoiceValues(standard_answers)
      .setRequired(true);
  }
  
  form.addMultipleChoiceItem()
    .setTitle('The number of meetings I am expected to attend is')
    .setChoiceValues(['Too few', 'Perfect', 'Too many'])
    .setRequired(true);
  
  form.addMultipleChoiceItem()
    .setTitle('The meetings I attend tend to be')
    .setChoiceValues(['Valuable', 'Mostly valuable', 'Sometimes valuable', 'Rarely valuable'])
    .setRequired(true);
  
  var role_choice = form.addMultipleChoiceItem();
  
  var role_names = ['SRE', 'Developer', 'Architect'];
  var roles = [];
  for (let index in role_names) {
    roles.push(role_choice.createChoice(role_names[index]));
  }
  
  role_choice.setTitle("Optional: At work I am a")
    .setChoices(roles);
  
  form.addParagraphTextItem()
    .setTitle("Any comments or feedback you would like to share?");
}
