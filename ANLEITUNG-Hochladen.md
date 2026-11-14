# Die App aufs Handy bringen

Am Ende liegt ein Symbol auf deinem Startbildschirm, das die App im Vollbild
öffnet – **auch ohne Internet**. Kein Apple- oder Google-Entwicklerkonto, keine
Store-Prüfung, keine Kosten.

Der Weg dorthin hat zwei Teile: einmal hochladen (15 Minuten, nur am PC),
danach pro Handy zwei Tipps.

---

## Warum überhaupt hochladen?

Ein Handy kann eine HTML-Datei nicht als App auf den Startbildschirm legen,
solange sie nur lokal herumliegt. Dafür braucht sie eine Internetadresse mit
`https`. GitHub Pages gibt dir so eine Adresse kostenlos und dauerhaft.

**Was dabei ins Netz kommt:** nur die **leere App**. Deine Übungslisten bleiben
auf deinem Gerät – die lädst du erst nach der Installation ins Handy, und sie
verlassen es nie. Es gibt keinen Server, der sie sehen könnte.

---

## Teil 1 – Einmal hochladen

### 1. GitHub-Konto anlegen

[github.com](https://github.com) → **Sign up**. Du brauchst nur eine
E-Mail-Adresse, einen Benutzernamen und ein Passwort. Kostenlos, keine
Zahlungsdaten.

Merk dir den **Benutzernamen** – er steckt gleich in deiner Adresse.

### 2. Ablage anlegen

Oben rechts auf **+** → **New repository**.

| Feld | Was eintragen |
|---|---|
| Repository name | `workout` |
| Beschreibung | darf leer bleiben |
| Public / Private | **Public** |
| Add a README file | Haken **weg** |

Dann **Create repository**.

> **Public?** Ja, das muss sein: GitHub Pages veröffentlicht bei kostenlosen
> Konten nur aus öffentlichen Ablagen. Lesbar ist dadurch die App selbst –
> also der Programmtext, den du schon hast. Keine persönlichen Daten.

### 3. Die Dateien hineinziehen

Auf der neuen, noch leeren Seite: **uploading an existing file** anklicken
(oder **Add file → Upload files**).

Diese **sieben** Dateien aus deinem Ordner `workout-app` hineinziehen:

| Datei | Wozu |
|---|---|
| `Workout-Generator.html` | die App selbst |
| `index.html` | leitet die kurze Adresse auf die App weiter |
| `manifest.webmanifest` | Name, Farbe und Symbol der App |
| `sw.js` | sorgt dafür, dass sie offline läuft |
| `icon-192.png` | Symbol |
| `icon-512.png` | Symbol |
| `apple-touch-icon.png` | Symbol fürs iPhone |

Die beiden Beispiel-CSVs und die `.md`-Dateien **brauchst du nicht** – die
Beispiellisten stecken schon in der App drin.

Unten auf den grünen Knopf **Commit changes**.

### 4. Veröffentlichen einschalten

Oben im Reiter **Settings**, links in der Leiste **Pages**.

Unter *Build and deployment → Source* steht **Deploy from a branch**. Darunter:

- Branch: **main**
- Ordner: **/ (root)**
- **Save**

### 5. Warten und aufrufen

Nach etwa einer Minute ist deine Adresse erreichbar:

```
https://DEINBENUTZERNAME.github.io/workout/
```

(Oben auf der Pages-Seite steht sie auch noch einmal zum Anklicken.)

Beim ersten Versuch kann noch eine 404-Seite kommen – dann eine Minute warten
und neu laden. GitHub braucht einen Moment.

---

## Teil 2 – Auf dem Handy installieren

Die Adresse im Browser des Handys öffnen. Am einfachsten schickst du sie dir
selbst per Mail oder Messenger und tippst dort auf den Link.

### Android (Chrome)

1. Die Adresse öffnen
2. Oben rechts auf die **drei Punkte**
3. **App installieren** (oder *Zum Startbildschirm hinzufügen*)
4. Bestätigen

### iPhone (Safari)

1. Die Adresse öffnen – **unbedingt in Safari**, nicht in Chrome
2. Unten auf das **Teilen-Symbol** (Quadrat mit Pfeil nach oben)
3. In der Liste nach unten auf **Zum Home-Bildschirm**
4. Oben rechts **Hinzufügen**

### Danach

Beim ersten Start einmal deine Listen hochladen – entweder die CSV aus iCloud
bzw. Google Drive wählen, oder auf **Beispiel laden** tippen zum Ausprobieren.

**Jedes Handy lädt seine Listen selbst.** Sie liegen auf dem Gerät und werden
nicht zwischen Geräten übertragen. Heb die CSV-Datei auf, dann ist das
jederzeit in zwei Tipps wiederholt.

### Der Beweis, dass es offline läuft

Flugmodus einschalten, die App vom Startbildschirm starten, ein Workout
würfeln. Es muss alles funktionieren. Wenn ja: fertig.

---

## Später etwas ändern

Wenn du eine neue Fassung der App hast:

1. In `sw.js` ganz oben die Zeile `const VERSION = "1";` auf `"2"` ändern
   (beim nächsten Mal `"3"` und so weiter)
2. Auf GitHub **Add file → Upload files**, die geänderten Dateien hineinziehen,
   **Commit changes**
3. Die App auf dem Handy schließen und neu öffnen

**Der Schritt mit der VERSION ist wichtig.** Ohne ihn hält das Handy hartnäckig
an der alten Fassung fest – es hat sie ja gespeichert, damit sie offline läuft.
Die geänderte Zahl ist das Signal zum Austauschen.

---

## Wenn etwas klemmt

| Was du siehst | Woran es liegt |
|---|---|
| 404 nach dem Einschalten von Pages | Noch nicht fertig. Eine Minute warten, neu laden. |
| Seite lädt, aber ohne Gestaltung | Beim Hochladen hat eine Datei gefehlt. Dateiliste oben vergleichen. |
| Kein *App installieren* in Chrome | Die Adresse muss mit `https` beginnen. Im Zweifel die Adresse von der Pages-Seite kopieren. |
| iPhone zeigt kein *Zum Home-Bildschirm* | Du bist nicht in Safari. Chrome auf dem iPhone kann das nicht. |
| Offline bleibt die Seite leer | Einmal mit Netz öffnen und ein paar Sekunden warten – erst dann ist sie gespeichert. |
| Änderung kommt nicht an | `VERSION` in `sw.js` nicht erhöht. |
