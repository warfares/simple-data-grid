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
* **rowclick** -> fc(ojb) // the complete row obj
* **sort** -> fc(dir) // ex: {Name:-1}

Colum model properties
==

- **id** [string] - Obj property
* **name** [stirng] - Display header name 
* **width** [int] - Width 
* **sortable** [bool] - Enable sort behavior 
* **css** [obj] - Column css (data) -> jquery obj notation
* **hcss** [obj] - Column css (header) -> jquery obj notation
* **cls** [string] - Column class (data)
* **hcls** [string] - Column class (header)
* **render** [function] - Custom data render.. -> func(d,o){} should return HTML // d -> column data, o -> complete obj

* Note : only tested in Chrome & FireFox.
