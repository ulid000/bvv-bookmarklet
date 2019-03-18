# bvv-bookmarklet
Bookmarklet für eine verbesserte Anzeige von Inhalten des Ratsinformationssystems der Berliner Bezirksverordnetenversammlungen BVV.

## Problem
Das in das Informationsangebot des Landes Berlin [https://www.berlin.de]() eingebundene Ratsinformationssytem ALLRIS ist auf Smartphones und anderen kleinen Displays nicht nutzbar, da weder Zoomen noch horizontales Scrollen unterstützt werden.

Beispiel: [BVV Charlottenburg-Wilmersdorf](https://www.berlin.de/ba-charlottenburg-wilmersdorf/politik/bezirksverordnetenversammlung/online/si010.asp)

## Die richtige Lösung ... lässt auf sich warten
Längst steht mit [OParl](https://github.com/OParl) eine offene Schnittstelle für Ratsinformationssysteme zur Verfügung, die es erlaubt eigene angepasste Clients für Bürger*innen und weitreichtende Recherchemöglichkeiten bereitzustellen.   

## Workaround: Ein Bookmarklet als Fix für die Nutzer
Damit es auch schon vorher möglich ist, zumindest rudimentär mit Smartphones zuzugreifen, steht hier ein einfaches Bookmarklet zur Verfügung, dass als Lesezeichen im Browser über JavaScript Anpassungen an der angezeigten Seite vornimmt.

### Features
* Horizontales Scrollen möglich, damit dargestellte Seiten nicht abgeschnitten werden. Damit ist das Lesen zwar immer noch nicht konfortabel aber zumindest möglich.

### Installation

Die Installation kann über [https://ulid000.github.io/bvv-bookmarklet/dist](https://ulid000.github.io/bvv-bookmarklet/dist) erfolgen.

### Nutzung

Auf der jeweiligen Seite den angelegten Bookmark ```BVV Fix``` aufrufen.

## Build

Der Build verwendet ```npm``` und ```webpack```. Es werden zwei Konfigurationen eingesetzt, um sowohl ads Bookmarklet als auch die Webseite für die Installation zu bauen. 

```
npm install
npx webpack --config-name=bookmarklet
npx webpack --config-name=webpage
```
