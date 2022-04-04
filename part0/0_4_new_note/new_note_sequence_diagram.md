```mermaid
sequenceDiagram

note over browser: User fills out form and clicks Submit

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over server: Server formats the body of the request <br> and adds to the saved notes on the server

server-->>browser: HTTP Status 302 Found

note over browser: Browser sees the HTTP 302 code<br>and sends a GET request to<br> the address defined in the<br> response's header Location

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes

server-->>browser: HTML-code

note over browser: Browser sees the CSS reference<br>in the head section of the HTML<br>and sends a GET request for it

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css

server-->>browser: main.css

note over browser: Browser then sees the script reference<br> in the head section of the HTML<br> and sends a GET request for it

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js

server-->>browser: main.js

Note over browser: Browser starts executing js-code that <br> requests JSON data from the server

browser->>server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json

server-->>browser: JSON containing all note objects saved in the server

Note over browser: Browser executes the event handler <br> that renders notes to display
```