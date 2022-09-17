# Facebook-XSS
Archive of various Facebook XSS exploits from ~2011. Published for research purposes **ONLY**.

## How the Exploit Was Used
### Most Versions
1. User saw a post from someone else with a link to visit
1. User was directed to copy JavaScript code to their clipboard, open Facebook in a new window/tab, and paste the code into the address bar
1. The code executed content from an external JS file which did the following:
    1. Posted spam to their wall
    1. Posted spam to x number of friends' walls
    1. Messaged x number of online friends
    1. Created an event and invited x number of friends to it
1. User was redirected to a landing page with affiliate network advertisements to complete to view the page content
### Final Version
1. User saw a post from someone else with a link to visit
1. Clicking the link automatically executed the content from an external JS file which did the following:
    1. Posted spam to their wall
    1. Posted spam to x number of friends' walls
    1. Messaged x number of online friends
    1. Created an event and invited x number of friends to it
1. User was redirected to a landing page with affiliate network advertisements to complete to view the page content
