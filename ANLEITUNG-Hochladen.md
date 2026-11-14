# Die App aufs Handy bringen

## Deine Adresse

```
https://jlesny.github.io/workout/
```

Das Hochladen ist **schon erledigt** – Repository, Dateien und GitHub Pages
stehen. Für dich bleiben zwei Tipps pro Handy.

---

## Auf dem Handy installieren

Die Adresse oben im Browser des Handys öffnen. Am einfachsten schickst du sie
dir selbst per Mail oder Messenger und tippst dort auf den Link.

### Android (Chrome)

1. Die Adresse öffnen
2. Oben rechts auf die **drei Punkte**
3. **App installieren** (oder *Zum Startbildschirm hinzufügen*)
4. Bestätigen

### iPhone (Safari)

1. Die Adresse öffnen – **unbedingt in Safari**, nicht in Chrome
2. Unten auf das **Teilen-Symbol** (Quadrat mit Pfeil nach oben)
3. In der Liste nach unten scrollen zu **Zum Home-Bildschirm**
4. Oben rechts **Hinzufügen**

Danach liegt ein blaues Hantel-Symbol zwischen deinen anderen Apps und startet
im Vollbild, ohne Browser-Leiste.

### Die Probe

Flugmodus einschalten, die App vom Startbildschirm starten, ein Workout
würfeln. Muss funktionieren. Wenn ja: fertig.

---

## Beim ersten Start

Einmal deine Listen laden – entweder auf **Beispiel laden** tippen zum
Ausprobieren, oder deine eigene CSV wählen. Dafür muss die Datei auf dem Handy
erreichbar sein: in iCloud, Google Drive oder im Dateien-Ordner ablegen, dann
im Auswahldialog der App dorthin navigieren.

**Jedes Handy lädt seine Listen selbst.** Sie liegen auf dem Gerät und wandern
nicht zwischen Geräten. Heb die CSV-Datei auf, dann ist das jederzeit in zwei
Tipps wiederholt.

---

## Was im Hintergrund passiert ist

Damit du weißt, was dir gehört und wo es liegt:

| Was | Wo |
|---|---|
| Repository | `github.com/jlesny/workout` – öffentlich |
| Veröffentlichung | GitHub Pages, Zweig `main`, Ordner `/` |
| Hochgeladen | die App und ihre Symbole, dazu README und Beispiel-CSVs |

**Öffentlich** muss es sein: GitHub Pages veröffentlicht bei kostenlosen Konten
nur aus öffentlichen Ablagen. Lesbar ist dadurch der Programmtext der App –
den hast du ohnehin. **Deine Übungslisten sind nicht dabei.** Die lädst du erst
im Handy, und sie verlassen das Gerät nie: es gibt keinen Server, der sie
entgegennehmen könnte.

---

## Später etwas ändern

Wenn an der App etwas geändert wird, sind es zwei Dinge:

1. In `sw.js` ganz oben `const VERSION = "1";` auf `"2"` erhöhen
   (beim nächsten Mal `"3"` und so weiter)
2. Die geänderten Dateien hochladen

**Schritt 1 ist der wichtige.** Ohne ihn hält das Handy hartnäckig an der alten
Fassung fest – es hat sie ja gespeichert, damit sie offline läuft. Die
geänderte Zahl ist das Signal zum Austauschen.

Hochladen geht auf zwei Wegen:

- **Ich mache es** – der Ordner ist mit GitHub verbunden, ein Befehl genügt.
- **Du machst es** – auf `github.com/jlesny/workout` oben **Add file → Upload
  files**, die geänderten Dateien hineinziehen, unten **Commit changes**.

Nach dem Hochladen dauert es etwa eine Minute, bis die Seite neu gebaut ist.
Dann die App auf dem Handy schließen und neu öffnen.

---

## Wenn etwas klemmt

| Was du siehst | Woran es liegt |
|---|---|
| Kein *App installieren* in Chrome | Seite neu laden und ein paar Sekunden warten – Chrome prüft erst, ob die App offline kann. |
| iPhone zeigt kein *Zum Home-Bildschirm* | Du bist nicht in Safari. Chrome auf dem iPhone kann das nicht. |
| Offline bleibt die Seite leer | Einmal **mit** Netz öffnen und kurz warten – erst dann ist sie gespeichert. |
| Listen nach längerer Pause weg | Safari räumt Speicher selten benutzter Seiten auf. Deshalb die CSV aufheben: neu laden dauert zwei Tipps. |
| Änderung kommt nicht an | `VERSION` in `sw.js` nicht erhöht. |
| 404 nach einem Upload | Der Neubau läuft noch. Eine Minute warten, neu laden. |
