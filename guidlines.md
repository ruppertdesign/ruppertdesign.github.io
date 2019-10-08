# Bildgrößen

* Slider Startseite: 
Bisher: 640x480 (Verhältnis 1,125)
Jetzt: 
bild.jpg: 640x480
bild@2x.jpg: 1280x960
bild@3x.jpg: 1920x1440

* Holzwerke + Schlüsselanhänger Vorschau: 
Bisher: 300x225 (Verhältnis 1,33)
Jetzt: 640x480 (Verhältnis 1,125)


* Detailbilder Holzwerke und Schlüsselanhänger
Bisher: Unterschiedlich, meinst 1100px x 825px
Jetzt: 1280x960

* Referenzen
Bisher:
Jetzt:  400px x 300px


# Beispielartikel

**Das ist fett geschriebender Text**, *der hier ist kursiv*. 
So verlinke ich auf den [Bett Artikel][1]. So auf [eine andere Webseite][2]. 
Über das target Attribut öffnet sich der Link [in einem neuen Tab][2]{:target="_blank" rel="noopener"}.

Achtung: Jetzt kommt ein Zitat:

> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 

## Eine Zwischenüberschrift

Eine Aufzählung:

* Lorem ipsum 
* dolor sit amet 
* consetetur sadipscing elitr

Oder mit Zahlen:

1. uno
2. dos 
3. tres

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

[//]: Das ist ein Kommentar: Bilder werden so eingefügt.

    {% include image.html url="/holzwerke/img/wohnzimmertisch/tisch1.jpg" description="Beschreibung von Tisch 1" %}

*ACHTUNG:* Vor und nach dem Bild muss eine Leerzeile bleiben!

Den Bildern können folgende Attribute hinzugefügt werden:

* type="small" oder type="medium": Bilder sind bei den Posts breiter als der Text. Mit dem type Attriut werden sie entweder auf die selbe breite wie der Text (medium) oder kleiner (small) skaliert.

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

    {% include image.html url="/holzwerke/img/wohnzimmertisch/tisch2.jpg" description="Beschreibung von Tisch 2" %}

Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

     {% include image.html url="/holzwerke/img/wohnzimmertisch/tisch3.jpg" description="Beschreibung von Tisch 3" %}

 [//]: Hier stehen die Links die oben verwendet wurden. Der einfachheit halber nummeriere ich hier durch, du könntest aber auch z.B. [google] nehmen. Oben beim Link muss nur das selbe stehen.

 [1]: {% post_url /holzwerke/2014-01-15-bett01 %}
 [2]: https://de.dawanda.com/product/80629839-schluesselboard-von-ruppertdesign