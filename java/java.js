        // PASSWORD PROTECTION SCRIPT		
        function TheLogin() {
            ;
            var navn = 'Grow';
            var password = 'Grow2021';
            if (this.document.login.pass.value == password && this.document.login.name.value == navn) {
                //window.alert("TILLYKKE!!! Kodeord og navn er korrekt og du logges ind :-)");
                top.location.href = "somestrategi.html";
            } else {
                if (this.document.login.pass.value != password || this.document.login.name.value != navn)
                    window.alert("Kodeord eller password er forkert - prøv venligst igen");
                /*else if (this.document.login.pass.value != password)
                    window.alert("Navn er kendt men Kodeord er forkert - prøv veligst igen :-)");
                else if (this.document.login.name.value != navn)
                    window.alert("Navn er ukendt men kodeordet er rigtigt - prøv veligst igen :-)");*/
            }
        }

        /* Navigationsbar */
        function openNav() {
            document.getElementById("myNav").style.width = "100%";
        }

        /* Close when someone clicks on the "x" symbol inside the overlay */
        function closeNav() {
            document.getElementById("myNav").style.width = "0%";
        }

        // Uge-array
        let enUge = [
    "Søndag",
    "Mandag",
    "Tirsdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lørdag"
]

        let maaneder = [
    "Januar",
    "Februar",
    "Marts",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "December"
]

        let datoKlokkeslaet = new Date()
        currentMinutes = datoKlokkeslaet.getMinutes();
        currentMinutes = ("0" + currentMinutes).slice(-2);

        let klokkeslaet = enUge[datoKlokkeslaet.getDay()] +
            " " +
            datoKlokkeslaet.getDate() +
            "." +
            " " +
            maaneder[datoKlokkeslaet.getMonth()] +
            " " +
            datoKlokkeslaet.getHours() +
            ":" +
            currentMinutes;

        arrays.innerHTML = klokkeslaet
