# Quarterly Health Check

In previous roles I have used a
[Quarterly SRE Health check](https://www.unixdaemon.net/career/quarterly-sre-healthcheck/)
to check on how people are feeling and how their career is progressing.

![Quarterly Health Check Sample Questions](/quarterly-health-check/quarterly-health-check.png?raw=true "Screenshot of sample health check questions")

## Notes

This form loops over most of the questions, as the answers are the same
set of possibilities, but explicitly adds a few additional questions of
different types with the literal text in the code. In order to make
these forms as widely reusable as possible I'm attempting to walk the
fine line between finding value in abstracting the questions into
structures I can loop over while also leaving them accessible to people
that want to change the wording without touching the actual JavaScript
code. Your audience probably differs to mine so you should move into
deeper structures or more explicit literals as suits your environment.

