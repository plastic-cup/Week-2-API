# the Instagram webapp // *The Colorizerr*

*in progress*

##Function
Our app allows users to filter photos by hashtag and recolour them.



This involves implementing:
* RGB manipulation
* A way for users to search by hashtag
* Interacting with Instagram API
* Sensitive handling of API keys


##Access
The code must currently be run on the localhost, including a file named alohomora.txt containing our access token. (ask us if you want to test it).

### How to run?
If you want to run Colorizerr you need an API key -> Which you can get from [Here](https://instagram.com/developer/) -> just add you access token to a file alohomora.txt


###How to use?
*Search for Instagram picture by hashtag(#)
*Select a picture
*Change the apperance of the picture by selecting different filters!



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


* Accessing the pictures that people like

* Some visual indication that your tag search hasn't returned anything
