function skillsSurvey() {
  
  var formatted_date = formattedDate(); // Formatted to Jun 2020
  
  // The name of the team / department this skills survey is for
  var area_name = 'UnixDaemon';
  
  var intro_text = 'Hello and welcome to the '+ formatted_date + ' ' + area_name + ' ' +
    'skills survey. The aim of this survey is to gain a high level view of ' +
    'the skills we have across ' + area_name + ' to assess where ' +
    'we have strengths we can use and build from and where we have weaknesses ' +
    'or gaps we can take steps to address.' +
    "\n\n" +
    'The collected data will not be used in any form of performance reviews ' +
    'or end of year scoring. It is only intended to help us being more ' +
    'focused on where we need to invest our efforts in training, education ' +
    'and mentoring. This form is not anonymous and will log your email ' +
    'address. This will help us identify and group people with similar or ' +
    'complementary needs.' +
    "\n\n" +
    "The skill levels are:\n" +
    "  * No knowledge - I have never used this technology before\n" +
    "  * Basic familiarity - I have used this technology but will need support\n" +
    "  * Comfortable knowledge - I am self sufficient with this technology\n" +
    "  * Experienced - I am experienced in this technology and have used it in multiple contexts\n" +
    "  * Expert - I can use this technology in advanced ways and can train or mentor others in its use"
  
  var skill_levels = [
    'No knowledge',
    'Basic familiarity',
    'Comfortable knowledge',
    'Experienced',
    'Expert',
  ];
  
  var technologies = [
    "AWS ECS",
    "AWS EKS",
    "Golang",
    "Grafana",
    "Jenkins",
    "Prometheus",
    "Python",
    "Red Hat",
    "Ruby",
  ].sort();

  // END of config
  
  var form = FormApp.create(area_name + ' Skills Survey ' + formatted_date);
  var ss = SpreadsheetApp.create(area_name + ' Skills Survey Responses ' + formatted_date);

  form.setDescription(intro_text)
    .setDestination(FormApp.DestinationType.SPREADSHEET, ss.getId())
    .setCollectEmail(true);
    
  var item = form.addGridItem();
  
  item.setTitle('How familiar are you with the following technologies?')
    .setRows(technologies)
    .setColumns(skill_levels)
    .setRequired(true);
}

function formattedDate() {
  var date = new Date
  
  short_month = date.toLocaleString('default', { month: 'short' })
  year = date.getFullYear()
  
  var formatted = short_month + ' ' + year;
  
  return formatted; 
}
