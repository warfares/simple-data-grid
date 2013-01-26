A very, very very simple HTML/JS Grid.

Live Sample
==
<b>JS Array</b>
<br/>
http://warfares.github.com/simple-grid/e_1.html

<b>OData</b> the force be with you...
<br/>
http://warfares.github.com/simple-grid/e_2.html

Dependecies
== 
* Backbone (just code structure) / Underscore 
* JQuery (DOM manipulation)

Usage
==



Methods 
==
* setData(data) // data array of objects.

Events
==
* rowclick -> fc(ojb) // the complete row obj
* sort -> fc(dir) // ex: {Name:-1}

Colum model properties
==

* id <string> // name of the obj propery
* name <stirng> // display header name 
* width <int> // column width 
* sortable <boolean>// enable sort behavior 
* css <obj> // column css (data) -> jquery obj notation
* hcss <obj> // column css (header) -> jquery obj notation
* cls <string> // column class (data)
* hcls <string> // column class (header)
* render <function> // custom data render.. -> func(d,o){} should return HTML // d -> columd data, o -> complete obj

* Note : only tested in Chrome & FireFox.
