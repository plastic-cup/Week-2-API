# the Instagram webapp // *The Colo(u)riserr*

*in progress*

##Function
Our app allows users to filter photos by hashtag and recolour them.



This involves implementing:
* Interacting with Instagram API
* Sensitive handling of API keys
* A way for users to search by hashtag


##Access
The code must currently be run on the localhost, including a file named alohomora.txt containing our access token.  
*(Ask us if you want to test it out).*

### How to run?
If you want to run Coloriserr you need an API key, which you can get from [here](https://instagram.com/developer/)  
Just add you access token to a file alohomora.txt


###How to use?
1. Search for Instagram picture by hashtag(#)
2. Select a picture
3. Change the apperance of the picture by selecting different filters!



##Filters
5 different filters:
* Greyscale
* Sepia
* Invert
* Blur
* Saturate

Achieved by ~~placing images onto html5 canvas and manipulating pixels in JS~~

*We originally wrote javascript filter functions to manipulate the pixels.  Then we ran into problems with the canvas and Instagram permissions.  We ended up having to use built-in CSS filters*



##Testing & Test Driven Development

Testing -> based on user stories
User stories -> failing tests -> code -> passing test


Tests may be seen & accessed from our GitHub Repo

##Client relationship: tips and tricks
* Important to maintain regular communication with client
* Keep Pivotal Tracker and GitHub up-to-date
  * Make sure various columns are organised
* Important to have clear deliverables
  * **Specifying user stories**
    * *Example: We wanted to improve image transitions.  Client interpreted as fading; we were happy with slowed transitions.  CONFLICT.*
  * **userStories.split("logical place") === winning;**
    * This will keep the client up to speed with exactly what's going on, enabling feedback
  *

##Links:

[Wireframe](https://docs.google.com/presentation/d/1O-6i6foRH9OoIY_6_AwNoZ1l88lthe-LRhiJRGJwmNc/edit?usp=sharing)
[Instagram Developer](https://instagram.com/developer/)





##For future development
* Multiple tag search

* Blue heart save animation last longer

* Getting site online (currently on python SimpleHTTPServer)

* Location-based selectors
  * Creating maps based on location (Geotags -> taking long/lat > putting up on a map)
  - Filtering by country
