# UnixDaemon Google Forms
A collection of Google App Scripts to create Google forms and documents.

I've extracted these out and placed them under version control so they
can be edited and reused without using the Forms web UI. The tooling
around this is currently incredibly basic, copy and paste all the way!,
but the code is the important part and so is worth extracting.

## Forms

### Alert Feedback Form

The [Alert Feedback Form](/alert-feedback-form/) provides a set of three
questions to determine if the alert actually requires human intervention
and how useful it is.

### Quarterly Health Check Form

The [Quarterly Health Check Form](/quarterly-health-check/) provides a
selection of questions to check in and see how people are feeling about
their teams, purpose and career progression. You can also learn more
about the thinking behind my
[Quarterly SRE Health check](https://www.unixdaemon.net/career/quarterly-sre-healthcheck/)

## Audience

In order to make these forms as widely reusable as possible I'm
attempting to walk the fine line between finding value in abstracting
the questions into structures I can loop over while also leaving them
accessible to people that want to change the wording without touching
the actual JavaScript code. Your audience probably differs to mine so
you should move into deeper structures or more explicit literals as
suits your environment.


### Author

 * [Dean Wilson](https://www.unixdaemon.net)
